import flame from '../../assets/proto/flame.png'
import './CredibilityBand.css'

/**
 * Blocks 1 and 5 of Reference/Fixed Content Section.png — the same
 * composition twice: a serif claim on the left, the flame mark and three
 * figures on the right. `variant` only swaps the colourway and the phrase
 * that carries the italic.
 */
export default function CredibilityBand({ variant = 'light', stats, id }) {
  const isAmber = variant === 'amber'

  return (
    <section className={`cred cred--${variant}`} id={id}>
      <div className="proto-shell cred__inner">
        <p className="cred__claim">
          {isAmber ? (
            <>
              Komunitas <em>Resmi</em> di Bawah Naungan BPK PKK{' '}
            </>
          ) : (
            <>Lembaga Formasi Resmi di Bawah Naungan BPK PKK </>
          )}
          <strong>Keuskupan Agung Jakarta</strong>
        </p>

        <div className="cred__figures">
          {/* the mark only appears on the light band in the comp */}
          {!isAmber && (
            <img className="cred__mark" src={flame} alt="" aria-hidden="true" />
          )}

          {stats.map((stat) => (
            <div className="cred__stat" key={stat.label}>
              <span className="cred__value">{stat.value}</span>
              <span className="cred__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
