import React from 'react'
import styles from "./LayoutHeader.module.scss"
import { Group, Flex } from '@mantine/core';
import { useAppSelector } from '@shared/lib';
import { SearchField } from '@widgets/SearchField';
import { SearchButton, SearchOperatorAND } from '@features/search/stringFilter';
import { SearchByCategory, SearchByPeople, SearchByPublisher } from '@features/search/dropFilter';


export const LayoutHeader = () => {
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  // const filterString = filterStrings
  //   .filter(x => x.search.length !== 0)
  //   .map(x => `(${x.isNegative ? "НЕ" : ""} ${x.isExact ? `&ldquo;${x.search}&rdquo;` : x.search})`)
  //   .join(" && ")

  return <section className={styles.filters}>

    <Group position="center">
      {filterStrings.map(searchString =>
        <SearchField
          key={searchString.stringId}
          searchString={searchString} />)}
      <SearchOperatorAND />
      <SearchButton />
    </Group>

    <Flex gap="xl" className={styles.dropDownFilters}>
      {/* <Text>[Debounced value]: {filterString}</Text> */}
      <SearchByCategory />
      <SearchByPeople />
      <SearchByPublisher />
    </Flex>
  </section>
}
