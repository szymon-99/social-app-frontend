import { createContext, FC, useState } from 'react'

export const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: FC = ({ children }) => {
  const value = useAuth()

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return { isUserLoggedIn }
}

type AuthContextData = ReturnType<typeof useAuth>
