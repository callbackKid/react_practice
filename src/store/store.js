import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './apiSlice'
import colorReducer from './colorSlice'
import counterReducer from './counterSlice'
import friendsReducer from './friendsSlice'
import themeReducer from './themeSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    friends: friendsReducer,
    theme: themeReducer,
    color: colorReducer,
    counter: counterReducer,
    todos: todoReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
})
