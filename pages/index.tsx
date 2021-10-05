import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const Home: NextPage = () => {
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
