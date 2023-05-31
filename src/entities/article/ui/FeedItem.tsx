import React from 'react'
import { Article } from '../model/type'
import { Badge, TypographyStylesProvider, Flex, Text, Highlight, MantineTheme } from '@mantine/core'
import classes from "./FeedItem.module.scss"
import { useAppSelector } from '@shared/lib'

const getColors = (theme: MantineTheme) => [
  theme.colors.teal[4],
  theme.colors.grape[4],
]

type Props = {
  article: Article
}
export const FeedItem = ({ article }: Props) => {
  const highlights = useAppSelector(({ search }) => search.filterStrings)
    .filter(x => x.isExact && x.search.length > 0)
    .map(x => x.search)

  function highlightColors(theme: MantineTheme) {
    const colors = getColors(theme)

    return highlights.reduce((acc, curr, i) => {
      acc[`& [data-highlight="${curr}"]`] = { backgroundColor: colors[i % colors.length] }
      return acc
    }, {} as { [key: string]: { backgroundColor: string } })
  }

  const dateStr = new Date(article.datePublished).toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })

  return (<article className={classes.article}>
    <h3>
      <Highlight
        component='a'
        href={article.URL}
        className={classes.link}
        highlight={highlights}
        sx={highlightColors}
      >
        {article.name}
      </Highlight>
    </h3>

    <TypographyStylesProvider>
      <Text dangerouslySetInnerHTML={{ __html: article.description }} />
    </TypographyStylesProvider >

    <Text className={classes.section}>
      <Flex gap={"5px"} align={"center"}>
        <b>Categories</b>:
        {article.categories?.map((c, i) => <Badge key={`${c}-${i}`}>{c}</Badge>)}
      </Flex>
    </Text>

    <div className={classes.section}>
      <Text>@{article.publisher.name} {dateStr}</Text>
    </div>
  </article >)
}
