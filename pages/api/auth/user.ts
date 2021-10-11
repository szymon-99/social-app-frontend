import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import { database } from 'config'

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

    res.status(200).json(user)
  } catch (error) {
    return res.status(403).json({ message: 'User Forbidden' })
  }
}
