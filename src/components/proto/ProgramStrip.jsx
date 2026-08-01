import { useRef, useState } from 'react'
import { protoPrograms } from '../../data/prototype'
import evangelisasi from '../../assets/proto/program-evangelisasi.png'
import './ProgramStrip.css'

/** Only the first track has artwork in the comp; the rest stay grey. */
const artwork = { evangelisasi }

/**
 * Block 2 of Reference/Fixed Content Section.png — four panels in a row.
 * The selected panel goes white and reveals its illustration; the title and
 * blurb beneath it swap to match.
 *
 * Keyboard handling mirrors src/components/Programs.jsx: roving tabindex,
 * arrow keys to move, Home/End to jump.
 */
export default function ProgramStrip() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  const onKeyDown = (event) => {
    const last = protoPrograms.length - 1
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

  const current = protoPrograms[active]

  return (
    <section className="pstrip" id="program">
      <div className="proto-shell">
        <p className="pstrip__kicker">Program SEP Shekinah</p>

        <div
          className="pstrip__row"
          role="tablist"
          aria-label="Program SEP Shekinah"
        >
          {protoPrograms.map((program, i) => {
            const image = artwork[program.image]
            return (
              <button
                key={program.slug}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`ptab-${program.slug}`}
                aria-selected={i === active}
                aria-controls={`ppanel-${program.slug}`}
                tabIndex={i === active ? 0 : -1}
                className={`pstrip__panel ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                {/* the grey panels in the comp carry no label at all */}
                {i === active && image && (
                  <img className="pstrip__art" src={image} alt="" />
                )}
                <span className="pstrip__sr">{program.tab}</span>
              </button>
            )
          })}
        </div>

        <div
          className="pstrip__caption"
          role="tabpanel"
          id={`ppanel-${current.slug}`}
          aria-labelledby={`ptab-${current.slug}`}
          tabIndex={0}
        >
          <h2 className="pstrip__title">{current.title}</h2>
          <p className="pstrip__blurb">{current.blurb}</p>
        </div>
      </div>
    </section>
  )
}
