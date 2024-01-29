// импортировать createSlice
import { createSlice } from '@reduxjs/toolkit'
// создать слайс, кот принимает название, нач состояние - [], reducers
const initialState = {
  todos: [
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
  ],
}
const todoSlice = createSlice({
  name: 'todos',
  initialState, // {initialState: initialState}
  reducers: {
    changeTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, doneFlag: !el.doneFlag } : el
      )
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload)
    },
  },
})

export const { changeTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
