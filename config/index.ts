import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000/api'

export const database = axios.create({ baseURL: API_URL })
export const server = axios.create({ baseURL: FRONTEND_URL })
