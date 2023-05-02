import React, { useEffect } from 'react'
import styles from './SearchByString.module.scss'
import { SearchString, updateSearchString } from '@entities/search/model/searchSlice'
import { TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useAppDispatch } from '@shared/lib/hooks'


type Props = {
  searchString: SearchString
}

const SearchByString = ({ searchString }: Props) => {
  const [search, setSearch] = useDebouncedState(searchString.search, 200);
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("SearchString useEffect", search);
    if (search.length < 2) return;
    dispatch(updateSearchString({ ...searchString, search }))
  }, [search])

  return <TextInput
    type='search'
    label="Поиск новостей"
    defaultValue={search}
    className={styles.inputFilter}
    onChange={e => setSearch(e.currentTarget.value)}
  />
}

export default SearchByString