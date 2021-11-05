import { all, fork } from 'redux-saga/effects'
import { authSaga } from './authSaga/authSaga'

export default function* rootSaga() {
  yield all([fork(authSaga)])
}
