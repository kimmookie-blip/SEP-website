import Navbar from '../../components/new/Navbar'
import EventCountdown from '../../components/new/EventCountdown'
import UpcomingActivities from '../../components/new/UpcomingActivities'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import './Page.css'

// No PageHeader on this page — EventCountdown is the true opener, and its
// own h1 (see components/new/EventCountdown.jsx) carries the page's only
// heading instead of a separate masthead above it.

// UpcomingActivities' own default headline invites you toward the archive
// at /kegiatan with a "Lihat Semua Kegiatan" button — the right move on the
// landing page, but this page already *is* the full upcoming list, so
// there's nowhere further for that button to point (`cta={false}` drops
// it). This replaces it with what used to be PageHeader's title + subhead
// here, now framing the table directly instead of a header above the fold.
const TABLE_HEADLINE =
  'Yang akan segera berlangsung. Kegiatan terdekat, lalu jadwal lengkapnya — semua ada di bawah ini.'

/**
 * /kegiatan/mendatang — EventCountdown leads, then UpcomingActivities for
 * the full schedule. Both already pull from `upcomingKegiatan()` in
 * data/kegiatan.js, so this page never drifts from the same table already
 * shown on the landing page.
 */
export default function KegiatanMendatang() {
  return (
    <>
      <Navbar solid />

      <main className="page">
        <EventCountdown id="terdekat" />

        <UpcomingActivities id="jadwal" headline={TABLE_HEADLINE} cta={false} />

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
