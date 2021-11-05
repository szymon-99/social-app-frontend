import { useAuthActions } from '@hooks/redux'
import { FC, useEffect } from 'react'

const AuthProvider: FC = ({ children }) => {
  const { checkInitialUser } = useAuthActions()

  useEffect(() => {
    checkInitialUser()
  }, [])
  return <>{children}</>
}

export default AuthProvider
