import React, { useRef } from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSearchArticlesMutation } from "@entities/search";
import { Article, config, useAppSelector } from "@shared/lib";
// import { mockArticles } from "@pages/api/news";
import classes from './YandexMap.module.scss'


const colors = ["blue", "red", "green", "gray", "orange", "purple", "black"]

export const YandexMap = () => {
  const { filterTime } = useAppSelector(({ search }) => search)

  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  // articles && console.table(articles)

  const mapsRef = useRef<ymaps.Map>()
  const clickEventsRef = useRef<string[]>([])

  function openBalloon(coords: [number, number], article: Article) {
    mapsRef.current?.balloon.open(coords,
      `<article class="${classes.balloon}">
        <h3>
          <a href=${article.URL} class="${classes.link}">
            ${article.name}
          </a>
        </h3>
        <p>${article.description}</p>

        <div class="${classes.section}">
          <p><b>Categories</b>: ${article.categories?.map(c => `<em>#${c}</em>`).join(" ")}</p>
          </div>

        <div class="${classes.section}">
          <p>@${article.publisher.name}</p>
        </div>
      </article>`)
  }

  const mapArticles = (articles ?? [])
    // .map(article => ({
    //   ...article,
    //   datePublished: new Date(new Date(article.datePublished).valueOf() + (- 10 + Math.random() * 20) * 1000 * 60 * 60 * 24),
    //   latitude: (55.75 - 0.15 + Math.random() * 0.25).toFixed(4),
    //   longitude: (37.57 - 0.25 + Math.random() * 0.5).toFixed(4),
    // }))
    // .sort((a, b) => Number(a.datePublished) - Number(b.datePublished))
    .filter(article => +article.datePublished <= +new Date(filterTime.end))
    .filter(article => +article.datePublished >= +new Date(filterTime.start))

  // console.log("mapArticles", mapArticles.length);
  const publishersDistinct = Array.from(new Set(articles?.map(x => x.publisher.name)))
  const placemarkColors = publishersDistinct.reduce((acc, cur, i) => {
    acc[cur] = colors[i % colors.length]
    return acc
  }, {} as { [key: string]: string })


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
      {/* <SearchControl options={{ float: "right" }} /> */}
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
              console.log("click", coords, article);
              openBalloon([Number(coords[0]), Number(coords[1])], article)
            });
          }}
          defaultGeometry={[article.publisher.address.coords[1], article.publisher.address.coords[0]]} />)}
    </Map>
  </YMaps>
}
