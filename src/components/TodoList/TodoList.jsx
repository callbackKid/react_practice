import { useSelector } from 'react-redux'
import { Todo } from '../Todo/Todo'

export const TodoList = () => {
  const todoList = useSelector((state) => state.todos)
  console.log(todoList)
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}
