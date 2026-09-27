import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './DevMenu.css'

/**
 * Hidden internal-pages menu. Shift+S toggles it, from anywhere in the app —
 * mounted outside <Routes> in App.jsx, like ScrollToTopButton.
 *
 * Unlike /design-system's Cmd+/ tab (which only reveals a link inside
 * components/new/Navbar), this is a second, unified entry point that works
 * even on /prototype, /legacy, and every page that doesn't render that
 * navbar at all.
 */

const ITEMS = [
  { to: '/component-atlas', label: 'Peta Komponen', hint: 'Rute & komponen di setiap direktori' },
  { to: '/design-system', label: 'Design System', hint: 'Token warna, tipografi, tombol — hidup dari CSS' },
]

/** Shift+S must not fire while the user is typing into a field. */
function isEditingText(el) {
  if (!el) return false
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable === true
  )
}

export default function DevMenu() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key.toLowerCase() !== 's' || !event.shiftKey) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (isEditingText(event.target)) return

      event.preventDefault()
      setOpen((current) => !current)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    // capture phase so the same click that opened the menu never also closes it
    window.addEventListener('mousedown', onClickOutside, true)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('mousedown', onClickOutside, true)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="dev-menu" role="presentation">
      <div className="dev-menu__panel" ref={panelRef} role="menu" aria-label="Halaman internal">
        <p className="dev-menu__eyebrow">Halaman internal</p>

        {ITEMS.map((item) => (
          <Link key={item.to} to={item.to} className="dev-menu__item" role="menuitem" onClick={() => setOpen(false)}>
            <span className="dev-menu__item-label">{item.label}</span>
            <span className="dev-menu__item-hint">{item.hint}</span>
          </Link>
        ))}

        <p className="dev-menu__foot">
          <kbd>Shift</kbd> + <kbd>S</kbd> untuk membuka/menutup
        </p>
      </div>
    </div>
  )
}
