import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'
import Navigation from './Navigation'
import LoginButtons from './LoginButtons'
import { styled } from '@mui/system'
import { FC } from 'react'
import { AppLogo } from '@components/atoms'
import { useAppSelector } from '@hooks/redux'

const Navbar: FC = () => {
  const trigger = useScrollTrigger()
  const { isLoggedIn } = useAppSelector((store) => store.auth)

  return (
    <>
      <Slide in={!trigger} direction='down'>
        <AppBar position='sticky'>
          <StyledToolbar>
            <AppLogo />
            {isLoggedIn ? <Navigation /> : <LoginButtons />}
          </StyledToolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  )
}

const StyledToolbar = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
}))

export default Navbar
