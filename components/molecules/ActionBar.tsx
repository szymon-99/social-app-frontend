import { AddCircle } from '@mui/icons-material'
import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { AppLogo } from 'components/atoms'
import Link from 'next/link'
import { useUser } from '@hooks/useUser'

const ActionBar = () => {
  const { user } = useUser()
  return (
    <Wrapper>
      <AppLogo />

      {user?.isLoggedIn && (
        <Link href='/ads/new' passHref>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<AddCircle />}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Add your add
          </Button>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
}))

export default ActionBar
