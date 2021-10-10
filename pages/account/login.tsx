import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'
import { LoginForm } from 'components/organisms'

const login = () => {
  return (
    <Container>
      <Typography variant='h1'>Login</Typography>

      <LoginForm />

      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default login
