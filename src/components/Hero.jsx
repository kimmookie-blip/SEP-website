import './Hero.css'

/**
 * Recreates Reference/Fixed Hero Section.png.
 *
 * `fade` (0 → 1) is driven by scroll in App.jsx: the content dims as the page
 * body slides up over the pinned photo. Copy is verbatim from
 * version_beta.md §Section 1.
 */
export default function Hero({ fade = 0 }) {
  const scrollToNext = () => {
    document.getElementById('mengapa')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Pembuka">
      <div className="hero__overlay" />

      <div className="hero__inner" style={{ opacity: 1 - fade }}>
        <p className="hero__kicker">Sekolah Evangelisasi Pribadi</p>

        <h1 className="hero__title">
          Bertumbuh Bersama
          <br />
          <em>Sahabat Seiman,</em> Perbarui
          <br />
          Hidup Sehari-hari
        </h1>

        <p className="hero__sub">
          Wadah awam Katolik untuk mengalami perjumpaan pribadi dengan Kristus.
          Belajar berdampak bagi sesama, fokus pada perubahan hidup nyata.
        </p>

        <a href="#daftar" className="btn btn--ghost-cream hero__cta">
          Gabung Komunitas Sekarang
        </a>

        <button type="button" className="hero__scroll" onClick={scrollToNext}>
          <span className="hero__arrow" aria-hidden="true">
            ↓
          </span>
          <span className="hero__scroll-label">Scroll Kebawah</span>
        </button>
      </div>
    </section>
  )
}
