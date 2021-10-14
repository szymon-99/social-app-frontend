import { styled } from '@mui/system'
import { Search, AppLogo } from 'components/atoms'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ActionBar = () => {
  const { pathname } = useRouter()
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    if (pathname === '/ads') {
      setShowSearch(true)
      return
    }
    setShowSearch(false)
  }, [pathname])

  return (
    <Wrapper>
      <AppLogo />
      {showSearch && <Search />}
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'start',
    gap: theme.spacing(2),
  },
}))

export default ActionBar
