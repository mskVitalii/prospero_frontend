import { createSearchString } from '@entities/search/model/searchSlice'
import { useAppDispatch } from '@shared/lib/hooks'
import { Button } from '@mantine/core'
import React from 'react'

const SearchOperatorAND = () => {
  const dispatch = useAppDispatch()

  function addNewString() {
    dispatch(createSearchString())
  }

  return <Button onClick={addNewString}>
    &&
  </Button>
}

export default SearchOperatorAND