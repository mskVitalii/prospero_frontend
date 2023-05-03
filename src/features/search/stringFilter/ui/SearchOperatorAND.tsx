import { search } from '@entities/search'
import { useAppDispatch } from '@shared/lib'
import { Button } from '@mantine/core'
import React from 'react'

export const SearchOperatorAND = () => {
  const dispatch = useAppDispatch()

  function addNewString() {
    dispatch(search.createSearchString())
  }

  return <Button onClick={addNewString}>
    &&
  </Button>
}
