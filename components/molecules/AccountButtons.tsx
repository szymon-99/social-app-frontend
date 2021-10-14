import { Button } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const AccountButtons = () => {
  return (
    <Wrapper>
      <Link href='/account/login' passHref>
        <Button
          sx={{ whiteSpace: 'nowrap' }}
          variant='contained'
          color='success'
        >
          Sign In
        </Button>
      </Link>
      <Link href='/account/register' passHref>
        <Button
          sx={{ whiteSpace: 'nowrap' }}
          variant='contained'
          color='secondary'
        >
          Sign Up
        </Button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    marginLeft: 'none',
  },
}))

export default AccountButtons
