import { SearchString, toggleNegativeSearchString } from '@entities/search/model/searchSlice'
import { useAppDispatch } from '@shared/lib/hooks'
import { Button } from '@mantine/core'
import React from 'react'


type Props = {
  searchString: SearchString
}

const SearchOperatorNOT = ({ searchString }: Props) => {
  const dispatch = useAppDispatch()

  function toggleNegativeString() {
    dispatch(toggleNegativeSearchString(searchString))
  }

  return <Button onClick={toggleNegativeString}>
    !
  </Button>
}

export default SearchOperatorNOT