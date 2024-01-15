import { React, useEffect, useState } from 'react'
import { AddNewUser } from '../components/AddNewUser/AddNewUser'
import { UserList } from '../components/UserList/UserList'

const UserPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json()
      setUserList(data.users.slice(0, 5)) // заносим данные с state
    }
    fetchUsers()
  }, [])

  const addUserToList = (newUser) => setUserList([...userList, newUser])

  return (
    <div>
      <AddNewUser addUserToList={addUserToList} />
      <UserList userList={userList} />
    </div>
  )
}

export default UserPage
