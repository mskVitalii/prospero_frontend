import React from 'react'
import { Article } from '../model/type'
import { Badge, TypographyStylesProvider, Flex, Text, Group } from '@mantine/core'
import classes from "./FeedItem.module.css"
import Link from 'next/link'


type Props = {
  article: Article
}
export const FeedItem = ({ article }: Props) => {

  const dateStr = new Date(article.datePublished).toLocaleString("ru-RU", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })

  return (<article className={classes.article}>
    <h3>
      <Link
        target='_blank'
        href={article.URL}
        className={classes.link}>
        {article.name}
      </Link>
    </h3>

    <TypographyStylesProvider>
      <Text dangerouslySetInnerHTML={{ __html: article.description }} />
    </TypographyStylesProvider >

    <Group className={classes.section}>
      {article.categories?.length > 0 &&
        <Flex gap={"5px"} align={"center"}>
          <b>Категории</b>:
          <Group style={{ rowGap: "4px" }} spacing="xs">
            {article.categories?.map((c, i) =>
              <Badge
                maw={"30ch"}
                variant="gradient"
                key={`${c}-${i}`}
                gradient={{ from: 'indigo', to: 'cyan' }}>
                {c}
              </Badge>)}
          </Group>
        </Flex>}
      {article.people?.length > 0 &&
        <Flex gap={"5px"} align={"center"}>
          <b>Люди</b>:
          <Group style={{ rowGap: "4px" }} spacing="xs">
            {article.people.map(({ fullName }, i) =>
              <Badge
                maw={"30ch"}
                variant="gradient"
                key={`${fullName}-${i}`}
                gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                {fullName}
              </Badge>)}
          </Group>
        </Flex>}
    </Group>

    <Flex justify={"space-between"} className={classes.section}>
      <Text component='p' c={"#585858"}>@{article.publisher.name}</Text>
      <Text component='p' c={"#585858"}>{dateStr}</Text>
    </Flex>
  </article>)
}
