import { styled } from '@mui/system'
import { DesktopMenu, MobileMenu } from 'components/molecules'
import { useUser } from '@hooks/useUser'
import { logout } from 'utils/axiosHelpers'

const Navigation = () => {
  const { mutateUser } = useUser()

  const handleLogout = async () => {
    mutateUser(await logout(), false)
  }
  return (
    <Wrapper>
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
