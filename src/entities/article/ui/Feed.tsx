import React, { useContext, useState } from 'react'
import { useSearchArticlesMutation } from '@entities/search';
import { ActionIcon, Center, Divider, Flex, Group, SegmentedControl, Text, Title } from '@mantine/core';
import { ArrowBigTop } from "tabler-icons-react"
import classes from "./Feed.module.css"
import Link from 'next/link';
import { NothingFoundBackground, TableOfContentsFloating } from '@shared/ui/index';
import { feedAggregationData } from './FeedAggregationData';
import { langByKey } from '@shared/lib';
import { FeedItem } from './FeedItem';
import { Article } from '../model/type';
import { InitArticleContext } from '@pages/index';
import { countriesData } from '@features/search/dropFilter/model/countriesData';


type GroupArticles = {
  [key: string]: Article[]
}

export const Feed = () => {
  const initArticles = useContext(InitArticleContext)
  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const articles = articlesData !== undefined ? articlesData.data : initArticles.articles
  const [aggregation, setAggregation] = useState("Категории")

  // articles && console.table(articles);

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

  if (articles.length === 0)
    return <NothingFoundBackground />

  return <>
    {/* Группировка */}
    <Center id='top-aggregation' className={classes.aggregation}>
      <Group>
        <Text>Группировать по</Text>
        <SegmentedControl value={aggregation} onChange={setAggregation} data={feedAggregationData} />
      </Group>
    </Center>


    {/* Кнопка наверх */}
    <Link href='#top-aggregation' className={classes.goTopBtn}>
      <ActionIcon>
        <ArrowBigTop
          size={48}
          strokeWidth={2}
          color={'black'}
        />
      </ActionIcon>
    </Link>


    <Flex direction={"row"}>
      {/* Оглавление */}
      <div className={classes.contentTable}>
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
      </div>

      {/* Группы */}
      <div className={classes.feed}>
        {Object
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
          .map(({ group, data }, g) =>
            <section className={classes.group} id={`group-${g}`} key={g}>
              <Divider />
              <Title order={2}>{group}</Title>
              {data
                .sort((a, b) => Number(new Date(b.datePublished)) - Number(new Date(a.datePublished)))
                .map((article, a) => <FeedItem article={article} key={`${g}-${a}`} />)}
            </section>)}
      </div>
    </Flex>
  </>
}