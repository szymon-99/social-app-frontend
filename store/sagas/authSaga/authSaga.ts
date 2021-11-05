import { put, call, takeEvery } from 'redux-saga/effects'
import {
  AuthTypes,
  LoginUserAction,
  RegisterUserAction,
} from '@store/types/authTypes'
import { LoginData, RegisterData, UserInfo } from 'types'
import axios from 'axios'
import {
  authSuccess,
  authFailed,
  authRequest,
  checkInitialUserFailed,
  checkInitialUserSuccess,
  logoutSuccess,
} from '@store/actions/authActions'

const getUser = () => axios.get('/api/auth/user')
const login = (credentials: LoginData) =>
  axios.post('/api/auth/login', credentials)

const register = (credentials: RegisterData) =>
  axios.post('/api/auth/register', credentials)

const logout = () => axios.post('/api/auth/logout')

function* checkUser() {
  try {
    const user: UserInfo = yield call(getUser)

    yield put(checkInitialUserSuccess(user))
  } catch (error) {
    yield put(checkInitialUserFailed())
  }
}

function* loginUser(action: LoginUserAction) {
  yield put(authRequest())
  try {
    const user: UserInfo = yield call(login, action.payload)
    yield put(authSuccess(user))
  } catch (error) {
    yield put(authFailed('something went wrong'))
  }
}

function* registerUser(action: RegisterUserAction) {
  yield put(authRequest())
  try {
    const user: UserInfo = yield call(register, action.payload)
    yield put(authSuccess(user))
  } catch (error) {
    yield put(authFailed('Something went wrong'))
  }
}

function* logoutUser() {
  try {
    yield call(logout)
    yield put(logoutSuccess())
  } catch (error) {}
}

export function* authSaga() {
  yield takeEvery(AuthTypes.CHECK_INITIAL_USER, checkUser)
  yield takeEvery(AuthTypes.LOGIN_USER, loginUser)
  yield takeEvery(AuthTypes.REGISTER_USER, registerUser)
  yield takeEvery(AuthTypes.LOGOUT_USER, logoutUser)
}
