import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProgramOverview.css'

// SEP-Shekinah-Homepage-Structure.md §05 — edit copy here.
// `slug` maps to /program/:slug (src/pages/ProgramPage.jsx via src/data/programs.js).
// Only 'blpi' and 'blks' resolve today; the rest render the page's built-in
// "Program tidak ditemukan" stub until data/programs.js grows matching entries.
const PROGRAMS = [
  {
    slug: 'kep',
    stageBefore: 'Pembinaan',
    stageEmphasis: 'Dasar',
    name: 'KEP',
    blurb:
      'Pembinaan dasar yang diselenggarakan bersama paroki untuk membantu umat mengenal panggilannya sebagai murid Kristus.',
  },
  {
    slug: 'sep',
    stageBefore: 'Pembinaan',
    stageEmphasis: 'Intensif',
    name: 'SEP',
    blurb: 'Program pembinaan yang lebih lengkap dan mendalam di pusat Shekinah.',
  },
  {
    slug: 'blpi',
    stageBefore: 'Pendalaman',
    stageEmphasis: 'Iman',
    name: 'BLPI',
    blurb: 'Program lanjutan bagi alumni yang ingin terus bertumbuh.',
  },
  {
    slug: 'blks',
    stageBefore: 'Pendalaman',
    stageEmphasis: 'Kitab Suci',
    name: 'BLKS',
    blurb: 'Pembelajaran Kitab Suci yang dibawakan oleh pengajar dari Shekinah.',
  },
  {
    slug: 'retret',
    stageBefore: 'Retret dan',
    stageEmphasis: 'Kegiatan',
    name: null,
    blurb: 'Retret keluarga, retret penyembuhan, seminar, dan kegiatan terbuka lainnya.',
  },
]

const HEADLINE = 'Temukan program sesuai tahap perjalanan imanmu.'
const CTA_LABEL = 'Lihat Semua Program'

// Two-step finder, mapped from the doc's "Kebutuhan → Program" table.
// An option either resolves straight to a `result`, or narrows to `candidates`
// and moves on to `next`. Everything runs in local state — no backend.
const QUIZ = {
  start: {
    step: 1,
    question: 'Di mana posisimu saat ini?',
    options: [
      { id: 'baru', label: 'Baru ingin mulai', result: 'kep' },
      {
        id: 'pernah',
        label: 'Sudah pernah ikut pembinaan',
        next: 'dalami',
        candidates: ['sep', 'blpi', 'blks', 'retret'],
      },
    ],
  },
  dalami: {
    step: 2,
    question: 'Apa yang ingin kamu dalami?',
    options: [
      { id: 'lengkap', label: 'Pembinaan yang lebih lengkap dan mendalam', result: 'sep' },
      { id: 'pemuridan', label: 'Pemuridan dan karunia Roh Kudus', result: 'blpi' },
      { id: 'kitab', label: 'Pendalaman Kitab Suci', result: 'blks' },
      { id: 'retret', label: 'Pengalaman retret', result: 'retret' },
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
            {/* placeholder — no program index route exists yet, only /program/:slug */}
            <a href="#semua-program" className="btn btn--ghost-cream">
              {CTA_LABEL}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
