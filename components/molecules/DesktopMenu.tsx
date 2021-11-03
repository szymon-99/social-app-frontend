import { Hidden, IconButton, Tooltip } from '@mui/material'
import { styled } from '@mui/system'
import { navLinks } from 'utils/constants'
import Link from 'next/link'
import { FC } from 'react'
import { Logout } from '@mui/icons-material'

interface DesktopMenuProps {
  logout: () => Promise<void>
}

const DesktopMenu: FC<DesktopMenuProps> = ({ logout }) => {
  return (
    <Hidden implementation='css' mdDown>
      <StyledNav>
        {navLinks.map((link) => {
          const { href, icon, label } = link

          return (
            <Link href={href} key={href} passHref>
              <Tooltip title={label}>
                <StyledButton size='large'>{icon}</StyledButton>
              </Tooltip>
            </Link>
          )
        })}
        <Tooltip title='Logout'>
          <IconButton onClick={logout} size='large' color='warning'>
            <Logout />
          </IconButton>
        </Tooltip>
      </StyledNav>
    </Hidden>
  )
}
const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}))

const StyledButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export default DesktopMenu
