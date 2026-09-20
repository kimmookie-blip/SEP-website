import myssLogo from '../assets/myss-logo.png'
import './FloatingMySS.css'

// Placeholder destination, same as the navbar's "masuk anggota" CTA — both
// point at the member portal, which doesn't have a real URL yet.
const HREF = '#masuk'

/**
 * Floating "MySS" (My SEP Shekinah) badge, bottom-right on every route —
 * mounted outside <Routes> in App, like DesignSwitcher and ScrollToTopButton.
 */
export default function FloatingMySS() {
  return (
    <a href={HREF} className="floating-myss" aria-label="My SEP Shekinah">
      <img src={myssLogo} alt="" className="floating-myss__img" />
    </a>
  )
}
