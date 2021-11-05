import { Hidden, IconButton, Tooltip } from '@mui/material'
import { styled } from '@mui/system'
import { navLinks } from '@utils/constants'
import Link from 'next/link'
import { Logout } from '@mui/icons-material'
import { useAuthActions } from '@hooks/redux'

const DesktopMenu = () => {
  const { logoutUser } = useAuthActions()
  return (
    <Hidden implementation='css' mdDown>
      <StyledNav>
        {navLinks.map((link) => {
          const { href, icon, label } = link

          return (
            <Link href={href} key={href} passHref>
              <Tooltip title={label}>
                <IconButton sx={{ color: 'common.white' }} size='large'>
                  {icon}
                </IconButton>
              </Tooltip>
            </Link>
          )
        })}
        <Tooltip title='Logout'>
          <IconButton onClick={logoutUser} size='large' color='warning'>
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

export default DesktopMenu
