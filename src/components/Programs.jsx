import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../data/programs'
import './Programs.css'

/** Section 5 — Pilihan Jalur Pertumbuhan (The Product). */
export default function Programs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  // Roving focus: ← / → move between tabs, Home/End jump to the ends.
  const onKeyDown = (event) => {
    const last = programs.length - 1
    let next = null

    if (event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return

    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = programs[active]

  return (
    <section className="section section--blue programs" id="program">
      {/* tone-on-tone blooms — the reference's faint ornament, done in CSS */}
      <span className="programs__bloom" aria-hidden="true" />

      <div className="shell">
        <p className="micro micro--amber programs__kicker">Jalur Pertumbuhan</p>
        <h2 className="programs__headline">Tentukan Langkah Pertumbuhan Anda</h2>

        <div className="programs__grid">
          <div
            className="programs__tabs"
            role="tablist"
            aria-label="Jalur pertumbuhan"
          >
            {programs.map((program, i) => (
              <button
                key={program.slug}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`tab-${program.slug}`}
                aria-selected={i === active}
                aria-controls={`panel-${program.slug}`}
                tabIndex={i === active ? 0 : -1}
                className={`programs__tab ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                <span className="programs__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="programs__tab-label">{program.tab}</span>
              </button>
            ))}
          </div>

          <div
            className="programs__panel"
            role="tabpanel"
            id={`panel-${current.slug}`}
            aria-labelledby={`tab-${current.slug}`}
            tabIndex={0}
          >
            <p className="micro micro--amber">Fokus Program</p>
            <h3 className="programs__title">{current.focus}</h3>
            <p className="programs__blurb">{current.blurb}</p>

            {/* Detail lives on a separate page — never inline (§3 requirement 1). */}
            <Link to={`/program/${current.slug}`} className="btn btn--amber programs__link">
              Lihat Detail Materi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
