import React, { useContext, useState } from 'react'
import { useSearchArticlesMutation } from '@entities/search';
import { ActionIcon, Button, Center, Flex, Group, ScrollArea, SegmentedControl, Text } from '@mantine/core';
import { ArrowBigTop } from "tabler-icons-react"
import Link from 'next/link';
import { NothingFoundBackground, TableOfContentsFloating } from '@shared/ui/index';
import { feedAggregationData } from './FeedAggregationData';
import { langByKey } from '@shared/lib';
import { Article } from '../model/type';
import { InitArticleContext } from '@pages/index';
import { countriesData } from '@features/search/dropFilter/model/countriesData';
import classes from "./Feed.module.css"
import FeedGroup from './FeedGroup';


type GroupArticles = {
  [key: string]: Article[]
}

export const Feed = () => {
  //#region Articles
  const initArticles = useContext(InitArticleContext)
  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const articles = articlesData !== undefined ? articlesData.data : initArticles.articles
  // articles && console.table(articles);
  //#endregion
  if (articles.length === 0)
    return <NothingFoundBackground />

  //#region UI
  const [aggregation, setAggregation] = useState("Страны")
  const [showAll, setShowAll] = useState(false)
  //TODO: useMemo
  const groupArticles = articles.reduce((acc, cur) => {
    switch (aggregation) {
      case "Категории":
        cur.categories?.forEach(c => acc[c] = [...acc[c] ?? [], cur])
        if (cur.categories === null || cur.categories.length === 0) {
          acc["Без категории"] = [...acc["Без категории"] ?? [], cur]
        }
        break;
      case "Издания":
        const p = cur.publisher.name
        acc[p] = [...acc[p] ?? [], cur]
        break;
      case "Люди":
        cur.people?.forEach(({ fullName }) => acc[fullName] = [...acc[fullName] ?? [], cur])
        if (cur.people === null || cur.people.length === 0) {
          acc["Без людей"] = [...acc["Без людей"] ?? [], cur]
        }
        break;
      case "Страны":
        const c = cur.address.country
        acc[c] = [...acc[c] ?? [], cur]
        break;
      case "Языки":
        const l = cur.language
        acc[l] = [...acc[l] ?? [], cur]
        break;
      case "Дата":
        const d = new Date(cur.datePublished)
        const dStr = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        acc[dStr] = [...acc[dStr] ?? [], cur]
        break;
    }
    return acc;
  }, {} as GroupArticles)
  //#endregion

  return <>
    {/* Группировка */}
    <Center id='top-aggregation' className={classes.aggregation}>
      <Group maw={"90vw"}>
        <Text className={classes.groupByLabel}>Группировать по</Text>
        <ScrollArea type="never">
          <SegmentedControl value={aggregation} onChange={setAggregation} data={feedAggregationData} />
        </ScrollArea>
      </Group>
    </Center>


    {/* Кнопка наверх */}
    <Link href={{ hash: 'top-aggregation' }} title='наверх' scroll={false}>
      <ActionIcon aria-label="наверх" className={classes.goTopBtn}>
        <ArrowBigTop
          size={48}
          strokeWidth={2}
          color={'black'}
        />
      </ActionIcon>
    </Link>


    <Flex direction={"row"}>
      {/* Оглавление */}
      <aside className={classes.contentTable}>
        <TableOfContentsFloating title={aggregation} links={Object
          .entries(groupArticles)
          .map(([k, v]) => ({ group: k, data: v }))
          .sort((a, b) => {
            switch (aggregation) {
              case "Дата":
                return Number(new Date(b.group)) - Number(new Date(a.group))
              default:
                return b.data.length - a.data.length
            }
          })
          .map(g => {
            switch (aggregation) {
              case "Дата":
                return {
                  ...g, group: new Date(g.group).toLocaleString("default", { month: "short", day: "2-digit", year: "numeric" })
                }
              case "Языки":
                return {
                  ...g, group: langByKey(g.group)
                }
              case "Страны":
                return {
                  ...g, group: countriesData.find(x => x.fetchValue === g.group)?.label ?? g.group
                }
              default:
                return { ...g }
            }
          })
          .map(({ group, data }, g) => ({
            label: group,
            link: `#group-${g}`,
            order: 1,
            amount: data.length
          }))
        } />
      </aside>

      {/* Группы */}
      <div className={classes.feed}>
        {Object
          .entries(groupArticles)
          .slice(0, showAll ? Object.entries(groupArticles).length : 10)
          .map(([k, v]) => ({ group: k, data: v }))
          .sort((a, b) => {
            switch (aggregation) {
              case "Дата":
                return Number(new Date(b.group)) - Number(new Date(a.group))
              default:
                return b.data.length - a.data.length
            }
          })
          .map(g => {
            switch (aggregation) {
              case "Дата":
                return {
                  ...g, group: new Date(g.group).toLocaleString("default", { month: "short", day: "2-digit", year: "numeric" })
                }
              case "Языки":
                return {
                  ...g, group: langByKey(g.group)
                }
              case "Страны":
                return {
                  ...g, group: countriesData.find(x => x.fetchValue === g.group)?.label ?? g.group
                }
              default:
                return { ...g }
            }
          })
          .map(({ group, data }, g) =>
            <FeedGroup
              key={g}
              groupId={`group-${g}`}
              data={data}
              group={group}
            />)}

        {Object.entries(groupArticles).length > 10 && !showAll &&
          <Button
            className={classes.showAllBtn}
            variant="outline" color="pink"
            onClick={() => setShowAll(true)}
            m={"auto"} mt={"md"}
            w={"100%"} h={"5rem"}
            sx={() => ({ color: "#9b3156" })}
          >
            Все категории
          </Button>}
      </div>
    </Flex>
  </>
}