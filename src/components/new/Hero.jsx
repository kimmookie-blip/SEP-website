import { useEffect, useState } from 'react'
import heroImage from '../../assets/hero-new.png'
import './Hero.css'

// SEP-Shekinah-Homepage-Structure.md §01, laid out to match the approved
// hero mockup exactly — edit copy here.
const KICKER = 'Pelayanan Katolik Shekinah'

// `before`/`after` render as plain text around the italic `emphasis` word.
// `break` inserts a line break right after the emphasis word. Each headline
// is kept short enough to wrap to exactly two lines, as in the mockup.
const ROTATING_HEADLINES = [
  { id: 'mengenal', before: 'Ingin ', emphasis: 'Mengenal', after: 'Kristus Lebih Dalam?', break: true },
  { id: 'bertumbuh', before: 'Ingin ', emphasis: 'Bertumbuh', after: 'dalam Iman?', break: true },
  {
    id: 'kabar-baik',
    before: 'Ingin Menjadi ',
    emphasis: 'Pembawa',
    after: 'Kabar Baik?',
    break: true,
  },
  { id: 'berdampak', before: 'Ingin ', emphasis: 'Berdampak', after: 'bagi Dunia?', break: true },
]

const SUPPORTING_COPY =
  'Mulailah perjalanan iman bersama komunitas Katolik yang mendampingi setiap langkahmu untuk mengenal, bertumbuh, dan menghidupi ajaran Kristus.'

const PRIMARY_CTA = { label: 'masuk anggota', href: '#masuk' }

// Trust bar — the newer spec folds the old standalone "Catholic Legitimacy"
// section up into the Hero, so these are the page's primary trust signals.
const TRUST_BAR = [
  { value: '1990', label: 'Tahun Berdiri' },
  { value: '59', label: 'Paroki Bekerjasama' },
  { value: '100%', label: 'Berakar pada Gereja Katolik' },
]

const ROTATE_MS = 5000

// How far the photo drifts per pixel scrolled, and the cap on that drift.
// The image is oversized by 18% (see Hero.css) so it can never expose an edge.
const PARALLAX_FACTOR = 0.25
const PARALLAX_MAX_PX = 120

/**
 * `fade` (0 → 1) is driven by scroll in LandingNew: the content dims as the
 * page body slides up over the pinned photo — same scroll-over reveal the
 * old design uses (see components/Hero.jsx and pages/Home.css). `scrollY`
 * from the same listener also drifts the photo for a parallax feel.
 */
export default function Hero({ fade = 0, scrollY = 0 }) {
  const [headlineIndex, setHeadlineIndex] = useState(0)
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

    const id = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % ROTATING_HEADLINES.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  const parallaxY = reduceMotion
    ? 0
    : Math.min(scrollY * PARALLAX_FACTOR, PARALLAX_MAX_PX)

  return (
    <section className="new-hero" id="top" aria-label="Pembuka">
      <div className="new-hero__media" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="new-hero__image"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        />
        <div className="new-hero__overlay" />
      </div>

      <div className="new-hero__inner" style={{ opacity: 1 - fade }}>
        <p className="new-hero__kicker">{KICKER}</p>

        <h1 className="new-hero__title" aria-live="polite">
          {ROTATING_HEADLINES.map((headline, i) => (
            <span
              key={headline.id}
              className={`new-hero__headline ${i === headlineIndex ? 'is-active' : ''}`}
              aria-hidden={i !== headlineIndex}
            >
              {headline.before}
              <em>{headline.emphasis}</em>
              {headline.break ? <br /> : null}
              {headline.after}
            </span>
          ))}
        </h1>

        <p className="new-hero__sub">{SUPPORTING_COPY}</p>

        <a href={PRIMARY_CTA.href} className="new-hero__cta">
          {PRIMARY_CTA.label}
        </a>

        <hr className="new-hero__rule" />

        <div className="new-hero__stats">
          {TRUST_BAR.map((stat) => (
            <div className="new-hero__stat" key={stat.label}>
              <span className="new-hero__stat-value">{stat.value}</span>
              <span className="new-hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
