import { useState } from 'react'
import { posts } from '../../utils/posts'
import { Post } from '../Post/Post'

export const PostList = () => {
  const [postList, setPostList] = useState(posts)

  const changeMarkedHandler = (id) => {
    const newPostList = postList.map((post) =>
      post.id === id ? { ...post, marked: !post.marked } : post
    )
    setPostList(newPostList)
  }

  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} {...post} changeMarkedHandler={() => changeMarkedHandler(post.id)} />
      ))}
    </div>
  )
}
