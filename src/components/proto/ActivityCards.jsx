import { activities } from '../../data/prototype'
import photo from '../../assets/proto/kegiatan.png'
import './ActivityCards.css'

/**
 * Block 4 of Reference/Fixed Content Section.png — "Aneka Kegiatan", three
 * framed photo cards with the caption sitting on a scrim over the image.
 */
export default function ActivityCards() {
  return (
    <section className="acards" id="pengumuman">
      <h2 className="acards__heading">Aneka Kegiatan</h2>

      <div className="acards__grid">
        {activities.map((item) => (
          <article className="acard" key={item.id}>
            <div className="acard__frame">
              <img className="acard__photo" src={photo} alt="" />

              <div className="acard__caption">
                <p className="acard__date">{item.date}</p>
                <h3 className="acard__title">{item.title}</h3>
                <p className="acard__blurb">{item.blurb}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
