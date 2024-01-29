import React from 'react'
import { AddNewTodo } from '../components/AddNewTodo/AddNewTodo'
import { TodoList } from '../components/TodoList/TodoList'

const TodosPage = () => {
  return (
    <div>
      <AddNewTodo />
      <TodoList />
    </div>
  )
}

export default TodosPage
