import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { FC, FormEventHandler } from 'react'
import { useFormState } from 'react-hook-form'

interface FormProps {
  onSubmit: FormEventHandler
  actionName: string
}

const Form: FC<FormProps> = ({ children, onSubmit, actionName }) => {
  const { isSubmitting } = useFormState()

  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
      <Button
        type='submit'
        variant='contained'
        sx={{ marginTop: 2, paddingY: 1, color: 'white' }}
        disabled={isSubmitting}
      >
        {actionName}
      </Button>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled('form')(({ theme }) => ({
  display: 'grid',
  maxWidth: 400,
  gap: theme.spacing(2),
  margin: `${theme.spacing(10)} auto`,
}))
