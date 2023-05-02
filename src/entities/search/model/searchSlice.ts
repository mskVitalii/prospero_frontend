import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { searchApi } from "@shared/api/searchAPI"
import { SearchState } from "./type"


const initialState: SearchState = {
  filterStrings: [{ stringId: 0, search: "", isNegative: false }],
  isLoading: false,
  isFailed: false,
  articles: []
}

export const searchRTKAction = createAsyncThunk(
  'search/fetch',
  searchApi
)

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRTKAction.pending, (state) => {
        state.isLoading = true
        state.isFailed = false
      })
      .addCase(searchRTKAction.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isFailed = false
        state.articles = payload
      })
      .addCase(searchRTKAction.rejected, (state) => {
        state.isLoading = false
        state.isFailed = true
      })
  },
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString } = searchSlice.actions
export default searchSlice