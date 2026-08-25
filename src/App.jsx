import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'
import LandingOld from './pages/LandingOld'
import LandingNew from './pages/LandingNew'
import TentangKami from './pages/new/TentangKami'
import ProgramIndex from './pages/new/ProgramIndex'
import Pengajar from './pages/new/Pengajar'
import KegiatanIndex from './pages/new/KegiatanIndex'
import KegiatanMendatang from './pages/new/KegiatanMendatang'
import KegiatanPost from './pages/new/KegiatanPost'
import PengumumanIndex from './pages/new/PengumumanIndex'
import PengumumanPost from './pages/new/PengumumanPost'
import DesignSystem from './pages/new/DesignSystem'
import ComponentAtlas from './pages/new/ComponentAtlas'
import DesignSwitcher from './components/DesignSwitcher'
import ScrollToTopButton from './components/ScrollToTopButton'
import DevMenu from './components/DevMenu'

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
      <ScrollToTopButton />
      <DevMenu />
      <Routes>
        <Route path="/" element={<LandingOld />} />
        <Route path="/new" element={<LandingNew />} />

        {/*
          The five pages behind the nav menu, at clean top-level URLs. They
          belong to the redesign — each one renders components/new/ — but they
          sit outside /new because these are the addresses the site will keep
          once the old landing page is retired.
        */}
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/program" element={<ProgramIndex />} />
        <Route path="/program/:slug" element={<ProgramPage />} />
        <Route path="/pengajar" element={<Pengajar />} />
        {/*
          "Kegiatan" is a two-page section behind one nav item: /kegiatan is
          the archive of what has already run, /kegiatan/mendatang is what's
          coming. React Router ranks a static segment above a dynamic one, so
          /kegiatan/mendatang wins over /kegiatan/:slug regardless of order —
          but that also means `mendatang` is now a reserved slug and must not
          be used for a kegiatan entry in data/kegiatan.js.
        */}
        <Route path="/kegiatan" element={<KegiatanIndex />} />
        <Route path="/kegiatan/mendatang" element={<KegiatanMendatang />} />
        <Route path="/kegiatan/:slug" element={<KegiatanPost />} />
        <Route path="/pengumuman" element={<PengumumanIndex />} />
        <Route path="/pengumuman/:slug" element={<PengumumanPost />} />

        {/*
          Internal-only pages. Nothing links here in the normal run of the
          site: /design-system's navbar tab is hidden behind Cmd+/ (see
          hooks/useDesignSystemTab), and both routes are also reachable
          through DevMenu's Shift+S popup, mounted below. The routes
          themselves stay open so either URL can be shared directly.
        */}
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/component-atlas" element={<ComponentAtlas />} />

        {/* alias, so links shared while this lived at /prototype still work */}
        <Route path="/prototype" element={<LandingOld />} />
        <Route path="/legacy" element={<Home />} />
        <Route path="*" element={<LandingOld />} />
      </Routes>
    </>
  )
}
