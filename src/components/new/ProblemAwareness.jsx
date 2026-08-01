import './ProblemAwareness.css'

// struktur-homepage-sep-shekinah.md §3 — edit copy here.
const HEADLINE = 'Ingin hidup lebih dekat dengan Tuhan, tetapi tidak tahu harus mulai dari mana?'

const STATEMENTS = [
  'Iman terasa berhenti sebagai rutinitas hari Minggu.',
  'Ingin mengenal Kristus, tetapi bingung bagaimana memulainya.',
  'Merasa belum cukup memahami Kitab Suci.',
  'Mengira evangelisasi hanya tugas Romo atau orang yang pandai berbicara.',
  'Takut komunitas rohani terasa terlalu asing atau tidak cocok.',
]

const CLOSING_COPY =
  'Anda tidak harus memiliki semua jawabannya sebelum memulai. Perjalanan iman dapat dimulai dari satu langkah kecil.'

/** Section 3 — names the hesitation a visitor is likely already feeling. */
export default function ProblemAwareness({ id }) {
  return (
    <section className="new-problem section section--white" id={id}>
      <div className="shell">
        <p className="headline center new-problem__headline">{HEADLINE}</p>

        <ul className="new-problem__list">
          {STATEMENTS.map((statement) => (
            <li className="new-problem__item" key={statement}>
              {statement}
            </li>
          ))}
        </ul>

        <p className="subhead center new-problem__closing">{CLOSING_COPY}</p>
      </div>
    </section>
  )
}
