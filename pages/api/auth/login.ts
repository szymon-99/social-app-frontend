import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import { database } from 'config'
import { LoginData, StrapiAuthenticationResponse } from 'types'
import { AxiosResponse } from 'axios'
import { getStrapiError } from 'utils/helpers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req

  if (method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: `Method ${method} not allowed` })
  }

  const { password, identifier } = body

  try {
    const { data } = await database.post<
      LoginData,
      AxiosResponse<StrapiAuthenticationResponse>
    >('/auth/local', {
      identifier,
      password,
    })

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

    return res.status(statusCode).json(message)
  }
}
