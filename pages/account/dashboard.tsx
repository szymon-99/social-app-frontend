import { Container, Typography, Button } from '@mui/material'
import { AppLink } from 'components/atoms'
import { GetServerSideProps } from 'next'
import cookie from 'cookie'
import { database } from 'config'
import { useAuthContext } from 'hooks'

const dashboard = ({ data }: { data: any }) => {
  const { logout } = useAuthContext()
  return (
    <Container>
      <Typography variant='h1'>Dashboard</Typography>
      <Typography variant='h2'>Welcome {data.username}</Typography>
      <AppLink to='/'>Home</AppLink>
      <Button color='warning' variant='contained' onClick={logout}>
        Logout
      </Button>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { token } = cookie.parse(req.headers.cookie || '')
  try {
    const { data } = await database.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return {
      props: { data },
    }
  } catch (error) {
    res.writeHead(302, { location: '/account/login' })
    res.end()
    return { props: {} }
  }
}

export default dashboard
