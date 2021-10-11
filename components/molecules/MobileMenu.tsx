import { Hidden, IconButton, Menu } from '@mui/material'
import { useState, MouseEvent } from 'react'
import MenuIcon from '@mui/icons-material/menu'

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Hidden smUp>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        open={open}
      >
        Menu
      </Menu>
    </Hidden>
  )
}

export default MobileMenu
