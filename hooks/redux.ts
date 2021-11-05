import { AppDispatch, RootState } from '@store/index'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { AuthActionCreators } from '@store/actions'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuthActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return useMemo(() => {
    return bindActionCreators(AuthActionCreators, dispatch)
  }, [dispatch])
}
