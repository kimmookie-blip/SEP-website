import { Link } from 'react-router-dom'
import './FinalCta.css'

// SEP-Shekinah-Homepage-Structure.md §09 — edit copy here.
// One italic word, echoing the hero's emphasis device.
const HEADLINE = (
  <>
    Perjalanan iman selalu dimulai dari satu <em>langkah kecil</em>.
  </>
)

const SUPPORTING_COPY =
  'Kenali Kristus lebih dalam, bertumbuh bersama sahabat seiman, dan temukan cara menghidupi kabar baik dalam keseharian.'

/** Section 09 — closing conversion moment before the footer. */
export default function FinalCta({ id }) {
  return (
    <section className="new-final-cta section" id={id}>
      <div className="shell center">
        <p className="new-final-cta__headline">{HEADLINE}</p>
        <p className="new-final-cta__sub">{SUPPORTING_COPY}</p>

        {/* this section closes every page, not just the landing one, so the
            first action is a route; #kontak stays an anchor because it's the
            footer directly below, present on every page */}
        <div className="new-final-cta__actions">
          <Link to="/kegiatan" className="btn btn--amber">
            Lihat Kegiatan Terdekat
          </Link>
          <a href="#kontak" className="btn btn--ghost-cream">
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}
