import './UpcomingActivities.css'

// struktur-homepage-sep-shekinah.md §11 — edit copy here.
// Sample placeholder entries — replace with real activities/angkatan as they're scheduled.
// Layout (table, not cards) borrows from demo.divi-pixel.com/church/'s Events section.
const HEADLINE = 'Ambil langkah pertamamu bersama kami.'
const CTA_LABEL = 'Lihat Semua Kegiatan'

const COLUMNS = ['Tanggal', 'Kegiatan', 'Target Peserta', 'Lokasi', 'Status', '']

const ACTIVITIES = [
  {
    date: 'Segera diumumkan',
    name: 'KEP Angkatan Baru',
    audience: 'Umat umum',
    location: 'Paroki mitra terdekat',
    status: 'Pendaftaran dibuka',
  },
  {
    date: 'Segera diumumkan',
    name: 'Retret Penyembuhan Batin',
    audience: 'Semua tahap iman',
    location: 'Pusat Shekinah',
    status: 'Segera hadir',
  },
  {
    date: 'Segera diumumkan',
    name: 'Seminar Pengenalan Shekinah',
    audience: 'Pencari dan pemula',
    location: 'Online & tatap muka',
    status: 'Segera hadir',
  },
]

/** Section 11 — the concrete "next step" the whole page has been building toward. */
export default function UpcomingActivities({ id }) {
  return (
    <section className="new-activities section section--white" id={id}>
      <div className="shell">
        <div className="new-activities__head">
          <p className="headline new-activities__headline">{HEADLINE}</p>
          <a href="#semua-kegiatan" className="btn btn--outline">
            {CTA_LABEL}
          </a>
        </div>

        <div className="new-activities__table" role="table">
          <div className="new-activities__row new-activities__row--head" role="row">
            {COLUMNS.map((col) => (
              <span className="new-activities__cell" role="columnheader" key={col || 'action'}>
                {col}
              </span>
            ))}
          </div>

          {ACTIVITIES.map((activity) => (
            <div className="new-activities__row" role="row" key={activity.name}>
              <span className="new-activities__cell" role="cell" data-label="Tanggal">
                {activity.date}
              </span>
              <span className="new-activities__cell new-activities__cell--name" role="cell" data-label="Kegiatan">
                {activity.name}
              </span>
              <span className="new-activities__cell" role="cell" data-label="Target Peserta">
                {activity.audience}
              </span>
              <span className="new-activities__cell" role="cell" data-label="Lokasi">
                {activity.location}
              </span>
              <span className="new-activities__cell" role="cell" data-label="Status">
                <span className="new-activities__status">{activity.status}</span>
              </span>
              <a className="new-activities__cell new-activities__link" href="#daftar" role="cell">
                Lihat Detail <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
