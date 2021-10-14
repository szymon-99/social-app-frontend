import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import { fetcher } from 'utils/axiosHelpers'
import { User } from 'types'

export function useUser({ redirectTo = '', redirectIfFound = false } = {}) {
  const {
    data: user,
    mutate: mutateUser,
    error,
  } = useSWR<User>('/api/auth/user', fetcher)

  useEffect(() => {
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser, error }
}
