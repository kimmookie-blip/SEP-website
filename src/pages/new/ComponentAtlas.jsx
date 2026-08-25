import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import './Page.css'
import './ComponentAtlas.css'

/* ============================================================
   Halaman internal. Melengkapi /design-system: yang itu membaca
   TOKEN (warna, tipografi, tombol) hidup dari styles.css, halaman
   ini memetakan KOMPONEN — berkas mana dipakai di rute mana. Data
   di bawah disalin dari App.jsx dan isi impor tiap halaman; kalau
   sebuah rute atau komponen berubah, perbarui array-nya di sini.
   ============================================================ */

const TRACKS = [
  {
    dir: 'components/new/',
    status: 'Aktif',
    tone: 'new',
    role: '14 komponen redesain, plus Navbar & Hero sendiri',
    note: 'Dipakai /new dan sembilan halaman di belakang menu nav',
  },
  {
    dir: 'components/proto/',
    status: 'Lama, tayang',
    tone: 'proto',
    role: '4 komponen tambahan untuk halaman lama',
    note: 'Dipakai / bersama Navbar & Hero dari direktori atas',
  },
  {
    dir: 'components/ (atas)',
    status: 'Legacy',
    tone: 'legacy',
    role: '7 komponen desain lama, plus Navbar/Hero bersama',
    note: 'Navbar/Hero dipakai / & /legacy; sisanya hanya /legacy',
  },
]

const LANDING_ROUTES = [
  {
    route: '/',
    file: 'LandingOld.jsx',
    source: 'components/ + proto/',
    detail: 'Navbar, Hero, CredibilityBand, ProgramStrip, EventCountdown, ActivityCards',
  },
  {
    route: '/new',
    file: 'LandingNew.jsx',
    source: 'components/new/',
    detail: '11 section — lihat kolom components/new/ di bawah',
  },
  {
    route: '/prototype',
    file: '→ LandingOld.jsx',
    source: 'alias',
    detail: 'Dipertahankan untuk tautan lama yang sudah dibagikan',
  },
  {
    route: '/legacy',
    file: 'Home.jsx',
    source: 'components/ (atas)',
    detail:
      'Navbar, Hero, ProblemSolution, Stats, Differentiators, Programs, Testimonials, FinalCta — referensi saja',
  },
  {
    route: '*',
    file: '→ LandingOld.jsx',
    source: 'fallback',
    detail: 'Tidak ada halaman 404 khusus',
  },
]

const NAV_PAGES = [
  {
    route: '/tentang-kami',
    file: 'pages/new/TentangKami.jsx',
    items: ['PageHeader', 'CatholicLegitimacy', 'HowShekinahHelps', 'FinalCta'],
  },
  {
    route: '/program',
    file: 'pages/new/ProgramIndex.jsx',
    items: ['PageHeader', 'JourneyOfGrowth', 'FinalCta'],
  },
  {
    route: '/program/:slug',
    file: 'pages/ProgramPage.jsx',
    items: ['PageHeader', 'PostCard', 'FinalCta'],
  },
  {
    route: '/pengajar',
    file: 'pages/new/Pengajar.jsx',
    items: ['FinalCta'],
    empty: 'Daftar romo & pengajar dirender inline dari data/pengajar.js, tanpa kartu khusus.',
  },
  {
    route: '/kegiatan',
    file: 'pages/new/KegiatanIndex.jsx',
    items: ['PostCard', 'FinalCta'],
  },
  {
    route: '/kegiatan/mendatang',
    file: 'pages/new/KegiatanMendatang.jsx',
    items: ['EventCountdown', 'UpcomingActivities', 'FinalCta'],
  },
  {
    route: '/kegiatan/:slug',
    file: 'pages/new/KegiatanPost.jsx',
    items: ['PageHeader', 'PostCard', 'Prose', 'FinalCta'],
  },
  {
    route: '/pengumuman',
    file: 'pages/new/PengumumanIndex.jsx',
    items: [],
    empty: 'Hanya Navbar + Footer + daftar dari data/pengumuman.js — tidak ada FinalCta.',
  },
  {
    route: '/pengumuman/:slug',
    file: 'pages/new/PengumumanPost.jsx',
    items: ['Prose'],
  },
  {
    route: '/component-atlas',
    file: 'pages/new/ComponentAtlas.jsx',
    items: ['PageHeader'],
    internal: true,
    empty: 'Halaman ini. Tidak ditautkan — dibuka lewat menu Shift+S.',
  },
  {
    route: '/design-system',
    file: 'pages/new/DesignSystem.jsx',
    items: ['PageHeader'],
    internal: true,
    empty: 'Tab navbar-nya tersembunyi (Cmd+/); juga ada di menu Shift+S.',
  },
]

const DIRECTORIES = [
  {
    dir: 'components/new/',
    tone: 'new',
    used: '22 berkas — jalur aktif',
    files: [
      { name: 'Navbar', used: 'chrome' },
      { name: 'Hero', used: '/new' },
      { name: 'Footer', used: 'chrome' },
      { name: 'PageHeader', used: '4 halaman' },
      { name: 'FinalCta', used: '8 halaman' },
      { name: 'PostCard', used: '3 halaman' },
      { name: 'Prose', used: '2 halaman' },
      { name: 'SocialProof', used: '/new' },
      { name: 'ProgramOverview', used: '/new' },
      { name: 'Founders', used: '/new' },
      { name: 'ActivityCards', used: '/new' },
      { name: 'ProgramStats', used: '/new' },
      { name: 'Faq', used: '/new' },
      { name: 'UpcomingActivities', used: '2 rute' },
      { name: 'EventCountdown', used: '/kegiatan/mendatang' },
      { name: 'JourneyOfGrowth', used: '/program' },
      { name: 'CatholicLegitimacy', used: '/tentang-kami' },
      { name: 'HowShekinahHelps', used: '/tentang-kami' },
      { name: 'AudienceSegments', used: 'tidak dipakai', orphan: true },
      { name: 'BeliefShift', used: 'tidak dipakai', orphan: true },
      { name: 'ClearingDoubts', used: 'tidak dipakai', orphan: true },
      { name: 'ProblemAwareness', used: 'tidak dipakai', orphan: true },
    ],
    footnote: null,
  },
  {
    dir: 'components/proto/',
    tone: 'proto',
    used: '4 berkas — hanya untuk /',
    files: [
      { name: 'CredibilityBand', used: '/' },
      { name: 'ProgramStrip', used: '/' },
      { name: 'EventCountdown', used: '/' },
      { name: 'ActivityCards', used: '/' },
    ],
    footnote:
      'Nama sama dengan dua berkas di new/ (ActivityCards, EventCountdown) — implementasi berbeda, tidak boleh disatukan.',
  },
  {
    dir: 'components/ (atas)',
    tone: 'legacy',
    used: '10 berkas — /legacy + chrome bersama',
    files: [
      { name: 'Navbar', used: '/ & /legacy' },
      { name: 'Hero', used: '/ & /legacy' },
      { name: 'DesignSwitcher', used: 'global' },
      { name: 'ScrollToTopButton', used: 'global' },
      { name: 'DevMenu', used: 'global' },
      { name: 'ProblemSolution', used: '/legacy' },
      { name: 'Stats', used: '/legacy' },
      { name: 'Differentiators', used: '/legacy' },
      { name: 'Programs', used: '/legacy' },
      { name: 'Testimonials', used: '/legacy' },
      { name: 'FinalCta', used: '/legacy' },
    ],
    footnote: null,
  },
]

const HOOKS = [
  {
    file: 'useScrollPosition.js',
    role: 'Satu listener scroll ber-rAF untuk seluruh app — jangan tambah listener kedua',
    used: 'LandingOld.jsx, LandingNew.jsx',
  },
  {
    file: 'useDesignSystemTab.js',
    role: 'Toggle Cmd+/ untuk menampilkan tab navbar tersembunyi ke /design-system',
    used: 'components/new/Navbar.jsx',
  },
]

const DATA_FILES = [
  { file: 'programs.js', role: 'KEP, BLKEP, SEP, Pembinaan Intensif, dst.', used: 'ProgramOverview, ProgramIndex, ProgramPage, KegiatanPost' },
  { file: 'kegiatan.js', role: 'Arsip & jadwal kegiatan mendatang', used: 'UpcomingActivities, Kegiatan*, ProgramPage' },
  { file: 'pengajar.js', role: 'Romo pembina & tim pengajar', used: 'Founders, Pengajar.jsx, TentangKami.jsx' },
  { file: 'pengumuman.js', role: 'Pengumuman resmi', used: 'PengumumanIndex/Post' },
  { file: 'stats.js', role: 'Label statistik TETAP: KEP, BLKEP, SEP, Seminar', used: 'komponen statistik di kedua landing' },
  { file: 'format.js', role: 'Pemformat tanggal bersama', used: 'Kegiatan* & Pengumuman*' },
  { file: 'prototype.js', role: 'Data khusus halaman lama (credibilityLight/Amber)', used: 'LandingOld.jsx' },
]

const TONE_LABEL = { new: 'Baru', proto: 'Lama', legacy: 'Legacy' }

function TrackTag({ tone }) {
  return <span className={`ca-tag ca-tag--${tone}`}>{TONE_LABEL[tone]}</span>
}

export default function ComponentAtlas() {
  return (
    <>
      <Navbar solid />

      <main className="page ca">
        <PageHeader
          kicker="Internal"
          title="Peta Komponen"
          subhead="Setiap komponen React di situs ini, dikelompokkan menurut direktori dan rute yang benar-benar memakainya. Untuk token warna, tipografi, dan tombol, lihat /design-system — halaman ini fokus pada peta rute dan komponennya."
        />

        <section className="section ca-section" aria-labelledby="ca-jalur">
          <div className="shell">
            <p className="kicker">01</p>
            <p className="headline ca-section__title" id="ca-jalur">
              Tiga jalur berdampingan
            </p>
            <p className="ca-note">
              Redesain berjalan sambil situs lama tetap tayang, jadi ada tiga pohon
              komponen yang sengaja terpisah — <code>components/new/</code> tidak
              mengimpor apa pun dari dua lainnya, bahkan Navbar dan Hero digandakan,
              bukan dibagi.
            </p>

            <div className="ca-track-list">
              {TRACKS.map((t) => (
                <div className={`ca-track ca-track--${t.tone}`} key={t.dir}>
                  <code className="ca-track__dir">{t.dir}</code>
                  <TrackTag tone={t.tone} />
                  <span className="ca-track__role">{t.role}</span>
                  <span className="ca-track__note">{t.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white ca-section" aria-labelledby="ca-rute">
          <div className="shell">
            <p className="kicker">02</p>
            <p className="headline ca-section__title" id="ca-rute">
              Tiga desain landing
            </p>
            <p className="ca-note">
              <code>DesignSwitcher</code>, <code>ScrollToTopButton</code>, dan{' '}
              <code>DevMenu</code> (menu ini sendiri) dipasang di luar{' '}
              <code>&lt;Routes&gt;</code> di <code>App.jsx</code>, jadi ketiganya
              tersedia di semua rute.
            </p>

            <table className="ca-table">
              <thead>
                <tr>
                  <th scope="col">Rute</th>
                  <th scope="col">Berkas</th>
                  <th scope="col">Sumber</th>
                  <th scope="col">Isi</th>
                </tr>
              </thead>
              <tbody>
                {LANDING_ROUTES.map((r) => (
                  <tr key={r.route}>
                    <td>
                      <code className="ca-table__route">{r.route}</code>
                    </td>
                    <td className="ca-table__num">{r.file}</td>
                    <td className="ca-table__num">{r.source}</td>
                    <td className="ca-table__role">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="ca-subhead">Sepuluh halaman di belakang menu nav / Shift+S</h3>
            <p className="ca-note">
              Semuanya memakai <code>components/new/</code>. Navbar tampil di semuanya
              dan Footer di semuanya kecuali dua halaman internal — tidak diulang di
              setiap kartu.
            </p>

            <div className="ca-page-grid">
              {NAV_PAGES.map((p) => (
                <div className={`ca-page-card${p.internal ? ' ca-page-card--internal' : ''}`} key={p.route}>
                  <p className="ca-page-card__route">{p.route}</p>
                  <span className="ca-page-card__file">{p.file}</span>
                  {p.items.length > 0 && (
                    <ul>
                      {p.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {p.empty && <p className="ca-page-card__empty">{p.empty}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ca-section" aria-labelledby="ca-direktori">
          <div className="shell">
            <p className="kicker">03</p>
            <p className="headline ca-section__title" id="ca-direktori">
              Setiap komponen, per direktori
            </p>
            <p className="ca-note">
              Dicoret = didefinisikan tapi tidak diimpor di mana pun saat ini —
              konten yang ditunda, bukan bug.
            </p>

            <div className="ca-dir-grid">
              {DIRECTORIES.map((col) => (
                <div className={`ca-dir-col ca-dir-col--${col.tone}`} key={col.dir}>
                  <code className="ca-dir-col__title">{col.dir}</code>
                  <p className="ca-dir-col__used">{col.used}</p>
                  <ul className="ca-dir-list">
                    {col.files.map((f) => (
                      <li key={f.name} className={f.orphan ? 'is-orphan' : ''}>
                        <span className="ca-dir-list__name">{f.name}</span>
                        <span className="ca-dir-list__used">{f.used}</span>
                      </li>
                    ))}
                  </ul>
                  {col.footnote && <p className="ca-page-card__empty">{col.footnote}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white ca-section" aria-labelledby="ca-infra">
          <div className="shell">
            <p className="kicker">04</p>
            <p className="headline ca-section__title" id="ca-infra">
              Infrastruktur bersama
            </p>
            <p className="ca-note">
              Tidak terikat satu desain — dipakai lintas jalur, jadi mengubahnya
              berdampak ke lebih dari satu halaman.
            </p>

            <h3 className="ca-subhead">Hooks</h3>
            <table className="ca-table">
              <thead>
                <tr>
                  <th scope="col">Berkas</th>
                  <th scope="col">Fungsi</th>
                  <th scope="col">Dipakai oleh</th>
                </tr>
              </thead>
              <tbody>
                {HOOKS.map((h) => (
                  <tr key={h.file}>
                    <td className="ca-table__num">{h.file}</td>
                    <td className="ca-table__role">{h.role}</td>
                    <td className="ca-table__role">{h.used}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="ca-subhead">Sumber data (src/data/*.js)</h3>
            <table className="ca-table">
              <thead>
                <tr>
                  <th scope="col">Berkas</th>
                  <th scope="col">Isi</th>
                  <th scope="col">Dibaca halaman</th>
                </tr>
              </thead>
              <tbody>
                {DATA_FILES.map((d) => (
                  <tr key={d.file}>
                    <td className="ca-table__num">{d.file}</td>
                    <td className="ca-table__role">{d.role}</td>
                    <td className="ca-table__role">{d.used}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="ca-note ca-note--last">
              Halaman ini tidak tertaut dari mana pun. Tekan <kbd>Shift</kbd> +{' '}
              <kbd>S</kbd> untuk membuka kembali menunya.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
