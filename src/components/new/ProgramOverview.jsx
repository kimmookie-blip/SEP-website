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

// Two-step finder: Pembinaan ingin dilakukan dimana? (Paroki vs Shekinah),
// then whether KEP/SEP is already done. An option either resolves straight
// to `results` (one slug, or several when there's more than one next step —
// see sudahShekinah's "Sudah" branch), or moves on to `next`. Everything
// runs in local state — no backend. Mirrors the flow diagram: both venues
// ask the same second question, then fan back out into different results.
const QUIZ = {
  start: {
    step: 1,
    question: 'Pembinaan ingin dilakukan dimana?',
    options: [
      { id: 'paroki', label: 'Di Paroki', next: 'sudahParoki' },
      { id: 'shekinah', label: 'Di Shekinah', next: 'sudahShekinah' },
    ],
  },
  sudahParoki: {
    step: 2,
    question: 'Sudah pernah ikut KEP / SEP?',
    options: [
      { id: 'ya', label: 'Sudah', results: ['blkep'] },
      { id: 'belum', label: 'Belum', results: ['kep'] },
    ],
  },
  sudahShekinah: {
    step: 2,
    question: 'Sudah pernah ikut KEP / SEP?',
    options: [
      // "Sudah" fans out to every Bina Lanjut path Shekinah offers, not just
      // BLPI — BLKS and other ongoing activities (retret/seminar) are equally
      // valid next steps for an alumnus, so all three are offered together.
      { id: 'ya', label: 'Sudah', results: ['blpi', 'blks', 'retret'] },
      { id: 'belum', label: 'Belum', results: ['sep'] },
    ],
  },
}

const TOTAL_STEPS = 2

/** Section 05 — programs, introduced right after the testimonials. */
export default function ProgramOverview({ id }) {
  // `node` is the current question key, or null once an answer resolved.
  const [node, setNode] = useState('start')
  // Always an array of slugs — one entry for a single-program result,
  // several when a branch fans out to more than one next step.
  const [result, setResult] = useState(null)
  // The other programs stay collapsed until asked for: showing all five up
  // front is what made this section eat the page.
  const [showOthers, setShowOthers] = useState(false)

  const question = node ? QUIZ[node] : null

  const choose = (option) => {
    if (option.results) {
      setResult(option.results)
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

  const matchedList = result
    ? result.map((slug) => PROGRAMS.find((p) => p.slug === slug)).filter(Boolean)
    : []
  const others = result ? PROGRAMS.filter((p) => !result.includes(p.slug)) : []

  // KEP OMK isn't a quiz branch (the quiz only asks venue + prior KEP/SEP),
  // and it isn't a page of its own either — it's a variant listed on /program/kep.
  // Still worth calling out here so it's visible the moment a result appears,
  // rather than buried behind "Lihat program lain".
  const kep = PROGRAMS.find((p) => p.slug === 'kep')
  const kepOmkVariant = kep?.variants?.find((v) => v.name === 'KEP OMK')

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

              {matchedList.length === 1 ? (
                <>
                  <p className="new-programs__result">
                    {matchedList[0].stageBefore} <em>{matchedList[0].stageEmphasis}</em>
                    {matchedList[0].name && <span> — {matchedList[0].name}</span>}
                  </p>
                  <p className="new-programs__result-blurb">{matchedList[0].blurb}</p>

                  <div className="new-programs__result-actions">
                    <Link
                      to={`/program/${matchedList[0].slug}`}
                      className="btn btn--amber new-programs__result-cta"
                    >
                      Lihat Detail
                    </Link>
                    <button type="button" className="new-programs__link-btn" onClick={reset}>
                      Ulangi
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* fanned-out branch (e.g. Shekinah alumni → BLPI/BLKS/kegiatan
                      lain) — several equally valid next steps, so list them
                      instead of picking one for the user */}
                  <div className="new-programs__list new-programs__list--result">
                    {matchedList.map((program) => (
                      <article className="new-programs__row" key={program.slug}>
                        <span className="new-programs__title">
                          {program.stageBefore} <em>{program.stageEmphasis}</em>
                          {program.name && <small> — {program.name}</small>}
                        </span>
                        <span className="new-programs__blurb">{program.blurb}</span>
                        <Link to={`/program/${program.slug}`} className="new-programs__row-cta">
                          Lihat Detail
                        </Link>
                      </article>
                    ))}
                  </div>

                  <div className="new-programs__result-actions">
                    <button type="button" className="new-programs__link-btn" onClick={reset}>
                      Ulangi
                    </button>
                  </div>
                </>
              )}

              {kepOmkVariant && (
                <p className="new-programs__omk-note">
                  Khusus Orang Muda Katolik, tersedia varian{' '}
                  <Link to={`/program/${kep.slug}`}>{kepOmkVariant.name}</Link>.
                </p>
              )}

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
