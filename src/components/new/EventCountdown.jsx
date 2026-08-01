import { useEffect, useState } from 'react'
import './EventCountdown.css'

// Ported from the old design's EventCountdown block. Deliberately duplicated
// rather than imported: components/new/ shares nothing with components/proto/
// so the redesign can't regress the live page — see CLAUDE.md.
//
// Set EVENT_STARTS_AT to a real ISO date once an angkatan is scheduled, e.g.
// '2026-08-19T18:00:00+07:00'. While it's null the clock counts down from a
// fixed placeholder offset so the bar demonstrates live behaviour.
const EVENT_STARTS_AT = null
const PLACEHOLDER_OFFSET_MS = (19 * 3600 + 20 * 60 + 15) * 1000

const FEATURED = {
  eyebrow: 'Angkatan terdekat',
  title: 'KEP St. Anna, Duren Sawit',
}

const UPCOMING = [
  { id: 'a', date: '19 Agustus', title: 'KEP St. Anna, Duren Sawit' },
  { id: 'b', date: '19 Agustus', title: 'KEP St. Anna, Duren Sawit' },
]

const ALL_EVENTS_LABEL = 'Semua kegiatan'

const pad = (n) => String(n).padStart(2, '0')

/** Hours : minutes : seconds until `target`, clamped at zero. */
function remaining(target) {
  const ms = Math.max(0, target - Date.now())
  const total = Math.floor(ms / 1000)
  return {
    // no days field in this clock, so hours cap at two digits
    h: pad(Math.min(99, Math.floor(total / 3600))),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
  }
}

/**
 * A short two-band strip: the next event with a live countdown on navy,
 * over an azure bar carrying the two events after it.
 */
export default function EventCountdown({ id }) {
  // resolved once, so the countdown doesn't restart on every render
  const [target] = useState(() =>
    EVENT_STARTS_AT ? new Date(EVENT_STARTS_AT).getTime() : Date.now() + PLACEHOLDER_OFFSET_MS
  )
  const [time, setTime] = useState(() => remaining(target))

  useEffect(() => {
    const tick = setInterval(() => setTime(remaining(target)), 1000)
    return () => clearInterval(tick)
  }, [target])

  return (
    <section className="new-ecount" id={id}>
      <div className="new-ecount__feature">
        <div className="shell new-ecount__feature-inner">
          {/* grey placeholder block — the project's convention for artwork
              that doesn't exist yet (--placeholder) */}
          <div className="new-ecount__thumb" aria-hidden="true" />

          <div className="new-ecount__meta">
            <p className="new-ecount__eyebrow">{FEATURED.eyebrow}</p>
            <h2 className="new-ecount__title">{FEATURED.title}</h2>
          </div>

          <p className="new-ecount__clock" aria-label="Hitung mundur menuju kegiatan">
            <span>{time.h}</span>
            <span className="new-ecount__colon">:</span>
            <span>{time.m}</span>
            <span className="new-ecount__colon">:</span>
            <span>{time.s}</span>
          </p>
        </div>
      </div>

      <div className="new-ecount__upcoming">
        <div className="shell new-ecount__upcoming-inner">
          {UPCOMING.map((event) => (
            <div className="new-ecount__next" key={event.id}>
              <p className="new-ecount__date">{event.date}</p>
              <p className="new-ecount__next-title">{event.title}</p>
            </div>
          ))}

          {/* placeholder — no events index route exists yet */}
          <a className="new-ecount__all" href="#semua-kegiatan">
            {ALL_EVENTS_LABEL} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
