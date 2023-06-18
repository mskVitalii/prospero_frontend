import React, { useState, Suspense, lazy } from 'react'

import classes from './LayoutMain.module.css'
import classNames from "classnames";

import { LayoutHeader } from '@widgets/LayoutHeader';
import SearchByDateChart from '@features/search/dateFilter/ui/SearchByDateChart';
import { ScrollArea } from '@mantine/core';
import { fonts } from '@shared/ui';
import { Feed } from "@entities/article";

const YandexMap = lazy(() => import('@entities/article/ui/YandexMap'));

export const LayoutMain = () => {
  const [isFeed, setIsFeed] = useState(true)
  return <ScrollArea h={"100vh"} w={"100vw"} type="scroll" className={classes.scroll}>
    <main className={classNames(classes.main, fonts.inter.className)}>
      <LayoutHeader isFeed={isFeed} setIsFeed={setIsFeed} />

      {isFeed ?
        <section className={classes.news}>
          <Feed />
        </section> :
        <section className={classes.map}>
          <Suspense fallback={<div>Грузим карту...</div>}>
            <YandexMap />
          </Suspense>
        </section>}

      {!isFeed &&
        <section className={classes.timeFilter}>
          <SearchByDateChart />
        </section>}

    </main >
  </ScrollArea>
}
