import './AudienceSegments.css'

// SEP-Shekinah-Homepage-Structure.md §04 — edit copy here.
const HEADLINE = 'Apa pun tahap hidupmu, perjalanan iman tetap dapat dimulai.'

const SEGMENTS = [
  {
    icon: '🙏',
    title: 'Baru Memulai',
    body: 'Bagi siapa pun yang merasa belum memahami iman dengan baik dan ingin memulainya dari dasar.',
  },
  {
    icon: '🎓',
    title: 'Orang Muda Katolik',
    body: 'Bagi mahasiswa dan pekerja muda yang ingin bertumbuh dengan pendekatan yang relevan terhadap kehidupan mereka.',
  },
  {
    icon: '💼',
    title: 'Profesional',
    body: 'Bagi mereka yang ingin mengintegrasikan iman dalam pekerjaan, kepemimpinan, dan keputusan sehari-hari.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Keluarga',
    body: 'Bagi umat yang ingin memperdalam iman dan membangun kehidupan keluarga yang berpusat pada Kristus.',
  },
]

const CTA_LABEL = 'Temukan Programmu'

/** Section 04 — lets each visitor self-identify with a stage of life. */
export default function AudienceSegments({ id }) {
  return (
    <section className="new-segments section section--cream" id={id}>
      <div className="shell">
        <p className="headline center new-segments__headline">{HEADLINE}</p>

        <div className="new-segments__grid">
          {SEGMENTS.map((segment) => (
            <div className="new-segments__card" key={segment.title}>
              <span className="new-segments__icon" aria-hidden="true">
                {segment.icon}
              </span>
              <p className="new-segments__title">{segment.title}</p>
              <p className="new-segments__body">{segment.body}</p>
            </div>
          ))}
        </div>

        <div className="new-segments__cta-wrap center">
          <a href="#program" className="btn btn--outline">
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
