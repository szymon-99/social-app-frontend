import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import { database } from 'config'
import { UserInfo } from 'types'

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
    return res.json({ isLoggedIn: false })
  }

  const { token } = cookie.parse(headers.cookie)

  try {
    const { data: user } = await database.get<UserInfo>('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.json({ isLoggedIn: true, ...user })
  } catch (error) {
    return res.json({ isLoggedIn: false })
  }
}
