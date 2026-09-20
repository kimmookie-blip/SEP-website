import { korpenGroups } from '../../data/korpen'
import './KoordinatorPendamping.css'

// Edit copy here; the parish/korpen pairs live in data/korpen.js.
const HEADLINE = 'Koordinator Pendamping'
const NOTE =
  'Setiap paroki mitra didampingi satu Koordinator Pendamping (Korpen) yang menjadi penghubung antara Shekinah dan parokinya. Cari parokimu di bawah untuk tahu siapa yang mendampingi.'

/**
 * Directory of parish coordinators, grouped by dekenat — the whole list is
 * visible at once, flowed into newspaper columns so 67 rows don't run the
 * page off the bottom. Text only on purpose: 34 people cover those rows and
 * nine of them already appear with photos in the Pengurus Harian grid above,
 * so cards here would repeat the same faces several times over.
 */
export default function KoordinatorPendamping({ id }) {
  return (
    <section className="new-korpen section section--white" id={id} aria-labelledby="korpen-title">
      <div className="shell">
        <div className="page-section-head">
          <h2 className="page-section-head__title" id="korpen-title">
            {HEADLINE}
          </h2>
          <p className="page-section-head__note">{NOTE}</p>
        </div>

        <div className="new-korpen__columns">
          {korpenGroups.map((group) => (
            <section className="new-korpen__group" key={group.id} aria-labelledby={`korpen-${group.id}`}>
              <h3 className="new-korpen__area" id={`korpen-${group.id}`}>
                {group.area}
                <span className="new-korpen__tally">{group.entries.length}</span>
              </h3>

              <ul className="new-korpen__list">
                {group.entries.map((entry) => (
                  <li className="new-korpen__row" key={`${group.id}-${entry.paroki}`}>
                    <span className="new-korpen__paroki">{entry.paroki}</span>
                    <span className="new-korpen__name">{entry.korpen}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
