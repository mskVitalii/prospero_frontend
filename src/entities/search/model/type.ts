import { Article } from "@shared/lib"

export type SearchString = {
  stringId: number,
  search: string,
  isNegative: boolean
}

export type SearchState = {
  filterStrings: SearchString[]
  isLoading: boolean
  isFailed: boolean
  articles: Article[]
}