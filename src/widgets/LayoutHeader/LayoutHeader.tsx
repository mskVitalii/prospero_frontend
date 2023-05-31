import React, { useState } from 'react'
import { Group, Flex, Text, SegmentedControl, ActionIcon } from '@mantine/core';
import { getNoun, useAppSelector } from '@shared/lib';
import { SearchField } from '@widgets/SearchField';
import { SearchButton, SearchOperatorAND } from '@features/search/stringFilter';
import { SearchByCategory, SearchByCountry, SearchByCountryMiniMap, SearchByPeople, SearchByPublisher } from '@features/search/dropFilter';
import { useSearchArticlesMutation } from '@entities/search';
import { Filter, FilterOff } from 'tabler-icons-react';
import classes from "./LayoutHeader.module.scss"


type Props = {
  isFeed: boolean
  setIsFeed: React.Dispatch<React.SetStateAction<boolean>>
}

export const LayoutHeader = (props: Props) => {
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  // const filterString = filterStrings
  //   .filter(x => x.search.length !== 0)
  //   .map(x => `(${x.isNegative ? "НЕ" : ""} ${x.isExact ? `&ldquo;${x.search}&rdquo;` : x.search})`)
  //   .join(" && ")

  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const total = articlesData?.total ?? 0

  const ampersand = (i: number, arr: any[]) => <>
    {i !== arr.length - 1 && <Text className={classes.ampersand}>&&</Text>}
  </>

  const [showFilters, setShowFilters] = useState(false)
  function toggleFilters() {
    setShowFilters(prev => !prev)
  }

  return <header className={classes.filters}>

    <Group position="center">
      {filterStrings.map((searchString, i, arr) => <Group key={searchString.stringId}>
        <SearchField searchString={searchString} hasRemove={arr.length > 1} />
        {ampersand(i, arr)}
      </Group>)}
      <Text className={classes.ampersand}>
        =
      </Text>
      <Text className={classes.ampersand}>
        {total} {getNoun(total, 'статья', 'статьи', 'статей')}
      </Text>
      <SearchOperatorAND />
      <SearchButton />
      <ActionIcon size={"calc(2.125rem + 2px)"} onClick={toggleFilters}>
        {showFilters
          ? <Filter size={"calc(2.125rem + 2px)"} strokeWidth={1.5} color={'#212529'} />
          : <FilterOff size={"calc(2.125rem + 2px)"} strokeWidth={1.5} color={'#212529'} />}
      </ActionIcon>
    </Group>

    {showFilters && <Flex gap="xl" justify={"center"} className={classes.dropDownFilters}>
      {/* <Text>[Debounced value]: {filterString}</Text> */}
      <SearchByCategory />
      <SearchByPeople />
      <SearchByPublisher />
      <SearchByCountry />
      <SearchByCountryMiniMap />
      {/* Карта VS фид */}
      <SegmentedControl
        className={classes.switcher}
        value={props.isFeed ? "feed" : "map"}
        onChange={e => props.setIsFeed(e === "feed")}
        data={[
          { label: 'Карта', value: 'map' },
          { label: 'Лента', value: 'feed' },
        ]} />
    </Flex>}
  </header >
}
