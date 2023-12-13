import { Todo } from '../Todo/Todo'
import { todos } from '../../utils/toDos'

export const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}
