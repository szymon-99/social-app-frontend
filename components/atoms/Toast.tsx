import { Alert, Snackbar } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'

interface ToastProps {
  message: string
  severity: 'success' | 'error'
}

const Toast: FC<ToastProps> = ({ message, severity }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpen(false)
  }
  return (
    <Snackbar
      autoHideDuration={4000}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} variant='filled' severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
