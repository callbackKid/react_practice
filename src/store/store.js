import { configureStore } from '@reduxjs/toolkit'
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
  },
})
