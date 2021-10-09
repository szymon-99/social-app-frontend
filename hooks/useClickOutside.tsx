import { useEffect, RefObject } from 'react'

export const useClickOutside = <T extends Element>(
  ref: RefObject<T>,
  callback: () => void
) => {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as Element

      if (ref.current && !ref.current.contains(target)) {
        return
      }
      callback()
    }

    window.addEventListener('click', handler)

    return () => window.removeEventListener('click', handler)
  }, [ref, callback])
}
