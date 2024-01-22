import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

export const AddNewUser = ({ addUserToList }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: '', age: '' } })

  // хранит себе value инпута
  // const watchAge = watch()

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: uuidv4(),
    }

    addUserToList(newUser)

    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleAddUser)}>
      <label>
        First Name
        <input type="text" id="name" {...register('firstName')} />
      </label>
      <label>
        Age
        <input type="number" id="age" {...register('age')} />
      </label>
      <button type="submit">Add User</button>
    </form>
  )
}
