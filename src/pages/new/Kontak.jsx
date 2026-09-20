import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import Footer from '../../components/new/Footer'
import shenoid from '../../assets/shenoid.png'
import './Page.css'
import './Kontak.css'

// Edit copy here.
const HEAD = {
  kicker: 'Hubungi Kami',
  title: 'Ada yang ingin ditanyakan tentang pembinaan?',
  subhead:
    'Sampaikan pertanyaan seputar program, pendaftaran peserta, atau kerja sama paroki. Sekretariat Shekinah membalas pada hari kerja.',
}

// Placeholder dalam kurung siku mengikuti konvensi components/new/Footer.jsx,
// supaya keduanya sama-sama mudah dicari saat data sekretariat sudah ada.
const CHANNELS = [
  {
    label: 'Email',
    value: '[Alamat email]',
    note: 'Jalur utama untuk pertanyaan program, pendaftaran peserta, dan permohonan kerja sama paroki.',
  },
  {
    label: 'Lokasi',
    value: '[Alamat lembaga]',
    note: 'Sekretariat Shekinah, di bawah naungan BPK PKK Keuskupan Agung Jakarta.',
  },
]

// `#masuk` sama seperti CTA navbar dan FloatingMySS — portal anggota belum
// punya URL asli. Ganti ketiganya bersamaan begitu alamatnya tersedia.
const MYSS = {
  kicker: 'Portal Anggota',
  headline: 'Sudah terdaftar? Semuanya ada di MySS.',
  paragraphs: [
    'MySS — My SEP Shekinah — adalah portal anggota tempat peserta melihat jadwal pertemuan, membuka materi pembinaan, dan mengikuti perkembangan perjalanannya sendiri.',
    'Belum punya akses? Hubungi pendamping kelompok Anda, atau kirim email ke sekretariat lewat alamat di atas.',
  ],
  cta: { label: 'Buka MySS', href: '#masuk' },
  imageAlt: 'Shenoid, maskot MySS, menyambut dengan tangan terbuka',
}

/** /kontak — the contact page behind the footer's "Hubungi Kami" link. */
export default function Kontak() {
  return (
    <>
      <Navbar solid />

      <main className="page">
        <PageHeader kicker={HEAD.kicker} title={HEAD.title} subhead={HEAD.subhead} />

        <section className="new-kontak section" aria-labelledby="kanal">
          <div className="shell">
            <p className="kicker" id="kanal">
              Kanal Kontak
            </p>

            <div className="new-kontak__channels">
              {CHANNELS.map((channel) => (
                <div className="new-kontak__channel" key={channel.label}>
                  <span className="new-kontak__channel-label">{channel.label}</span>
                  <p className="new-kontak__channel-value">{channel.value}</p>
                  <p className="new-kontak__channel-note">{channel.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA for this page — FinalCta is deliberately not mounted
            here, since its second button points back at #kontak. */}
        <section className="new-kontak-myss section" aria-labelledby="myss">
          <div className="shell new-kontak-myss__inner">
            <figure className="new-kontak-myss__figure">
              <img
                src={shenoid}
                alt={MYSS.imageAlt}
                className="new-kontak-myss__img"
                loading="lazy"
              />
            </figure>

            <div className="new-kontak-myss__copy">
              <p className="new-kontak-myss__kicker">{MYSS.kicker}</p>
              <p className="new-kontak-myss__headline" id="myss">
                {MYSS.headline}
              </p>

              {MYSS.paragraphs.map((text) => (
                <p className="new-kontak-myss__text" key={text.slice(0, 24)}>
                  {text}
                </p>
              ))}

              <a href={MYSS.cta.href} className="btn btn--amber new-kontak-myss__cta">
                {MYSS.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
