import { UserAction, AuthTypes } from 'store/types/authTypes'
import { UserInfo } from 'types'

interface UserState {
  user: UserInfo | null
  isLoggedIn: boolean
  isInitializing: boolean
  isSubmitting: boolean
  error: null | string
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  isInitializing: true,
  isSubmitting: false,
  error: null,
}

const reducer = (state = initialState, action: UserAction): UserState => {
  if (action.type === AuthTypes.AUTH_REQUEST) {
    return { ...state, error: null, isSubmitting: true }
  }
  if (action.type === AuthTypes.AUTH_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      isSubmitting: false,
      isLoggedIn: true,
    }
  }
  if (action.type === AuthTypes.AUTH_FAILED) {
    return { ...state, error: action.payload, isSubmitting: false }
  }
  if (action.type === AuthTypes.CHECK_INITIAL_USER_FAILED) {
    return { ...state, user: null, isLoggedIn: false, isInitializing: false }
  }
  if (action.type === AuthTypes.CHECK_INITIAL_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      isLoggedIn: true,
      isInitializing: false,
    }
  }
  if (action.type === AuthTypes.LOGOUT_SUCCESS) {
    return {
      ...state,
      isLoggedIn: false,
      user: null,
      error: null,
    }
  }
  return state
}

export default reducer
