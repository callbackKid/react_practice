import { useSelector } from 'react-redux'
import CustomPagination from '../UI/Pagination/Pagination'
import SkeletonForProductCard from '../UI/SkeletonForProductCard/SkeletonForProductCard'
import { Product } from '../components/Product/Product'
import { useFiltarion } from '../hooks/useFiltration'
import { usePagination } from '../hooks/usePagination'
import { useGetAllProductsQuery } from '../store/apiSlice'

const ProductsPage = () => {
  const { data, isLoading } = useGetAllProductsQuery()
  const { minPrice, maxPrice, sort } = useSelector((state) => state.filter)

  const products = useFiltarion(minPrice, maxPrice, sort, data)
  const { totalPages, currentProducts, setCurrentPage } = usePagination(products, 8)

  const handleChange = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <main>
      {/* <FilterBar />
      <AddNewProduct /> */}
      <CustomPagination count={totalPages} handleChange={handleChange} />
      {isLoading ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {Array.from(new Array(4)).map((el, index) => (
            <SkeletonForProductCard key={index} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {currentProducts?.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </main>
  )
}

export default ProductsPage
