import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const BASE_URL = 'https://api.escuelajs.co/api/v1/products/' + fetch(url)
// builder.query -  для GET запросов
// builder.mutation - для POST, DELETE, PUT, PATCH т.е данные кот изменяют наш источник

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  tagTypes: ['PRODUCTS', 'USERS', 'COMMENTS'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
      providesTags: ['PRODUCTS'], // по этому тегу производит рефетчинг данных
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['PRODUCTS'],
    }),
  }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useAddNewProductMutation } =
  productApi
