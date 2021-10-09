import Link from 'next/link'
import { FC } from 'react'
import Button from '@mui/material/Button'

export interface AppLinkProps {
  to: string
  color?: 'error' | 'secondary' | 'primary'
}

const AppLink: FC<AppLinkProps> = ({ children, to, color = 'primary' }) => {
  return (
    <Link href={to} passHref>
      <Button variant='text' color={color}>
        {children}
      </Button>
    </Link>
  )
}

export default AppLink
