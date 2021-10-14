import { styled } from '@mui/system'
import { DesktopMenu, MobileMenu } from 'components/molecules'

const Navigation = () => {
  return (
    <Wrapper>
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

  [theme.breakpoints.up('md')]: {
    marginLeft: 'none',
  },
}))
export default Navigation
