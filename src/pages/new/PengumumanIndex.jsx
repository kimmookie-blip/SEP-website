import { useState } from 'react'
import Navbar from '../../components/new/Navbar'
import Footer from '../../components/new/Footer'
import { allPengumuman } from '../../data/pengumuman'
import { formatTanggal } from '../../data/format'
import './Page.css'
import './PengumumanIndex.css'

const EMPTY = 'Belum ada pengumuman yang dipasang.'

/**
 * /pengumuman — one announcement at a time.
 *
 * Deliberately the whole page: no masthead and no closing CTA, so the
 * brochure is the only thing competing for attention. Copy sits in a 1fr
 * column on the left, the brochure in a 2fr column on the right, and the
 * numbered pagination below steps between them.
 *
 * Sorted newest-first by allPengumuman(), so slide 1 is always the latest.
 */
export default function PengumumanIndex() {
  const items = allPengumuman()
  const [active, setActive] = useState(0)

  if (items.length === 0) {
    return (
      <>
        <Navbar solid />
        <main className="page">
          <div className="page-empty">
            <div className="shell center">
              <p className="body-text">{EMPTY}</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar solid />

      <main className="page new-pengumuman">
        <div className="shell">
          {/* The viewport clips; the track holds every slide side by side and
              is shifted one full width per step. Every slide stays mounted so
              the move animates, and so the browser doesn't re-fetch a
              brochure each time you page back to it. */}
          <div className="new-pengumuman__viewport">
            <div
              className="new-pengumuman__track"
              style={{ '--slide-index': active, '--slide-count': items.length }}
            >
              {items.map((item, i) => (
                <article
                  className="new-pengumuman__slide"
                  key={item.slug}
                  /* off-screen slides leave the accessibility tree, so a
                     screen reader announces one announcement at a time —
                     the same thing the layout promises visually */
                  aria-hidden={i === active ? undefined : true}
                >
                  <div className="new-pengumuman__copy">
                    <p className="new-pengumuman__date">{formatTanggal(item.date)}</p>
                    <h1 className="new-pengumuman__title">{item.title}</h1>
                    <p className="new-pengumuman__summary">{item.summary}</p>
                  </div>

                  {/* ratio comes from the data so the box is the brochure's
                      own shape before the image finishes loading */}
                  <div
                    className="new-pengumuman__media"
                    style={{ aspectRatio: item.brochureRatio }}
                  >
                    {item.brochure ? (
                      <img src={item.brochure} alt={`Brosur ${item.title}`} />
                    ) : (
                      <span className="new-pengumuman__placeholder">Brosur menyusul</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <nav className="new-pengumuman__pagination" aria-label="Halaman pengumuman">
              <button
                type="button"
                className="new-pengumuman__step"
                onClick={() => setActive((i) => i - 1)}
                disabled={active === 0}
                aria-label="Pengumuman sebelumnya"
              >
                <span aria-hidden="true">←</span>
              </button>

              {items.map((item, i) => (
                <button
                  type="button"
                  key={item.slug}
                  className={`new-pengumuman__page${i === active ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active ? 'true' : undefined}
                  aria-label={`Pengumuman ${i + 1} dari ${items.length}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                type="button"
                className="new-pengumuman__step"
                onClick={() => setActive((i) => i + 1)}
                disabled={active === items.length - 1}
                aria-label="Pengumuman berikutnya"
              >
                <span aria-hidden="true">→</span>
              </button>
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
