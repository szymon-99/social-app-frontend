import { AxiosResponse } from 'axios'
import { database } from 'config'
import { NextApiRequest, NextApiResponse } from 'next'
import { RegisterData, StrapiAuthenticationResponse } from 'types'
import { getStrapiError } from 'utils/helpers'
import cookie from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req

  if (method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: `Method ${method} not allowed` })
  }

  const { username, password, email } = body

  if (!username) {
    return res.status(400).json({ message: 'Please provide username' })
  }

  try {
    const { data } = await database.post<
      RegisterData,
      AxiosResponse<StrapiAuthenticationResponse>
    >('/auth/local/register', { username, password, email })

    const { jwt, user } = data

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
        path: '/',
      })
    )

    res.status(200).json(user)
  } catch (error) {
    const { message, statusCode } = getStrapiError(error)
    res.status(statusCode).json({ message })
  }
}
