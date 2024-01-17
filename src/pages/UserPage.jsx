import { React, useEffect, useState } from 'react'
import { AddNewUser } from '../components/AddNewUser/AddNewUser'
import { UserList } from '../components/UserList/UserList'
import { fetchUsers } from '../requests'

const UserPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetchUsers(setUserList)
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
