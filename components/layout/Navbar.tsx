import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'
import { Navigation } from 'components/organisms'
import { ActionBar, LoginButtons } from 'components/molecules'
import { useUser } from '@hooks/useUser'

const Navbar: FC = () => {
  const trigger = useScrollTrigger()
  const { user } = useUser()

  return (
    <>
      <Slide in={!trigger} direction='down'>
        <StyledAppBar position='sticky'>
          <StyledToolbar>
            <ActionBar />
            {user?.isLoggedIn ? <Navigation /> : <LoginButtons />}
          </StyledToolbar>
        </StyledAppBar>
      </Slide>
      <Toolbar />
    </>
  )
}

const StyledToolbar = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.dark,
}))

export default Navbar
