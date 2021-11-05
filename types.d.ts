import { EmotionCache } from '@emotion/utils'
import { AxiosResponse } from 'axios'
import { NextComponentType, NextPage, NextPageContext } from 'next'
import { AppProps } from 'next/app'

export interface AppPage extends NextPage {
  protected?: true
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextComponentType<NextPageContext, any, P> & { protected?: true }
}

export type Post = {
  id: number
  title: string
  price: number
  description: string
  author: number
  category: null
  published_at: string
  created_at: string
  updated_at: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  role: {
    id: number
    name: string
    description: string
    type: string
  }
  phone: null | string
  created_at: string
  updated_at: string
  avatar: null | string
  posts: Post[]
}

export interface User extends UserInfo {
  isLoggedIn: boolean
}
export type StrapiAuthenticationResponse = {
  jwt: string
  user: UserInfo
}

export interface RegisterData {
  password: string
  email: string
  username: string
}

export interface LoginData {
  identifier: string
  password: string
}

export interface ApiError {
  message: string
  statusCode: number
}

export interface StrapiError {
  message: [{ messages: [{ message: string }] }]
  statusCode: number
}
