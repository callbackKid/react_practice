import { useContext } from 'react'
import { ApiContext } from '../../contexts'

export const Post = ({ id, title, body }) => {
  const { handleDeletedPost } = useContext(ApiContext)
  console.log(handleDeletedPost)
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => handleDeletedPost(id)}>delete</button>
    </div>
  )
}
