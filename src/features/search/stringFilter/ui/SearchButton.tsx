import React from 'react'
import { Button } from '@mantine/core'
import { useAppSelector } from '@shared/lib'
import { useSearchArticlesMutation } from '@entities/search'


export const SearchButton = () => {
  const filterStrings = useAppSelector(({ search }) => search.filterStrings)
  const [searchTrigger] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  function runSearch() {
    const filterString = filterStrings.map(x => x.search).join(" && ")
    searchTrigger(filterString)
  }

  return <Button onClick={runSearch}>
    Search
  </Button>
}

export default SearchButton