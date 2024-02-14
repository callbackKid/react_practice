import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  minPrice: '',
  maxPrice: '',
  sort: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    minPriceChange: (state, action) => {
      return { ...state, minPrice: action.payload }
    },
    maxPriceChange: (state, action) => {
      return { ...state, maxPrice: action.payload }
    },
    sortChange: (state, action) => {
      return { ...state, sort: action.payload }
    },
  },
})

export const { maxPriceChange, minPriceChange, sortChange } = filterSlice.actions

export default filterSlice.reducer
