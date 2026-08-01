import { useScrollPosition } from '../hooks/useScrollPosition'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import Stats from '../components/Stats'
import Differentiators from '../components/Differentiators'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import FinalCta from '../components/FinalCta'
import './Home.css'

export default function Home() {
  const scrollY = useScrollPosition()

  // One scroll value drives both effects.
  const scrolled = scrollY > 80
  const viewport = typeof window === 'undefined' ? 1 : window.innerHeight || 1
  const fade = Math.min(scrollY / (viewport * 0.75), 1)

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero fade={fade} />

      {/* Spacer holds open the viewport-height window onto the pinned hero.
          Hidden on mobile, where the hero sits in normal flow instead. */}
      <div className="hero-spacer" aria-hidden="true" />

      <main className="page-content">
        <ProblemSolution />
        <Stats />
        <Differentiators />
        <Programs />
        <Testimonials />
        <FinalCta />
      </main>
    </>
  )
}
