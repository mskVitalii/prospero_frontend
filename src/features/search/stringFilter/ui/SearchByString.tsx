import React, { useEffect } from 'react'
import { SearchString, search as searchSlice, useSearchArticlesMutation } from '@entities/search'
import { TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useAppDispatch, useAppSelector } from '@shared/lib'


type Props = {
  searchString: SearchString
}

export const SearchByString = ({ searchString }: Props) => {
  const searchState = useAppSelector(({ search }) => search)
  const dispatch = useAppDispatch()
  const [search, setSearch] = useDebouncedState(searchString.search, 200);
  const [searchTrigger] = useSearchArticlesMutation({
    fixedCacheKey: "shared-search-articles"
  })

  useEffect(() => {
    dispatch(searchSlice.updateSearchString({ ...searchString, search }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dispatch])

  function enterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return

    searchTrigger({
      ...searchState,
      filterStrings: searchState.filterStrings.filter(x => x.search.length > 0)
    })
  }
  return <TextInput
    type='search'
    w={searchState.filterStrings.length > 1 ? "250px" : "500px"}
    placeholder="Поиск новостей"
    defaultValue={search}
    onChange={e => setSearch(e.currentTarget.value)}
    onClick={e => e.stopPropagation()}
    onKeyDown={enterPress}
    radius="lg"
    size="lg"
  />
}
