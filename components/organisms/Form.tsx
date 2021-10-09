import { styled } from '@mui/system'
import { FC } from 'react'

interface FormProps {
  onSubmit: () => void
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export default Form

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'grid',
  maxWidth: 400,
  gap: theme.spacing(2),

  margin: `${theme.spacing(10)} auto`,
}))
