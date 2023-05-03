import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SearchState, SearchString } from "./type"
import { Article } from "@shared/lib"


const initialState: SearchState = {
  filterStrings: [{ stringId: 0, search: "", isNegative: false }],
  isLoading: false,
  isFailed: false,
  articles: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    createSearchString: (state) => {
      const last = state.filterStrings.length
      state.filterStrings.push({ stringId: last, search: "", isNegative: false })
    },
    updateSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings[payload.stringId] = payload
    },
    deleteSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      // state.filterStrings = state.filterStrings
      state.filterStrings
        .filter(({ stringId }) => stringId !== payload.stringId)
    },
    toggleNegativeSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings[payload.stringId].isNegative =
        !state.filterStrings[payload.stringId].isNegative
    }
  }
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString } = searchSlice.actions
export default searchSlice