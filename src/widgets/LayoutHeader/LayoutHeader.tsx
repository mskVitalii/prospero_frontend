import React from 'react'
import { Group, Flex, Text } from '@mantine/core';
import { useAppSelector } from '@shared/lib';
import { SearchField } from '@widgets/SearchField';
import { SearchButton, SearchOperatorAND } from '@features/search/stringFilter';
import { SearchByCategory, SearchByCountry, SearchByPeople, SearchByPublisher } from '@features/search/dropFilter';
import classes from "./LayoutHeader.module.scss"


export const LayoutHeader = () => {
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  // const filterString = filterStrings
  //   .filter(x => x.search.length !== 0)
  //   .map(x => `(${x.isNegative ? "НЕ" : ""} ${x.isExact ? `&ldquo;${x.search}&rdquo;` : x.search})`)
  //   .join(" && ")

  const ampersand = (i: number, arr: any[]) => <>
    <Text className={classes.ampersand}>
      {i !== arr.length - 1 && "&&"}
      {i === arr.length - 1 && i > 0 && "="}
    </Text>
  </>

  return <section className={classes.filters}>

    <Group position="center">
      {filterStrings.map((searchString, i, arr) => <Group key={searchString.stringId}>
        <SearchField searchString={searchString} hasRemove={arr.length > 1} />
        {ampersand(i, arr)}
      </Group>)}
      <SearchOperatorAND />
      <SearchButton />
    </Group>

    <Flex gap="xl" justify={"center"} className={classes.dropDownFilters}>
      {/* <Text>[Debounced value]: {filterString}</Text> */}
      <SearchByCategory />
      <SearchByPeople />
      <SearchByPublisher />
      <SearchByCountry />
    </Flex>
  </section>
}
