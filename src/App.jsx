import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'
import LandingOld from './pages/LandingOld'
import LandingNew from './pages/LandingNew'
import DesignSwitcher from './components/DesignSwitcher'

/** Reset scroll on navigation, and honour an in-page target passed via state. */
function ScrollToTop() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    const target = state?.scrollTo
    if (target) {
      // let the destination render before measuring its offset
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, state])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/*
        Two landing pages run side by side while the redesign is drafted:
        `LandingOld` is what's live today, `LandingNew` is the empty page it
        will grow into. DesignSwitcher flips between them and sits outside
        <Routes> so it survives the switch — without it /new is a dead end.

        `Home` is an older superseded design, kept at /legacy for reference
        only; it's deliberately not part of the switch.
      */}
      <DesignSwitcher />
      <Routes>
        <Route path="/" element={<LandingOld />} />
        <Route path="/new" element={<LandingNew />} />
        <Route path="/program/:slug" element={<ProgramPage />} />
        {/* alias, so links shared while this lived at /prototype still work */}
        <Route path="/prototype" element={<LandingOld />} />
        <Route path="/legacy" element={<Home />} />
        <Route path="*" element={<LandingOld />} />
      </Routes>
    </>
  )
}
