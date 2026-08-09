import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/new/Navbar'
import PageHeader from '../components/new/PageHeader'
import PostCard from '../components/new/PostCard'
import FinalCta from '../components/new/FinalCta'
import Footer from '../components/new/Footer'
import { getProgram } from '../data/programs'
import { kegiatanByProgram } from '../data/kegiatan'
import './new/Page.css'
import './ProgramPage.css'

const BACK = { to: '/program', label: 'Semua Program' }

/**
 * Detail for one jalur pembinaan. This is where the depth that version_beta.md
 * §3 requirement 1 keeps OFF the landing page belongs: how long the programme
 * runs, who it's for, and what it covers session by session.
 *
 * Both designs link here — the old landing page's program strip as well as
 * /new — so it uses the redesign's shell, which is the one that will remain.
 */
export default function ProgramPage() {
  const { slug } = useParams()
  const program = getProgram(slug)

  if (!program) {
    return (
      <>
        <Navbar solid />
        <main className="page">
          <div className="page-empty">
            <div className="shell center">
              <h1 className="page-empty__title">Program tidak ditemukan</h1>
              <p className="body-text">
                Halaman yang Anda cari tidak tersedia.{' '}
                <Link to="/program" className="page-empty__link">
                  Lihat semua program
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const related = kegiatanByProgram(program.slug)

  return (
    <>
      <Navbar solid />

      <main className="page">
        <PageHeader
          back={BACK}
          kicker={program.tab}
          title={program.title}
          subhead={program.focus}
        />

        <section className="prog section">
          <div className="shell prog__inner">
            <div className="prog__copy">
              <p className="prog__intro">{program.intro}</p>

              <h2 className="prog__heading">Yang Dipelajari</h2>
              <ol className="prog__outline">
                {program.outline.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ol>

              {/* the parish list and the full session-by-session schedule still
                  need to be supplied — this page is where they go, not the
                  landing page */}
              <p className="prog__todo">
                [ Menyusul — jadwal angkatan berjalan dan daftar paroki pelaksana. Isi di{' '}
                <code>src/data/programs.js</code> ]
              </p>
            </div>

            <dl className="prog__facts">
              <div className="prog__fact">
                <dt>Durasi</dt>
                <dd>{program.duration}</dd>
              </div>
              <div className="prog__fact">
                <dt>Untuk Siapa</dt>
                <dd>{program.audience}</dd>
              </div>
              <div className="prog__fact">
                <dt>Format</dt>
                <dd>{program.format}</dd>
              </div>
            </dl>
          </div>
        </section>

        {related.length > 0 && (
          <section className="prog-related section section--cream" aria-labelledby="kegiatan-terkait">
            <div className="shell">
              <div className="page-section-head">
                <h2 className="page-section-head__title" id="kegiatan-terkait">
                  Kegiatan terkait
                </h2>
                <Link to="/kegiatan" className="page-section-head__note">
                  Lihat semua kegiatan →
                </Link>
              </div>

              <div className="prog-related__grid">
                {related.slice(0, 3).map((item) => (
                  <PostCard item={item} key={item.slug} compact />
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
