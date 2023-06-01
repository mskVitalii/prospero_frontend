/** Издание для всплывающих подсказок */
export type Publisher = {
  publisher_id: string
  add_date: string
  name: string
}

/** Фильтр по издания */
export type SearchPublishers = {
  /** название издания */
  name: string
}

export type Language = {
  name: string
}

export type Category = {
  name: string
}
export type SearchCategories = string
