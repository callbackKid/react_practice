import { Todo } from '../Todo/Todo'
import { todos } from '../../utils/toDos'

export const TodoList = () => {
  const changeDoneFlagHandler = () => {
    console.log('click')
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} changeDoneFlagHandler={changeDoneFlagHandler} />
      ))}
    </div>
  )
}
