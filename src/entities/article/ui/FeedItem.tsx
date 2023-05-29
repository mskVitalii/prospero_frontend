import React from 'react'
import { Article } from '../model/type'
import { Badge, TypographyStylesProvider, Flex, Text } from '@mantine/core'
import classes from "./FeedItem.module.scss"

type Props = {
  article: Article
}

export const FeedItem = ({ article }: Props) => {
  return (<article className={classes.article}>
    <h3>
      <a href={article.URL} className={classes.link}>
        {article.name}
      </a>
    </h3>

    <TypographyStylesProvider>
      <Text dangerouslySetInnerHTML={{ __html: article.description }} />
    </TypographyStylesProvider>

    <Text className={classes.section}>
      <Flex gap={"5px"} align={"center"}>
        <b>Categories</b>:
        {article.categories?.map(c => <Badge key={c}>{c}</Badge>)}
      </Flex>
    </Text>

    <div className={classes.section}>
      <Text>@{article.publisher.name}</Text>
    </div>
  </article>)
}
