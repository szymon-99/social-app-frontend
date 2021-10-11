import { styled } from '@mui/system'
import { FC } from 'react'

const Footer: FC = () => {
  return <StyledFooter>Foooter</StyledFooter>
}

const StyledFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: theme.spacing(10),
}))

export default Footer
