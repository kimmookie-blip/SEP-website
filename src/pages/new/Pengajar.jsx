import Navbar from '../../components/new/Navbar'
import KoordinatorPendamping from '../../components/new/KoordinatorPendamping'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { kepalaSekolah, romoModerator, timPengajar } from '../../data/pengajar'
import './Page.css'
import './Pengajar.css'

// Edit copy here; the people themselves live in data/pengajar.js. No
// PageHeader on this page — the Romo Moderator band below is the opener,
// so its own heading carries the page's H1 instead of a separate masthead.
const MODERATOR_KICKER = 'Romo Moderator'
const MODERATOR_TITLE = 'Pendamping Rohani SEP Shekinah'
const PENGURUS_TITLE = 'Pengurus Harian'

// Kepala Sekolah leads the same grid as everyone else — first, same card
// size and crop treatment as the rest of the Pengurus Harian.
const pengurus = [kepalaSekolah, ...timPengajar]

// Per-person crop overrides — `imagePosition` shifts which part of the
// source photo shows through the object-fit: cover box, `imageScale` zooms
// in around that same point (transform-origin follows imagePosition so the
// zoom centers on the framing we picked, not the image's raw center).
//
// The position rides in a custom property rather than going straight onto
// `object-position`, because these values are tuned for the tall desktop
// card. The compact mobile card is a short, wide box where the same values
// would crop through a face, so Pengajar.css resets the property at that
// breakpoint — which an inline `object-position` would have outranked.
function getImageStyle(person) {
  if (!person.imagePosition && !person.imageScale) return undefined
  const position = person.imagePosition || 'center top'
  return {
    '--crop': position,
    ...(person.imageScale && { transform: `scale(${person.imageScale})`, transformOrigin: position }),
  }
}

/** One portrait card — shared by the moderator band and the pengurus grid. */
function PersonCard({ person, className = '', lazy = true }) {
  return (
    <figure className={`new-teacher ${className}`}>
      <div className="new-teacher__photo">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            loading={lazy ? 'lazy' : undefined}
            style={getImageStyle(person)}
          />
        ) : (
          <span className="new-teacher__placeholder" aria-hidden="true" />
        )}
      </div>

      <figcaption className="new-teacher__caption">
        <span className="new-teacher__role">
          {person.role}
          {person.period && ` · ${person.period}`}
        </span>
        <span className="new-teacher__name">{person.name}</span>
        {person.bio && <span className="new-teacher__bio">{person.bio}</span>}
      </figcaption>
    </figure>
  )
}

/** /pengajar — Romo Moderator, then the full Pengurus Harian. */
export default function Pengajar() {
  return (
    <>
      <Navbar solid />

      <main className="page">
        {/* Romo Moderator, four across — the page's true opener, with no
            PageHeader above it (see the copy comment). Black rather than
            the palette's usual deep-blue: a deliberate one-off for this
            single band, not a new shared token. */}
        <section className="new-teacher-lead" aria-labelledby="romo-moderator">
          <div className="shell">
            <header className="new-teacher-lead__head">
              <span className="new-teacher-lead__role">{MODERATOR_KICKER}</span>
              {/* the page's only h1 */}
              <h1 className="new-teacher-lead__name" id="romo-moderator">
                {MODERATOR_TITLE}
              </h1>
            </header>

            <div className="new-teacher-lead__grid">
              {romoModerator.map((person) => (
                <PersonCard person={person} className="new-teacher--dark" lazy={false} key={person.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="new-teachers section section--cream" aria-labelledby="pengurus-harian">
          <div className="shell">
            <div className="page-section-head">
              <h2 className="page-section-head__title" id="pengurus-harian">
                {PENGURUS_TITLE}
              </h2>
            </div>

            <div className="new-teachers__grid new-teachers__grid--small">
              {pengurus.map((person) => (
                <PersonCard
                  person={person}
                  className="new-teacher--small"
                  lazy={person !== kepalaSekolah}
                  key={person.id}
                />
              ))}
            </div>
          </div>
        </section>

        <KoordinatorPendamping id="korpen" />

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
