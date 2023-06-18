import React from 'react'
import { Group } from '@mantine/core'
import { SearchString } from '@entities/search'
import {
  SearchByString,
  // SearchOperatorNOT,
  SearchOperatorEXACT,
  SearchStringRemoveButton
} from '@features/search/stringFilter'
import classes from './SearchField.module.css'


type Props = {
  hasRemove: boolean
  searchString: SearchString
}

export const SearchField = ({ searchString, hasRemove }: Props) =>
  <Group className={classes['search-field']}>
    {/* <SearchOperatorNOT searchString={searchString} /> */}
    <SearchOperatorEXACT searchString={searchString}>
      <SearchByString searchString={searchString} />
    </SearchOperatorEXACT>
    {hasRemove && <SearchStringRemoveButton searchString={searchString} />}
  </Group>
