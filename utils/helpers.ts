import createCache from '@emotion/cache'
import axios from 'axios'
import { ApiError, StrapiError } from 'types'

export const createEmotionCache = () => {
  return createCache({ key: 'css' })
}

export const getStrapiError = (error: any): ApiError => {
  if (axios.isAxiosError(error)) {
    const { response } = error
    if (response?.data) {
      const strapiError = response.data as StrapiError

      return {
        message: strapiError.message[0].messages[0].message,
        statusCode: strapiError.statusCode,
      }
    }
  }
  return { message: 'Something went wrong', statusCode: 404 }
}

export const getErrorMessage = (error: any) => {
  if (error.message && typeof error.message === 'string') {
    return error.message
  }
  return 'Something went wrong'
}
