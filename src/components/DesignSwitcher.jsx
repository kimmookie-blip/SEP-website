import { Link, useLocation } from 'react-router-dom'
import './DesignSwitcher.css'

/**
 * Floating toggle between the current landing page and its replacement.
 *
 * The URL is the single source of truth for which design is showing — no
 * stored preference, so a reload or a shared link always lands where it says.
 * Mounted outside <Routes> in App so it survives the switch and is present on
 * the empty /new page, which would otherwise be a dead end.
 *
 * Development aid. Delete this component and its mount when the new design
 * ships, or gate it on `import.meta.env.DEV` to hide it from visitors.
 */

const DESIGNS = [
  { to: '/', label: 'Lama' },
  { to: '/new', label: 'Baru' },
]

/**
 * Routes that aren't part of the switch: /legacy, and the pages behind the nav
 * menu. Those have no counterpart in the old design, so a "Lama / Baru" toggle
 * on them would offer a choice that doesn't exist.
 */
const HIDDEN_ON = [
  '/legacy',
  '/tentang-kami',
  '/program',
  '/pengajar',
  '/kegiatan',
  '/pengumuman',
  '/design-system',
  '/component-atlas',
]

export default function DesignSwitcher() {
  const { pathname } = useLocation()

  if (HIDDEN_ON.some((prefix) => pathname.startsWith(prefix))) return null

  // /prototype is an alias of /, and the catch-all renders the old design too
  const current = pathname === '/new' ? '/new' : '/'

  return (
    <nav className="switcher" aria-label="Pilih versi desain">
      {DESIGNS.map(({ to, label }) => {
        const active = to === current
        return (
          <Link
            key={to}
            to={to}
            className={`switcher__opt${active ? ' is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
