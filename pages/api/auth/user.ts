import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import { database } from 'config'
import { getStrapiError } from 'utils/helpers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req

  if (method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: `Method ${method} not allowed` })
  }

  if (!headers.cookie) {
    return res.status(403).json({ message: 'Not Authorized' })
  }

  const { token } = cookie.parse(headers.cookie)

  try {
    const { data: user } = await database.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.status(200).json(user)
  } catch (error) {
    const { message, statusCode } = getStrapiError(error)
    return res.status(statusCode).json({ message })
  }
}
