import { useEffect, useState } from 'react'

export const useFiltarion = (minPrice, maxPrice, sort, data) => {
  const [products, setProducts] = useState(data)

  useEffect(() => {
    const filterProducts = () => {
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
    }

    const timeoutId = setTimeout(filterProducts, 300)
    // return функции очистки, кот. завершает выполнение всех действий перед началом нового
    // выполнения useEffect
    // очистка позволяет экономить память и предотвращает приложение от утечки памяти
    // если бы у нас вызывались несколько таймаут паралелльно
    return () => clearTimeout(timeoutId)
  }, [minPrice, maxPrice, sort, data])

  return products
}
