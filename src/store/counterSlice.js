// slice -отвечает сразу за название экшенов, за создание экшенов и за за редьюсер
// как результат вместо трех файлов у нас будет один
import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }

// слайс в себя принимает объект
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.counter += 1
    },
    decrease: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
    change_by_value: (state, action) => {
      state.counter += action.payload
    },
  },
})

// экпортировать экшены
// rtk понимает, что надо импортировать действия
export const { increase, decrease, reset, change_by_value } = counterSlice.actions
// экспортировать редьюсер
export default counterSlice.reducer
