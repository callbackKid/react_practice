import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const AddNewUser = ({ addUserToList }) => {
  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')

  const handleAddUser = (event) => {
    event.preventDefault()

    const newUser = {
      firstName: firstName,
      age: age,
      id: uuidv4(),
    }

    addUserToList(newUser)
    setFirstName('')
    setAge('')
  }

  return (
    <form onSubmit={handleAddUser}>
      <label>
        First Name
        <input
          type="text"
          id="name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Age
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  )
}
