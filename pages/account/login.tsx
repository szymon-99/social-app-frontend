import { Container, Typography, Stack } from '@mui/material'
import { AppLink } from 'components/atoms'
import { LoginForm } from 'components/forms/login'
import { useUser } from '@hooks/useUser'
import { loginUser } from '@utils/axiosHelpers'
import Link from 'next/link'
import { LoginData } from 'types'

const LoginPage = () => {
  const { mutateUser } = useUser({ redirectTo: '/', redirectIfFound: true })

  const login = (data: LoginData) => {
    return mutateUser(loginUser(data))
  }
  return (
    <main>
      <Container maxWidth='xs'>
        <Stack spacing={2}>
          <Typography variant='h1'>Login</Typography>

          <LoginForm login={login} />

          <Typography variant='body1'>
            Don't have an account?{' '}
            <Link href='/account/register'>Register</Link>
          </Typography>

          <AppLink to='/'>Home</AppLink>
        </Stack>
      </Container>
    </main>
  )
}

export default LoginPage
