import { LoadingButton } from '@mui/lab'
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
      <LoadingButton
        type='submit'
        variant='contained'
        sx={{ marginTop: 2, paddingY: 1, color: 'white' }}
        loading={isSubmitting}
      >
        {actionName}
      </LoadingButton>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled('form')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
}))
