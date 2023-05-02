import React from 'react'
import { Button } from '@mantine/core'
import { search } from '@entities/search'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks'

export const SearchButton = () => {
  const dispatch = useAppDispatch()
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)

  function runSearch() {
    const filterString = filterStrings.map(x => x.search).join(" && ")
    dispatch(search.searchRTKAction(filterString))
  }

  return <Button onClick={runSearch}>
    Search
  </Button>
}

export default SearchButton