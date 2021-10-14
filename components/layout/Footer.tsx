import { Container } from '@mui/material'
import { styled } from '@mui/system'
import { AppLogo } from 'components/atoms'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <AppLogo />
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.secondary.main,
}))

export default Footer
