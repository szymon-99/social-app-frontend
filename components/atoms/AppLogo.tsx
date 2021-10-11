import { Home } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const AppLogo = () => {
  return (
    <Link href='/' passHref>
      <StyledButton variant='text' size='medium'>
        <Home /> <Typography variant='h6'>App</Typography>
      </StyledButton>
    </Link>
  )
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export default AppLogo
