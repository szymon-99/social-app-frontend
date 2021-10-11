import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { styled } from '@mui/system'
import { AppLogo } from 'components/atoms'
import { Navigation } from 'components/organisms'
import { FC } from 'react'

const Navbar: FC = () => {
  const trigger = useScrollTrigger()

  return (
    <>
      <Slide in={!trigger} direction='down'>
        <AppBar position='sticky'>
          <StyledToolbar>
            <AppLogo />
            <Navigation />
          </StyledToolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  )
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
}))

export default Navbar
