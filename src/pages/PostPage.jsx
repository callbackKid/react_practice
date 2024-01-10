import { useContext } from 'react'
import { ApiContext } from '../contexts'
import { Post } from '../components/Post/Post'

export const PostPage = () => {
  //  const context = useContext(ApiContext)
  //  const posts = context.posts
  const { posts } = useContext(ApiContext) // 6 и 7 вместе
  // console.log('context: ', context)
  // const posts = context.posts
  // const handlePostedData = context.handlePostedData

  // const { posts, handlePostedData } = context

  return (
    <div>
      {posts.map((el) => (
        <Post key={el.id} {...el} />
      ))}
    </div>
  )
}
