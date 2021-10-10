import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { FC } from 'react'

const ErrorMessage: FC = ({ children }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ErrorOutlineIcon />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

export default ErrorMessage
