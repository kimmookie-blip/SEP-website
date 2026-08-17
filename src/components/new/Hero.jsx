import { useEffect, useState } from 'react'
import heroImage from '../../assets/hero-new.png'
import heroImage2 from '../../assets/hero-new-2.png'
import heroImage3 from '../../assets/hero-new-3.png'
import heroImage4 from '../../assets/hero-new-4.png'
import './Hero.css'

// SEP-Shekinah-Homepage-Structure.md §01, laid out to match the approved
// hero mockup exactly — edit copy here.
const KICKER = 'Apakah Anda...'

// `before`/`after` render as plain text around the italic `emphasis` word.
// `break` inserts a line break right after the emphasis word. Each headline
// is kept short enough to wrap to exactly two lines, as in the mockup.
// `image` crossfades with it — Asset/"Hero Section New[.png/2/3/4].png", in
// that numeric order.
const ROTATING_HEADLINES = [
  {
    id: 'mengenal',
    before: 'Ingin ',
    emphasis: 'Mengenal',
    after: 'Kristus Lebih Dalam?',
    break: true,
    image: heroImage,
  },
  {
    id: 'bertumbuh',
    before: 'Ingin ',
    emphasis: 'Bertumbuh',
    after: 'dalam Iman?',
    break: true,
    image: heroImage2,
  },
  {
    id: 'kabar-baik',
    before: 'Ingin Menjadi ',
    emphasis: 'Pembawa',
    after: 'Kabar Baik?',
    break: true,
    image: heroImage3,
  },
  {
    id: 'berdampak',
    before: 'Ingin ',
    emphasis: 'Berdampak',
    after: 'bagi Dunia?',
    break: true,
    image: heroImage4,
  },
]

const SUPPORTING_COPY =
  'Mulailah perjalanan iman bersama komunitas Katolik yang mendampingi setiap langkahmu untuk mengenal, bertumbuh, dan menghidupi ajaran Kristus.'

const PRIMARY_CTA = { label: 'Temukan Kegiatanmu', href: '#program' }

const SCROLL_LABEL = 'Scroll ke bawah'
// First section rendered after the Hero in LandingNew.jsx — scrolling here
// is the natural "next" target, same idea as the old design's scroll button
// (see components/Hero.jsx, which targets '#mengapa').
const SCROLL_TARGET_ID = 'pengumuman'

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

  const scrollToNext = () => {
    document.getElementById(SCROLL_TARGET_ID)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="new-hero" id="top" aria-label="Pembuka">
      <div className="new-hero__media" aria-hidden="true">
        {ROTATING_HEADLINES.map((headline, i) => (
          <img
            key={headline.id}
            src={headline.image}
            alt=""
            className={`new-hero__image ${i === headlineIndex ? 'is-active' : ''}`}
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          />
        ))}
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

        {/* Taken out of the kicker→stats flow with `position: absolute` (see
            Hero.css) and pinned to .new-hero__inner's own padding box, so it
            sits at the bottom-left corner regardless of how tall that stack
            gets — and, being nested here, it inherits the same left padding
            and fade-with-scroll opacity as the rest of the hero for free.
            Only reads correctly while the hero is viewport-pinned, so it's
            hidden on mobile alongside the rest of the pinned treatment (see
            the max-width: 768px block in Hero.css). */}
        <button type="button" className="new-hero__scroll" onClick={scrollToNext}>
          {/* classic mouse-scroll glyph: capsule outline, dot slides down
              inside it and fades before looping back to the top */}
          <span className="new-hero__scroll-icon" aria-hidden="true">
            <span className="new-hero__scroll-dot" />
          </span>
          <span className="new-hero__scroll-label">{SCROLL_LABEL}</span>
        </button>
      </div>
    </section>
  )
}
