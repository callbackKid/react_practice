import { useEffect, useState } from 'react'
import { ApiContext } from './contexts'
import { PostPage } from './pages/PostPage'
import { addPost, getPosts } from './requests'
import { AddNewPost } from './components/AddNewPost/AddNewPost'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  const handlePostedData = async (post) => {
    const responsePost = await addPost(post)
    setPosts([...posts, responsePost])
  }

  return (
    <ApiContext.Provider value={{ posts, handlePostedData }}>
      <div className="App">
        <AddNewPost />
        <PostPage />
      </div>
    </ApiContext.Provider>
  )
}

export default App
