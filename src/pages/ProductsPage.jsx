import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FilterBar } from '../components/FilterBar/Filterbar'
import { useGetAllProductsQuery } from '../store/apiSlice'

const ProductsPage = () => {
  const { data, isLoading } = useGetAllProductsQuery()
  const { minPrice, maxPrice, sort } = useSelector((state) => state.filter)

  const [products, setProducts] = useState(data)

  useEffect(() => {
    const filteredProducts = data?.filter((product) => {
      return (
        (!minPrice || product.price >= Number(minPrice)) &&
        (!maxPrice || product.price <= Number(maxPrice))
      )
    })

    const sortedProducts =
      sort === '' || sort === 'by default'
        ? filteredProducts
        : filteredProducts?.toSorted((a, b) =>
            sort === 'asc' ? a.price - b.price : b.price - a.price
          )

    setProducts(sortedProducts)
  }, [minPrice, maxPrice, sort, data])
  console.log(products)
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
