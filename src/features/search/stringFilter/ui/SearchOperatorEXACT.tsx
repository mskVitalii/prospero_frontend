import { SearchString, search } from '@entities/search'
import { useAppDispatch } from '@shared/lib'
import { Button } from '@mantine/core'
import React from 'react'


type Props = {
  searchString: SearchString
}

export const SearchOperatorEXACT = ({ searchString }: Props) => {
  const dispatch = useAppDispatch()

  function toggleExactString() {
    dispatch(search.toggleExactSearchString(searchString))
  }

  return <Button onClick={toggleExactString}>
    &ldquo;&rdquo;
  </Button>
}
