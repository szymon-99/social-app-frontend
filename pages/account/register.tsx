import { RegisterForm } from 'components/organisms'
import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'

const RegisterPage = () => {
  return (
    <Container>
      <Typography variant='h1'>Register</Typography>

      <RegisterForm />

      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default RegisterPage
