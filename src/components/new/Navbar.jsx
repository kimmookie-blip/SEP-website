import { useEffect, useState } from 'react'
import './Navbar.css'

const LOGO_NEGATIVE = '/logo_negative.png'
const LOGO_NEUTRAL = '/logo_neutral.png'

// Edit labels/targets here — each href is an in-page anchor id rendered by a
// section further down (see the `id` prop on each section in LandingNew.jsx).
// 'pengajar' and 'pengumuman' have no matching section yet — same documented
// placeholder pattern as the shared top-level Navbar (see CLAUDE.md).
const LINKS = [
  { label: 'profil', href: '#legitimasi' },
  { label: 'program', href: '#program' },
  { label: 'pengajar', href: '#pengajar' },
  { label: 'kegiatan', href: '#kegiatan' },
  { label: 'pengumuman', href: '#pengumuman' },
]

/**
 * Scoped to /new only, so — unlike the shared top-level Navbar — links never
 * need to redirect cross-page; a plain scrollIntoView is enough.
 * Same transparent-over-hero → floating-card morph as the shared Navbar,
 * driven by the `scrolled` prop from LandingNew's scroll listener.
 */
export default function Navbar({ scrolled = false }) {
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const goToSection = (href) => (event) => {
    event.preventDefault()
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`new-nav ${scrolled ? 'new-nav--solid' : 'new-nav--top'}`}>
      <div className="new-nav__bar">
        <a href="#top" className="new-nav__brand" onClick={goToSection('#top')}>
          {logoOk && (
            <span className="new-nav__logo">
              <img
                src={LOGO_NEGATIVE}
                alt=""
                className="new-nav__logo-img new-nav__logo-img--negative"
                onError={() => setLogoOk(false)}
              />
              <img src={LOGO_NEUTRAL} alt="" className="new-nav__logo-img new-nav__logo-img--neutral" />
            </span>
          )}
          <span className="new-nav__wordmark">
            <strong>SEP Shekinah</strong>
            <small>Pembinaan Iman Katolik</small>
          </span>
        </a>

        <nav className="new-nav__links" aria-label="Navigasi utama">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={goToSection(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#masuk" className="new-nav__cta" onClick={goToSection('#masuk')}>
            masuk anggota
          </a>
        </nav>

        <button
          type="button"
          className="new-nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`new-nav__burger ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="new-nav__panel">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={goToSection(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#masuk" className="new-nav__cta" onClick={goToSection('#masuk')}>
            masuk anggota
          </a>
        </div>
      )}
    </header>
  )
}
