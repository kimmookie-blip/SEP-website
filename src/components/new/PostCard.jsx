import { Link } from 'react-router-dom'
import { formatTanggal } from '../../data/format'
import './PostCard.css'

/**
 * One kegiatan card. Used by the /kegiatan grid, the "kegiatan lainnya" strip
 * at the foot of a post, and the related list on a program page — so the card
 * only ever takes an item from data/kegiatan.js and never its own copy.
 *
 * `compact` drops the excerpt for the tighter three-up strips.
 */
export default function PostCard({ item, compact = false }) {
  return (
    <article className="new-post-card">
      <Link to={`/kegiatan/${item.slug}`} className="new-post-card__link">
        <div className="new-post-card__media">
          {item.cover ? (
            <img className="new-post-card__photo" src={item.cover} alt="" loading="lazy" />
          ) : (
            // grey box rather than a broken image while documentation is pending
            <span className="new-post-card__placeholder" aria-hidden="true" />
          )}

          {item.upcoming && <span className="new-post-card__flag">Akan datang</span>}
        </div>

        <div className="new-post-card__body">
          <p className="new-post-card__meta">
            <span>{formatTanggal(item.date)}</span>
            <span className="new-post-card__dot" aria-hidden="true">
              ·
            </span>
            <span>{item.category}</span>
          </p>

          <h3 className="new-post-card__title">{item.title}</h3>

          {!compact && <p className="new-post-card__excerpt">{item.excerpt}</p>}

          <span className="new-post-card__more">
            Baca selengkapnya <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  )
}
