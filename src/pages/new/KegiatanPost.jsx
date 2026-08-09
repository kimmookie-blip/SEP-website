import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/new/Navbar'
import PageHeader from '../../components/new/PageHeader'
import PostCard from '../../components/new/PostCard'
import Prose from '../../components/new/Prose'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { allKegiatan, getKegiatan } from '../../data/kegiatan'
import { formatTanggal } from '../../data/format'
import { getProgram } from '../../data/programs'
import './Page.css'
import './KegiatanPost.css'

const BACK = { to: '/kegiatan', label: 'Arsip Kegiatan' }
const RELATED_COUNT = 3

/** /kegiatan/:slug — one story, plus a way onward to the next one. */
export default function KegiatanPost() {
  const { slug } = useParams()
  const item = getKegiatan(slug)

  if (!item) {
    return (
      <>
        <Navbar solid />
        <main className="page">
          <div className="page-empty">
            <div className="shell center">
              <h1 className="page-empty__title">Kegiatan tidak ditemukan</h1>
              <p className="body-text">
                Halaman yang Anda cari tidak tersedia.{' '}
                <Link to="/kegiatan" className="page-empty__link">
                  Lihat semua kegiatan
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const program = getProgram(item.program)
  const related = allKegiatan()
    .filter((other) => other.slug !== item.slug)
    .slice(0, RELATED_COUNT)

  return (
    <>
      <Navbar solid />

      <main className="page">
        <PageHeader back={BACK} kicker={`${formatTanggal(item.date)} · ${item.category}`} title={item.title} />

        <article className="new-post section">
          <div className="shell">
            <div className="new-post__cover">
              {item.cover ? (
                <img src={item.cover} alt="" />
              ) : (
                <span className="new-post__cover-placeholder" aria-hidden="true">
                  Dokumentasi menyusul
                </span>
              )}
            </div>

            {/* Ringkasan — struktur artikel §5 di Content Guide. Optional:
                entri lama yang belum diperbarui dengan `summary` cukup
                melompat langsung ke Isi Artikel. */}
            {item.summary && <p className="new-post__summary">{item.summary}</p>}

            <Prose blocks={item.body} />

            {/* Yang Akan Dipelajari — §7 */}
            {item.learnPoints?.length > 0 && (
              <div className="new-post__learn">
                <p className="micro">Yang Akan Dipelajari</p>
                <ul className="new-post__learn-list">
                  {item.learnPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Informasi Acara — §8. Tanggal/Lokasi/Kategori selalu ada;
                Waktu, Status, dan Target Peserta tampil kalau datanya ada,
                jadi kegiatan yang sudah lewat maupun yang akan datang sama-
                sama memakai satu blok fakta ini. */}
            <dl className="new-post__facts">
              <div className="new-post__fact">
                <dt>Tanggal</dt>
                <dd>{formatTanggal(item.date)}</dd>
              </div>
              {item.time && (
                <div className="new-post__fact">
                  <dt>Waktu</dt>
                  <dd>{item.time}</dd>
                </div>
              )}
              {item.location && (
                <div className="new-post__fact">
                  <dt>Lokasi</dt>
                  <dd>{item.location}</dd>
                </div>
              )}
              <div className="new-post__fact">
                <dt>Kategori</dt>
                <dd>{item.category}</dd>
              </div>
              {item.upcoming && item.status && (
                <div className="new-post__fact">
                  <dt>Status</dt>
                  <dd>{item.status}</dd>
                </div>
              )}
              {item.upcoming && item.audience && (
                <div className="new-post__fact">
                  <dt>Target Peserta</dt>
                  <dd>{item.audience}</dd>
                </div>
              )}
            </dl>

            {/* CTA Daftar — §9 */}
            {item.ctaText && (
              <div className="new-post__cta">
                <p>{item.ctaText}</p>
                <a href="#daftar" className="btn btn--amber">
                  Daftar Sekarang
                </a>
              </div>
            )}

            {program && (
              <p className="new-post__program">
                Kegiatan ini bagian dari{' '}
                <Link to={`/program/${program.slug}`}>{program.title}</Link>.
              </p>
            )}

            {/* Quiet, not the event's own amber CTA above — this isn't about
                *this* kegiatan, it's a standing reminder to log in so future
                ones don't get missed. Shows on every post, so it isn't tied
                to any `item` field. */}
            <div className="new-post__login-nudge">
              <p>Masuk sebagai anggota supaya kamu selalu diingatkan setiap ada kegiatan baru.</p>
              <a href="#masuk" className="new-post__login-link">
                Masuk anggota <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="new-post-related section section--cream" aria-labelledby="lainnya">
            <div className="shell">
              <div className="page-section-head">
                <h2 className="page-section-head__title" id="lainnya">
                  Kegiatan lainnya
                </h2>
                <Link to="/kegiatan" className="page-section-head__note">
                  Lihat semua →
                </Link>
              </div>

              <div className="new-post-related__grid">
                {related.map((other) => (
                  <PostCard item={other} key={other.slug} compact />
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
