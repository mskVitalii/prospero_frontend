export type { SearchState, SearchString } from "./model/type"
export * as search from "./model/searchSlice"
export {
  searchApi,
  useSearchArticlesMutation
} from "./api/searchAPI"