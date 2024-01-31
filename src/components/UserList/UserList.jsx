import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFriend, deleteFriend } from '../../store/friendsSlice'
import { User } from '../User/User'

export const UserList = ({ userList }) => {
  const dispatch = useDispatch()

  const handleAddUser = (event, user) => {
    event.preventDefault()
    dispatch(addFriend(user))
  }
  const handleDeleteUser = (event) => {
    event.preventDefault()
    dispatch(deleteFriend())
    console.log('delete')
  }

  return (
    <div>
      {userList.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            {...user}
            handleDeleteUser={handleDeleteUser}
            handleAddUser={(event) => handleAddUser(event, user)}
          />
        </Link>
      ))}
    </div>
  )
}
