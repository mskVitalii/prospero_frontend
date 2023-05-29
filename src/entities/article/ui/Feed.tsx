import React, { useState } from 'react'
import { useSearchArticlesMutation } from '@entities/search';
import { ActionIcon, Center, Divider, Flex, Group, SegmentedControl, Text, Title } from '@mantine/core';
import { ArrowBigTop } from "tabler-icons-react"
import classes from "./Feed.module.scss"
import Link from 'next/link';
import { TableOfContentsFloating } from '@shared/ui';
import { feedAggregationData } from './FeedAggregationData';
import { Article } from '@shared/lib';
import { FeedItem } from './FeedItem';


type GroupArticles = {
  [key: string]: Article[]
}

export const Feed = () => {
  const [_, { data: articles }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  const [aggregation, setAggregation] = useState("Категории")

  // articles && console.table(articles);
  articles && console.log(articles.map(x => x.publisher.name));

  const groupArticles = (articles ?? []).reduce((acc, cur) => {
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
    }
    return acc;
  }, {} as GroupArticles)
  console.log(groupArticles);

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


    {/* Table of content */}
    <Flex direction={"row"}>
      <div className={classes.contentTable}>
        <TableOfContentsFloating title={aggregation} links={Object
          .entries(groupArticles)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([k, v], g) => ({
            label: k,
            link: `#group-${g}`,
            order: 1,
            amount: v.length
          }))
        } />
      </div>

      <div className={classes.feed}>
        {Object
          .entries(groupArticles)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([k, v], g) =>
            <section className={classes.group} id={`group-${g}`} key={g}>
              <Divider />
              <Title order={2}>{k}</Title>

              {v.map((article, a) =>
                <FeedItem article={article} key={`${g}-${a}`} />)}

            </section>)}
      </div>
    </Flex>
  </>
}
