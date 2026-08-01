import './JourneyOfGrowth.css'

// SEP-Shekinah-Homepage-Structure.md §03 — edit copy here.
const HEADLINE = 'Setiap orang memiliki titik awal yang berbeda.'

const STEPS = [
  { title: 'Mengenal Kristus', body: 'Membangun relasi pribadi dengan Kristus, dari mana pun titik awalmu.' },
  { title: 'Bertumbuh dalam Iman', body: 'Mendalami iman, Kitab Suci, dan kehidupan rohani secara bertahap.' },
  {
    title: 'Berjalan Bersama Komunitas',
    body: 'Belajar, berbagi, dan bertumbuh bersama sahabat seiman yang saling mendukung.',
  },
  {
    title: 'Menjadi Pembawa Kabar Baik',
    body: 'Menghidupi dan membagikan kabar baik dalam keluarga, pekerjaan, dan masyarakat.',
  },
]

const CTA_LABEL = 'Temukan Langkah yang Sesuai untukmu'

/** Section 03 — the growth path, ordered so it reads top-to-bottom on mobile too. */
export default function JourneyOfGrowth({ id }) {
  return (
    <section className="new-journey section section--white" id={id}>
      <div className="shell">
        <p className="headline center new-journey__headline">{HEADLINE}</p>

        <ol className="new-journey__steps">
          {STEPS.map((step, i) => (
            <li className="new-journey__step" key={step.title}>
              <span className="new-journey__number">{i + 1}</span>
              <div className="new-journey__step-content">
                <p className="new-journey__step-title">{step.title}</p>
                <p className="new-journey__step-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="new-journey__cta-wrap center">
          <a href="#program" className="btn btn--outline">
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
