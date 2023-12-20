import { useEffect, useState } from 'react'

export const Product = () => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://dummyjson.com/products/1')
      const data = await response.json()
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <h2>{product.discountPercentage}</h2>
      <p>{product.description}</p>
      <img src={product.images[0]} alt={product.title} />
    </div>
  )
}
