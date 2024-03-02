import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productApi } from './apiSlice'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice'
import themeReducer from './themeSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
  blackList: [[productApi.reducerPath]],
}

const rootReducer = combineReducers({
  theme: themeReducer,
  filter: filterReducer,
  cart: cartReducer,
  [productApi.reducerPath]: productApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
})

export const persistor = persistStore(store)
