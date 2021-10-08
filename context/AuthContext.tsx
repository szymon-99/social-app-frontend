import axios, { AxiosResponse } from 'axios'
import { server } from 'config'
import { createContext, FC, useState, useEffect } from 'react'
import { User, RegisterData, LoginData } from 'types'
import { getErrorMessage } from 'utils/helpers'
import { useRouter } from 'next/router'

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<unknown | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const { data: user } = await server.get<User>('/auth/user')

        setUser(user)
      } catch (e) {
        setUser(null)
      }
    }
    // checkUserLoggedIn()
    login({ identifier: 'ewa@gmail.com', password: 'ewa123' })
  }, [])

  console.log('render')

  const register = async (credentials: RegisterData) => {
    setError(null)
    try {
      const { data: user } = await server.post<
        RegisterData,
        AxiosResponse<User>
      >('/auth/register', credentials)

      setUser(user)
    } catch (error) {
      const message = getErrorMessage(error)
      setError(message)
    }
  }

  const login = async (credentials: LoginData) => {
    setError(null)
    try {
      const { data: user } = await server.post<LoginData, AxiosResponse<User>>(
        '/auth/login',
        credentials
      )

      setUser(user)
    } catch (error) {
      const message = getErrorMessage(error)
      setError(message)
    }
  }

  const logout = async () => {
    try {
      await server.post('/auth/logout')
      setUser(null)
    } catch (error) {
      const message = getErrorMessage(error)
      setError(message)
    }
  }

  return { user, error }
}

type AuthContextData = ReturnType<typeof useAuth>

export const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: FC = ({ children }) => {
  const value = useAuth()

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
