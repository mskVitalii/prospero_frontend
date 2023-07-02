import React, { useContext, useMemo, useRef } from "react";
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useSearchArticlesMutation } from "@entities/search";
import { Article } from '../model/type';
import { config, useAppSelector } from "@shared/lib";
import { InitArticleContext } from "@pages/index";
import classes from './YandexMap.module.css'


const colors = ["blue", "red", "green", "gray", "orange", "purple", "black"]

export const YandexMap = () => {
  //#region Articles
  const { filterTime } = useAppSelector(({ search }) => search)
  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const initArticles = useContext(InitArticleContext)
  const articles = articlesData?.data ?? initArticles.articles
  // articles && console.table(articles)

  const mapArticles = articles
    .filter(article => +new Date(article.datePublished) <= +new Date(filterTime.end))
    .filter(article => +new Date(article.datePublished) >= +new Date(filterTime.start))
  //#endregion

  //#region YMap
  const mapsRef = useRef<ymaps.Map>()
  const clickEventsRef = useRef<string[]>([])

  function openBalloon(coords: [number, number], article: Article) {
    const dateStr = new Date(article.datePublished)
      .toLocaleString("ru-RU", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })

    mapsRef.current?.balloon.open(coords,
      `<article class="${classes.balloon}">
        <h3>
          <a href=${article.URL} class="${classes.link}">
            ${article.name}
          </a>
        </h3>
        <p>${article.description}</p>

        <div class="${classes.section}">
          ${article.categories?.length > 0 ? `<p><b>Категории</b>: ${article.categories?.map(c => `<em>#${c}</em>`).join(" ")}</p>` : ""}
          ${article.people?.length > 0 ? `<p><b>Люди</b>: ${article.people.map(c => `<em>#${c.fullName}</em>`).join(" ")}</p>` : ""}
        </div>

        <div class="${classes.section}">
          <p>@${article.publisher.name} ${dateStr}</p>
        </div>
      </article>`)
  }

  const placemarkColors = useMemo(() => Array
    .from(new Set(articles.map(x => x.publisher.name)))
    .reduce((acc, cur, i) => {
      acc[cur] = colors[i % colors.length]
      return acc
    }, {} as { [key: string]: string })
    , [articles])
  //#endregion

  return <YMaps preload query={{
    apikey: config.Y_MAPS_ID,
    mode: config.IS_PROD ? "release" : "debug",
    lang: "ru_RU",
  }}>
    <Map
      instanceRef={mapsRef}
      width={"100%"} height={"100%"}
      modules={["control.ZoomControl"]}
      defaultOptions={{ autoFitToViewport: "always" }}
      defaultState={{ center: [55.75, 37.57], zoom: 8 }}>
      <Clusterer options={{
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
      }}>
        {mapArticles?.map((article, i) =>
          <Placemark
            key={i}
            options={{ iconColor: placemarkColors[article.publisher.name] }}
            instanceRef={ref => {
              if (!ref) return

              if (clickEventsRef.current.includes(article.URL)) return
              clickEventsRef.current.push(article.URL)

              ref.events.add('click', (e) => {
                e.stopPropagation()
                const coords = (e.originalEvent.target.geometry as any)["_coordinates"]
                openBalloon([Number(coords[0]), Number(coords[1])], article)
              });
            }}
            defaultGeometry={[article.publisher.address.coords[1], article.publisher.address.coords[0]]} />)}
      </Clusterer>
    </Map>
  </YMaps>
}

export default React.memo(YandexMap)