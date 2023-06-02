import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterTime, FilterCategory, FilterCountry, FilterPeople, FilterPublishers, SearchState, SearchString, FilterLanguages } from "./type"


const defaultSearchString: SearchString = {
  stringId: Date.now().toString(),
  search: "",
  isNegative: false,
  isExact: false
}

export const initialSearchState: SearchState = {
  filterStrings: [defaultSearchString],
  filterCountry: [],
  filterPeople: [],
  filterPublishers: [],
  filterCategories: [],
  filterLanguages: [],
  filterTime: {
    start: new Date(new Date().getDate() - 7).toJSON(),
    end: new Date(Date.now()).toJSON()
  }
}

//* Общий slice для поисковых сущностей
export const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    //* 1. поисковые строки с операторами !, && и ""
    createSearchString: (state) => {
      state.filterStrings.push({ ...defaultSearchString, stringId: Date.now().toString() })
    },
    updateSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id] = payload
    },
    deleteSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings = state.filterStrings
        .filter(({ stringId }) => stringId !== payload.stringId)
    },
    toggleNegativeSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id].isNegative =
        !state.filterStrings[id].isNegative
    },
    toggleExactSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id].isExact =
        !state.filterStrings[id].isExact
    },

    //*---------------------------------------------------------------------- время
    //* 2. поиск по диапазону времени
    changeTimeFilter: (state, { payload }: PayloadAction<FilterTime>) => {
      state.filterTime = payload
    },

    //*---------------------------------------------------------------------- выпадающие меню
    //* 3. категорий
    changeCategoryFilter: (state, { payload }: PayloadAction<FilterCategory[]>) => {
      state.filterCategories = payload
    },
    //* 4. людей
    changePeopleFilter: (state, { payload }: PayloadAction<FilterPeople[]>) => {
      state.filterPeople = payload
    },
    //* 5. публицистов
    changePublishersFilter: (state, { payload }: PayloadAction<FilterPublishers[]>) => {
      state.filterPublishers = payload
    },
    //* 6. карта
    addCountryFilter: (state, { payload }: PayloadAction<FilterCountry>) => {
      state.filterCountry.push(payload)
    },
    removeCountryFilter: (state, { payload }: PayloadAction<FilterCountry>) => {
      state.filterCountry = state.filterCountry
        .filter(x => x.country !== payload.country)
    },
    changeCountryFilter: (state, { payload }: PayloadAction<FilterCountry[]>) => {
      state.filterCountry = payload
    },
    //* 7. языки
    changeLanguagesFilter: (state, { payload }: PayloadAction<FilterLanguages[]>) => {
      state.filterLanguages = payload
    }
  }
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString,
  toggleExactSearchString,
  changeTimeFilter,
  addCountryFilter,
  changePeopleFilter,
  removeCountryFilter,
  changeCountryFilter,
  changeCategoryFilter,
  changeLanguagesFilter,
  changePublishersFilter,
} = searchSlice.actions
export default searchSlice