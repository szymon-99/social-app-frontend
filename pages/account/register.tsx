import { RegisterForm } from '@components/forms/register'
import { Container, Typography, Stack } from '@mui/material'
import { AppLink } from 'components/atoms'
import { useAppSelector } from '@hooks/redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const RegisterPage = () => {
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
          <Typography variant='h1'>Register</Typography>

          <RegisterForm />

          <AppLink to='/'>Home</AppLink>
        </Stack>
      </Container>
    </main>
  )
}

export default RegisterPage
