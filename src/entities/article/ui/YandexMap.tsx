import React, { useRef } from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSearchArticlesMutation } from "@entities/search";
import { Article, config } from "@shared/lib";
import { mockArticles } from "@pages/api/news";
import classes from './YandexMap.module.scss'


export const YandexMap = () => {
  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  console.table(articles)

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
          <p><b>Categories</b>: ${article.categories.map(c => `<em>#${c}</em>`).join(" ")}</p>
          </div>

        <div class="${classes.section}">
          <p>@${article.publisher.name}</p>
        </div>
      </article>`)
  }

  const mapArticles = mockArticles?.map(article => ({
    ...article,
    categories: article.categories,
    latitude: (55.75 - 1 + Math.random() * 2).toFixed(4),
    longitude: (37.57 - 1 + Math.random() * 2).toFixed(4),
  })) ?? []


  return <YMaps preload query={{
    apikey: config.Y_MAPS_ID,
    mode: config.IS_PROD ? "release" : "debug",
    lang: "en_RU",
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
          defaultGeometry={[article.latitude, article.longitude]} />)}
    </Map>
  </YMaps>
}
