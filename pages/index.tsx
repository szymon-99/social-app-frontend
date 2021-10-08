import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { useAuthContext } from 'hooks'

const Home: NextPage = () => {
  const { user, error } = useAuthContext()

  console.log(user, error)

  return (
    <Wrapper>
      Hello
      <StyledButton variant='contained'>Click me</StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  background: lightblue;
`

const StyledButton = styled(Button)`
  font-size: 30px;
`

export default Home
