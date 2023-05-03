import React from 'react'
import styles from './LayoutMain.module.scss'
import { Inter } from 'next/font/google'
import { Text } from '@mantine/core';
import { Counter } from '@widgets/Counter';
import { LayoutHeader } from '@widgets/LayoutHeader';
import classNames from "classnames";
import { useSearchArticlesMutation } from '@entities/search';


const inter = Inter({ subsets: ['latin'] })

export const LayoutMain = () => {
  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  return <main className={classNames(styles.main, inter.className)}>
    <LayoutHeader />

    {/* <section>
      <Text>Пример redux</Text>
      <Counter />
    </section> */}

    <section className={styles.news}>
      {Boolean(articles?.length) && articles?.map((newsItem, i) =>
        <div key={i}>
          <h3>{newsItem.name}</h3>
          <Text>{newsItem.description}</Text>
        </div>)}
    </section>
  </main >
}
