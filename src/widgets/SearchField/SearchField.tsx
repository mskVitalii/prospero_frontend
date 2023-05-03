import React from 'react'
import styles from './SearchField.module.scss'
import { Group } from '@mantine/core'
import { SearchString } from '@entities/search'
import {
  SearchByString,
  SearchOperatorNOT,
  SearchOperatorEXACT,
  SearchStringRemoveButton
} from '@features/search/stringFilter'


type Props = {
  searchString: SearchString
}

export const SearchField = ({ searchString }: Props) =>
  <Group className={styles['search-field']}>
    <SearchOperatorNOT searchString={searchString} />
    <SearchOperatorEXACT searchString={searchString} />
    <SearchByString searchString={searchString} />
    <SearchStringRemoveButton searchString={searchString} />
  </Group>
