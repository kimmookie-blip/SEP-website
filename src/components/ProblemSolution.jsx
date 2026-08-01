import './ProblemSolution.css'

/** Section 2 — Jalur Masalah & Solusi (The "Why"). */
export default function ProblemSolution() {
  return (
    <section className="section ps" id="mengapa">
      <div className="shell">
        {/* D5 — heading left, nothing centered. Breaks the run of centered
            headlines and gives the page compositional variety. */}
        <div className="grid-12">
          <h2 className="ps__headline">
            Merasa Lelah Dengan Rutinitas Iman Formalitas?
          </h2>
        </div>

        <hr className="rule ps__divide" />

        {/* D6 — each column separated by a rule across its top, not by fills */}
        <div className="grid-12 ps__grid">
          <div className="ps__col ps__col--problem">
            <span className="micro">Masalah</span>
            <p className="ps__text">
              Iman terasa sebatas rutinitas harian, hambar, dan dijalani sendiri
              tanpa arah.
            </p>
          </div>

          <div className="ps__col ps__col--solution">
            <span className="micro micro--amber">Solusi</span>
            <p className="ps__text ps__text--solution">
              Hidup kembali bermakna dan bersemangat saat dijalani bersama
              komunitas sahabat seiman yang saling mendukung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
