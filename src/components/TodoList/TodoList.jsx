import { Todo } from '../Todo/Todo'

export const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}
