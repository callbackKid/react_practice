import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'

export const CustomButtons = () => {
  return (
    <>
      <Button size="large" color="error" variant="contained" startIcon={<DeleteIcon />}>
        DELETE
      </Button>
      <Button size="medium" color="success" variant="contained" endIcon={<SendIcon />}>
        SEND
      </Button>
      <Button size="small" variant="outlined" onClick={() => console.log('click')} color="warning">
        Google
      </Button>
    </>
  )
}
