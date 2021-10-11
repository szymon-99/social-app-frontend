import { styled } from '@mui/system'
import { Search } from 'components/atoms'
import { MobileMenu, DesktopMenu } from 'components/molecules'

const Navigation = () => {
  return (
    <Wrapper>
      <Search />
      <MobileMenu />
      <DesktopMenu />
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

export default Navigation
