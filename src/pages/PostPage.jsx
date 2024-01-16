import { useEffect, useState } from 'react'
import { AddNewPost } from '../components/AddNewPost/AddNewPost'
import { Post } from '../components/Post/Post'
import { ApiContext } from '../contexts'
import { addPost, deletePost, getPosts } from '../requests'

const PostPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  const handlePostedData = async (post) => {
    const responsePost = await addPost(post)
    setPosts([...posts, responsePost])
  }

  const handleDeletedPost = async (id) => {
    const response = await deletePost(id)
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
    response
      ? setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
      : console.log('Не удалось удалить пост')
  }

  return (
    <ApiContext.Provider value={{ handlePostedData, handleDeletedPost }}>
      <AddNewPost />
      <div>
        {posts.map((el) => (
          <Post key={el.id} {...el} />
        ))}
      </div>
    </ApiContext.Provider>
  )
}

export default PostPage
