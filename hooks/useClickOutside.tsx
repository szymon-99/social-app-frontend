import { useEffect, RefObject } from 'react'

const useClickOutside = <T extends Element>(
  ref: RefObject<T>,
  callback: () => void
) => {
  const handler = (e: Event) => {
    const target = e.target as Element

    if (ref.current && !ref.current.contains(target)) {
      callback()
    }
  }

  return useEffect(() => {
    window.addEventListener('click', handler)

    return () => window.removeEventListener('click', handler)
  }, [])
}

export default useClickOutside
