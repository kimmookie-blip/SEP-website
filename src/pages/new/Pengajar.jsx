import Navbar from '../../components/new/Navbar'
import KoordinatorPendamping from '../../components/new/KoordinatorPendamping'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { kepalaSekolah, timPengajar } from '../../data/pengajar'
import './Page.css'
import './Pengajar.css'

// Edit copy here; the people themselves live in data/pengajar.js. No
// PageHeader on this page — the Kepala Sekolah feature below is the opener,
// so its own heading carries the page's H1 instead of a separate masthead.

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

/** /pengajar — the full team behind the landing page's heritage section. */
export default function Pengajar() {
  return (
    <>
      <Navbar solid />

      <main className="page">
        {/* Current leadership, featured alone — the page's true opener, with
            no PageHeader above it (see the import comment). Black rather
            than the palette's usual deep-blue: a deliberate one-off for
            this single feature, not a new shared token. */}
        <section className="new-teacher-lead" aria-labelledby="kepala-sekolah">
          <div className="shell new-teacher-lead__inner">
            <div className="new-teacher-lead__photo">
              {kepalaSekolah.image ? (
                <img
                  src={kepalaSekolah.image}
                  alt={kepalaSekolah.name}
                  style={getImageStyle(kepalaSekolah)}
                />
              ) : (
                <span className="new-teacher__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="new-teacher-lead__copy">
              <span className="new-teacher-lead__role">
                {kepalaSekolah.role}
                {kepalaSekolah.period && ` · ${kepalaSekolah.period}`}
              </span>
              {/* the page's only h1 — see the import comment above */}
              <h1 className="new-teacher-lead__name" id="kepala-sekolah">
                {kepalaSekolah.name}
              </h1>
              <p className="new-teacher-lead__bio">{kepalaSekolah.bio}</p>
            </div>
          </div>
        </section>

        <section className="new-teachers section section--cream" aria-label="Tim Pengajar">
          <div className="shell">
            <div className="new-teachers__grid new-teachers__grid--small">
              {timPengajar.map((person) => (
                <figure className="new-teacher new-teacher--small" key={person.id}>
                  <div className="new-teacher__photo">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        style={getImageStyle(person)}
                      />
                    ) : (
                      <span className="new-teacher__placeholder" aria-hidden="true" />
                    )}
                  </div>

                  <figcaption className="new-teacher__caption">
                    <span className="new-teacher__role">{person.role}</span>
                    <span className="new-teacher__name">{person.name}</span>
                    <span className="new-teacher__bio">{person.bio}</span>
                  </figcaption>
                </figure>
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
