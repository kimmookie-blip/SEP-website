import './FinalCta.css'

// SEP-Shekinah-Homepage-Structure.md §09 — edit copy here.
const HEADLINE = 'Perjalanan iman selalu dimulai dari satu langkah kecil.'

const SUPPORTING_COPY =
  'Kenali Kristus lebih dalam, bertumbuh bersama sahabat seiman, dan temukan cara menghidupi kabar baik dalam keseharian.'

/** Section 09 — closing conversion moment before the footer. */
export default function FinalCta({ id }) {
  return (
    <section className="new-final-cta section" id={id}>
      <div className="shell center">
        <p className="new-final-cta__headline">{HEADLINE}</p>
        <p className="new-final-cta__sub">{SUPPORTING_COPY}</p>

        <div className="new-final-cta__actions">
          <a href="#kegiatan" className="btn btn--amber">
            Lihat Kegiatan Terdekat
          </a>
          <a href="#kontak" className="btn btn--ghost-cream">
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}
