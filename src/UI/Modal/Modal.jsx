import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'

export default function CustomizedDialogs({ open, handleClose }) {
  return (
    <>
      <Dialog open={open}>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
