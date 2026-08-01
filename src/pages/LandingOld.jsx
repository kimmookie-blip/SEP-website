import { useScrollPosition } from '../hooks/useScrollPosition'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CredibilityBand from '../components/proto/CredibilityBand'
import ProgramStrip from '../components/proto/ProgramStrip'
import EventCountdown from '../components/proto/EventCountdown'
import ActivityCards from '../components/proto/ActivityCards'
import { credibilityLight, credibilityAmber } from '../data/prototype'
import './Home.css'

/**
 * The current design, built to Reference/Fixed Content Section.png — the "old"
 * side of the DesignSwitcher while its replacement is drafted at /new.
 *
 * Navbar and Hero are the shipped components untouched. Everything below lives
 * in components/proto, so this route can be dropped as a unit once the new
 * landing page takes over.
 */
export default function LandingOld() {
  const scrollY = useScrollPosition()

  const scrolled = scrollY > 80
  const viewport = typeof window === 'undefined' ? 1 : window.innerHeight || 1
  const fade = Math.min(scrollY / (viewport * 0.75), 1)

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero fade={fade} />

      <div className="hero-spacer" aria-hidden="true" />

      <main className="page-content">
        {/* the navbar's "profil" link targets this band */}
        <CredibilityBand
          variant="light"
          id="profil"
          stats={credibilityLight.stats}
        />
        <ProgramStrip />
        <EventCountdown />
        <ActivityCards />
        <CredibilityBand variant="amber" stats={credibilityAmber.stats} />
      </main>
    </>
  )
}
