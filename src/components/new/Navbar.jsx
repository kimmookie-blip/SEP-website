import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDesignSystemTab } from '../../hooks/useDesignSystemTab'
import './Navbar.css'

const LOGO_NEGATIVE = '/logo_negative.png'
const LOGO_NEUTRAL = '/logo_neutral.png'

// Edit labels/targets here — each `to` is a route registered in App.jsx.
// These are page links, not in-page anchors: the landing page stays a summary
// and every menu item has a page of its own behind it.
//
// `children` turns an item into a hover/focus dropdown on desktop and a
// labelled group in the mobile overlay. Children carry `exact: true` so the
// two kegiatan pages don't both light up: without it "Arsip Kegiatan"
// (/kegiatan) would match /kegiatan/mendatang too, since the parent's own
// highlight deliberately uses a prefix match.
const LINKS = [
  { label: 'tentang kami', to: '/tentang-kami' },
  { label: 'program', to: '/program' },
  {
    label: 'kegiatan',
    to: '/kegiatan',
    children: [
      { label: 'Kegiatan Mendatang', to: '/kegiatan/mendatang', exact: true },
      { label: 'Arsip Kegiatan', to: '/kegiatan', exact: true },
    ],
  },
  { label: 'pengajar', to: '/pengajar' },
  { label: 'pengumuman', to: '/pengumuman' },
]

// Placeholder until a member area exists. Stays a plain <a> so it's obvious
// this one isn't wired to a route yet.
const CTA = { label: 'masuk anggota', href: '#masuk' }

// Hidden from visitors; Cmd+/ reveals it (see hooks/useDesignSystemTab).
// `secret` only drives styling — the marker that this isn't a public link.
const DESIGN_SYSTEM = { label: 'design system', to: '/design-system', secret: true }

/**
 * Shared by /new and every inner page. Unlike the top-level Navbar, links here
 * never redirect to `/` — they're router links, so they work identically from
 * the landing page and from a detail page.
 *
 * On the landing page the bar starts transparent over the Hero and morphs into
 * a floating card once `scrolled` flips. Inner pages have no hero behind the
 * bar, so they pass `solid` and get the card state immediately.
 */
export default function Navbar({ scrolled = false, solid = false }) {
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  // Which submenu the mobile overlay has drilled into (null = root level).
  const [submenu, setSubmenu] = useState(null)
  // What the second panel renders. Set when drilling in and deliberately
  // NOT cleared on the way out, so the panel still has content to show
  // while it slides back off screen.
  const [submenuContent, setSubmenuContent] = useState(null)
  const { pathname } = useLocation()
  const designSystemRevealed = useDesignSystemTab()

  useEffect(() => {
    // Kept in exact sync with Navbar.css's own breakpoint below — must match
    // or the mobile menu can get stuck open/closed right at the boundary.
    const mq = window.matchMedia('(min-width: 1101px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Escape unwinds one level at a time: out of the submenu first, and only
  // then out of the menu itself — rather than discarding both at once.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (submenu) setSubmenu(null)
      else setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, submenu])

  // Reset on the way IN, not out — resetting on close would play the
  // slide-back animation underneath the overlay's own fade-out.
  useEffect(() => {
    if (open) setSubmenu(null)
  }, [open])

  // The overlay is opaque and full-screen, so the page must not scroll behind
  // it — otherwise closing the menu drops you somewhere you never chose.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const isSolid = solid || scrolled
  const close = () => setOpen(false)

  // Clicking the wordmark while already on the landing page doesn't change the
  // route, so App's ScrollToTop never fires — scroll back up here instead.
  const onBrandClick = () => {
    close()
    if (pathname === '/new') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // The secret tab is appended, never inserted, so revealing it can't reshuffle
  // the public menu. Both the desktop row and the mobile overlay render from
  // here, so it appears in both without any second list to keep in step.
  const visibleLinks = designSystemRevealed ? [...LINKS, DESIGN_SYSTEM] : LINKS

  // Prefix match by default, so /kegiatan/:slug keeps "kegiatan" marked; the
  // dropdown's own children opt into an exact match instead (see LINKS).
  const isCurrent = (link) =>
    link.exact ? pathname === link.to : pathname.startsWith(link.to)

  const renderAnchor = (link, extraClass) => (
    <Link
      key={link.to}
      to={link.to}
      onClick={close}
      className={
        [link.secret ? 'new-nav__secret' : null, extraClass, isCurrent(link) ? 'is-current' : null]
          .filter(Boolean)
          .join(' ') || undefined
      }
      aria-current={pathname === link.to ? 'page' : undefined}
    >
      {link.label}
    </Link>
  )

  // Desktop: every item is wrapped so the one with children can anchor its
  // absolutely-positioned dropdown; the wrapper is also what CSS hangs
  // :hover / :focus-within on.
  const renderDesktopLinks = () =>
    visibleLinks.map((link) => (
      <div className="new-nav__item" key={link.to}>
        {renderAnchor(link)}

        {link.children && (
          <div className="new-nav__dropdown">
            {link.children.map((child) => renderAnchor(child, 'new-nav__dropdown-link'))}
          </div>
        )}
      </div>
    ))

  const openSubmenu = (link) => {
    setSubmenuContent(link)
    setSubmenu(link.to)
  }

  // Overlay root level: no hover on touch, so a parent with children becomes
  // a button that drills into the second panel instead of a dropdown.
  const renderOverlayLinks = () =>
    visibleLinks.map((link) =>
      link.children ? (
        <button
          type="button"
          key={link.to}
          className={`new-nav__overlay-trigger${isCurrent(link) ? ' is-current' : ''}`}
          aria-expanded={submenu === link.to}
          onClick={() => openSubmenu(link)}
        >
          {link.label}
          <span className="new-nav__overlay-chevron" aria-hidden="true">
            →
          </span>
        </button>
      ) : (
        renderAnchor(link)
      )
    )

  return (
    <header
      className={`new-nav ${isSolid ? 'new-nav--solid' : 'new-nav--top'}${
        open ? ' new-nav--menu-open' : ''
      }`}
    >
      <div className="new-nav__bar">
        <Link to="/new" className="new-nav__brand" onClick={onBrandClick}>
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
            <small>Berakar, Bertumbuh, Berbuah</small>
          </span>
        </Link>

        <nav className="new-nav__links" aria-label="Navigasi utama">
          {renderDesktopLinks()}
          <a href={CTA.href} className="new-nav__cta" onClick={close}>
            {CTA.label}
          </a>
        </nav>

        <button
          type="button"
          className="new-nav__toggle"
          aria-expanded={open}
          aria-controls="new-nav-panel"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`new-nav__burger ${open ? 'is-open' : ''}`} />
          {/* Label stays "Menu" in both states — the icon's own burger→X
              morph is what communicates open vs closed. */}
          <span className="new-nav__toggle-label" aria-hidden="true">
            Menu
          </span>
        </button>
      </div>

      {/* Full-screen overlay. Always mounted so it can fade out as well as in,
          and it covers the brand too — only .new-nav__toggle sits above it, so
          the close button is all that survives, as in the reference. */}
      <div id="new-nav-panel" className="new-nav__overlay" aria-hidden={!open}>
        {/* Two panels on one track, slid left by 50% when drilled in — the
            viewport clips the inactive one horizontally. Both stay mounted so
            the move animates in each direction; `visibility` (see the CSS)
            is what keeps the off-screen panel out of the tab order. */}
        <div className="new-nav__overlay-viewport">
          <div className={`new-nav__overlay-track${submenu ? ' is-sub' : ''}`}>
            <nav
              className={`new-nav__overlay-panel${submenu ? '' : ' is-active'}`}
              aria-label="Navigasi seluler"
            >
              {/* No home link here on purpose: the brand in the bar stays
                  above the overlay (see .new-nav__brand's z-index) and is the
                  way back, so it never moves when the menu opens. */}
              {renderOverlayLinks()}
              <a href={CTA.href} className="new-nav__cta" onClick={close}>
                {CTA.label}
              </a>
            </nav>

            <nav
              className={`new-nav__overlay-panel${submenu ? ' is-active' : ''}`}
              aria-label={submenuContent ? `Submenu ${submenuContent.label}` : undefined}
            >
              {submenuContent && (
                <>
                  <button
                    type="button"
                    className="new-nav__overlay-back"
                    onClick={() => setSubmenu(null)}
                  >
                    <span aria-hidden="true">←</span> {submenuContent.label}
                  </button>

                  {submenuContent.children.map((child) => renderAnchor(child))}
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
