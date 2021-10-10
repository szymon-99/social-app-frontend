import { TextField } from '@mui/material'
import { FC } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'

interface TextInputProps {
  label?: string
  field: ControllerRenderProps
  isError: FieldError | undefined
}

const TextInput: FC<TextInputProps> = ({ label, field, isError }) => {
  return (
    <TextField
      error={isError ? true : false}
      label={label || field.name}
      {...field}
      variant='standard'
    ></TextField>
  )
}

export default TextInput
