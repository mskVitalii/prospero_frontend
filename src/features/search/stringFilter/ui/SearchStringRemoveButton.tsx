import React from 'react'
import { Button } from '@mantine/core'
import { useAppDispatch } from '@shared/lib/hooks'
import { SearchString, deleteSearchString } from '@entities/search/model/searchSlice'


type Props = {
  searchString: SearchString
}

const SearchStringRemoveButton = ({ searchString }: Props) => {
  const dispatch = useAppDispatch()

  function removeSearchString() {
    dispatch(deleteSearchString(searchString))
  }

  return <Button onClick={removeSearchString}>
    ❌
  </Button>
}

export default SearchStringRemoveButton