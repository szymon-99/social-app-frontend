import createCache from '@emotion/cache'
import { KeyboardReturn } from '@mui/icons-material'
import axios from 'axios'
import { FieldErrors } from 'react-hook-form'
import { ApiError, ApiMessage, StrapiError } from 'types'

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
  if (axios.isAxiosError(error)) {
    const { response } = error
    if (response?.data) {
      const { message } = response.data as ApiMessage
      return message
    }
  }
  return 'Something went wrong'
}

export const getFormErrorMessages = (errors: FieldErrors) => {
  return Object.entries(errors).map(([, value]) => value.message)
}
