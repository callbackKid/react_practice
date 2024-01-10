import { useContext, useState } from 'react'
import { ApiContext } from '../../contexts'

export const AddNewPost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { handlePostedData } = useContext(ApiContext)

  const handleAddPost = (event) => {
    event.preventDefault()

    const newPost = {
      title: title,
      body: body,
      userId: 5,
    }

    console.log(newPost)
    handlePostedData(newPost)
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleAddPost}>
      <label>
        Title
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        body
        <input
          type="number"
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <button type="submit">Add Post</button>
    </form>
  )
}
