import { useScrollPosition } from '../hooks/useScrollPosition'
import Navbar from '../components/new/Navbar'
import Hero from '../components/new/Hero'
import SocialProof from '../components/new/SocialProof'
import ProgramOverview from '../components/new/ProgramOverview'
import Founders from '../components/new/Founders'
import UpcomingActivities from '../components/new/UpcomingActivities'
import ActivityCards from '../components/new/ActivityCards'
import ProgramStats from '../components/new/ProgramStats'
import Faq from '../components/new/Faq'
import FinalCta from '../components/new/FinalCta'
import Footer from '../components/new/Footer'
import './LandingNew.css'

/**
 * The new landing page. Section order follows
 * SEP-Shekinah-Homepage-Structure.md's psychological flow (Hero →
 * Testimonial → Journey → Audience → Program → Founders → FAQ → Final CTA).
 * EventCountdown ("Upcoming Event") used to close out this flow, but a
 * countdown to the next KEP cohort fits a program's own page better than
 * the homepage — see ProgramIndex.jsx, same reasoning JourneyOfGrowth
 * already moved there for.
 *
 * This page is a summary. Depth lives on the five pages behind the nav menu —
 * /tentang-kami, /program, /pengajar, /kegiatan, /pengumuman — and the
 * sections below feed from the same src/data/*.js arrays those pages read,
 * so the two never drift apart.
 *
 * Section layouts (not colour — the palette stays version_beta.md's) take
 * inspiration from https://demo.divi-pixel.com/church/: ProgramOverview as
 * a numbered dark-band list, UpcomingActivities as a table, and
 * Faq as a plain arrow-list.
 *
 * Components for sections the newer spec drops — CatholicLegitimacy,
 * ProblemAwareness, BeliefShift, HowShekinahHelps, ClearingDoubts — are
 * still in components/new/ but no longer rendered. Their content is either
 * folded elsewhere (legitimacy → Hero's trust bar) or deferred.
 *
 * Each section component takes its copy from constants at the top of its
 * own file — edit those, not the JSX layout, for day-to-day content changes.
 */
export default function LandingNew() {
  const scrollY = useScrollPosition()

  const scrolled = scrollY > 80
  const viewport = typeof window === 'undefined' ? 1 : window.innerHeight || 1
  const fade = Math.min(scrollY / (viewport * 0.75), 1)

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero fade={fade} scrollY={scrollY} />

      {/* holds the window open over the pinned Hero — same scroll-over
          reveal as the old design (see pages/Home.css) */}
      <div className="new-hero-spacer" aria-hidden="true" />

      <main className="landing-new">
        {/* ported from the old design. The navbar no longer scrolls to these
            ids — every menu item is a page now — so they exist only for the
            in-page CTAs that remain, like SocialProof's "#kegiatan". */}
        <ActivityCards id="galeri" />
        <SocialProof id="cerita" />
        <ProgramOverview id="program" />
        <Founders id="warisan" />
        <UpcomingActivities id="kegiatan" />
        <ProgramStats id="reguler" />
        <Faq id="faq" />
        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
