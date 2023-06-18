import React, { useEffect, useState } from 'react'
import { Box, createStyles, rem, Title, Text, Flex, ScrollArea, Button } from '@mantine/core';

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "40ch",
    overflow: "hidden",
    display: 'block',
    textDecoration: 'none',
    color: "#135793",
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
  },

  links: {
    position: 'relative',
    marginLeft: "min(4rem, 5vw)"
  },

  indicator: {
    transition: 'transform 150ms ease',
    border: `${rem(2)} solid #135793`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: 'absolute',
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
  },
}));

type Props = {
  links: {
    label: string;
    link: string;
    order: number,
    amount: number
  }[]
  title: string
  allShown: boolean
}
export const TableOfContents = ({ links, title, allShown }: Props) => {
  const { classes: classesInner, cx } = useStyles();
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(allShown)
  useEffect(() => { allShown && setShowAll(true) }, [allShown])
  useEffect(() => { setActive(0) }, [links])

  const size = showAll ? links.length : 10
  const items = links.slice(0, size).map(({ amount, label, link, order }, index) =>
    <Box<'a'>
      component="a"
      title={`${label}(${amount})`}
      href={link}
      onClick={() => setActive(index)}
      key={`${link}-${index}`}
      className={cx(classesInner.link, { [classesInner.linkActive]: active === index })}
      sx={theme => ({ color: "#135793", paddingLeft: `calc(${order} * ${theme.spacing.lg})` })}
    >
      <Flex>
        <p>{label}</p>
        <Text component='p'>({amount})</Text>
      </Flex>
    </Box>
  )

  return <>
    <Title mb="md" h={"3rem"} pl={"min(5vw,2rem)"} order={2}>{title}</Title>
    <ScrollArea mah={"calc(100vh - 6.5rem)"} type="scroll">
      <div className={classesInner.links}>
        <div
          className={classesInner.indicator}
          style={{ transform: `translateY(${rem(active * LINK_HEIGHT + INDICATOR_OFFSET)})` }}
        />
        {items}
      </div>
      {links.length > 10 && !showAll &&
        <Button
          variant="outline"
          onClick={() => setShowAll(true)}
          mt={"md"} ml={"min(calc(4rem - 5px), 5vw)"}
          sx={() => ({ color: "#165b96" })}>
          Показать всё
        </Button>}
    </ScrollArea>
  </>
}