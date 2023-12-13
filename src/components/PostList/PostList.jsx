import { posts } from '../../utils/posts'
import { Post } from '../Post/Post'

export const PostList = () => {
  console.log(posts)
  // все вычисления до return
  // return возвращает всегда один элемент HTML
  // не просто id а ключ элемента в списке
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
