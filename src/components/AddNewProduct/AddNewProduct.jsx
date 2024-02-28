import { useState } from 'react'
import CustomizedDialogs from '../../UI/Modal/Modal'
import { useAddNewProductMutation } from '../../store/apiSlice'

const AddNewProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const [addNewProduct, { isLoading, isSuccess, isError }] = useAddNewProductMutation()

  const handleAddPost = (event) => {
    event.preventDefault()

    const newPost = {
      title: title,
      price: price,
      description: 'A description',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any'],
    }

    addNewProduct(newPost)

    setTitle('')
    setPrice('')

    setOpen(true)
  }

  return (
    <>
      <form onSubmit={handleAddPost}>
        <label>
          Title
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          price
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <button type="submit">Add Post</button>
        {isLoading ? <h1>Обработка результата</h1> : null}
        {isSuccess ? <h1>Данные успешно отправлены</h1> : null}
        {isError ? <h1>Ошибка отправления</h1> : null}
      </form>
      <CustomizedDialogs open={open} handleClose={handleClose} />
    </>
  )
}

export default AddNewProduct
