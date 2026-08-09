import { useEffect, useState } from 'react'

/**
 * Reveals the hidden "design system" tab in the navbar. Cmd+/ toggles it
 * (Ctrl+/ off macOS).
 *
 * State is kept in sessionStorage rather than localStorage on purpose: the tab
 * is a build-time aid, so it should survive navigation between pages but be
 * forgotten when the tab closes. A visitor can never inherit it from a previous
 * session, and /design-system stays reachable by direct URL regardless.
 *
 * Every page mounts its own <Navbar>, so each remount re-reads the flag — that
 * read is what carries the reveal across a route change.
 */

const STORAGE_KEY = 'shekinah:design-system-tab'

function readStored() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    // Safari private mode throws on any sessionStorage access
    return false
  }
}

function writeStored(value) {
  try {
    sessionStorage.setItem(STORAGE_KEY, value ? '1' : '0')
  } catch {
    // storage unavailable — the tab still toggles, it just won't persist
  }
}

/** Cmd+/ must not fire while the user is typing into a field. */
function isEditingText(el) {
  if (!el) return false
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable === true
  )
}

export function useDesignSystemTab() {
  const [revealed, setRevealed] = useState(readStored)

  useEffect(() => {
    const onKeyDown = (event) => {
      // `event.key` is '/' on the main row and on the numpad divide key;
      // metaKey covers macOS, ctrlKey everything else.
      if (event.key !== '/' || !(event.metaKey || event.ctrlKey)) return
      if (isEditingText(event.target)) return

      // Chrome and Firefox bind Cmd+/ to nothing, but Safari uses it for
      // "show help menu" on some layouts — take the key either way.
      event.preventDefault()

      setRevealed((current) => {
        writeStored(!current)
        return !current
      })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return revealed
}
