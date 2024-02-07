import { useGetAllProductsQuery, useGetSingleProductQuery } from '../store/apiSlice'

const PostsPage = () => {
  const { data } = useGetAllProductsQuery()
  // { data : newName}
  const { data: singleProduct } = useGetSingleProductQuery(1)

  console.log(singleProduct)
  console.log(data)
  return <main>CHECK CHECK</main>
}

export default PostsPage
