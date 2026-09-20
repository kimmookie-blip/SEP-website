import './CatholicLegitimacy.css'

// struktur-homepage-sep-shekinah.md §2 — edit copy here.
// Layout (dark horizontal trust band) borrows from demo.divi-pixel.com/church/'s
// "SERVANT / GUIDANCE / PRAISE / WORSHIP / SCHOLAR" strip.
const MAIN_STATEMENT = 'Lembaga pembinaan iman yang berakar pada Gereja Katolik.'

const SUPPORTING_STATEMENT = (
  <>
    Di bawah naungan <strong>BPK PKK Keuskupan Agung Jakarta</strong>.
  </>
)

const TRUST_INDICATORS = [
  { value: 'Sejak 1990', label: 'Mendampingi perjalanan iman umat Katolik.' },
  { value: '59 Paroki', label: 'Telah bekerja sama dalam penyelenggaraan pembinaan.' },
  {
    value: 'Tersedia Pembinaan Dasar dan Pembinaan Lanjutan',
    label: 'Didampingi Romo dan Pengajar Terdidik.',
  },
  {
    value: 'Didampingi Romo dan Pengajar Terpilih',
    label: 'Materi dan pengajar dikoordinasikan oleh Shekinah.',
  },
]

/**
 * Section 2 — main social proof. Answers "is this really Catholic / official
 * / trustworthy" before anything else on the page asks for commitment.
 */
export default function CatholicLegitimacy({ id }) {
  return (
    <section className="new-legitimacy section" id={id}>
      <div className="shell">
        <div className="new-legitimacy__intro center">
          <p className="new-legitimacy__statement">{MAIN_STATEMENT}</p>
          <p className="new-legitimacy__supporting">{SUPPORTING_STATEMENT}</p>
        </div>

        <div className="new-legitimacy__band">
          {TRUST_INDICATORS.map((item) => (
            <div className="new-legitimacy__item" key={item.value}>
              <span className="new-legitimacy__value">{item.value}</span>
              <span className="new-legitimacy__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
