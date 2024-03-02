import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
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

  const error = {
    message: 'OUPS',
  }
  return (
    <>
      <Box
        component="form"
        onSubmit={handleAddPost}
        sx={{
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          gap: '10px',
        }}
      >
        <TextField
          type="text"
          id="title"
          label="Title"
          value={title}
          error={true}
          helperText={error ? error.message : null}
          onChange={(event) => setTitle(event.target.value)}
        />

        <TextField
          type="number"
          id="price"
          value={price}
          label="Price"
          onChange={(event) => setPrice(event.target.value)}
        />

        <Button variant="outlined" type="submit">
          Add Product
        </Button>
        {isLoading ? <h1>Обработка результата</h1> : null}
        {isSuccess ? <h1>Данные успешно отправлены</h1> : null}
        {isError ? <h1>Ошибка отправления</h1> : null}
      </Box>
      <CustomizedDialogs open={open} handleClose={handleClose} />
    </>
  )
}

export default AddNewProduct
