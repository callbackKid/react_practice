import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const BASE_URL = 'https://api.escuelajs.co/api/v1/products/' + fetch(url)
// builder.query -  для GET запросов
// builder.mutation - для POST, DELETE, PUT, PATCH т.е данные кот изменяют наш источник

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi
