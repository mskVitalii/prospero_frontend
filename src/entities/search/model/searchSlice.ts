import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SearchState, SearchString } from "./type"


const defaultSearchString: SearchString = {
  stringId: 0,
  search: "",
  isNegative: false,
  isExact: false
}

const initialState: SearchState = {
  filterStrings: [defaultSearchString],
}

//* Общий slice для поисковых сущностей
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    //* 1. поисковые строки с операторами !, && и ""
    createSearchString: (state) => {
      const last = state.filterStrings.length
      state.filterStrings.push({ ...defaultSearchString, stringId: last })
    },
    updateSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings[payload.stringId] = payload
    },
    deleteSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings
        .filter(({ stringId }) => stringId !== payload.stringId)
    },
    toggleNegativeSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings[payload.stringId].isNegative =
        !state.filterStrings[payload.stringId].isNegative
    },
    toggleExactSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings[payload.stringId].isExact =
        !state.filterStrings[payload.stringId].isExact
    },
    //TODO 2. поиск по выпадающим менюшкам
    //TODO 3. поиск по карте
    //TODO 4. поиск по диапазону времени
  }
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString,
  toggleExactSearchString } = searchSlice.actions
export default searchSlice