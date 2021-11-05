import { useAppSelector } from '@hooks/redux'
import { FC } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ProtectedRoute: FC = ({ children }) => {
  const { isLoggedIn, isInitializing } = useAppSelector((store) => store.auth)
  const router = useRouter()

  useEffect(() => {
    if (!isInitializing && !isLoggedIn) {
      router.push('/')
    }
  }, [isInitializing, isLoggedIn])

  if (isInitializing) {
    return <h1>Loading...</h1>
  }

  if (!isLoggedIn) return null

  return <>{children}</>
}

export default ProtectedRoute
