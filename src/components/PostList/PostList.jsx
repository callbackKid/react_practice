import { posts } from '../../utils/posts'
import { Post } from '../Post/Post'

export const PostList = () => {
  // postList --> useState

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
