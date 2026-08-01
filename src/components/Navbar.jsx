import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

// Served from public/, NOT imported, so a missing file 404s gracefully and the
// onError fallback below renders the wordmark alone instead of failing the build.
// Negative (white) sits over the dark hero; neutral (full colour) on the cream bar.
const LOGO_NEGATIVE = '/logo_negative.png'
const LOGO_NEUTRAL = '/logo_neutral.png'

const LINKS = [
  { label: 'profil', href: '#profil' },
  { label: 'program', href: '#program' },
  { label: 'pengajar', href: '#pengajar' },
  { label: 'kegiatan', href: '#kegiatan' },
  { label: 'pengumuman', href: '#pengumuman' },
]

/**
 * Two visual states, one element, so the bar *morphs* rather than swaps:
 *   - top      : transparent over the hero photo, cream text
 *   - scrolled : inset floating cream card with a soft shadow, deep-blue text
 *                (matches Reference/When Scrolled Navigation Bar.png)
 *
 * `solid` forces the scrolled look on pages that have no hero to sit over.
 */
export default function Navbar({ solid = false, scrolled = false }) {
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  const navigate = useNavigate()

  const isSolid = solid || scrolled

  // Close the mobile panel when the viewport grows past the breakpoint,
  // otherwise it stays open and invisible, trapping focus.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const goToSection = (href) => (event) => {
    event.preventDefault()
    setOpen(false)
    const id = href.slice(1)

    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${isSolid ? 'nav--solid' : 'nav--top'}`}>
      <div className="nav__bar">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          {logoOk && (
            /* Both variants are stacked and cross-faded, so the mark morphs in
               step with the bar instead of popping on a src swap. */
            <span className="nav__logo">
              <img
                src={LOGO_NEGATIVE}
                alt=""
                className="nav__logo-img nav__logo-img--negative"
                onError={() => setLogoOk(false)}
              />
              <img src={LOGO_NEUTRAL} alt="" className="nav__logo-img nav__logo-img--neutral" />
            </span>
          )}
          <span className="nav__wordmark">
            <strong>SEP Shekinah</strong>
            <small>Sekolah Evangelisasi</small>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Navigasi utama">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={goToSection(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#masuk" className="nav__member">
            masuk anggota
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav__burger ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="nav__panel">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={goToSection(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#masuk" className="nav__member" onClick={() => setOpen(false)}>
            masuk anggota
          </a>
        </div>
      )}
    </header>
  )
}
