import { useEffect, useState } from 'react'
import './SejarahSep.css'

// Edit copy here. Text is verbatim from the approved "Sejarah SEP" story;
// <strong> marks the phrases that were bold in the source.
const HEAD = {
  kicker: 'Sejarah SEP',
  title: 'SEP Shekinah: Perjalanan Iman yang Dimulai dari Diri Sendiri',
}

const OPENING = {
  lede: ['Ada saat ketika kita tidak lagi puas hanya “tahu” tentang iman.', 'Kita ingin sungguh menghayatinya.'],
  longings: [
    'Ingin mengalami kehadiran Kristus secara lebih nyata.',
    'Ingin memiliki cara pandang yang diperbarui.',
    'Ingin membangun relasi yang lebih baik.',
    'Ingin semakin memahami iman Katolik dan mampu membagikannya kepada sesama.',
  ],
  paragraphs: [
    <>
      Dari kerinduan inilah <strong>Sekolah Evangelisasi Pribadi (SEP) Shekinah</strong> bertumbuh.
    </>,
    'SEP Shekinah bukan sekadar tempat untuk menambah pengetahuan.',
    'Di sini, seseorang diajak untuk lebih dahulu mengalami Kabar Baik dalam dirinya sendiri—lalu membawanya ke dalam keluarga, pekerjaan, pelayanan, dan kehidupan bersama.',
  ],
}

const AWAL = {
  id: 'sejarah-1986',
  rail: '1986',
  title: 'Sebuah Perjalanan yang Dimulai pada 1986',
  years: ['1986', '1988'],
  paragraphs: [
    <>
      Perjalanan SEP Shekinah bermula pada <strong>tahun 1986</strong>, ketika R. L. Sugiri van den Heuval, SJ
      mengikuti kursus Misi Evangelisasi di Amerika.
    </>,
    'Terdorong oleh kerinduan untuk memperdalam penginjilan Katolik, beliau kemudian memperkenalkan buku Misi Evangelisasi kepada Keluarga Pembaharuan Karismatik Katolik.',
    'Sebuah tim dibentuk untuk menerjemahkan materi tersebut ke dalam Bahasa Indonesia.',
    <>
      Dua tahun kemudian, pada <strong>1988</strong>, dimulailah{' '}
      <strong>Sekolah Evangelisasi Pribadi Shekinah Angkatan Pertama</strong> di Gedung Shekinah.
    </>,
  ],
  fact: (
    <>
      Pembinaan saat itu berlangsung secara intensif, <strong>tiga kali seminggu selama empat bulan penuh</strong>.
    </>
  ),
  bridge: 'Sejak awal, perhatian SEP Shekinah bukan hanya pada apa yang dipelajari.',
  quote: (
    <>
      Yang ingin dibentuk adalah <strong>pribadinya</strong>.
    </>
  ),
}

const PRIBADI = {
  id: 'sejarah-pribadi',
  rail: 'Pribadi',
  title: 'Mengapa Disebut “Pribadi”?',
  lead: 'Karena perubahan selalu dimulai dari dalam.',
  steps: [
    <>
      Peserta diajak untuk terlebih dahulu menerima dan menghayati <strong>Kabar Baik di dalam dirinya sendiri</strong>.
    </>,
    'Menyadari kehadiran Kristus yang nyata dalam hidup.',
    'Mengalami perubahan dalam visi dan perilaku.',
    'Baru kemudian membawa pengalaman iman itu kepada sesama.',
  ],
  motto: 'Pribadi ke pribadi.',
  paragraphs: [
    'Melalui sharing iman dan langkah-langkah yang dipelajari selama proses pembinaan.',
    'Karena itu, SEP Shekinah tidak dimaksudkan untuk menjadikan semua peserta sebagai pewarta mimbar atau guru agama.',
    <>
      Yang diharapkan adalah lahirnya pribadi-pribadi yang semakin mampu{' '}
      <strong>menghayati iman Katolik dan membagikannya secara nyata dalam kehidupan.</strong>
    </>,
  ],
}

const BUAH = {
  id: 'sejarah-buah',
  rail: 'Buah',
  title: 'Apa yang Diharapkan Bertumbuh dalam Diri Peserta?',
  intro: [
    'Perjalanan di SEP Shekinah tidak berhenti pada materi atau pengetahuan.',
    'Buahnya justru diharapkan terlihat dalam kehidupan sehari-hari.',
    'Peserta diajak untuk semakin:',
  ],
  fruits: [
    {
      title: 'Mengenal dan menghayati imannya.',
      text: 'Bukan hanya mengetahui ajaran, tetapi semakin memahami apa artinya hidup sebagai seorang Katolik.',
    },
    {
      title: 'Mengalami pembaruan dalam diri.',
      text: 'Perubahan visi dan perilaku menjadi bagian penting dari perjalanan ini.',
    },
    {
      title: 'Membangun relasi yang lebih baik.',
      text: 'Buah pembaruan juga terlihat dalam pemulihan relasi di keluarga, tempat kerja, kehidupan menggereja, dan masyarakat.',
    },
    {
      title: 'Semakin mantap dalam iman Katolik.',
      text: 'Semangat untuk terus belajar dan mendalami iman membantu peserta tidak mudah meninggalkan keyakinannya.',
    },
    {
      title: 'Menemukan kembali panggilan sebagai rasul awam.',
      text: 'Banyak peserta yang sebelumnya telah aktif di wilayah maupun paroki kemudian semakin memahami dan menghayati panggilan pelayanannya.',
    },
  ],
  outro: 'Inilah yang membuat perjalanan SEP Shekinah tidak berhenti di ruang belajar.',
  emphasis: 'Iman dibawa kembali ke kehidupan nyata.',
}

const JANGKAUAN = {
  id: 'sejarah-jangkauan',
  rail: 'Jangkauan',
  title: 'Dari Shekinah, Menjangkau Banyak Tempat',
  year: '1990',
  paragraphs: [
    'Tanggapan terhadap SEP Shekinah berkembang secara positif.',
    <>
      Sejak <strong>1990</strong>, SEP Shekinah mulai melayani permintaan dari berbagai paroki di Keuskupan Agung
      Jakarta maupun keuskupan lainnya.
    </>,
  ],
  citiesLead: 'Pelayanan tersebut menjangkau',
  cities: [
    'Bogor', 'Bandung', 'Semarang', 'Yogyakarta', 'Surabaya', 'Medan', 'Padang', 'Manado',
    'Pontianak', 'Samarinda', 'Batam', 'Makasar', 'Flores', 'Atambua',
  ],
  citiesLast: 'Papua',
  after: [
    <>
      Di wilayah <strong>Keuskupan Agung Jakarta</strong>, SEP Shekinah telah bekerja sama dengan{' '}
      <strong>mayoritas paroki</strong>, dan banyak di antaranya menyelenggarakan Kursus Evangelisasi Pribadi secara
      teratur. Bahkan SEP Shekinah telah beberapa kali menyelenggarakan KEP di Australia dan Amerika untuk memenuhi
      kebutuhan orang Indonesia yang ingin mengalami pembaruan walau sedang berada di negeri seberang.
    </>,
    'Dari sebuah pembinaan di Gedung Shekinah, pelayanan ini berkembang dan menjangkau semakin banyak pribadi.',
  ],
}

const BERSAMA = {
  id: 'sejarah-bersama',
  rail: 'Bersama',
  title: 'Belajar, Bertumbuh, dan Berjalan Bersama',
  intro: (
    <>
      Program SEP Shekinah disampaikan melalui berbagai kegiatan yang membantu peserta mengalami{' '}
      <strong>pertumbuhan iman sekaligus membangun kebersamaan</strong>.
    </>
  ),
  listLead: 'Dalam kerja sama dengan paroki, SEP Shekinah dipercaya untuk:',
  tasks: [
    'menyediakan materi pengajaran,',
    'mengutus tenaga-tenaga pengajar,',
    'mendampingi retret pengutusan,',
    'bersama panitia setempat melaksanakan evangelisasi dan merundingkan kelulusan peserta,',
    'serta mengeluarkan sertifikat kelulusan.',
  ],
  aside: [
    'Namun yang paling penting bukanlah selesainya sebuah program.',
    'Yang jauh lebih berarti adalah ketika apa yang dipelajari mulai mengambil tempat dalam kehidupan.',
  ],
}

const NYATA = {
  id: 'sejarah-nyata',
  rail: 'Nyata',
  title: 'Ketika Iman Menjadi Nyata',
  paragraphs: [
    'Selama perjalanannya, SEP Shekinah telah melihat berbagai buah positif.',
    <>
      Banyak alumnus menjadi <strong>aktivis yang berdedikasi dan dapat diandalkan</strong>, baik di Shekinah maupun
      di paroki asal mereka.
    </>,
    'Banyak yang mengalami pembaruan hidup melalui semangat penginjilan dan pengudusan pribadi.',
  ],
  // "Ada" is split off so it can be coloured; the sentence reads unchanged.
  ada: [
    'relasi yang dipulihkan.',
    'cara pandang yang berubah.',
    'semangat baru untuk mendalami iman Katolik.',
    'pelayanan yang dijalani dengan pemahaman yang semakin dalam.',
  ],
  closing: (
    <>
      Dan ada semakin banyak pribadi yang menyadari bahwa iman Katolik bukan hanya untuk diketahui, tetapi untuk{' '}
      <strong>dihayati dan dibagikan.</strong>
    </>
  ),
}

const MULAI = {
  id: 'sejarah-mulai',
  rail: 'Mulai',
  title: 'Mungkin, Inilah Saatnya Memulai dari Diri Sendiri',
  intro: [
    'Tidak semua perjalanan iman harus dimulai dari sesuatu yang besar.',
    'Kadang semuanya dimulai dari satu keputusan sederhana:',
  ],
  decision: [
    'mau mengenal Kristus lebih dalam,',
    'mau membiarkan hidup diperbarui,',
    'dan mau membawa iman itu ke dalam kehidupan sehari-hari.',
  ],
  outro: 'Itulah perjalanan yang sejak awal ingin dibangun oleh SEP Shekinah.',
  calls: ['Kenali imanmu lebih dalam.', 'Hayati lebih sungguh.', 'Biarkan hidupmu menjadi Kabar Baik bagi sesama.'],
  invite: 'Mari memulai perjalanan bersama SEP Shekinah.',
}

const CHAPTERS = [AWAL, PRIBADI, BUAH, JANGKAUAN, BERSAMA, NYATA, MULAI]

const pad = (n) => String(n).padStart(2, '0')

function Paragraphs({ items, className = 'body-text' }) {
  return items.map((text, i) => (
    <p className={className} key={i}>
      {text}
    </p>
  ))
}

function ChapterHead({ chapter }) {
  const index = CHAPTERS.indexOf(chapter) + 1
  return (
    <header className="new-sejarah__chapter-head">
      <span className="new-sejarah__chapter-num" aria-hidden="true">
        {pad(index)}
      </span>
      <h3 className="new-sejarah__chapter-title">{chapter.title}</h3>
    </header>
  )
}

/** Long-form history of SEP Shekinah, read as chapters beside a sticky index. */
export default function SejarahSep({ id }) {
  const [active, setActive] = useState(CHAPTERS[0].id)

  // IntersectionObserver rather than a scroll listener, so this doesn't add
  // a second per-frame handler next to useScrollPosition.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // preventDefault keeps the hash out of the URL (and out of the router);
  // the smooth scroll comes from html { scroll-behavior }, which already
  // honours prefers-reduced-motion.
  const jumpTo = (event, targetId) => {
    event.preventDefault()
    document.getElementById(targetId)?.scrollIntoView()
  }

  return (
    <section className="new-sejarah section" id={id} aria-labelledby="sejarah-title">
      <div className="shell">
        <header className="new-sejarah__head">
          <p className="kicker">{HEAD.kicker}</p>
          <h2 className="headline new-sejarah__title" id="sejarah-title">
            {HEAD.title}
          </h2>
        </header>

        <div className="new-sejarah__opening">
          <p className="new-sejarah__lede">
            <strong>
              {OPENING.lede[0]}
              <br />
              {OPENING.lede[1]}
            </strong>
          </p>

          <ul className="new-sejarah__longings">
            {OPENING.longings.map((line) => (
              <li key={line}>
                <span className="new-sejarah__accent">Ingin</span>
                {line.slice('Ingin'.length)}
              </li>
            ))}
          </ul>

          <div className="new-sejarah__opening-copy">
            <Paragraphs items={OPENING.paragraphs} />
          </div>
        </div>

        <div className="new-sejarah__body">
          <nav className="new-sejarah__rail" aria-label="Bab sejarah">
            <ol>
              {CHAPTERS.map((c, i) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => jumpTo(e, c.id)}
                    className={active === c.id ? 'is-active' : undefined}
                    aria-current={active === c.id ? 'true' : undefined}
                  >
                    <span className="new-sejarah__rail-num">{pad(i + 1)}</span>
                    {c.rail}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="new-sejarah__chapters">
            {/* 01 — 1986 */}
            <article className="new-sejarah__chapter" id={AWAL.id}>
              <ChapterHead chapter={AWAL} />
              <div className="new-sejarah__years" aria-hidden="true">
                <span>{AWAL.years[0]}</span>
                <span className="new-sejarah__years-arrow">→</span>
                <span>{AWAL.years[1]}</span>
              </div>
              <Paragraphs items={AWAL.paragraphs} />
              <p className="new-sejarah__fact">{AWAL.fact}</p>
              <p className="body-text">{AWAL.bridge}</p>
              <blockquote className="new-sejarah__quote">
                <p>{AWAL.quote}</p>
              </blockquote>
            </article>

            {/* 02 — Pribadi */}
            <article className="new-sejarah__chapter" id={PRIBADI.id}>
              <ChapterHead chapter={PRIBADI} />
              <p className="new-sejarah__lead">{PRIBADI.lead}</p>
              <ol className="new-sejarah__steps">
                {PRIBADI.steps.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ol>
              <p className="new-sejarah__motto">
                <strong>{PRIBADI.motto}</strong>
              </p>
              <Paragraphs items={PRIBADI.paragraphs} />
            </article>

            {/* 03 — Buah */}
            <article className="new-sejarah__chapter" id={BUAH.id}>
              <ChapterHead chapter={BUAH} />
              <Paragraphs items={BUAH.intro} />
              <ol className="new-sejarah__fruits">
                {BUAH.fruits.map((fruit, i) => (
                  <li key={fruit.title}>
                    <span className="new-sejarah__fruit-num" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                    <strong className="new-sejarah__fruit-title">{fruit.title}</strong>
                    <span className="new-sejarah__fruit-text">{fruit.text}</span>
                  </li>
                ))}
              </ol>
              <p className="body-text">{BUAH.outro}</p>
              <p className="new-sejarah__emphasis">{BUAH.emphasis}</p>
            </article>

            {/* 04 — Jangkauan */}
            <article className="new-sejarah__chapter" id={JANGKAUAN.id}>
              <ChapterHead chapter={JANGKAUAN} />
              <div className="new-sejarah__years" aria-hidden="true">
                <span>{JANGKAUAN.year}</span>
              </div>
              <Paragraphs items={JANGKAUAN.paragraphs} />
              <p className="new-sejarah__cities">
                <span className="new-sejarah__cities-lead">{JANGKAUAN.citiesLead} </span>
                <strong>
                  {JANGKAUAN.cities.map((city) => (
                    <span key={city}>
                      {city}
                      <span className="new-sejarah__cities-sep">, </span>
                    </span>
                  ))}
                  <span className="new-sejarah__cities-sep">hingga </span>
                  {JANGKAUAN.citiesLast}.
                </strong>
              </p>
              <Paragraphs items={JANGKAUAN.after} />
            </article>

            {/* 05 — Bersama */}
            <article className="new-sejarah__chapter" id={BERSAMA.id}>
              <ChapterHead chapter={BERSAMA} />
              <p className="body-text">{BERSAMA.intro}</p>
              <p className="body-text">{BERSAMA.listLead}</p>
              <ul className="new-sejarah__tasks">
                {BERSAMA.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              <aside className="new-sejarah__aside">
                <Paragraphs items={BERSAMA.aside} />
              </aside>
            </article>

            {/* 06 — Nyata */}
            <article className="new-sejarah__chapter" id={NYATA.id}>
              <ChapterHead chapter={NYATA} />
              <Paragraphs items={NYATA.paragraphs} />
              <ul className="new-sejarah__ada">
                {NYATA.ada.map((line) => (
                  <li key={line}>
                    <span className="new-sejarah__accent">Ada</span> {line}
                  </li>
                ))}
              </ul>
              <p className="body-text">{NYATA.closing}</p>
            </article>
          </div>
        </div>

        {/* 07 — Mulai: full width, outside the rail grid */}
        <article className="new-sejarah__closing" id={MULAI.id}>
          <ChapterHead chapter={MULAI} />
          <Paragraphs items={MULAI.intro} />
          <p className="new-sejarah__decision">
            <strong>
              {MULAI.decision.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < MULAI.decision.length - 1 && <br />}
                </span>
              ))}
            </strong>
          </p>
          <p className="body-text">{MULAI.outro}</p>
          <div className="new-sejarah__calls">
            {MULAI.calls.map((line) => (
              <h4 key={line}>{line}</h4>
            ))}
          </div>
          <p className="new-sejarah__invite">
            <strong>{MULAI.invite}</strong>
          </p>
        </article>
      </div>
    </section>
  )
}
