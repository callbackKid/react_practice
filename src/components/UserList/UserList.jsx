import { User } from '../User/User'

export const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}
