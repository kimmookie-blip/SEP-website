import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import CatholicLegitimacy from '../../components/new/CatholicLegitimacy'
import SejarahSep from '../../components/new/SejarahSep'
import HowShekinahHelps from '../../components/new/HowShekinahHelps'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { romoPembina } from '../../data/pengajar'
import missionPhoto from '../../assets/yang-kami-kerjakan.png'
import './Page.css'
import './TentangKami.css'

// Edit copy here. Two of the sections below are existing components that
// carry their own copy: CatholicLegitimacy, HowShekinahHelps.
const HEAD = {
  kicker: 'Tentang Kami',
  title: 'Mendampingi perjalanan iman umat Katolik sejak 1988.',
  subhead:
    'Shekinah adalah lembaga pembinaan iman di bawah naungan BPK PKK Keuskupan Agung Jakarta. Kami menyiapkan jalur pembinaan bertahap bersama paroki, dari perkenalan pertama dengan Kristus sampai pendampingan yang berkelanjutan.',
}

const VISI_MISI = {
  kicker: 'Visi & Misi',
  visi:
    'Mengambil bagian dalam tugas dan panggilan Gereja untuk mengembangkan dan menggiatkan kerasulan awam, dengan orientasi pada penginjilan, pengudusan, dan pembaruan Tata Dunia.',
  misi: [
    'Menyediakan kursus-kursus pembinaan kerasulan awam, guna memperdalam wawasan dan semangat umat sebagai pembawa Kabar Baik bagi diri sendiri dan bagi sesama.',
    'Membantu peserta kursus dan umat yang dilayani untuk mengalami pendalaman hidup doa, Sabda Tuhan, sakramen-sakramen, dan kesaksian hidup Kristiani yang otentik, sehingga dapat turut serta menghidupi persekutuan umat beriman dan pelayanan-pelayanan dalam kuasa Roh Kudus.',
  ],
}

const MISSION = {
  kicker: 'Yang Kami Kerjakan',
  headline: 'Pembinaan yang dijalani, bukan sekadar diikuti.',
  paragraphs: [
    'Sejak 1988, Shekinah mendampingi umat Katolik untuk mengenal Kristus secara pribadi dan menghidupi imannya dalam keseharian. Materi dan pengajaran diberikan berdasarkan kurikulum yang telah teruji dan bermitra dengan para Romo paroki untuk materi Ajaran Gereja.',
    'Pembinaan peserta berjalan dalam kelompok kecil dengan panitia pendamping kelompok, karena perubahan yang kami harapkan bukan bertambahnya pengetahuan, melainkan kebiasaan iman yang bertahan setelah rangkaian pertemuan selesai.',
    'Penyelenggaraan dilakukan bersama paroki mitra, mengikuti kebutuhan dan kalender masing-masing paroki.',
  ],
}

// Moved here from /pengajar — the Romo pendiri have all passed away, so this
// is institutional legacy/trust, closer in spirit to the timeline above than
// to /pengajar's active teaching team.
const ROMO_NOTE =
  'Ketiganya telah wafat. Bagian ini bukan tim pengajar aktif, melainkan warisan yang terus menjadi fondasi setiap program dan pendampingan Shekinah hingga hari ini.'

// Single source of truth for the founding year — the timeline's first entry
// and the "N tahun" headline below both derive from this instead of
// repeating the literal number.
const FOUNDING_YEAR = 1988

// Contoh isi — ganti tahun dan keterangannya dengan riwayat yang terverifikasi.
const TIMELINE = [
  { year: String(FOUNDING_YEAR), text: 'Shekinah berdiri dan mulai mendampingi pembinaan iman di Jakarta.' },
  { year: '1990', text: 'Kursus Evangelisasi Pribadi mulai diselenggarakan bersama paroki.' },
  { year: '2010', text: 'Jalur bina lanjut dibuka: pendalaman iman dan kelas Kitab Suci.' },
  { year: '2026', text: 'Pembinaan telah berjalan bersama 59 paroki mitra.' },
]

// Spells out 1-99 in Indonesian so the timeline headline reads naturally
// ("Tiga puluh delapan tahun") instead of showing a raw digit.
function angkaKeKata(n) {
  const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
  if (n < 10) return satuan[n]
  if (n < 20) return n === 10 ? 'sepuluh' : n === 11 ? 'sebelas' : `${satuan[n - 10]} belas`
  const puluhan = Math.floor(n / 10)
  const sisa = n % 10
  return sisa === 0 ? `${satuan[puluhan]} puluh` : `${satuan[puluhan]} puluh ${satuan[sisa]}`
}

// Recomputed on every render, so this stays correct year over year instead
// of needing a manual edit each January.
const yearsSinceFounding = angkaKeKata(new Date().getFullYear() - FOUNDING_YEAR)
const TIMELINE_HEADLINE = `${yearsSinceFounding.charAt(0).toUpperCase()}${yearsSinceFounding.slice(1)} tahun, satu arah yang sama.`

/** /tentang-kami — the institutional page behind the first nav item. */
export default function TentangKami() {
  return (
    <>
      <Navbar solid />

      <main className="page">
        <PageHeader kicker={HEAD.kicker} title={HEAD.title} subhead={HEAD.subhead} />

        {/* already written for the landing page but never mounted there —
            this is the page it was always describing */}
        <CatholicLegitimacy id="legitimasi" />

        <SejarahSep id="sejarah" />

        <section className="new-about-visimisi section section--cream" aria-labelledby="visi-misi">
          <div className="shell">
            <p className="kicker center" id="visi-misi">
              {VISI_MISI.kicker}
            </p>

            <div className="new-about-visimisi__grid">
              <div className="new-about-visimisi__col">
                <p className="new-about-visimisi__label">Visi</p>
                <p className="body-text">{VISI_MISI.visi}</p>
              </div>

              <div className="new-about-visimisi__col">
                <p className="new-about-visimisi__label">Misi</p>
                <ol className="new-about-visimisi__list">
                  {VISI_MISI.misi.map((text) => (
                    <li key={text.slice(0, 24)}>{text}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="new-about-mission section" aria-labelledby="misi">
          <div className="shell new-about-mission__inner">
            <div className="new-about-mission__copy">
              <p className="kicker">{MISSION.kicker}</p>
              <p className="headline" id="misi">
                {MISSION.headline}
              </p>
              {MISSION.paragraphs.map((text) => (
                <p className="body-text" key={text.slice(0, 24)}>
                  {text}
                </p>
              ))}
            </div>

            <div className="new-about-mission__figure">
              <img src={missionPhoto} alt="Pembinaan dalam kelompok kecil, mendalami Sabda Tuhan bersama" loading="lazy" />
            </div>
          </div>
        </section>

        <HowShekinahHelps id="pendampingan" />

        <section className="new-about-timeline section section--cream" aria-labelledby="perjalanan">
          <div className="shell">
            <p className="kicker">Perjalanan</p>
            <p className="headline new-about-timeline__headline" id="perjalanan">
              {TIMELINE_HEADLINE}
            </p>

            <ol className="new-about-timeline__list">
              {TIMELINE.map((item) => (
                <li className="new-about-timeline__item" key={item.year}>
                  <span className="new-about-timeline__year">{item.year}</span>
                  <span className="new-about-timeline__text">{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* moved from /pengajar — see the ROMO_NOTE comment above */}
        <section className="new-teachers section" aria-labelledby="romo-pembina">
          <div className="shell">
            <div className="page-section-head">
              <h2 className="page-section-head__title" id="romo-pembina">
                Romo Pembina
              </h2>
              <p className="page-section-head__note">{ROMO_NOTE}</p>
            </div>

            <div className="new-teachers__grid">
              {romoPembina.map((person) => (
                <figure className="new-teacher" key={person.id}>
                  <div className="new-teacher__photo">
                    {person.image ? (
                      <img src={person.image} alt={person.name} loading="lazy" />
                    ) : (
                      <span className="new-teacher__placeholder" aria-hidden="true" />
                    )}
                  </div>

                  <figcaption className="new-teacher__caption">
                    <span className="new-teacher__role">{person.role}</span>
                    <span className="new-teacher__name">{person.name}</span>
                    {/* only renders when a tenure is confirmed — see data/pengajar.js */}
                    {person.years && <span className="new-teacher__years">{person.years}</span>}
                    <span className="new-teacher__bio">{person.bio}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
