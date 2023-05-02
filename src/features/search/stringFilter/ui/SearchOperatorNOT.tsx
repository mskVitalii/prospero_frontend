import { SearchString, search } from '@entities/search'
import { useAppDispatch } from '@shared/lib/hooks'
import { Button } from '@mantine/core'
import React from 'react'


type Props = {
  searchString: SearchString
}

export const SearchOperatorNOT = ({ searchString }: Props) => {
  const dispatch = useAppDispatch()

  function toggleNegativeString() {
    dispatch(search.toggleNegativeSearchString(searchString))
  }

  return <Button onClick={toggleNegativeString}>
    !
  </Button>
}
