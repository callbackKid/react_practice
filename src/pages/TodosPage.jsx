import React, { useState } from 'react'
import { todos } from '../utils/toDos'
import { TodoList } from '../components/TodoList/TodoList'
import { AddNewTodo } from '../components/AddNewTodo/AddNewTodo'

const TodosPage = () => {
  const [todoList, setTodoList] = useState(todos)
  return (
    <div>
      <AddNewTodo />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodosPage
