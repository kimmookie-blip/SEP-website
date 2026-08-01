import { stats } from '../data/stats'
import './Stats.css'

/**
 * Renders ONLY what the legacy database returns: a number and its rigid label
 * string. Nothing here may add, translate, or annotate a label — see
 * version_beta.md §3 requirement 2.
 */
function StatFigures({ items }) {
  return (
    <div className="stats__grid">
      {items.map((item) => (
        <div className="stats__item" key={item.label}>
          <span className="stats__value">{item.value}</span>
          <span className="stats__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/** Section 3 — Kredibilitas & Data Dinamis (Social Proof). */
export default function Stats() {
  return (
    <section className="section section--white stats" id="profil">
      <div className="shell">
        <div className="stats__head center">
          <p className="kicker">Rekam Jejak Pelayanan</p>
          {/* D2 — same words as the spec, split only for roman/italic styling */}
          <h2 className="display">
            <span className="display__roman">Jejak Langkah Transformatif</span>{' '}
            <span className="display__italic">Bersama Awam Katolik</span>
          </h2>
          <p className="subhead stats__subhead">
            Resmi di bawah naungan BPK PKK KAJ sejak 1988, melayani umat di
            puluhan paroki.
          </p>
        </div>

        <StatFigures items={stats} />

        {/*
          Static text, intentionally OUTSIDE StatFigures. The database component
          cannot carry this explanation — required by §3 requirement 2.
        */}
        <p className="stats__note">
          Catatan: Singkatan di atas merupakan data angkatan berjalan untuk
          program Kursus Evangelisasi Pribadi (KEP/SEP) dan Bina Lanjut
          Pendalaman Iman (BLKEP).
        </p>
      </div>
    </section>
  )
}
