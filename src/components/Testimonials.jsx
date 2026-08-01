import './Testimonials.css'

/** Section 6 — Bukti Nyata (Dual-Age Testimonials). */
const QUOTES = [
  {
    quote:
      'Di tengah penat karier, komunitas ini memberi energi positif dan ruang aman untuk bercerita.',
    author: 'Alumni Muda, 27 Tahun',
  },
  {
    quote:
      'Kursus ini mengubah cara saya berkomunikasi dengan pasangan. Relasi keluarga dipulihkan.',
    author: 'Alumni Dewasa, 45 Tahun',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--cream tst" id="pengumuman">
      <div className="shell">
        {/* D2, second and final use — same words, roman/italic split only */}
        <h2 className="display center tst__headline">
          <span className="display__roman">Yang Dialami</span>{' '}
          <span className="display__italic">Bersama SEP Shekinah</span>
        </h2>

        <div className="tst__grid">
          {QUOTES.map((item) => (
            <figure className="tst__card" key={item.author}>
              <span className="tst__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="tst__quote">{item.quote}</blockquote>
              <figcaption className="tst__author">— {item.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
