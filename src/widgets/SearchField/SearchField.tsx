import React from 'react'
import styles from './searchString.module.scss'
import { Group } from '@mantine/core'
import { SearchString } from '@entities/search/model/searchSlice'
import SearchByString from '@features/search/stringFilter/ui/SearchByString'
import SearchOperatorAND from '@features/search/stringFilter/ui/SearchOperatorAND'
import SearchOperatorNOT from '@features/search/stringFilter/ui/SearchOperatorNOT'
import SearchStringRemoveButton from '@features/search/stringFilter/ui/SearchStringRemoveButton'

type Props = {
  searchString: SearchString
}

const SearchField = ({ searchString }: Props) => {

  return <div>
    <Group>
      <SearchOperatorNOT searchString={searchString} />
      <SearchByString searchString={searchString} />
      <SearchStringRemoveButton searchString={searchString} />
    </Group>
    <SearchOperatorAND />
  </div>
}

export default SearchField