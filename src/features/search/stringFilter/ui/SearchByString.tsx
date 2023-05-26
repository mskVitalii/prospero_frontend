import React, { useEffect } from 'react'
import { SearchString, search as searchSlice } from '@entities/search'
import { TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useAppDispatch } from '@shared/lib'
import classes from './SearchByString.module.scss'


type Props = {
  searchString: SearchString
}

export const SearchByString = ({ searchString }: Props) => {
  const [search, setSearch] = useDebouncedState(searchString.search, 200);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(searchSlice.updateSearchString({ ...searchString, search }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dispatch])

  return <TextInput
    type='search'
    placeholder="Поиск новостей"
    defaultValue={search}
    onChange={e => setSearch(e.currentTarget.value)}
    onClick={e => e.stopPropagation()}
    radius="lg"
    size="lg"
  />
}
