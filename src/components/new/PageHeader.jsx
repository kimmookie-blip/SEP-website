import { Link } from 'react-router-dom'
import './PageHeader.css'

/**
 * Masthead shared by every inner page — the counterpart to the landing page's
 * Hero. There's no photograph behind it, so the top padding here is what
 * clears the fixed navbar; pages render it directly under `<Navbar solid />`.
 *
 * Props: `kicker` (small letterspaced label), `title` (the h1), `subhead`
 * (one supporting sentence), and an optional `back` — `{ to, label }` — for
 * detail pages that need a way up to their index.
 */
export default function PageHeader({ kicker, title, subhead, back, children }) {
  return (
    <header className="new-page-head">
      <div className="shell">
        {back && (
          <Link to={back.to} className="new-page-head__back">
            <span aria-hidden="true">←</span> {back.label}
          </Link>
        )}

        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="headline new-page-head__title">{title}</h1>
        {subhead && <p className="subhead new-page-head__sub">{subhead}</p>}

        {children}

        <hr className="rule new-page-head__rule" />
      </div>
    </header>
  )
}
