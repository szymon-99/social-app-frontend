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
import { ActionBar, AccountButtons } from 'components/molecules'
import { useUser } from 'hooks'

const Navbar: FC = () => {
  const trigger = useScrollTrigger()
  const { user } = useUser()

  return (
    <>
      <Slide in={!trigger} direction='down'>
        <StyledAppBar position='sticky'>
          <StyledToolbar>
            <ActionBar />
            {user?.isLoggedIn ? <Navigation /> : <AccountButtons />}
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

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.dark,
}))

export default Navbar
