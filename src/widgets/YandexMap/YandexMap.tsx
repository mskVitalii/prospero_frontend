import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';
import styles from './YandexMap.module.scss'
import { useSearchArticlesMutation } from "@entities/search";
import React from "react";

export const YandexMap = () => {
  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  const articlesCoords = articles?.map((article) => ({
    ...article,
    latitude: (Math.random() * (90 - -90) + -90).toFixed(3) * 1,
    longitude: (Math.random() * (180 - -180) + -180).toFixed(3) * 1,
  })) ?? []

  return <main className={styles.container}>
    <YMaps>
      <div>карта новостей для крутышей (😎)! (ты не крутыш)</div>
      <Map
        width={1000}
        height={800}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
        <SearchControl options={{ float: "right" }} />
        {Boolean(articlesCoords?.length) && articlesCoords?.map((article, i) =>
          <Placemark key={i} defaultGeometry={[article.latitude, article.longitude]}/>)}
      </Map>
    </YMaps>
  </main>
}
