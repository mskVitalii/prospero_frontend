import React, { useEffect } from 'react'
import { Button } from '@mantine/core'
import { useAppSelector } from '@shared/lib'
import { useSearchArticlesMutation } from '@entities/search'


export const SearchButton = () => {
  const search = useAppSelector(({ search }) => search)
  const [searchTrigger] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  function runSearch() {
    searchTrigger({ ...search, filterStrings: search.filterStrings.filter(x => x.search.length > 0) })
  }

  useEffect(() => {
    runSearch()
  }, [])

  return <Button
    variant="gradient" gradient={{ from: 'orange', to: 'red' }}
    onClick={runSearch}>
    Search
  </Button>
}

export default SearchButton