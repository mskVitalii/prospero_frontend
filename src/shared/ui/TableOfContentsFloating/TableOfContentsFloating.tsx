import React, { useState } from 'react'
import { Box, createStyles, rem, Group, Title, Text, Flex, ScrollArea } from '@mantine/core';

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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

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
    marginLeft: "4rem"
  },

  indicator: {
    transition: 'transform 150ms ease',
    border: `${rem(2)} solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]
      }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: 'absolute',
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
  },
}));

interface TableOfContentsFloatingProps {
  links: { label: string; link: string; order: number, amount: number }[]
  title: string
}

export function TableOfContentsFloating({ links, title }: TableOfContentsFloatingProps) {
  const { classes: classesInner, cx } = useStyles();
  const [active, setActive] = useState(0);

  const items = links.map((item, index) =>
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        // event.preventDefault();
        setActive(index);
      }}
      key={item.label}
      className={cx(classesInner.link, { [classesInner.linkActive]: active === index })}
      sx={(theme) => ({ paddingLeft: `calc(${item.order} * ${theme.spacing.lg})` })}
    >
      <Flex>
        <p>{item.label}</p>
        <Text>({item.amount})</Text>
      </Flex>
    </Box>
  )

  return <>
    <Group mb="md" h={"3rem"} pl={"2rem"}>
      <Title order={2}>{title}</Title>
    </Group>
    <ScrollArea h={"calc(100vh - 6.5rem)"} type="scroll">
      <div className={classesInner.links}>
        <div
          className={classesInner.indicator}
          style={{ transform: `translateY(${rem(active * LINK_HEIGHT + INDICATOR_OFFSET)})` }}
        />
        {items}
      </div>
    </ScrollArea>
  </>
}