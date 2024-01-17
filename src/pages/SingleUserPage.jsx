import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../requests'

const SingleUserPage = () => {
  const [user, setUser] = useState()
  const { id } = useParams()

  useEffect(() => {
    getSingleUser(id, setUser)
  }, [id])

  console.log(user)
  return (
    <div>
      {user && user.firstName}
      <p>{user ? user.lastName : <h1>LOADING</h1>}</p>
    </div>
  )
}

export default SingleUserPage

// sfc

// один компонент - используем дефолтный экпорт
// несколько - используем именнованный импорт
