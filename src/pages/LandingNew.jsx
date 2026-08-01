import { useScrollPosition } from '../hooks/useScrollPosition'
import Navbar from '../components/new/Navbar'
import Hero from '../components/new/Hero'
import SocialProof from '../components/new/SocialProof'
import ProgramOverview from '../components/new/ProgramOverview'
import Founders from '../components/new/Founders'
import UpcomingActivities from '../components/new/UpcomingActivities'
import EventCountdown from '../components/new/EventCountdown'
import ActivityCards from '../components/new/ActivityCards'
import ProgramStats from '../components/new/ProgramStats'
import Faq from '../components/new/Faq'
import FinalCta from '../components/new/FinalCta'
import Footer from '../components/new/Footer'
import './LandingNew.css'

/**
 * The new landing page. Section order follows
 * SEP-Shekinah-Homepage-Structure.md's nine-step psychological flow
 * (Hero → Testimonial → Journey → Audience → Program → Founders →
 * Upcoming Event → FAQ → Final CTA), NOT the older 14-section
 * struktur-homepage-sep-shekinah.md.
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
        {/* ported from the old design; also gives the navbar's "pengumuman"
            link a real destination on this page */}
        <ActivityCards id="pengumuman" />
        <SocialProof id="cerita" />
        <ProgramOverview id="program" />
        <Founders id="pengajar" />
        <UpcomingActivities id="kegiatan" />
        <ProgramStats id="reguler" />
        <EventCountdown id="terdekat" />
        <Faq id="faq" />
        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
