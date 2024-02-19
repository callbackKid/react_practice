import { v4 as uuidv4 } from 'uuid'
import { useInput } from '../../hooks/useInput'

// создать экшен которое будет добавлять новую туду в стейт редакса

export const AddNewTodo = () => {
  const { value, onChange, reset } = useInput('')
  const {
    value: taskDescription,
    onChange: onChangeDescription,
    reset: resetDescription,
  } = useInput('')

  const handleAddTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      taskTitle: value,
      taskDescription,
      id: uuidv4(),
    }
    console.log(newTodo)

    reset()
    resetDescription()
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title"></label>
      <input type="text" id="title" value={value} onChange={onChange} />

      <label htmlFor="description"></label>
      <input type="text" id="description" value={taskDescription} onChange={onChangeDescription} />

      <button type="submit">Add Todo</button>
    </form>
  )
}
// создать действие для добавления туду
// создать для изменения отмечено или нет
// создать для удаления туду
