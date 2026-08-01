import './HowShekinahHelps.css'

// struktur-homepage-sep-shekinah.md §5 — edit copy here.
// Layout (plain borderless columns) borrows from demo.divi-pixel.com/church/'s
// "WELLNESS PROGRAMS / WORSHIP SERVICES / ..." row.
const HEADLINE = 'Shekinah mendampingi perjalanan imanmu, langkah demi langkah.'

const PILLARS = [
  { title: 'Mengenal', body: 'Membantu peserta membangun relasi pribadi dengan Kristus.' },
  { title: 'Bertumbuh', body: 'Mendalami iman, Kitab Suci, dan kehidupan rohani secara bertahap.' },
  {
    title: 'Berjalan Bersama',
    body: 'Bertumbuh bersama sahabat seiman dalam komunitas yang saling mendukung.',
  },
  {
    title: 'Diutus',
    body: 'Belajar menghidupi dan membagikan kabar baik melalui kehidupan sehari-hari.',
  },
]

const SUPPORTING_COPY =
  'Program Shekinah tidak hanya memberikan pengetahuan, tetapi mengajak peserta mengalami perubahan nyata dalam cara menjalani iman.'

/** Section 5 — the four-pillar framework referenced again in the Journey section. */
export default function HowShekinahHelps({ id }) {
  return (
    <section className="new-helps section section--white" id={id}>
      <div className="shell">
        <div className="new-helps__intro center">
          <p className="headline">{HEADLINE}</p>
          <p className="subhead">{SUPPORTING_COPY}</p>
        </div>

        <div className="new-helps__grid">
          {PILLARS.map((pillar) => (
            <div className="new-helps__col" key={pillar.title}>
              <p className="new-helps__title">{pillar.title}</p>
              <p className="new-helps__body">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
