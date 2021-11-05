import { LoginData, RegisterData, UserInfo } from 'types'

export enum AuthTypes {
  CHECK_INITIAL_USER = 'CHECK_INITIAL_USER',
  CHECK_INITIAL_USER_FAILED = 'CHECK_INITIAL_USER_FAILED',
  CHECK_INITIAL_USER_SUCCESS = 'CHECK_INITIAL_USER_SUCCESS',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILED = 'AUTH_FAILED',
  AUTH_REQUEST = 'AUTH_REQUEST',
  LOGIN_USER = 'LOGIN_USER',
  REGISTER_USER = 'REGISTER_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
}

export interface CheckInitialUserAction {
  type: AuthTypes.CHECK_INITIAL_USER
}

export interface CheckInitialUserFailedAction {
  type: AuthTypes.CHECK_INITIAL_USER_FAILED
}

export interface CheckInitialUserSuccessAction {
  type: AuthTypes.CHECK_INITIAL_USER_SUCCESS
  payload: UserInfo
}

export interface AuthRequestAction {
  type: AuthTypes.AUTH_REQUEST
}

export interface AuthSuccessAction {
  type: AuthTypes.AUTH_SUCCESS
  payload: UserInfo
}

export interface AuthFailedAction {
  type: AuthTypes.AUTH_FAILED
  payload: string
}

export interface LoginUserAction {
  type: AuthTypes.LOGIN_USER
  payload: LoginData
}

export interface RegisterUserAction {
  type: AuthTypes.REGISTER_USER
  payload: RegisterData
}

export interface LogoutUserAction {
  type: AuthTypes.LOGOUT_USER
}
export interface LogoutSuccessAction {
  type: AuthTypes.LOGOUT_SUCCESS
}

export type UserAction =
  | CheckInitialUserAction
  | CheckInitialUserFailedAction
  | CheckInitialUserSuccessAction
  | AuthFailedAction
  | AuthSuccessAction
  | AuthRequestAction
  | LoginUserAction
  | RegisterUserAction
  | LogoutUserAction
  | LogoutSuccessAction
