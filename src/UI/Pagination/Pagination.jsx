import Pagination from '@mui/material/Pagination'

const CustomPagination = ({ count, handleChange }) => {
  return (
    <Pagination
      count={count}
      variant="outlined"
      defaultPage={1}
      color="primary"
      onChange={handleChange}
    />
  )
}

export default CustomPagination
