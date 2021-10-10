import { List } from '@mui/material'
import { ErrorMessage } from 'components/atoms'
import { FC } from 'react'

interface ErrorListProps {
  errors: (string | undefined)[]
}

const ErrorList: FC<ErrorListProps> = ({ errors }) => {
  return (
    <List>
      {errors.map((err) => (
        <ErrorMessage key={err}>{err}</ErrorMessage>
      ))}
    </List>
  )
}

export default ErrorList
