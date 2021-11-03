import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/menu'
import Link from 'next/link'
import { navLinks } from 'utils/constants'
import { Box } from '@mui/system'
import { Logout } from '@mui/icons-material'

interface MobileMenuProps {
  logout: () => Promise<void>
}

const MobileMenu: FC<MobileMenuProps> = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    }

  return (
    <Hidden mdUp implementation='css'>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: 'common.white' }} />
      </IconButton>
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200, marginTop: 2 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => {
              const { href, label, icon } = link

              return (
                <Link key={href} href={href} passHref>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </Link>
              )
            })}
            <Divider />

            <ListItemButton onClick={logout} divider>
              <ListItemIcon>{<Logout />}</ListItemIcon>
              <ListItemText primary='logout' />
            </ListItemButton>
          </List>
          {/* <ActionButtons /> */}
        </Box>
      </Drawer>
    </Hidden>
  )
}

export default MobileMenu
