import React from 'react'
// import styles from './searchString.module.scss'
import { Group } from '@mantine/core'
import { SearchString } from '@entities/search'
import {
  SearchByString,
  SearchOperatorAND,
  SearchOperatorNOT,
  SearchStringRemoveButton
} from '@features/search/stringFilter'


type Props = {
  searchString: SearchString
}

export const SearchField = ({ searchString }: Props) =>
  <div>
    <Group>
      <SearchOperatorNOT searchString={searchString} />
      <SearchByString searchString={searchString} />
      <SearchStringRemoveButton searchString={searchString} />
    </Group>
    <SearchOperatorAND />
  </div>
