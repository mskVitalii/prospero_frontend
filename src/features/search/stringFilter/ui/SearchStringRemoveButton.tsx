import React from 'react'
import { Button } from '@mantine/core'
import { useAppDispatch } from '@shared/lib'
import { SearchString, search } from '@entities/search'


type Props = {
  searchString: SearchString
}

export const SearchStringRemoveButton = ({ searchString }: Props) => {
  const dispatch = useAppDispatch()

  function removeSearchString() {
    dispatch(search.deleteSearchString(searchString))
  }

  return <Button onClick={removeSearchString}>
    ❌
  </Button>
}