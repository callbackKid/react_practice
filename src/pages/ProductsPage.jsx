import { useSelector } from 'react-redux'
import { FilterBar } from '../components/FilterBar/Filterbar'
import { Product } from '../components/Product/Product'
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {products?.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </main>
  )
}

export default ProductsPage
