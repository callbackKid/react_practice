import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

export const AddNewUser = ({ addUserToList }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
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
        <input
          type="text"
          id="name"
          {...register('firstName', {
            required: true,
            minLength: { value: 4, message: 'Имя должно быть длинее трех букв' },
            maxLength: { value: 8, message: 'Имя должно быть короче 9 букв' },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
      <label>
        Age
        {/* min , больше 18, выводим в консоль что пользователь старше 18 */}
        <input
          type="number"
          id="age"
          {...register('age', {
            required: 'поле обязательно',
            min: {
              value: 18,
              message: 'Пользователь должен быть старше 18',
            },
            max: {
              value: 150,
              message: 'Пользователь должен быть моложе 150',
            },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.age?.message}</p>

      <label>
        Phone number
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: true,
            pattern: {
              value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
              message: 'Вы должны ввести немецкий номер',
            },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.phone?.message}</p>

      <label>
        Email
        <input
          type="email"
          id="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g,
              message: 'Вы должны ввести правильный email с @',
            },
          })}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          id="password"
          {...register('password', {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g,
              message: 'Вы должны ввести правильный email с @',
            },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <button type="submit">Add User</button>
      <p>{isSubmitSuccessful ? 'Спасибо, данные успешно отправлены' : ''}</p>
    </form>
  )
}
