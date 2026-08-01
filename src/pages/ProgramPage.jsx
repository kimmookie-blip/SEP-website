import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FinalCta from '../components/FinalCta'
import { getProgram } from '../data/programs'
import './ProgramPage.css'

/**
 * Shared stub for all three program routes. This is where the detail that
 * §3 requirement 1 keeps OFF the landing page belongs: session breakdowns,
 * module theory (Kitab Suci A–F), parish lists.
 */
export default function ProgramPage() {
  const { slug } = useParams()
  const program = getProgram(slug)

  if (!program) {
    return (
      <>
        {/* no hero on this page, so the navbar is permanently in its solid state */}
        <Navbar solid />
        <main className="prog">
          <div className="shell center">
            <h1 className="prog__title">Program tidak ditemukan</h1>
            <p className="body-text">
              Halaman yang Anda cari tidak tersedia.{' '}
              <Link to="/" className="prog__back-link">
                Kembali ke beranda
              </Link>
              .
            </p>
          </div>
        </main>
        <FinalCta />
      </>
    )
  }

  return (
    <>
      <Navbar solid />

      <main className="prog">
        <div className="shell">
          {/* state, not a hash — ScrollToTop in App.jsx does the scrolling */}
          <Link to="/" state={{ scrollTo: 'program' }} className="prog__back">
            <span aria-hidden="true">←</span> Kembali ke beranda
          </Link>

          <p className="kicker prog__kicker">{program.tab}</p>
          <h1 className="prog__title">{program.title}</h1>
          <p className="subhead prog__focus">{program.focus}</p>

          <div className="prog__rule" />

          <p className="body-text prog__blurb">{program.blurb}</p>

          <section className="prog__placeholder">
            <h2 className="prog__placeholder-title">Detail Materi</h2>
            <p className="body-text">
              Bagian ini disiapkan untuk rincian lengkap program — susunan
              pertemuan, materi per sesi, jadwal angkatan, dan daftar paroki
              pelaksana.
            </p>
            <p className="prog__todo">
              [ Placeholder — isi konten detail program di{' '}
              <code>src/pages/ProgramPage.jsx</code> ]
            </p>
          </section>
        </div>
      </main>

      <FinalCta />
    </>
  )
}
