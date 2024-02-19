import { useSelector } from 'react-redux'
import { FilterBar } from '../components/FilterBar/Filterbar'
import { useFiltarion } from '../hooks/useFiltration'
import { useGetAllProductsQuery } from '../store/apiSlice'

const ProductsPage = () => {
  const { data, isLoading } = useGetAllProductsQuery()
  const { minPrice, maxPrice, sort } = useSelector((state) => state.filter)
  const products = useFiltarion(minPrice, maxPrice, sort, data)

  return (
    <main>
      <FilterBar />
      {isLoading ? (
        <h1>ПОЛУЧАЕМ ДАННЫЕ</h1>
      ) : (
        products?.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <h2>price: {el.price}</h2>
          </div>
        ))
      )}
    </main>
  )
}

export default ProductsPage
