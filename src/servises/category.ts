// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../utils/const'
import { ItemT } from '../utils/types'

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<ItemT[], undefined>({
      query: () => `category/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = categoryApi