import { useEffect, useState } from 'react'
import { ApiContext } from './contexts'
import { PostPage } from './pages/PostPage'
import { getPosts } from './requests'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  return (
    <ApiContext.Provider value={posts}>
      <div className="App">
        <PostPage />
      </div>
    </ApiContext.Provider>
  )
}

export default App
