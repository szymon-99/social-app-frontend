import { Home } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const AppLogo = () => {
  return (
    <Link href='/' passHref>
      <Button variant='text' size='medium' sx={{ color: 'common.white' }}>
        <Home /> <Typography variant='h6'>App</Typography>
      </Button>
    </Link>
  )
}

export default AppLogo
