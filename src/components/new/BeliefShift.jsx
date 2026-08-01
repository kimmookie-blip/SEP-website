import './BeliefShift.css'

// struktur-homepage-sep-shekinah.md §4 — edit copy here.
const HEADLINE = 'Menjadi pembawa kabar baik tidak selalu dimulai dari mimbar.'

const NOT_LIST = {
  title: 'Evangelisasi Bukan',
  items: [
    'Memaksa orang menerima keyakinan kita.',
    'Berdebat tentang agama.',
    'Harus menjadi pengkhotbah.',
    'Hanya menjadi tugas Romo, suster, atau pelayan Gereja.',
  ],
}

const CAN_LIST = {
  title: 'Evangelisasi Dapat Dimulai dari',
  items: [
    'Menghidupi kasih Kristus dalam keluarga.',
    'Menjadi pribadi yang membawa harapan.',
    'Mendengarkan dan hadir bagi sesama.',
    'Membagikan iman melalui tindakan sehari-hari.',
    'Menjadi saksi Kristus dalam pekerjaan dan relasi.',
  ],
}

const KEY_MESSAGE =
  'Sebelum mewartakan Kristus, kita terlebih dahulu diajak untuk mengenal, mengalami, dan bertumbuh bersama-Nya.'

/** Section 4 — reframes "evangelisasi" before it becomes an obstacle. */
export default function BeliefShift({ id }) {
  return (
    <section className="new-belief section section--cream" id={id}>
      <div className="shell">
        <p className="headline center new-belief__headline">{HEADLINE}</p>

        <div className="new-belief__columns">
          <div className="new-belief__column new-belief__column--not">
            <p className="new-belief__column-title">{NOT_LIST.title}</p>
            <ul className="new-belief__list">
              {NOT_LIST.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="new-belief__column new-belief__column--can">
            <p className="new-belief__column-title">{CAN_LIST.title}</p>
            <ul className="new-belief__list">
              {CAN_LIST.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="new-belief__key-message">{KEY_MESSAGE}</p>
      </div>
    </section>
  )
}
