import { useEffect, useState } from 'react'

/**
 * Single rAF-throttled scroll listener shared by the hero fade and the navbar
 * state change. Deliberately one listener for the whole app — adding a second
 * would double the work on every scroll frame.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frame = null

    const onScroll = () => {
      if (frame !== null) return
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        frame = null
      })
    }

    onScroll() // capture position on mount (e.g. restored scroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return scrollY
}
