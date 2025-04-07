// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../utils/const'
import { ItemT, ProductT } from '../utils/types'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductT[], undefined>({
      query: () => `product/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi