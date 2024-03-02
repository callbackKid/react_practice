import { useEffect, useState } from 'react'

export const usePagination = (products, productsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentProducts, setCurrentProducts] = useState(products)

  const totalPages = products && Math.floor(Number(products?.length / productsPerPage))

  useEffect(() => {
    const lastIndex = currentPage * productsPerPage // 1*8 = 8   // 2*8 = 16
    const firstIndex = lastIndex - productsPerPage // 8 - 8 = 0 // 16-8 = 8
    setCurrentProducts(products?.slice(firstIndex, lastIndex)) //[].slice(0, 8) // [].slice(8, 16)
  }, [currentPage, products, productsPerPage])

  return { totalPages, currentProducts, setCurrentPage }
}
