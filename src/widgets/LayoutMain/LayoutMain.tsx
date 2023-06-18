import React, { useState, Suspense, lazy, useEffect } from 'react'

import classes from './LayoutMain.module.css'
import classNames from "classnames";

import { LayoutHeader } from '@widgets/LayoutHeader';
import { Center, ScrollArea, Title } from '@mantine/core';
import { fonts } from '@shared/ui';
import { Feed } from "@entities/article";

const YandexMap = lazy(() => import('@entities/article/ui/YandexMap'));
const SearchByDateChart = lazy(() => import('@features/search/dateFilter/ui/SearchByDateChart'))

export const LayoutMain = () => {
  const [isFeed, setIsFeed] = useState(true)
  const [initialRender, setFirstRender] = useState(true)
  useEffect(() => {
    if (isFeed) return
    if (initialRender) setFirstRender(false)
    
  }, [isFeed])

  return <ScrollArea h={"100vh"} w={"100vw"} type="scroll" className={classes.scroll}>
    <main className={classNames(classes.main, fonts.inter.className)}>
      <LayoutHeader isFeed={isFeed} setIsFeed={setIsFeed} />

      <section className={classes.news} style={{ display: !isFeed ? "none" : "block" }}>
        <Feed />
      </section>

      {!initialRender && <>
        <section className={classes.map} style={{ display: isFeed ? "none" : "block" }}>
          <Suspense fallback={<Fallback title='Яндекс.Карту' />}>
            <YandexMap />
          </Suspense>
        </section>

        <section className={classes.timeFilter} style={{ display: isFeed ? "none" : "block" }}>
          <Suspense fallback={<Fallback title='График' />}>
            <SearchByDateChart />
          </Suspense>
        </section>
      </>}

    </main>
  </ScrollArea>
}

const Fallback = ({ title }: { title: string }) => {
  console.log(`Грузим ${title} Fallback`);
  return <Center>
    <Title order={1}>Грузим {title}...</Title>
  </Center>
} 