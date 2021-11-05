import { styled } from '@mui/system'
import { Button } from '@mui/material'
import Link from 'next/link'
import AddCircle from '@mui/icons-material/AddCircle'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navigation = () => {
  return (
    <Wrapper>
      <Link href='/ads/new' passHref>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<AddCircle />}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Create your Ad
        </Button>
      </Link>
      <MobileMenu />
      <DesktopMenu />
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  justifySelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    marginLeft: 'none',
  },
}))
export default Navigation
