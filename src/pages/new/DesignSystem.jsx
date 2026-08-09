import { useEffect, useState } from 'react'
import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import './Page.css'
import './DesignSystem.css'

/* ============================================================
   Halaman internal. Nilai warna TIDAK ditulis ulang di sini —
   semuanya dibaca dari :root lewat getComputedStyle, jadi begitu
   token di src/styles.css berubah, halaman ini ikut berubah tanpa
   perlu disunting. Itu sebabnya rasio kontrasnya bisa dipercaya.
   ============================================================ */

// Tangga permukaan, dari paling terang ke paling gelap.
const SURFACES = [
  { token: '--bg-white', role: '1 — paling terang, .section--white' },
  { token: '--nav-cream', role: '2 — krem muda; navbar dan section yang naik sedikit' },
  { token: '--bg-warm', role: '3 — DASAR halaman, krem parchment' },
  { token: '--band-cream', role: '4 — band krem dalam, .section--cream' },
  { token: '--deep-blue', role: 'SATU-SATUNYA biru gelap — section, band acara, footer' },
  { token: '--band-azure', role: 'Sub-bar kegiatan' },
  { token: '--band-amber', role: 'Strip pra-footer' },
]

// `on` menentukan di atas permukaan mana rasio kontras dihitung.
const INKS = [
  { token: '--deep-blue', on: '--bg-warm', role: 'Teks utama' },
  { token: '--muted', on: '--bg-warm', role: 'Teks sekunder, .body-text' },
  { token: '--gold-ink', on: '--bg-warm', role: 'SEMUA teks beraksen emas: .kicker, .micro--amber, tautan' },
  { token: '--gold-soft', on: '--deep-blue', role: 'Judul di band gelap' },
  { token: '--cream', on: '--deep-blue', role: 'Teks di band gelap' },
  { token: '--amber', on: '--deep-blue', role: 'Aksen di band gelap' },
  { token: '--deep-blue', on: '--amber-deep', role: 'Teks di atas ISIAN --amber-deep' },
  { token: '--deep-blue', on: '--amber', role: 'Teks di atas ISIAN --amber (.btn--amber)' },
]

// Skala tipografi — pengganti bold sebagai alat hierarki.
const TYPE_SCALE = [
  { token: '--text-4xl', role: 'Headline hero' },
  { token: '--text-3xl', role: '.headline — judul section' },
  { token: '--text-2xl', role: '.display, judul halaman kosong' },
  { token: '--text-xl', role: '.headline--sm, kepala kolom' },
  { token: '--text-lg', role: '.subhead' },
  { token: '--text-base', role: '.body-text' },
  { token: '--text-sm', role: 'Catatan, meta' },
  { token: '--text-xs', role: 'Label terkecil' },
]

const FACES = [
  {
    token: '--font-display',
    name: 'Amiri',
    role: 'Judul dan headline. Dipakai pada bobot 400 — bukan bold.',
    sample: 'Perjalanan iman yang mengubah kehidupan nyata.',
    className: 'ds-face__sample ds-face__sample--display',
  },
  {
    token: '--font-accent',
    name: 'Balthazar',
    role: 'Angka dan label kecil berspasi lebar (.kicker, .micro).',
    sample: '1990 · 59 Paroki · 100%',
    className: 'ds-face__sample ds-face__sample--accent',
  },
  {
    token: '--font-body',
    name: 'Inter',
    role: 'Seluruh teks isi, tombol, dan navigasi.',
    sample: 'Mulailah perjalanan iman bersama komunitas Katolik yang mendampingi setiap langkahmu.',
    className: 'ds-face__sample ds-face__sample--body',
  },
]

const LAYOUT_TOKENS = [
  { token: '--shell', note: 'Lebar maksimum .shell' },
  { token: '--nav-h', note: 'Tinggi navbar; dipakai sebagai offset scroll' },
  { token: '--ease', note: 'Kurva tunggal untuk seluruh transisi' },
]

const BREAKPOINTS = [
  { at: '1024px', note: 'Padding section mengecil' },
  { at: '860px', note: 'Navbar berganti ke menu overlay' },
  { at: '768px', note: 'Grid 12 kolom menjadi satu kolom; hero berhenti dipin' },
]

/* ---------- perhitungan kontras (WCAG 2.1) ---------- */

function parseColour(value) {
  const v = (value || '').trim()

  if (v.startsWith('#')) {
    const hex = v.slice(1)
    const full =
      hex.length === 3
        ? hex
            .split('')
            .map((c) => c + c)
            .join('')
        : hex
    return [
      parseInt(full.slice(0, 2), 16),
      parseInt(full.slice(2, 4), 16),
      parseInt(full.slice(4, 6), 16),
      1,
    ]
  }

  const match = v.match(/rgba?\(([^)]+)\)/)
  if (!match) return null
  const parts = match[1].split(/[,\s/]+/).filter(Boolean).map(Number)
  if (parts.length < 3 || parts.some(Number.isNaN)) return null
  return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1]
}

/** Token semi-transparan (--muted, --rule) harus dikomposit dulu ke latarnya. */
function flatten(colour, backdrop) {
  const alpha = colour[3]
  if (alpha >= 1) return colour
  return [
    Math.round(colour[0] * alpha + backdrop[0] * (1 - alpha)),
    Math.round(colour[1] * alpha + backdrop[1] * (1 - alpha)),
    Math.round(colour[2] * alpha + backdrop[2] * (1 - alpha)),
    1,
  ]
}

function relativeLuminance([r, g, b]) {
  const [lr, lg, lb] = [r, g, b].map((channel) => {
    const s = channel / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb
}

function contrastRatio(inkValue, surfaceValue) {
  const surface = parseColour(surfaceValue)
  const ink = parseColour(inkValue)
  if (!surface || !ink) return null

  const l1 = relativeLuminance(flatten(ink, surface))
  const l2 = relativeLuminance(surface)
  const [lighter, darker] = l1 > l2 ? [l1, l2] : [l2, l1]
  return (lighter + 0.05) / (darker + 0.05)
}

function grade(ratio) {
  if (ratio == null) return { label: '—', level: 'na' }
  if (ratio >= 7) return { label: 'AAA', level: 'aaa' }
  if (ratio >= 4.5) return { label: 'AA', level: 'aa' }
  if (ratio >= 3) return { label: 'AA besar', level: 'large' }
  return { label: 'Gagal', level: 'fail' }
}

/* ============================================================
   Sistem kedua: Word on Fire (wordonfire.org).
   Studi referensi — SEMUA nilai di bawah diekstrak dari CSS
   produksi mereka (front.css v1.2.43, snapshot Wayback 30 Juni
   2026), bukan direka dari tangkapan layar. Karena bukan token
   situs ini, nilainya literal, tidak dibaca dari :root — tapi
   rasio kontrasnya tetap dihitung hidup oleh fungsi yang sama.
   ============================================================ */

const WOF_SURFACES = [
  { hex: '#ffffff', name: 'Putih', role: 'Dasar hampir seluruh halaman konten' },
  { hex: '#f9f7f6', name: 'Latar body', role: 'background-color pada <body>' },
  { hex: '#f9f4e7', name: 'Krem parchment', role: 'Band kampanye dan penawaran' },
  { hex: '#000000', name: 'Hitam', role: 'Band hero, footer, blok sinematik' },
  { hex: '#193d5d', name: 'Navy', role: 'Band seksi bertema' },
  { hex: '#102c3c', name: 'Navy gelap', role: 'Varian band yang lebih dalam' },
]

const WOF_INKS = [
  { hex: '#000000', on: '#ffffff', role: 'Teks utama — kontras penuh, bukan abu tua' },
  { hex: '#4d4d4c', on: '#f9f7f6', role: 'Teks isi sekunder' },
  { hex: '#bc9c52', on: '#000000', role: 'Emas di band gelap — aksen khas merek' },
  { hex: '#bc9c52', on: '#ffffff', role: 'Emas di latar terang' },
  { hex: '#d3b55a', on: '#102c3c', role: 'Emas terang di navy' },
  { hex: '#ffffff', on: '#193d5d', role: 'Teks di band navy' },
  { hex: '#b62025', on: '#f9f7f6', role: 'Merah — tautan khusus dan penekanan' },
  { hex: '#dd6d27', on: '#ffffff', role: 'Oranye api — ilustrasi dan ikon' },
]

// Font Adobe (Typekit) — tidak dimuat di situs ini. Contoh dirender lewat
// padanan lokal terdekat di fallback stack; label di bawah menyebutnya jujur.
const WOF_FACES = [
  {
    name: 'IvyPresto Display',
    stack: "'ivypresto-display', 'Didot', 'Bodoni 72', Georgia, serif",
    role: 'Headline h1 — serif display kontras tinggi. Terukur 2.25rem di ponsel sampai 3.75rem di desktop.',
    sample: 'Proclaiming Christ in the Culture',
    size: 'clamp(1.9rem, 3.4vw, 3rem)',
    weight: 400,
  },
  {
    name: 'Proxima Nova',
    stack: "'proxima-nova', 'Helvetica Neue', Inter, sans-serif",
    role: 'Subjudul h2 dan seluruh UI — penyeimbang sans yang netral.',
    sample: 'Books, films, and study programs',
    size: '1.35rem',
    weight: 600,
  },
  {
    name: 'Calluna',
    stack: "'calluna', Georgia, 'Times New Roman', serif",
    role: 'Teks isi — serif untuk body, 1rem. Pilihan paling editorial dari sistem ini.',
    sample:
      'Word on Fire Catholic Ministries is a nonprofit global media apostolate that supports the work of Bishop Robert Barron.',
    size: '1.05rem',
    weight: 400,
  },
  {
    name: 'New Spirit',
    stack: "'new-spirit', Georgia, serif",
    role: 'Serif hangat untuk kampanye tertentu — dimuat terpisah dari Typekit.',
    sample: 'This Is My Body',
    size: '1.6rem',
    weight: 500,
  },
]

const WOF_VS_SHEKINAH = [
  { aspek: 'Judul', wof: 'IvyPresto Display — serif kontras tinggi', shekinah: 'Amiri 400 + satu kata italic' },
  { aspek: 'Teks isi', wof: 'Calluna — serif juga di body', shekinah: 'Inter — sans di body' },
  { aspek: 'Aksen', wof: 'Emas pudar #bc9c52', shekinah: 'Amber jenuh #f1a501' },
  { aspek: 'Band gelap', wof: 'Hitam pekat #000', shekinah: 'Navy #003250' },
  { aspek: 'Latar', wof: 'Putih + abu hangat #f9f7f6', shekinah: 'Krem hangat #fefdf9' },
  { aspek: 'Tombol', wof: 'Mungil .75rem, bingkai tipis, hover membalik', shekinah: 'Pil 52px, isi amber' },
  { aspek: 'Nada', wof: 'Editorial, sinematik, hitam-putih', shekinah: 'Hangat, komunal, krem' },
]

function WofSections() {
  return (
    <>
      <section className="section ds-section" aria-labelledby="wof-warna">
        <div className="shell">
          <p className="kicker">01</p>
          <p className="headline ds-section__title" id="wof-warna">
            Warna
          </p>
          <p className="ds-note">
            Diurutkan menurut frekuensi pemakaian nyata di CSS produksi. Yang mencolok:
            dasarnya hitam-putih murni (179× <code>#fff</code>, 113× <code>#000</code>), dan
            satu emas pudar <code>#bc9c52</code> (70×) menanggung hampir seluruh identitas.
          </p>

          <h3 className="ds-subhead">Permukaan</h3>
          <div className="ds-swatches">
            {WOF_SURFACES.map((item) => (
              <figure className="ds-swatch" key={item.hex + item.name}>
                <div className="ds-swatch__chip" style={{ background: item.hex }} aria-hidden="true" />
                <figcaption>
                  <code className="ds-swatch__token">{item.name}</code>
                  <span className="ds-swatch__value">{item.hex}</span>
                  <span className="ds-swatch__role">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="ds-subhead">Tinta</h3>
          <table className="ds-table">
            <thead>
              <tr>
                <th scope="col">Contoh</th>
                <th scope="col">Warna</th>
                <th scope="col">Di atas</th>
                <th scope="col">Rasio</th>
                <th scope="col">Nilai</th>
                <th scope="col">Peran</th>
              </tr>
            </thead>
            <tbody>
              {WOF_INKS.map((ink) => {
                const ratio = contrastRatio(ink.hex, ink.on)
                const verdict = grade(ratio)
                return (
                  <tr key={ink.hex + ink.on}>
                    <td>
                      <span className="ds-ink-sample" style={{ background: ink.on, color: ink.hex }}>
                        Aa
                      </span>
                    </td>
                    <td>
                      <code className="ds-swatch__token">{ink.hex}</code>
                    </td>
                    <td>
                      <code className="ds-swatch__token">{ink.on}</code>
                    </td>
                    <td className="ds-table__num">{ratio ? `${ratio.toFixed(2)}:1` : '—'}</td>
                    <td>
                      <span className={`ds-grade ds-grade--${verdict.level}`}>{verdict.label}</span>
                    </td>
                    <td className="ds-table__role">{ink.role}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section--white ds-section" aria-labelledby="wof-tipografi">
        <div className="shell">
          <p className="kicker">02</p>
          <p className="headline ds-section__title" id="wof-tipografi">
            Tipografi
          </p>
          <p className="ds-note">
            Empat font berbayar dari Adobe Typekit — tidak dimuat di situs ini, jadi contoh di
            bawah tampil lewat padanan lokal terdekat (Didot untuk IvyPresto, Georgia untuk
            Calluna). Pola yang menarik: serif untuk judul <em>dan</em> body, sans hanya
            sebagai penyeimbang.
          </p>

          {WOF_FACES.map((face) => (
            <div className="ds-face" key={face.name}>
              <div className="ds-face__meta">
                <strong>{face.name}</strong>
                <span className="ds-face__role">{face.role}</span>
              </div>
              <p
                className="ds-face__sample"
                style={{
                  fontFamily: face.stack,
                  fontSize: face.size,
                  fontWeight: face.weight,
                  lineHeight: 1.25,
                }}
              >
                {face.sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section ds-section" aria-labelledby="wof-band">
        <div className="shell">
          <p className="kicker">03</p>
          <p className="headline ds-section__title" id="wof-band">
            Band gelap dan tombol
          </p>
          <p className="ds-note">
            Rekonstruksi pola hero mereka: hitam pekat, kicker emas, headline serif putih,
            lalu tombol kecil berbingkai yang membalik menjadi putih saat hover — spesifikasi
            persisnya <code>padding: 1rem 1.5rem</code>, <code>font-size: .75rem</code>.
            Sudut hampir selalu tajam; radius hanya 3px pada kartu dan 30–40px pada pil.
          </p>

          <div className="ds-wof-hero">
            <p className="ds-wof-hero__kicker">Word on Fire</p>
            <p className="ds-wof-hero__title">Proclaiming Christ in the Culture</p>
            <p className="ds-wof-hero__copy">
              Evangelization through books, films, and study programs reaching millions.
            </p>
            <div className="ds-wof-hero__row">
              <span className="ds-wof-btn">Learn More</span>
              <span className="ds-wof-btn ds-wof-btn--gold">Donate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white ds-section" aria-labelledby="wof-banding">
        <div className="shell">
          <p className="kicker">04</p>
          <p className="headline ds-section__title" id="wof-banding">
            Dibandingkan dengan Shekinah
          </p>

          <table className="ds-table">
            <thead>
              <tr>
                <th scope="col">Aspek</th>
                <th scope="col">Word on Fire</th>
                <th scope="col">Shekinah</th>
              </tr>
            </thead>
            <tbody>
              {WOF_VS_SHEKINAH.map((row) => (
                <tr key={row.aspek}>
                  <td className="ds-table__num">{row.aspek}</td>
                  <td className="ds-table__role">{row.wof}</td>
                  <td className="ds-table__role">{row.shekinah}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="ds-note ds-note--last">
            Sumber: <code>front.css</code> v1.2.43 dari wordonfire.org, snapshot Wayback
            Machine 30 Juni 2026. Warna diurutkan dari frekuensi pemakaian di berkas itu.
          </p>
        </div>
      </section>
    </>
  )
}

/* ---------- halaman ---------- */

const ALL_TOKENS = [
  ...SURFACES.map((s) => s.token),
  ...INKS.map((i) => i.token),
  ...INKS.map((i) => i.on),
  ...FACES.map((f) => f.token),
  ...LAYOUT_TOKENS.map((t) => t.token),
  ...TYPE_SCALE.map((t) => t.token),
]

const SYSTEMS = [
  { id: 'shekinah', label: 'Shekinah' },
  { id: 'wof', label: 'Word on Fire' },
]

/** /design-system — tab tersembunyi di navbar, dibuka dengan Cmd+/. */
export default function DesignSystem() {
  const [tokens, setTokens] = useState(null)
  const [system, setSystem] = useState('shekinah')

  // getComputedStyle butuh DOM, jadi baru dibaca setelah mount.
  useEffect(() => {
    const root = getComputedStyle(document.documentElement)
    const read = {}
    for (const name of new Set(ALL_TOKENS)) {
      read[name] = root.getPropertyValue(name).trim()
    }
    setTokens(read)
  }, [])

  const value = (token) => (tokens ? tokens[token] : '')

  return (
    <>
      <Navbar solid />

      <main className="page ds">
        <PageHeader
          kicker="Internal"
          title="Design System"
          subhead="Dua sistem berdampingan: token situs ini (dibaca hidup dari src/styles.css, bukan disalin) dan studi referensi Word on Fire yang diekstrak dari CSS produksi mereka."
        />

        <div className="shell">
          <div className="ds-tabs" role="tablist" aria-label="Pilih sistem desain">
            {SYSTEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={system === item.id}
                className={`ds-tabs__tab${system === item.id ? ' is-active' : ''}`}
                onClick={() => setSystem(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {system === 'wof' && <WofSections />}

        {system === 'shekinah' && (
        <>
        <section className="section ds-section" aria-labelledby="ds-warna">
          <div className="shell">
            <p className="kicker">01</p>
            <p className="headline ds-section__title" id="ds-warna">
              Warna
            </p>

            <h3 className="ds-subhead">Permukaan</h3>
            <div className="ds-swatches">
              {SURFACES.map((item) => (
                <figure className="ds-swatch" key={item.token}>
                  <div
                    className="ds-swatch__chip"
                    style={{ background: `var(${item.token})` }}
                    aria-hidden="true"
                  />
                  <figcaption>
                    <code className="ds-swatch__token">{item.token}</code>
                    <span className="ds-swatch__value">{value(item.token) || '…'}</span>
                    <span className="ds-swatch__role">{item.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <h3 className="ds-subhead">Tinta</h3>
            <p className="ds-note">
              Rasio dihitung terhadap permukaan tempat warna itu benar-benar dipakai. Token
              semi-transparan seperti <code>--muted</code> dikomposit dulu ke latarnya, karena
              rasio alfa mentah akan menyesatkan.
            </p>

            <table className="ds-table">
              <thead>
                <tr>
                  <th scope="col">Contoh</th>
                  <th scope="col">Token</th>
                  <th scope="col">Di atas</th>
                  <th scope="col">Rasio</th>
                  <th scope="col">Nilai</th>
                  <th scope="col">Peran</th>
                </tr>
              </thead>
              <tbody>
                {INKS.map((ink) => {
                  const ratio = tokens
                    ? contrastRatio(tokens[ink.token], tokens[ink.on])
                    : null
                  const verdict = grade(ratio)
                  return (
                    <tr key={`${ink.token}-${ink.on}`}>
                      <td>
                        <span
                          className="ds-ink-sample"
                          style={{
                            background: `var(${ink.on})`,
                            color: `var(${ink.token})`,
                          }}
                        >
                          Aa
                        </span>
                      </td>
                      <td>
                        <code className="ds-swatch__token">{ink.token}</code>
                      </td>
                      <td>
                        <code className="ds-swatch__token">{ink.on}</code>
                      </td>
                      <td className="ds-table__num">
                        {ratio ? `${ratio.toFixed(2)}:1` : '…'}
                      </td>
                      <td>
                        <span className={`ds-grade ds-grade--${verdict.level}`}>
                          {verdict.label}
                        </span>
                      </td>
                      <td className="ds-table__role">{ink.role}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section section--white ds-section" aria-labelledby="ds-tipografi">
          <div className="shell">
            <p className="kicker">02</p>
            <p className="headline ds-section__title" id="ds-tipografi">
              Tipografi
            </p>

            {FACES.map((face) => (
              <div className="ds-face" key={face.token}>
                <div className="ds-face__meta">
                  <strong>{face.name}</strong>
                  <code className="ds-swatch__token">{face.token}</code>
                  <span className="ds-face__role">{face.role}</span>
                </div>
                <p className={face.className}>{face.sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section ds-section" aria-labelledby="ds-skala">
          <div className="shell">
            <p className="kicker">03</p>
            <p className="headline ds-section__title" id="ds-skala">
              Skala dan kelas teks
            </p>
            <p className="ds-note">
              <strong>Aturan pokok: Amiri tidak pernah bold.</strong> Hierarki dibangun dari
              ukuran, bukan berat — karena itu jarak antarlangkah sengaja lebar. Balthazar masih
              boleh bold untuk angka dan aksen hero, tapi tidak untuk judul.
            </p>

            <table className="ds-table">
              <tbody>
                {TYPE_SCALE.map((item) => (
                  <tr key={item.token}>
                    <td>
                      <code className="ds-swatch__token">{item.token}</code>
                    </td>
                    <td className="ds-table__num">{value(item.token) || '…'}</td>
                    <td className="ds-table__role">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="ds-subhead">Kelas global</h3>

            <div className="ds-spec">
              <code className="ds-spec__name">.kicker</code>
              <p className="kicker">Pelayanan Katolik Shekinah</p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.headline</code>
              <p className="headline">Perjalanan iman yang mengubah kehidupan nyata.</p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.headline .headline--sm</code>
              <p className="headline headline--sm">Satu derajat di bawah judul section.</p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.subhead</code>
              <p className="subhead">
                Kalimat pendukung satu baris di bawah judul, memakai Amiri pada ukuran kecil.
              </p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.body-text</code>
              <p className="body-text">
                Teks isi. Shekinah mendampingi umat Katolik untuk mengenal Kristus secara pribadi
                dan menghidupi imannya dalam keseharian.
              </p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.micro</code>
              <p className="micro">Label kecil berspasi lebar</p>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.display</code>
              <p className="display">
                <span className="display__roman">Angka</span>{' '}
                <span className="display__italic">dan aksen</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section section--white ds-section" aria-labelledby="ds-tombol">
          <div className="shell">
            <p className="kicker">04</p>
            <p className="headline ds-section__title" id="ds-tombol">
              Tombol dan garis
            </p>
            <p className="ds-note">
              Bentuknya mengikuti Word on Fire: sudut tajam, huruf kecil berspasi lebar, bingkai
              1px, dan hover yang <em>membalik</em> isi dan garis — bukan mengangkat atau
              menggelapkan.
            </p>

            <div className="ds-row">
              <div className="ds-spec">
                <code className="ds-spec__name">.btn .btn--amber</code>
                <span className="btn btn--amber">Gabung Sekarang</span>
              </div>

              <div className="ds-spec">
                <code className="ds-spec__name">.btn .btn--outline</code>
                <span className="btn btn--outline">Lihat Semua</span>
              </div>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.btn .btn--ghost-cream</code>
              <div className="ds-on-dark">
                <span className="btn btn--ghost-cream">Di atas foto</span>
              </div>
            </div>

            <div className="ds-spec">
              <code className="ds-spec__name">.rule / .rule--amber</code>
              <hr className="rule" />
              <hr className="rule rule--amber" />
            </div>
          </div>
        </section>

        <section className="section ds-section" aria-labelledby="ds-token">
          <div className="shell">
            <p className="kicker">05</p>
            <p className="headline ds-section__title" id="ds-token">
              Tata letak dan gerak
            </p>

            <table className="ds-table">
              <tbody>
                {LAYOUT_TOKENS.map((item) => (
                  <tr key={item.token}>
                    <td>
                      <code className="ds-swatch__token">{item.token}</code>
                    </td>
                    <td className="ds-table__num">{value(item.token) || '…'}</td>
                    <td className="ds-table__role">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="ds-subhead">Breakpoint</h3>
            <table className="ds-table">
              <tbody>
                {BREAKPOINTS.map((item) => (
                  <tr key={item.at}>
                    <td className="ds-table__num">≤ {item.at}</td>
                    <td className="ds-table__role">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="ds-note ds-note--last">
              Halaman ini tidak tertaut dari mana pun. Tekan <kbd>Cmd</kbd> + <kbd>/</kbd> untuk
              menyembunyikan kembali tabnya di navbar.
            </p>
          </div>
        </section>
        </>
        )}
      </main>
    </>
  )
}
