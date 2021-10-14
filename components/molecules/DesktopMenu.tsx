import { Hidden, IconButton } from '@mui/material'
import { styled } from '@mui/system'
import { navLinks } from 'utils/constants'
import Link from 'next/link'
import { FC } from 'react'
import ActionButtons from './ActionButtons'

const DesktopMenu: FC = () => {
  return (
    <Hidden implementation='css' mdDown>
      <StyledNav>
        {navLinks.map((link) => {
          const { href, icon } = link

          return (
            <Link href={href} key={href} passHref>
              <StyledButton>{icon}</StyledButton>
            </Link>
          )
        })}
        <ActionButtons />
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
