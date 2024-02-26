import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, countTotalPrice } from '../../store/cartSlice'
import classes from './Product.module.css'

export const Product = ({ product }) => {
  const dispatch = useDispatch()
  const ref = useRef(null)
  const handleAddproduct = (product) => {
    dispatch(addProduct(product))
    dispatch(countTotalPrice())
  }
  const handleClick = () => {
    ref.current.classList.toggle(classes.hide)
  }
  return (
    <div className={classes.productContainer}>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p ref={ref}>{product.description}</p>
      <button onClick={handleClick}>ShowDesc</button>
      <img src={product.images[0]} alt={product.title} />
      <button onClick={() => handleAddproduct(product)}>добавить в корзину</button>
    </div>
  )
}
