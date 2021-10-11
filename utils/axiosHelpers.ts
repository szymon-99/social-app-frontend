import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { database } from 'config'

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

export const appFetcher = async <T>(url: string) => {
  const request = () => database.get<T>(url)
  const { data } = await handleRequest(request)

  return data
}

export const appPoster = async <T>(
  url: string,
  uploadData: T,
  config?: AxiosRequestConfig<T>
) => {
  const request = () => database.post<T>(url, uploadData, config)
  const { data } = await handleRequest(request)

  return data
}

export const appUpdater = async <T>(
  url: string,
  uploadData: T,
  config?: AxiosRequestConfig<T>
) => {
  const request = () => database.put<T>(url, uploadData, config)
  const { data } = await handleRequest(request)

  return data
}

export const appDeleter = async <T>(url: string) => {
  const request = () => database.delete<T>(url)
  const { data } = await handleRequest(request)

  return data
}
