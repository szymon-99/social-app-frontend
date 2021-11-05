import { LoginData, RegisterData, UserInfo } from 'types'
import {
  AuthTypes,
  CheckInitialUserAction,
  CheckInitialUserFailedAction,
  CheckInitialUserSuccessAction,
  LogoutUserAction,
  LogoutSuccessAction,
  LoginUserAction,
  RegisterUserAction,
  AuthSuccessAction,
  AuthFailedAction,
  AuthRequestAction,
} from '../types/authTypes'

export const checkInitialUser = (): CheckInitialUserAction => ({
  type: AuthTypes.CHECK_INITIAL_USER,
})

export const checkInitialUserFailed = (): CheckInitialUserFailedAction => ({
  type: AuthTypes.CHECK_INITIAL_USER_FAILED,
})

export const checkInitialUserSuccess = (
  user: UserInfo
): CheckInitialUserSuccessAction => ({
  type: AuthTypes.CHECK_INITIAL_USER_SUCCESS,
  payload: user,
})

export const logoutUser = (): LogoutUserAction => ({
  type: AuthTypes.LOGOUT_USER,
})

export const logoutSuccess = (): LogoutSuccessAction => ({
  type: AuthTypes.LOGOUT_SUCCESS,
})

export const loginUser = (credentials: LoginData): LoginUserAction => ({
  type: AuthTypes.LOGIN_USER,
  payload: credentials,
})

export const registerUser = (
  credentials: RegisterData
): RegisterUserAction => ({
  type: AuthTypes.REGISTER_USER,
  payload: credentials,
})

export const authRequest = (): AuthRequestAction => ({
  type: AuthTypes.AUTH_REQUEST,
})

export const authSuccess = (user: UserInfo): AuthSuccessAction => ({
  type: AuthTypes.AUTH_SUCCESS,
  payload: user,
})

export const authFailed = (reason: string): AuthFailedAction => ({
  type: AuthTypes.AUTH_FAILED,
  payload: reason,
})
