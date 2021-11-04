import axios from 'axios'

const DATABASE_URL =
  process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:1337'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

const database = axios.create({ baseURL: DATABASE_URL })
const server = axios.create({ baseURL: API_URL })

export { server, database }
