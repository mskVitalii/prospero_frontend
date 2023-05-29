import React, { useState } from 'react'

import classes from './LayoutMain.module.scss'
import classNames from "classnames";
import { Inter } from 'next/font/google'

import { LayoutHeader } from '@widgets/LayoutHeader';
import { Feed, YandexMap } from "@entities/article";
import SearchByDateChart from '@features/search/dateFilter/ui/SearchByDateChart';
import { ScrollArea } from '@mantine/core';


const inter = Inter({ subsets: ['latin'] })

export const LayoutMain = () => {
  const [isFeed, setIsFeed] = useState(false)

  return <ScrollArea h={"100vh"} w={"100vw"} type="scroll" className={classes.scroll}>
    <main className={classNames(classes.main, inter.className)}>
      <LayoutHeader isFeed={isFeed} setIsFeed={setIsFeed} />

      {/* <section>
      <Text>Пример redux</Text>
      <Counter />
    </section> */}

      {isFeed ?
        <section className={classes.news}>
          <Feed />
        </section> :
        <section className={classes.map}>
          <YandexMap />
        </section>}

      {!isFeed &&
        <section className={classes.timeFilter}>
          <SearchByDateChart />
        </section>}

    </main >
  </ScrollArea>
}
