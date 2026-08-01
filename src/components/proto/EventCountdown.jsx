import { useEffect, useState } from 'react'
import { featuredEvent, upcomingEvents } from '../../data/prototype'
import './EventCountdown.css'

const pad = (n) => String(n).padStart(2, '0')

/** Hours : minutes : seconds until `target`, clamped at zero. */
function remaining(target) {
  const ms = Math.max(0, target - Date.now())
  const total = Math.floor(ms / 1000)
  return {
    // the comp's clock has no days field, so hours cap at two digits
    h: pad(Math.min(99, Math.floor(total / 3600))),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
  }
}

/**
 * Block 3 of Reference/Fixed Content Section.png — a navy bar carrying the
 * next event and a live countdown, sitting on an azure bar of the two events
 * after it.
 */
export default function EventCountdown() {
  const target = new Date(featuredEvent.startsAt).getTime()
  const [time, setTime] = useState(() => remaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <section className="ecount" id="kegiatan">
      <div className="ecount__feature">
        <div className="proto-shell ecount__feature-inner">
          {/* the comp shows a grey box here — real thumbnail lands later */}
          <div className="ecount__thumb" aria-hidden="true" />

          <div className="ecount__meta">
            <p className="ecount__eyebrow">{featuredEvent.eyebrow}</p>
            <h2 className="ecount__title">{featuredEvent.title}</h2>
          </div>

          <p className="ecount__clock">
            <span>{time.h}</span>
            <span className="ecount__colon">:</span>
            <span>{time.m}</span>
            <span className="ecount__colon">:</span>
            <span>{time.s}</span>
          </p>
        </div>
      </div>

      <div className="ecount__upcoming">
        <div className="proto-shell ecount__upcoming-inner">
          {upcomingEvents.map((event, i) => (
            <div className="ecount__next" key={i}>
              <p className="ecount__date">{event.date}</p>
              <p className="ecount__next-title">{event.title}</p>
            </div>
          ))}

          <a className="ecount__all" href="#kegiatan">
            Semua kegiatan <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
