import { Container, Typography } from '@mui/material'
import { AppLink } from 'components'

const login = () => {
  return (
    <Container>
      <Typography variant='h1'>Login</Typography>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default login
