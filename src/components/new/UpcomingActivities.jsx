import { Link } from 'react-router-dom'
import { upcomingKegiatan } from '../../data/kegiatan'
import { formatTanggal, formatTanggalBadge } from '../../data/format'
import './UpcomingActivities.css'

// Edit copy here; the rows come from the entries marked `upcoming: true` in
// data/kegiatan.js, so the schedule and the /kegiatan pages never disagree.
// One italic word, echoing the hero's emphasis device. This is the default
// `headline` — /kegiatan/mendatang passes its own (see the `headline` prop).
const DEFAULT_HEADLINE = (
  <>
    Ambil langkah <em>pertamamu</em> bersama kami.
  </>
)
const CTA_LABEL = 'Lihat Semua Kegiatan'

const COLUMNS = ['Tanggal', 'Kegiatan', 'Lokasi', 'Status', '']

const EMPTY = 'Belum ada kegiatan terjadwal. Pengumuman berikutnya menyusul.'

// data/kegiatan.js's `status` for an upcoming entry is always one of these
// two — registration open, or closing soon. Anything else falls back to the
// open/amber treatment rather than disappearing, so a typo in the data
// shows up as a wrongly-calm pill instead of a blank one.
const URGENT_STATUS = 'Hampir ditutup'

// Hand-drawn rather than an icon library — one glyph doesn't justify a new
// dependency (see CLAUDE.md's Animation & motion section on the same call
// for motion libraries). currentColor, so each usage sets its own colour.
function IconPin() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path
        d="M10 18s5.75-5.06 5.75-9.35a5.75 5.75 0 1 0-11.5 0C4.25 12.94 10 18 10 18Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.5" r="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// aria-label carries the full date ("6 September 2026") for screen readers;
// day/month/year are split into separate spans visually, which would
// otherwise read out as three disconnected fragments.
function DateBadge({ date }) {
  const { day, month, year } = formatTanggalBadge(date)
  return (
    <div className="new-activities__badge" aria-label={formatTanggal(date)}>
      <span className="new-activities__badge-month" aria-hidden="true">
        {month}
      </span>
      <span className="new-activities__badge-day" aria-hidden="true">
        {day}
      </span>
      <span className="new-activities__badge-year" aria-hidden="true">
        {year}
      </span>
    </div>
  )
}

function StatusPill({ status }) {
  return (
    <span className={`new-activities__status${status === URGENT_STATUS ? ' is-urgent' : ''}`}>
      {status}
    </span>
  )
}

/**
 * The concrete "next step" the whole page has been building toward.
 *
 * `headline` and `cta` let a page reframe the same table without forking it
 * — the landing page invites you toward the full archive; /kegiatan/mendatang
 * *is* the full upcoming list already, so it has nowhere further to point
 * and passes `cta={false}` instead.
 */
export default function UpcomingActivities({ id, headline = DEFAULT_HEADLINE, cta = true }) {
  const activities = upcomingKegiatan()

  return (
    <section className="new-activities section section--white" id={id}>
      <div className="shell">
        <div className="new-activities__head">
          <p className="headline new-activities__headline">{headline}</p>
          {cta && (
            <Link to="/kegiatan" className="btn btn--outline">
              {CTA_LABEL}
            </Link>
          )}
        </div>

        {activities.length > 0 ? (
          <>
            {/* ---------- desktop: table-like rows, still plain divs (role
                attributes carry the semantics — see CLAUDE.md on why this
                isn't a real <table>) ---------- */}
            <div className="new-activities__table" role="table" aria-label="Jadwal kegiatan mendatang">
              <div className="new-activities__row new-activities__row--head" role="row">
                {COLUMNS.map((col) => (
                  <span className="new-activities__cell" role="columnheader" key={col || 'action'}>
                    {col}
                  </span>
                ))}
              </div>

              {activities.map((activity) => (
                <div className="new-activities__row" role="row" key={activity.slug}>
                  <span className="new-activities__cell" role="cell">
                    <DateBadge date={activity.date} />
                  </span>

                  <span className="new-activities__cell new-activities__cell--name" role="cell">
                    <span className="new-activities__title">{activity.title}</span>
                    <span className="new-activities__excerpt">{activity.excerpt}</span>
                  </span>

                  <span className="new-activities__cell new-activities__meta" role="cell">
                    <IconPin />
                    {activity.location}
                  </span>

                  <span className="new-activities__cell" role="cell">
                    <StatusPill status={activity.status} />
                  </span>

                  <Link
                    className="new-activities__cell new-activities__link"
                    to={`/kegiatan/${activity.slug}`}
                    role="cell"
                  >
                    Lihat Detail <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* ---------- mobile: stacked cards, hidden on desktop by CSS.
                Rendered as its own list rather than reformatting the table
                above with breakpoints — the two shapes diverge enough
                (bordered card vs. table row, no excerpt here) that sharing
                markup meant fighting the cascade more than it saved. ---------- */}
            <ul className="new-activities__cards">
              {activities.map((activity) => (
                <li className="new-activities__card" key={activity.slug}>
                  <div className="new-activities__card-top">
                    <DateBadge date={activity.date} />
                    <StatusPill status={activity.status} />
                  </div>

                  <span className="new-activities__title">{activity.title}</span>

                  <span className="new-activities__meta">
                    <IconPin />
                    {activity.location}
                  </span>

                  <Link className="new-activities__link" to={`/kegiatan/${activity.slug}`}>
                    Lihat Detail <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="body-text">{EMPTY}</p>
        )}
      </div>
    </section>
  )
}
