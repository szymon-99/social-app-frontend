import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { useUser } from '@hooks/useUser'
import { logout } from '@utils/axiosHelpers'
import Link from 'next/link'
import AddCircle from '@mui/icons-material/AddCircle'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navigation = () => {
  const { mutateUser } = useUser()

  const handleLogout = async () => {
    mutateUser(await logout(), false)
  }
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
      <MobileMenu logout={handleLogout} />
      <DesktopMenu logout={handleLogout} />
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  justifySelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),

  [theme.breakpoints.up('md')]: {
    marginLeft: 'none',
  },
}))
export default Navigation
