import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { useAuthContext } from 'hooks'
import { AppLink } from 'components'

const Home: NextPage = () => {
  const { user, error } = useAuthContext()

  console.log(user, error)

  return (
    <>
      <Wrapper>Hello</Wrapper>
      <div style={{ marginTop: 40, display: 'grid', gap: 20 }}>
        <AppLink to='/account/login' color='error'>
          Login
        </AppLink>
        <AppLink to='/account/register'>Register</AppLink>
        <AppLink to='/account/dashboard' color='secondary'>
          Dashboard
        </AppLink>
      </div>
    </>
  )
}

const Wrapper = styled(Container)`
  background: lightblue;
`

export default Home
