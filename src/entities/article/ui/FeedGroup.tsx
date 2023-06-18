import React, { useState } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { FeedItem } from './FeedItem'
import { Article } from '../model/type'
import classes from "./FeedGroup.module.css"

type Props = {
  group: string
  groupId: string
  data: Article[]
}
const FeedGroup = ({ group, data, groupId }: Props) => {
  const [showAll, setShowAll] = useState(false)

  const groupUI = data
    .sort((a, b) => Number(new Date(b.datePublished)) - Number(new Date(a.datePublished)))
    .slice(0, showAll ? data.length : 5)
    .map((article, a) => <FeedItem article={article} key={`${groupId}-${a}`} />)

  return <section className={classes.group} id={groupId}>
    <Divider className={classes.divider} />
    <Title className={classes.title} order={2}>{group}</Title>
    {groupUI}

    {data.length > 5 && !showAll &&
      <Button
        className={classes.showAllBtn}
        variant="outline" sx={() => ({ color: "#135793" })}
        onClick={() => setShowAll(true)}
        m={"auto"} mt={"md"}
        w={"calc(100% - 20vw)"} h={"5rem"}>
        Все статьи
      </Button>}
  </section>
}

export default FeedGroup