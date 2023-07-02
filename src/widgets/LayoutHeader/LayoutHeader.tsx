import React, { useContext, useState } from 'react'
import { Group, Flex, Text, SegmentedControl, ActionIcon, Title, ScrollArea } from '@mantine/core';
import { getNoun, useAppSelector } from '@shared/lib';
import { InitArticleContext } from '@pages/index';
import { SearchField } from '@widgets/SearchField';
import { SearchButton, SearchOperatorAND } from '@features/search/stringFilter';
import { SearchByCategory, SearchByCountry, SearchByCountryMiniMap, SearchByLanguage, SearchByPeople, SearchByPublisher } from '@features/search/dropFilter';
import { useSearchArticlesMutation } from '@entities/search';
import { Filter, FilterOff } from 'tabler-icons-react';
import classes from "./LayoutHeader.module.css"
import classNames from 'classnames';


type Props = {
  isFeed: boolean
  setIsFeed: React.Dispatch<React.SetStateAction<boolean>>
}
export const LayoutHeader = (props: Props) => {
  //#region Articles
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  const initArticles = useContext(InitArticleContext)

  const [_, { data: articlesData }] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })
  const total: number = articlesData ? articlesData.total : initArticles.total
  // console.log(articlesData?.total, props.total);
  //#endregion

  //#region UI
  const ampersand = (i: number, arr: any[]) => <>
    {i !== arr.length - 1 && <Text className={classes.equation}>&&</Text>}
  </>

  const [showFilters, setShowFilters] = useState(false)
  function toggleFilters() {
    setShowFilters(prev => !prev)
  }

  function getTotalStr(total: number) {
    if (total === 0) return `Нет статей`
    if (total >= 10000) return `≥10000`
    return total
  }
  //#endregion

  return <header className={classes.filters}>

    <Group position="center">
      {filterStrings.map((searchString, i, arr) => <Group key={searchString.stringId}>
        <SearchField searchString={searchString} hasRemove={arr.length > 1} />
        {ampersand(i, arr)}
      </Group>)}
      <Text className={classNames(classes.equation, classes.equationEquals)}>
        =
      </Text>
      <Title order={1} className={classNames(classes.equation, classes.equationResult)}>
        {getTotalStr(total)} {getNoun(total, 'статья', 'статьи', 'статей')}
      </Title>
      <SearchOperatorAND />
      <SearchButton />
      <ActionIcon size={"calc(2.125rem + 2px)"} onClick={toggleFilters} aria-label='Фильтры'>
        {showFilters
          ? <Filter size={"calc(2.125rem + 2px)"} strokeWidth={1.5} color={'#212529'} />
          : <FilterOff size={"calc(2.125rem + 2px)"} strokeWidth={1.5} color={'#212529'} />}
      </ActionIcon>
    </Group>

    {showFilters &&
      <ScrollArea w={"90vw"} pb={"sm"} m={"auto"} offsetScrollbars type='hover' className={classes.dropDownFiltersScrollArea}>
        <Flex gap="xl" justify={"center"} className={classes.dropDownFilters}>
          <SearchByCategory />
          <SearchByPeople />
          <SearchByLanguage />
          <SearchByPublisher />
          <Group className={classes.countryGrid} align="end">
            <SearchByCountry />
            <SearchByCountryMiniMap />
          </Group>
          {/* Карта VS фид */}
          <SegmentedControl
            className={classes.switcher}
            value={props.isFeed ? "feed" : "map"}
            onChange={e => props.setIsFeed(e === "feed")}
            data={[
              { label: 'Лента', value: 'feed' },
              { label: 'Карта', value: 'map' },
            ]} />
        </Flex>
      </ScrollArea>}

  </header >
}
