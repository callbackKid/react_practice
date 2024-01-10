import { useContext } from 'react'
import { ApiContext } from '../contexts'
import { Post } from '../components/Post/Post'

export const PostPage = () => {
  const postList = useContext(ApiContext)
  console.log(postList)
  return <div>{postList.map()}</div>
}
