import { Container, Typography } from '@mui/material'
import { AppLink } from 'components'

const register = () => {
  return (
    <Container>
      <Typography variant='h1'>Register</Typography>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default register
