import { useSelector } from 'react-redux'

const CartPage = () => {
  const productsFromCart = useSelector((state) => state.cart.products)
  console.log(productsFromCart)

  const totalPrice = useSelector((state) => state.cart.totalPrice)
  return <main>{totalPrice}</main>
}

export default CartPage
