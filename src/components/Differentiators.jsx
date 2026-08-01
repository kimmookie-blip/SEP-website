import './Differentiators.css'

/** Section 4 — Pembongkar Keraguan (Objection Killers). */
const CARDS = [
  {
    title: 'Bukan Jadi Pengkhotbah Mimbar',
    body: 'Fokus pada kesaksian hidup pribadi dan aplikasi praktis di dunia kerja atau keluarga.',
  },
  {
    title: 'Tanpa Ujian Kaku & Jadwal Bebas',
    body: 'Pilihan kelas fleksibel (Rabu Malam atau Sabtu Pagi) yang dirancang ramah untuk profesional sibuk.',
  },
  {
    title: 'Ruang Aman Bebas Kompetisi',
    body: 'Saling menguatkan dalam kelompok kecil (sharing Kitab Suci) tanpa tekanan akademis.',
  },
]

export default function Differentiators() {
  return (
    <section className="section diff" id="kegiatan">
      <div className="shell">
        <h2 className="headline center diff__headline">
          Mengapa SEP Shekinah Berbeda?
        </h2>

        <div className="diff__grid">
          {CARDS.map((card, i) => (
            <article className="diff__card" key={card.title}>
              {/* numeral paired with a short rule — the editorial tic that
                  keeps this from reading as a startup feature card */}
              <span className="diff__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="diff__title">{card.title}</h3>
              <p className="body-text diff__body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
