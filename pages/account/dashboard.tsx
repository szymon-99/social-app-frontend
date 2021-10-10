import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'

const dashboard = () => {
  return (
    <Container>
      <Typography variant='h1'>Dashboard</Typography>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default dashboard
