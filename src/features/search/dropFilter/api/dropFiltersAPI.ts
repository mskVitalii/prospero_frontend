import { baseApi, methodTypes } from "@shared/api"
import { Category, Language, Person, Publisher, SearchCategories, SearchPeople, SearchPublishers } from "./type"

const dropFiltersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchPublishers: build.mutation<Publisher[], SearchPublishers>({
      query: ({ name }) => ({
        url: `/searchPublisherWithHints/${name}`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: methodTypes.GET
      }),
      transformResponse: (rawResult: { data: Publisher[] }) => rawResult.data
    }),
    searchLanguages: build.query<Language[], void>({
      query: () => ({
        url: `/searchLanguages`,
        method: methodTypes.GET
      }),
      transformResponse: (rawResult: { data: Language[] }) => rawResult.data
    }),
    searchCategories: build.mutation<Category[], SearchCategories>({
      query: (name) => ({
        url: `/searchCategoryWithHints?q=${name}`,
        method: methodTypes.GET
      }),
      transformResponse: (rawResult: { data: Category[] }) => rawResult.data
    }),
    searchPeople: build.mutation<Person[], SearchPeople>({
      query: (name) => ({
        url: `/searchPeopleWithHints?q=${name}`,
        method: methodTypes.GET
      }),
      transformResponse: (rawResult: { data: Person[] }) => rawResult.data
    })
  })
})

export const {
  useSearchPublishersMutation,
  useSearchCategoriesMutation,
  useSearchPeopleMutation,
  useSearchLanguagesQuery
} = dropFiltersApi