// импортировать createSlice
import { createSlice } from '@reduxjs/toolkit'
// создать слайс, кот принимает название, нач состояние - [], reducers
const initialState = [
  {
    id: '1',
    taskTitle: 'Task 1',
    taskDescription: 'Complete project presentation',
    doneFlag: false,
  },
  {
    id: '2',
    taskTitle: 'Task 2',
    taskDescription: 'Buy groceries',
    doneFlag: true,
  },
]

const todoSlice = createSlice({
  name: 'todos',
  initialState, // {initialState: initialState}
  reducers: {},
})

export default todoSlice.reducer
