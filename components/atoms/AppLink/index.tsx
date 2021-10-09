import Link from 'next/link'
import { FC } from 'react'
import { StyledButton } from './styles'

interface AppLinkProps {
  to: string
}

const AppLink: FC<AppLinkProps> = ({ children, to }) => {
  return (
    <Link href={to} passHref>
      <StyledButton variant='outlined' color='success'>
        {children}
      </StyledButton>
    </Link>
  )
}

export default AppLink
