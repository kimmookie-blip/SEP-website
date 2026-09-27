import { Link } from 'react-router-dom'
import { romoPembina } from '../../data/pengajar'
import './Founders.css'

// Reworked from a "meet the teachers" carousel into a trust & credibility
// section — institutional heritage, not a staff directory. Edit copy here.
const EYEBROW = 'Warisan yang menjadi fondasi'
// One italic word, echoing the hero's emphasis device.
const HEADLINE = (
  <>
    Berakar dari pendampingan <em>rohani</em> sejak 1988.
  </>
)
const BODY =
  'Shekinah bertumbuh dari sebuah perjalanan panjang dalam mendampingi umat mengenal Kristus secara lebih pribadi dan menghidupi iman dalam keseharian. Semangat yang dirintis para Romo pendiri terus menjadi fondasi dalam setiap program dan pendampingan Shekinah hingga hari ini.'

// Always data/pengajar.js's first entry — same source /pengajar reads, so
// the two never disagree on who founded Shekinah.
const FOUNDER = romoPembina[0]

const CTA_LABEL = 'Lihat Semua Pengajar'

/**
 * Trust & credibility, not a teacher directory — the institution's
 * spiritual heritage, anchored by its founder's portrait. No carousel: this
 * used to page through all of romoPembina, but the full list now lives on
 * /tentang-kami (see TentangKami.jsx's "Romo Pembina" section), not here.
 */
export default function Founders({ id }) {
  return (
    <section className="new-founders section section--cream" id={id}>
      <div className="shell new-founders__inner">
        <div className="new-founders__intro">
          <p className="kicker">{EYEBROW}</p>
          <p className="headline new-founders__headline">{HEADLINE}</p>
          <p className="body-text new-founders__narrative">{BODY}</p>

          <Link to="/pengajar" className="btn btn--outline new-founders__cta">
            {CTA_LABEL}
          </Link>
        </div>

        <figure className="new-founders__card">
          <div className="new-founders__photo">
            <img src={FOUNDER.image} alt={FOUNDER.name} />
          </div>

          <figcaption className="new-founders__caption">
            <span className="new-founders__role">{FOUNDER.role}</span>
            <span className="new-founders__name">{FOUNDER.name}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
