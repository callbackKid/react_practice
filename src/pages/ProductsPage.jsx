import AddNewProduct from '../components/AddNewProduct/AddNewProduct'
import { useGetAllProductsQuery } from '../store/apiSlice'

const ProductsPage = () => {
  const { data, isLoading } = useGetAllProductsQuery()
  // const products = data?.products
  return (
    <main>
      <AddNewProduct />
      {isLoading ? <h1>ПОЛУЧАЕМ ДАННЫЕ</h1> : data.map((el) => <h1 key={el.id}>{el.title}</h1>)}
    </main>
  )
}

export default ProductsPage

// переименовал файл и компонент на ProductsPage
// поменял раутинг на /products и добавил компонент ProductsPAge
// в хедере поменял ссылку на /products и изменил название
