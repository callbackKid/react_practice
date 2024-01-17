import { Link } from 'react-router-dom'
import { User } from '../User/User'

export const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User {...user} />
        </Link>
      ))}
    </div>
  )
}
