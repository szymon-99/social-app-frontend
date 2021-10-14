import axios, { AxiosResponse } from 'axios'

import { LoginData, RegisterData, User } from 'types'

export const handleRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<AxiosResponse<T>> => {
  try {
    return await request()
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }
    throw error
  }
}

export const fetcher = async <T>(url: string) => {
  const request = () => axios.get<T>(url)
  const { data } = await handleRequest(request)

  return data
}

export const loginUser = async (credentials: LoginData) => {
  const request = () =>
    axios.post<LoginData, AxiosResponse<User>>('/api/auth/login', credentials)
  const { data } = await handleRequest(request)

  return data
}

export const registerUser = async (credentials: RegisterData) => {
  const request = () =>
    axios.post<RegisterData, AxiosResponse<User>>(
      '/api/auth/register',
      credentials
    )

  const { data } = await handleRequest(request)
  return data
}

export const logout = async () => {
  const request = () => axios.post('/api/auth/logout')

  const { data } = await handleRequest(request)
  return data
}
