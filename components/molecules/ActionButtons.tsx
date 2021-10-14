import { AddCircle, Logout } from '@mui/icons-material'
import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { useUser } from 'hooks'
import { useRouter } from 'next/router'
import { logout } from 'utils/axiosHelpers'
import Link from 'next/link'

const ActionButtons = () => {
  const { mutateUser } = useUser()
  const router = useRouter()

  const handleLogout = async () => {
    mutateUser(await logout(), false)
    router.push('/')
  }
  return (
    <Wrapper>
      <Link href='/ads/new' passHref>
        <Button
          variant='outlined'
          size='large'
          color='secondary'
          startIcon={<AddCircle />}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Add your add
        </Button>
      </Link>
      <Button
        onClick={handleLogout}
        variant='outlined'
        color='warning'
        size='large'
        startIcon={<Logout />}
      >
        Logout
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
export default ActionButtons
