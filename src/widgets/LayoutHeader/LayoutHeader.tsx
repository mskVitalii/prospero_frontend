import React from 'react'
import styles from "./LayoutHeader.module.scss"
import { Group, Text } from '@mantine/core';
import { useAppSelector } from '@shared/lib/hooks';
import SearchField from '@widgets/SearchField/SearchField';
import SearchButton from '@features/search/stringFilter/ui/SearchButton';


const LayoutHeader = () => {
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  const filterString = filterStrings
    .filter(x => x.search.length !== 0)
    .map(x => `${x.isNegative ? "!" : ""} ${x.search}`)
    .join(" && ")

  return <section className={styles.filters}>

    <Group position="center">
      {filterStrings.map(searchString =>
        <SearchField
          key={searchString.stringId}
          searchString={searchString} />)}
      <SearchButton />
    </Group>

    <div>
      <Text>[Debounced value]: {filterString}</Text>
    </div>
  </section>
}

export default LayoutHeader