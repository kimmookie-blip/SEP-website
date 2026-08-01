import { useState } from 'react'
import romoSugiri from '../../assets/romo-sugiri.png'
import romoSubroto from '../../assets/romo-subroto.png'
import romoKoelman from '../../assets/romo-koelman.png'
import './Founders.css'

// SEP-Shekinah-Homepage-Structure.md §06 — edit copy here.
const KICKER = 'Pendiri dan Pembina Rohani'
const HEADLINE = 'Didampingi Romo dan pengajar terpilih sejak 1990.'

const NARRATIVE =
  'Sejak 1990, Shekinah mendampingi umat Katolik untuk mengenal Kristus secara pribadi dan menghidupi imannya dalam keseharian. Materi dan pengajaran dikoordinasikan langsung oleh Shekinah bersama para Romo pembina.'

// `years` is optional — it only renders when present, so entries without a
// confirmed tenure simply omit the line rather than showing invented dates.
// Sugiri's dates come from the approved card mockup; the other two need
// filling in once confirmed.
const PEOPLE = [
  { id: 'sugiri', role: 'Pendiri', name: 'Romo L. Sugiri SJ', years: '1988 – 1995', image: romoSugiri },
  { id: 'subroto', role: 'Romo Pembina', name: 'Romo Subroto', years: null, image: romoSubroto },
  { id: 'koelman', role: 'Romo Pembina', name: 'Romo Koelman', years: null, image: romoKoelman },
]

/**
 * Section 06 — who stands behind the teaching. One card at a time rather
 * than a three-up grid, which keeps the section short; the copy sits left
 * and the carousel right.
 */
export default function Founders({ id }) {
  const [index, setIndex] = useState(0)

  const go = (next) => setIndex((next + PEOPLE.length) % PEOPLE.length)
  const person = PEOPLE[index]

  return (
    <section className="new-founders section section--cream" id={id}>
      <div className="shell new-founders__inner">
        <div className="new-founders__intro">
          <p className="kicker">{KICKER}</p>
          <p className="headline new-founders__headline">{HEADLINE}</p>
          <p className="body-text new-founders__narrative">{NARRATIVE}</p>

          <div className="new-founders__controls">
            <button
              type="button"
              className="new-founders__arrow"
              onClick={() => go(index - 1)}
              aria-label="Romo sebelumnya"
            >
              ‹
            </button>
            <button
              type="button"
              className="new-founders__arrow"
              onClick={() => go(index + 1)}
              aria-label="Romo berikutnya"
            >
              ›
            </button>

            <div className="new-founders__dots">
              {PEOPLE.map((p, i) => (
                <button
                  type="button"
                  key={p.id}
                  className={`new-founders__dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={p.name}
                  aria-current={i === index}
                />
              ))}
            </div>
          </div>
        </div>

        <figure
          className="new-founders__card"
          aria-live="polite"
          aria-roledescription="carousel"
        >
          <div className="new-founders__photo">
            {/* every slide stays mounted and crossfades, so switching never
                flashes a gap while the next portrait decodes */}
            {PEOPLE.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                className={i === index ? 'is-active' : ''}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <figcaption className="new-founders__caption">
            <span className="new-founders__role">{person.role}</span>
            <span className="new-founders__name">{person.name}</span>
            {person.years && <span className="new-founders__years">{person.years}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
