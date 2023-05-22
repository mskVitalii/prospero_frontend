import React, { useEffect } from 'react'
import styles from './SearchByString.module.scss'
import { SearchString, search as searchSlice } from '@entities/search'
import { TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useAppDispatch } from '@shared/lib'


type Props = {
  searchString: SearchString
}

export const SearchByString = ({ searchString }: Props) => {
  const [search, setSearch] = useDebouncedState(searchString.search, 200);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (search.length < 2) return;
    dispatch(searchSlice.updateSearchString({ ...searchString, search }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dispatch])

  return <TextInput
    type='search'
    label="Поиск новостей"
    defaultValue={search}
    className={styles['input-filter']}
    onChange={e => setSearch(e.currentTarget.value)}
  />
}
