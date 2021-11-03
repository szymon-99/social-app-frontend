import { RegisterForm } from '@components/forms/register'
import { useUser } from '@hooks/useUser'
import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'
import { RegisterData } from 'types'
import { registerUser } from '@utils/axiosHelpers'

const RegisterPage = () => {
  const { mutateUser } = useUser({ redirectIfFound: true, redirectTo: '/' })

  const register = (data: RegisterData) => {
    return mutateUser(registerUser(data))
  }
  return (
    <Container maxWidth='xs'>
      <Typography variant='h1'>Register</Typography>

      <RegisterForm register={register} />

      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default RegisterPage
