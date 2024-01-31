import { createSlice } from '@reduxjs/toolkit'
import { changeColor } from '../utils/changeColor'

const initialState = { color: '#ffffff' }

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColors: (state) => {
      state.color = changeColor()
    },
    resetColor: (state) => {
      state.color = '#ffffff'
    },
  },
})

// 7) экспортировать actions
export const { changeColors, resetColor } = colorSlice.actions // reducers объект
//8) экспортировать reducer
export default colorSlice.reducer
