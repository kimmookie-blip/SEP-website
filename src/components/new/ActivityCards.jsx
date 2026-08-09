import { Link } from 'react-router-dom'
import { latestKegiatan } from '../../data/kegiatan'
import { formatTanggal } from '../../data/format'
import './ActivityCards.css'

// "Aneka Kegiatan" — a photo gallery of what the community actually does.
// Layout follows the gallery on demo.divi-pixel.com/church/: three even
// columns, level rather than staggered.
//
// The three tiles are the three most recent stories in data/kegiatan.js, and
// each one links to its post — so this section stays in step with /kegiatan
// instead of holding its own copy. Tiles whose entry has no `cover` yet fall
// back to a grey box rather than a broken image.
const COUNT = 3

const CTA_LABEL = 'Lihat Semua Kegiatan'

/**
 * Sits directly after the Hero: a fast, visual answer to "what actually
 * happens here?" before the page starts asking for anything.
 */
export default function ActivityCards({ id }) {
  const items = latestKegiatan(COUNT)

  return (
    <section className="new-acards section section--cream" id={id} aria-label="Aneka kegiatan">
      <div className="new-acards__grid">
        {items.map((item) => (
          <figure className="new-acard" key={item.slug}>
            <Link to={`/kegiatan/${item.slug}`} className="new-acard__link">
              {item.cover ? (
                <img className="new-acard__photo" src={item.cover} alt="" loading="lazy" />
              ) : (
                <span className="new-acard__placeholder" aria-hidden="true" />
              )}

              <figcaption className="new-acard__caption">
                <span className="new-acard__date">{formatTanggal(item.date)}</span>
                <span className="new-acard__title">{item.title}</span>
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>

      <div className="new-acards__cta-wrap center">
        <Link to="/kegiatan" className="btn btn--outline">
          {CTA_LABEL}
        </Link>
      </div>
    </section>
  )
}
