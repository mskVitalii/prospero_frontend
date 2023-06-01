/** Поисковая строка */
export type SearchString = {
  stringId: string
  /** Поисковая строка */
  search: string
  /** Оператор инверсии: новости БЕЗ этого search */
  isNegative: boolean
  /** Оператор полнотекстового поиска: новости ТОЧНО с search */
  isExact: boolean
}

export type FilterCategory = { name: string }
export type FilterPeople = { fullName: string }
export type FilterPublishers = { name: string }
export type FilterCountry = { country: string }
export type FilterLanguages = { name: string }
export type FilterTime = { start: string, end: string }


/** Все поисковые фильтры */
export type SearchState = {
  /** Массив поисковых строк, оператор объединения && */
  filterStrings: SearchString[]
  filterPeople: FilterPeople[]
  filterPublishers: FilterPublishers[]
  filterCategories: FilterCategory[]
  filterLanguages: FilterLanguages[]
  filterCountry: FilterCountry[]
  filterTime: FilterTime
}