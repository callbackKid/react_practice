import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload.id)
      existingProduct
        ? (existingProduct.amount += 1)
        : state.products.push({
            ...action.payload,
            amount: 1,
          })
    },
    removeProduct: {
      // проверить количество этого товара в корзине
      // товар больше -  уменьшить количество
      // товар один - найти нужный индекс товара
      // через slice удалить по индексу
    },
    decreaseProduct: {
      // найти индекс и по индексу удалить
    },
    cleanCart: (state) => {
      state.products = []
    },
    countTotalPrice: (state) => {
      const sum = state.products.reduce((acc, currentvalue) => {
        return currentvalue.price * currentvalue.amount + acc
      }, 0)

      state.totalPrice = sum
    },
  },
})

export const { addProduct, removeProduct, decreaseProduct, cleanCart, countTotalPrice } =
  cartSlice.actions

export default cartSlice.reducer
