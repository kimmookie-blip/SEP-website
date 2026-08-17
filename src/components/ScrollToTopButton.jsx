import { useScrollPosition } from '../hooks/useScrollPosition'
import './ScrollToTopButton.css'

// Below this, the button stays hidden — no point offering "back to top" when
// a user is still near the top of the page.
const SHOW_AFTER_PX = 600

/**
 * Fixed bottom-right "back to top" button, present on every route (mounted
 * outside <Routes> in App, like DesignSwitcher). Reuses the app's single
 * scroll listener rather than attaching its own (see useScrollPosition).
 */
export default function ScrollToTopButton() {
  const scrollY = useScrollPosition()
  const visible = scrollY > SHOW_AFTER_PX

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      tabIndex={visible ? 0 : -1}
    >
      <span className="scroll-top__arrow" aria-hidden="true" />
    </button>
  )
}
