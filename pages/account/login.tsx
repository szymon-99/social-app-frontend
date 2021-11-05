import { Container, Typography, Stack } from '@mui/material'
import { AppLink } from 'components/atoms'
import { LoginForm } from 'components/forms/login'
import Link from 'next/link'
import { useAppSelector } from '@hooks/redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const { isLoggedIn } = useAppSelector((store) => store.auth)
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/account/dashboard')
    }
  }, [isLoggedIn])
  return (
    <main>
      <Container maxWidth='xs'>
        <Stack spacing={2}>
          <Typography variant='h1'>Login</Typography>

          <LoginForm />

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
