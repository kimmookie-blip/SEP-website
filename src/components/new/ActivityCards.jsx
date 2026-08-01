import photo from '../../assets/kegiatan.png'
import './ActivityCards.css'

// "Aneka Kegiatan" — a photo gallery of what the community actually does.
// Layout follows the gallery on demo.divi-pixel.com/church/: three columns,
// each stacking one portrait and one landscape tile, with the middle column's
// order flipped so the rows sit offset from each other.
//
// PLACEHOLDER CONTENT: every tile shares one stock photo, and the titles are
// generic activity types rather than real events. Replace `date`/`title` and
// give each item its own `image` once real documentation is available.
//
// One tile per column. The middle one is taller and hangs lower, which keeps
// the reference gallery's offset rhythm without the section running long.
const ACTIVITIES = [
  { id: 'rosary', date: '12 Mei 2026', title: 'Rosary Night' },
  { id: 'retret', date: '18 Juni 2026', title: 'Retret Keluarga' },
  { id: 'kep', date: '2 Juli 2026', title: 'Pembukaan KEP' },
]

/**
 * Sits directly after the Hero: a fast, visual answer to "what actually
 * happens here?" before the page starts asking for anything.
 */
export default function ActivityCards({ id }) {
  return (
    <section className="new-acards section section--cream" id={id} aria-label="Aneka kegiatan">
      <div className="new-acards__grid">
        {ACTIVITIES.map((item) => (
          <figure className="new-acard" key={item.id}>
            <img className="new-acard__photo" src={photo} alt="" loading="lazy" />

            <figcaption className="new-acard__caption">
              <span className="new-acard__date">{item.date}</span>
              <span className="new-acard__title">{item.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
