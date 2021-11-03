import { Container, Typography } from '@mui/material'
import { AppLink } from 'components/atoms'
import { useUser } from '@hooks/useUser'

const dashboard = () => {
  const { user } = useUser({ redirectTo: '/' })

  if (!user) {
    return <h1>Loading...</h1>
  }
  return (
    <Container>
      <Typography variant='h1'>Dashboard</Typography>
      <Typography variant='h2'>Welcome</Typography>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default dashboard
