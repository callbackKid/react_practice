import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './apiSlice'
import colorReducer from './colorSlice'
import counterReducer from './counterSlice'
import filterReducer from './filterSlice'
import themeReducer from './themeSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    color: colorReducer,
    counter: counterReducer,
    todos: todoReducer,
    filter: filterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
})
