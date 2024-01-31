import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ApiContext } from '../../contexts'

export const Post = ({ id, title, body }) => {
  const { handleDeletedPost } = useContext(ApiContext)
  const theme = useSelector((state) => state.theme.theme)
  return (
    <div
      style={{
        background: theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => handleDeletedPost(id)}>delete</button>
    </div>
  )
}
