import { useState } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../../data/programs'
import './ProgramOverview.css'

// SEP-Shekinah-Homepage-Structure.md §05 — edit copy here.
// The programmes come from data/programs.js, shared with /program and
// /program/:slug, so every `slug` the quiz can land on resolves to a real page.
// Per version_beta.md §3 requirement 1 this section shows only the short blurb;
// durations, session outlines, and parish lists stay on the detail page.
const PROGRAMS = programs

const HEADLINE = 'Temukan program sesuai tahap perjalanan imanmu.'
const CTA_LABEL = 'Lihat Semua Program'

// Two-step finder: Pembinaan Intensif branches by venue (Paroki vs Shekinah),
// then by whether KEP/SEP is already done. An option either resolves straight
// to a `result`, or moves on to `next`. Everything runs in local state — no backend.
const QUIZ = {
  start: {
    step: 1,
    question: 'Pembinaan Intensif ingin diikuti di mana?',
    options: [
      { id: 'paroki', label: 'Di Paroki', next: 'sudahParoki' },
      { id: 'shekinah', label: 'Di Shekinah', next: 'sudahShekinah' },
    ],
  },
  sudahParoki: {
    step: 2,
    question: 'Sudah pernah ikut KEP / SEP?',
    options: [
      { id: 'ya', label: 'Sudah', result: 'blkep' },
      { id: 'belum', label: 'Belum', result: 'kep' },
    ],
  },
  sudahShekinah: {
    step: 2,
    question: 'Sudah pernah ikut SEP / KEP?',
    options: [
      { id: 'ya', label: 'Sudah', result: 'blpi' },
      { id: 'belum', label: 'Belum', result: 'sep' },
    ],
  },
}

const TOTAL_STEPS = 2

/** Section 05 — programs, introduced right after the testimonials. */
export default function ProgramOverview({ id }) {
  // `node` is the current question key, or null once an answer resolved.
  const [node, setNode] = useState('start')
  const [result, setResult] = useState(null)
  // The other programs stay collapsed until asked for: showing all five up
  // front is what made this section eat the page.
  const [showOthers, setShowOthers] = useState(false)

  const question = node ? QUIZ[node] : null

  const choose = (option) => {
    if (option.result) {
      setResult(option.result)
      setNode(null)
      setShowOthers(false)
      return
    }
    setNode(option.next)
  }

  const reset = () => {
    setNode('start')
    setResult(null)
    setShowOthers(false)
  }

  const matched = result ? PROGRAMS.find((p) => p.slug === result) : null
  const others = result ? PROGRAMS.filter((p) => p.slug !== result) : []

  return (
    <section className="new-programs section section--blue" id={id}>
      <div className="shell">
        <p className="new-programs__headline center">{HEADLINE}</p>

        <div className="new-programs__panel">
          {question ? (
            <>
              <p className="new-programs__quiz-step">
                Langkah {question.step} dari {TOTAL_STEPS}
              </p>
              <p className="new-programs__quiz-question">{question.question}</p>

              <div
                className={`new-programs__quiz-options new-programs__quiz-options--${question.options.length}`}
              >
                {question.options.map((option) => (
                  <button
                    type="button"
                    className="new-programs__quiz-option"
                    key={option.id}
                    onClick={() => choose(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="new-programs__quiz-step">Rekomendasi untukmu</p>
              <p className="new-programs__result">
                {matched.stageBefore} <em>{matched.stageEmphasis}</em>
                {matched.name && <span> — {matched.name}</span>}
              </p>
              <p className="new-programs__result-blurb">{matched.blurb}</p>

              <div className="new-programs__result-actions">
                <Link to={`/program/${matched.slug}`} className="btn btn--amber new-programs__result-cta">
                  Lihat Detail
                </Link>
                <button type="button" className="new-programs__link-btn" onClick={reset}>
                  Ulangi
                </button>
              </div>

              <div className="new-programs__others">
                <button
                  type="button"
                  className="new-programs__link-btn"
                  aria-expanded={showOthers}
                  onClick={() => setShowOthers((v) => !v)}
                >
                  {showOthers ? 'Sembunyikan program lain' : 'Lihat program lain'}
                </button>

                {showOthers && (
                  <div className="new-programs__list">
                    {others.map((program) => (
                      <article className="new-programs__row" key={program.slug}>
                        <span className="new-programs__title">
                          {program.stageBefore} <em>{program.stageEmphasis}</em>
                          {program.name && <small> — {program.name}</small>}
                        </span>
                        <span className="new-programs__blurb">{program.blurb}</span>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* escape hatch for anyone who'd rather not take the quiz */}
        {question && (
          <div className="new-programs__cta-wrap center">
            <Link to="/program" className="btn btn--ghost-cream">
              {CTA_LABEL}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
