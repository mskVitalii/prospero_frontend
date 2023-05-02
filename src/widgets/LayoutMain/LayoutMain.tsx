import React from 'react'
import styles from './LayoutMain.module.scss'
import { Inter } from 'next/font/google'
import { Text } from '@mantine/core';
import { Counter } from '@widgets/Counter';
import { LayoutHeader } from '@widgets/LayoutHeader';
import { useAppSelector } from '@shared/lib/hooks';
import classNames from "classnames";

const inter = Inter({ subsets: ['latin'] })

export const LayoutMain = () => {
  const foundNews = useAppSelector(state => state.search.articles)

  return <main className={classNames(styles.main, inter.className)}>
    <LayoutHeader />

    {/* <section>
      <Text>Пример redux</Text>
      <Counter />
    </section> */}

    <section className={styles.news}>
      {Boolean(foundNews.length) && foundNews.map((newsItem, i) =>
        <div key={i}>
          <h3>{newsItem.name}</h3>
          <Text>{newsItem.description}</Text>
        </div>)}
    </section>
  </main >
}
