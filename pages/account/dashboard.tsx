import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'
import { AppPage } from 'types'

const dashboard: AppPage = () => {
  return (
    <Container>
      <Typography variant='h1'>Dashboard</Typography>
      <Typography variant='h2'>Welcome</Typography>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

dashboard.protected = true

export default dashboard
