import React from 'react'
import { Article } from '../model/type'
import { Badge, TypographyStylesProvider, Flex, Text, Group } from '@mantine/core'
import classes from "./FeedItem.module.css"
import Link from 'next/link'


type Props = {
  article: Article
}
export const FeedItem = ({ article }: Props) => {

  const dateStr = new Date(article.datePublished).toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })

  return (<article className={classes.article}>
    <h3>
      <Link
        href={article.URL}
        className={classes.link}>
        {article.name}
      </Link>
    </h3>

    <TypographyStylesProvider>
      <Text dangerouslySetInnerHTML={{ __html: article.description }} />
    </TypographyStylesProvider >

    <Text className={classes.section}>
      {article.categories?.length > 0 &&
        <Flex gap={"5px"} align={"center"}>
          <b>Категории</b>:
          <Group style={{ rowGap: "4px" }} spacing="xs">
            {article.categories?.map((c, i) =>
              <Badge
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
                key={`${c}-${i}`}>
                {c}
              </Badge>)}
          </Group>
        </Flex>}
      {article.people?.length > 0 &&
        <Flex mt={"6px"} gap={"5px"} align={"center"}>
          <b>Люди</b>:
          <Group style={{ rowGap: "4px" }} spacing="xs">
            {article.people.map(({ fullName }, i) =>
              <Badge
                maw={"30ch"}
                key={`${fullName}-${i}`}
                variant="gradient"
                gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                {fullName}
              </Badge>)}
          </Group>
        </Flex>}
    </Text>

    <Flex justify={"space-between"} className={classes.section}>
      <Text c={"#adadad"}>@{article.publisher.name}</Text>
      <Text c={"#adadad"}>{dateStr}</Text>
    </Flex>
  </article>)
}
