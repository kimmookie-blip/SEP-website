import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/new/Navbar'
import Prose from '../../components/new/Prose'
import Footer from '../../components/new/Footer'
import { allPengumuman, getPengumuman } from '../../data/pengumuman'
import { formatTanggal } from '../../data/format'
import './Page.css'
import './PengumumanPost.css'

const OTHERS_COUNT = 3

/**
 * /pengumuman/:slug — brochure first. The layout above the fold is the whole
 * point of this page: staff post a poster that already says most of what needs
 * saying, so the brochure is sized to the viewport and the written explanation
 * waits below it rather than competing for the first screen.
 */
export default function PengumumanPost() {
  const { slug } = useParams()
  const item = getPengumuman(slug)

  if (!item) {
    return (
      <>
        <Navbar solid />
        <main className="page">
          <div className="page-empty">
            <div className="shell center">
              <h1 className="page-empty__title">Pengumuman tidak ditemukan</h1>
              <p className="body-text">
                Halaman yang Anda cari tidak tersedia.{' '}
                <Link to="/pengumuman" className="page-empty__link">
                  Lihat semua pengumuman
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const others = allPengumuman()
    .filter((other) => other.slug !== item.slug)
    .slice(0, OTHERS_COUNT)

  // a CTA either points at another page on this site or at a placeholder
  // anchor; only the first should become a router link
  const ctaIsRoute = item.cta?.href?.startsWith('/')

  return (
    <>
      <Navbar solid />

      <main className="page">
        <section className="new-brosur">
          <div className="shell new-brosur__inner">
            {/* aspectRatio comes from the data so the box is reserved before
                the brochure loads and the page doesn't jump */}
            <div className="new-brosur__media" style={{ aspectRatio: item.brochureRatio }}>
              {item.brochure ? (
                <img src={item.brochure} alt={`Brosur ${item.title}`} />
              ) : (
                <span className="new-brosur__placeholder">Brosur menyusul</span>
              )}
            </div>

            <div className="new-brosur__aside">
              <Link to="/pengumuman" className="new-brosur__back">
                <span aria-hidden="true">←</span> Semua Pengumuman
              </Link>

              <p className="new-brosur__meta">
                {formatTanggal(item.date)} · {item.category}
              </p>

              <h1 className="new-brosur__title">{item.title}</h1>
              <p className="new-brosur__summary">{item.summary}</p>

              {item.cta &&
                (ctaIsRoute ? (
                  <Link to={item.cta.href} className="btn btn--amber new-brosur__cta">
                    {item.cta.label}
                  </Link>
                ) : (
                  <a href={item.cta.href} className="btn btn--amber new-brosur__cta">
                    {item.cta.label}
                  </a>
                ))}

              <p className="new-brosur__scroll" aria-hidden="true">
                Penjelasan lengkap di bawah ↓
              </p>
            </div>
          </div>
        </section>

        <section className="new-brosur-detail section section--white">
          <div className="shell new-brosur-detail__inner">
            <div className="new-brosur-detail__prose">
              <h2 className="new-brosur-detail__heading">Tentang pengumuman ini</h2>
              <Prose blocks={item.body} />
            </div>

            <dl className="new-brosur-detail__facts">
              {item.details.map((detail) => (
                <div className="new-brosur-detail__fact" key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {others.length > 0 && (
          <section className="new-brosur-others section section--cream" aria-labelledby="lainnya">
            <div className="shell">
              <div className="page-section-head">
                <h2 className="page-section-head__title" id="lainnya">
                  Pengumuman lainnya
                </h2>
                <Link to="/pengumuman" className="page-section-head__note">
                  Lihat semua →
                </Link>
              </div>

              <ul className="new-brosur-others__list">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link to={`/pengumuman/${other.slug}`} className="new-brosur-others__item">
                      <span className="new-brosur-others__date">{formatTanggal(other.date)}</span>
                      <span className="new-brosur-others__title">{other.title}</span>
                      <span className="new-brosur-others__arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
