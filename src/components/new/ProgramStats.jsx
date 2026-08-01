import './ProgramStats.css'

// Running-year figures for the regular programmes.
//
// The `label` strings come from the legacy database and are RIGID: never
// rename, translate, or expand "KEP", "BLKEP", "SEP", "Seminar" (CLAUDE.md /
// version_beta.md §3 requirement 2). Replace `value` with the live API
// response once it's wired up; `YEAR` and the note below are static copy.
const YEAR = 'Tahun 2026'
const HEADLINE = 'Program Reguler'

const STATS = [
  { label: 'KEP', value: '55' },
  { label: 'BLKEP', value: '19' },
  { label: 'SEP', value: '3' },
  { label: 'Seminar', value: '8' },
]

const NOTE =
  'Catatan: Singkatan di atas merupakan data angkatan berjalan untuk program Kursus Evangelisasi Pribadi (KEP/SEP) dan Bina Lanjut Pendalaman Iman (BLKEP).'

/**
 * Renders ONLY the database-supplied figures. Kept as its own component so
 * the explanatory note stays outside it, as §3 requirement 2 demands — the
 * note must never be fed through the database-reading path.
 */
function StatFigures({ stats }) {
  return (
    <div className="new-pstats__figures">
      {stats.map((stat) => (
        <div className="new-pstats__figure" key={stat.label}>
          <span className="new-pstats__value">{stat.value}</span>
          <span className="new-pstats__label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

/** Sits under Upcoming Activities — the running year at a glance. */
export default function ProgramStats({ id }) {
  return (
    <section className="new-pstats section section--cream" id={id}>
      <div className="shell">
        <p className="new-pstats__year">{YEAR}</p>
        <p className="new-pstats__headline">{HEADLINE}</p>

        <StatFigures stats={STATS} />

        {/* static — deliberately outside StatFigures */}
        <p className="new-pstats__note">{NOTE}</p>
      </div>
    </section>
  )
}
