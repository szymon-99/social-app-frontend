import { Alert } from '@mui/material'

import { FC } from 'react'

const ErrorMessage: FC = ({ children }) => {
  return (
    <Alert sx={{ marginBottom: 1 }} severity='error'>
      {children}
    </Alert>
  )
}

export default ErrorMessage
