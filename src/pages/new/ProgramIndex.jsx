import { Link } from 'react-router-dom'
import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import JourneyOfGrowth from '../../components/new/JourneyOfGrowth'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { programs } from '../../data/programs'
import './Page.css'
import './ProgramIndex.css'

// Edit copy here; the programme entries themselves live in data/programs.js.
const HEAD = {
  kicker: 'Program',
  title: 'Lima jalur pembinaan, satu perjalanan.',
  subhead:
    'Setiap orang memulai dari titik yang berbeda. Jalur di bawah disusun bertahap — pilih yang paling dekat dengan posisimu sekarang, bukan yang terdengar paling lengkap.',
}

/** /program — the index the landing page's "Lihat Semua Program" points to. */
export default function ProgramIndex() {
  const ordered = [...programs].sort((a, b) => a.order - b.order)

  return (
    <>
      <Navbar solid />

      <main className="page">
        <PageHeader kicker={HEAD.kicker} title={HEAD.title} subhead={HEAD.subhead} />

        {/* id="program" so JourneyOfGrowth's built-in "#program" CTA below
            lands back on this grid instead of dangling */}
        <section className="new-program-index section" id="program">
          <div className="shell">
            <div className="new-program-index__grid">
              {ordered.map((program) => (
                <article className="new-program-card" key={program.slug}>
                  <Link to={`/program/${program.slug}`} className="new-program-card__link">
                    <span className="new-program-card__number">
                      {String(program.order).padStart(2, '0')}
                    </span>

                    <span className="new-program-card__tab">{program.tab}</span>
                    <h2 className="new-program-card__title">{program.title}</h2>
                    <span className="new-program-card__focus">{program.focus}</span>
                    <span className="new-program-card__blurb">{program.blurb}</span>

                    <span className="new-program-card__more">
                      Lihat Detail <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* the growth path this index maps onto — written for the landing page
            but a better fit here, where the reader is choosing a jalur */}
        <JourneyOfGrowth id="perjalanan" />

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
