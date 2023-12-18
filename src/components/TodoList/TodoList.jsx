import { Todo } from '../Todo/Todo'
import { todos } from '../../utils/toDos'

export const TodoList = () => {
  const changeDoneFlagHandler = () => {
    console.log('click')
  }
  // сначала заносим наши todos в useState()
  // на 9 строке поменять на значение из useState
  // написать функцию changeDoneFlagHandler
  // меняет значение doneFlag у одного из объектов в массиве
  // используя хук поменять массив на изменный

  // аналогично с постом
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} changeDoneFlagHandler={changeDoneFlagHandler} />
      ))}
    </div>
  )
}
