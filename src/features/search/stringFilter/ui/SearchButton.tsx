import React from 'react'
import { Button } from '@mantine/core'
import { searchRTKAction } from '@entities/search/model/searchSlice'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks'

const SearchButton = () => {
  const dispatch = useAppDispatch()
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)

  function runSearch() {
    const filterString = filterStrings.map(x => x.search).join(" && ")
    dispatch(searchRTKAction(filterString))
  }

  return <Button onClick={runSearch}>
    Search
  </Button>
}

export default SearchButton