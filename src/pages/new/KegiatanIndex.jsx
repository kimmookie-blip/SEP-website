import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/new/Navbar'
import PostCard from '../../components/new/PostCard'
import FinalCta from '../../components/new/FinalCta'
import Footer from '../../components/new/Footer'
import { allKegiatan, featuredKegiatan, kegiatanCategories } from '../../data/kegiatan'
import { formatTanggal } from '../../data/format'
import './Page.css'
import './KegiatanIndex.css'

// Edit copy here; the posts themselves live in data/kegiatan.js.
// Verbatim from "Kegiatan Shekinah Content Guide.md" §Homepage Section.
const HEAD = {
  kicker: 'Shekinah Events',
  // One italic word, matching the emphasis device the rest of the site's
  // headlines use (Hero, FinalCta, SocialProof, ...).
  title: (
    <>
      Ada Selalu Ruang untuk <em>Bertumbuh</em>
    </>
  ),
  subhead:
    'Temukan berbagai doa bersama, retret, pendalaman iman, seminar, dan komunitas yang dirancang untuk menemani perjalanan iman Anda.',
}

const ALL = 'Semua'

/** /kegiatan — the blog index the landing page's activity sections feed into. */
export default function KegiatanIndex() {
  const [filter, setFilter] = useState(ALL)

  const categories = kegiatanCategories()
  const featured = featuredKegiatan()

  // The featured story is only pulled out of the grid on the unfiltered view;
  // once a category is chosen the grid should show everything that matches.
  const posts =
    filter === ALL
      ? allKegiatan().filter((item) => item.slug !== featured?.slug)
      : allKegiatan().filter((item) => item.category === filter)

  return (
    <>
      <Navbar solid />

      <main className="page">
        {/* Bespoke to this page rather than the shared PageHeader — centred
            eyebrow+headline+subhead, per the sample header layout given for
            /kegiatan. */}
        <header className="new-kegiatan-hero">
          <div className="shell new-kegiatan-hero__inner">
            <p className="kicker new-kegiatan-hero__kicker">{HEAD.kicker}</p>
            <h1 className="new-kegiatan-hero__title">{HEAD.title}</h1>
            <p className="subhead new-kegiatan-hero__sub">{HEAD.subhead}</p>
          </div>
        </header>

        <section className="new-kegiatan section">
          <div className="shell">
            {filter === ALL && featured && (
              <article className="new-kegiatan__featured">
                <Link to={`/kegiatan/${featured.slug}`} className="new-kegiatan__featured-link">
                  <div className="new-kegiatan__featured-media">
                    {featured.cover ? (
                      <img src={featured.cover} alt="" />
                    ) : (
                      <span className="new-kegiatan__placeholder" aria-hidden="true" />
                    )}
                  </div>

                  <div className="new-kegiatan__featured-body">
                    <p className="new-kegiatan__featured-meta">
                      {formatTanggal(featured.date)} · {featured.category}
                    </p>
                    <h2 className="new-kegiatan__featured-title">{featured.title}</h2>
                    <p className="new-kegiatan__featured-excerpt">{featured.excerpt}</p>
                    <span className="new-kegiatan__featured-more">
                      Baca selengkapnya <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            )}

            {/* "Semua" stays put as the one fixed anchor; the rest scroll
                sideways as a single row instead of wrapping, so a long
                category list never pushes the grid below it down the page. */}
            <div className="new-kegiatan__filters" role="group" aria-label="Saring menurut kategori">
              <button
                type="button"
                className={`new-kegiatan__chip new-kegiatan__chip--pinned ${filter === ALL ? 'is-active' : ''}`}
                aria-pressed={filter === ALL}
                onClick={() => setFilter(ALL)}
              >
                {ALL}
              </button>

              <div className="new-kegiatan__filters-scroll">
                {categories
                  .filter((category) => category !== ALL)
                  .map((category) => (
                    <button
                      type="button"
                      key={category}
                      className={`new-kegiatan__chip ${filter === category ? 'is-active' : ''}`}
                      aria-pressed={filter === category}
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </button>
                  ))}
              </div>
            </div>

            {posts.length > 0 ? (
              <div className="new-kegiatan__grid">
                {posts.map((item) => (
                  <PostCard item={item} key={item.slug} />
                ))}
              </div>
            ) : (
              <p className="new-kegiatan__empty">
                Belum ada kegiatan pada kategori ini. Coba kategori lain.
              </p>
            )}
          </div>
        </section>

        <FinalCta id="mulai" />
      </main>

      <Footer />
    </>
  )
}
