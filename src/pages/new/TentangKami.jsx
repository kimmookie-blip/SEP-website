import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import CatholicLegitimacy from '../../components/new/CatholicLegitimacy'
import HowShekinahHelps from '../../components/new/HowShekinahHelps'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import './Page.css'
import './TentangKami.css'

// Edit copy here. Two of the sections below are existing components that
// carry their own copy: CatholicLegitimacy, HowShekinahHelps.
const HEAD = {
  kicker: 'Tentang Kami',
  title: 'Mendampingi perjalanan iman umat Katolik sejak 1990.',
  subhead:
    'Shekinah adalah lembaga pembinaan iman di bawah naungan BPK PKK Keuskupan Agung Jakarta. Kami menyiapkan jalur pembinaan bertahap bersama paroki, dari perkenalan pertama dengan Kristus sampai pendampingan yang berkelanjutan.',
}

const MISSION = {
  kicker: 'Yang Kami Kerjakan',
  headline: 'Pembinaan yang dijalani, bukan sekadar diikuti.',
  paragraphs: [
    'Sejak 1990, Shekinah mendampingi umat Katolik untuk mengenal Kristus secara pribadi dan menghidupi imannya dalam keseharian. Materi dan pengajaran dikoordinasikan langsung oleh Shekinah bersama para Romo pembina.',
    'Pembinaan berjalan dalam kelompok kecil dengan pendamping tetap, karena perubahan yang kami harapkan bukan bertambahnya pengetahuan, melainkan kebiasaan iman yang bertahan setelah rangkaian pertemuan selesai.',
    'Penyelenggaraan dilakukan bersama paroki mitra, mengikuti kebutuhan dan kalender masing-masing paroki.',
  ],
}

// Contoh isi — ganti tahun dan keterangannya dengan riwayat yang terverifikasi.
const TIMELINE = [
  { year: '1990', text: 'Shekinah berdiri dan mulai mendampingi pembinaan iman di Jakarta.' },
  { year: '1995', text: 'Kursus Evangelisasi Pribadi mulai diselenggarakan bersama paroki.' },
  { year: '2010', text: 'Jalur bina lanjut dibuka: pendalaman iman dan kelas Kitab Suci.' },
  { year: '2026', text: 'Pembinaan telah berjalan bersama 59 paroki mitra.' },
]

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

            {/* grey box until documentation photography is chosen */}
            <div className="new-about-mission__figure" aria-hidden="true" />
          </div>
        </section>

        <HowShekinahHelps id="pendampingan" />

        <section className="new-about-timeline section section--cream" aria-labelledby="perjalanan">
          <div className="shell">
            <p className="kicker">Perjalanan</p>
            <p className="headline new-about-timeline__headline" id="perjalanan">
              Tiga puluh enam tahun, satu arah yang sama.
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

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
