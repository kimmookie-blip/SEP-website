import { useEffect, useState } from 'react'
import './SocialProof.css'

// SEP-Shekinah-Homepage-Structure.md §02 — edit copy here.
// PLACEHOLDER PEOPLE: `name` and `role` are literal placeholders, not real
// participants. Fill them in — and add a `photo` per person — once names,
// parishes and permissions are confirmed (see the doc's "Supporting Proof").
// `program` is the badge at the head of each column, the equivalent of the
// company logo in the reference layout.
// One italic word, echoing the hero's emphasis device (Amiri renders a true
// italic on <em> with no extra CSS).
const HEADLINE = (
  <>
    Perjalanan iman yang <em>mengubah</em> kehidupan nyata.
  </>
)

const SUPPORTING_COPY =
  'Cerita dari mereka yang menjalani prosesnya sendiri — dari ragu di awal hingga menemukan cara menghidupi iman dalam keseharian.'

const TESTIMONIALS = [
  {
    id: 'sep',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'SEP',
    quote:
      'Dulu saya mengira evangelisasi hanya tugas Romo. Setelah mengikuti pembinaan, saya memahami bahwa saya dapat membawa kasih Tuhan melalui keluarga dan pekerjaan saya.',
  },
  {
    id: 'kep',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'KEP',
    quote:
      'Saya datang karena ingin mengenal Kristus lebih dalam. Yang saya temukan bukan hanya materi, tetapi juga komunitas yang mendampingi saya.',
  },
  {
    id: 'blks',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'BLKS',
    quote:
      'Awalnya saya takut karena belum memahami Kitab Suci. Ternyata prosesnya sangat bertahap dan mudah diikuti.',
  },
]

const INVITE_HEADLINE = 'Ingin merasakan pengalaman yang sama?'
const INVITE_COPY =
  'Cara termudah untuk memulai adalah hadir langsung. Lihat retret, seminar, dan pertemuan pengenalan terdekat dari kami.'
const INVITE_CTA_LABEL = 'Lihat Acara Terdekat'

const SLIDE_MS = 5000

/**
 * Section 02 — social proof, straight after the Hero. Columns divided by
 * hairlines rather than cards, so the quotes carry the section themselves,
 * on desktop. Below 768px the same three items become a one-at-a-time
 * sliding carousel with dot indicators — the CSS for both layouts is in
 * SocialProof.css; only the active-slide state and its interval live here.
 */
export default function SocialProof({ id }) {
  const [active, setActive] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length)
    }, SLIDE_MS)
    return () => clearInterval(timer)
  }, [reduceMotion])

  return (
    <section className="new-testimonials section section--white" id={id}>
      <div className="shell">
        <div className="new-testimonials__head">
          <p className="new-testimonials__headline">{HEADLINE}</p>
          <p className="new-testimonials__intro">{SUPPORTING_COPY}</p>
        </div>

        {/* .new-testimonials__viewport only clips/scrolls anything below
            768px — see SocialProof.css. Above that it's inert and the grid
            below renders as the plain three-column layout it always was. */}
        <div className="new-testimonials__viewport">
          <div
            className="new-testimonials__grid"
            style={{ '--slide-index': active }}
          >
            {TESTIMONIALS.map((item) => (
              <figure className="new-testimonials__item" key={item.id}>
                <div className="new-testimonials__person">
                  {/* grey placeholder block, the project's convention for
                      artwork that doesn't exist yet (--placeholder) */}
                  <span className="new-testimonials__avatar" aria-hidden="true" />

                  <span className="new-testimonials__identity">
                    <span className="new-testimonials__name">{item.name}</span>
                    <span className="new-testimonials__role">{item.role}</span>
                  </span>

                  <span className="new-testimonials__program">{item.program}</span>
                </div>

                <blockquote className="new-testimonials__quote">{item.quote}</blockquote>
              </figure>
            ))}
          </div>
        </div>

        {/* Dots — hidden above 768px alongside the sliding treatment they
            control (see SocialProof.css). Plain tablist pattern: each dot
            is a focusable button, the active one marked via aria-selected. */}
        <div className="new-testimonials__dots" role="tablist" aria-label="Pilih testimoni">
          {TESTIMONIALS.map((item, i) => (
            <button
              type="button"
              key={item.id}
              className={`new-testimonials__dot ${i === active ? 'is-active' : ''}`}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimoni ${i + 1} dari ${TESTIMONIALS.length}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="new-testimonials__invite">
          <p className="new-testimonials__invite-headline">{INVITE_HEADLINE}</p>
          <p className="new-testimonials__invite-copy">{INVITE_COPY}</p>
          <a href="#kegiatan" className="btn btn--amber">
            {INVITE_CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
