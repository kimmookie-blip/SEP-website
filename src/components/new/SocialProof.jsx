import './SocialProof.css'

// SEP-Shekinah-Homepage-Structure.md §02 — edit copy here.
// PLACEHOLDER PEOPLE: `name` and `role` are literal placeholders, not real
// participants. Fill them in — and add a `photo` per person — once names,
// parishes and permissions are confirmed (see the doc's "Supporting Proof").
// `program` is the badge at the head of each column, the equivalent of the
// company logo in the reference layout.
const HEADLINE = 'Perjalanan iman yang mengubah kehidupan nyata.'

const SUPPORTING_COPY =
  'Cerita dari mereka yang menjalani prosesnya sendiri — dari ragu di awal hingga menemukan cara menghidupi iman dalam keseharian.'

const TESTIMONIALS = [
  {
    id: 'sep',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'SEP',
    quote:
      'Dulu saya mengira evangelisasi hanya tugas Romo. Setelah mengikuti pembinaan, saya memahami bahwa saya dapat membawa kasih Tuhan melalui keluarga dan pekerjaan saya.',
  },
  {
    id: 'kep',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'KEP',
    quote:
      'Saya datang karena ingin mengenal Kristus lebih dalam. Yang saya temukan bukan hanya materi, tetapi juga komunitas yang mendampingi saya.',
  },
  {
    id: 'blks',
    name: 'Nama Peserta',
    role: 'Paroki menyusul',
    program: 'BLKS',
    quote:
      'Awalnya saya takut karena belum memahami Kitab Suci. Ternyata prosesnya sangat bertahap dan mudah diikuti.',
  },
]

const INVITE_HEADLINE = 'Ingin merasakan pengalaman yang sama?'
const INVITE_COPY =
  'Cara termudah untuk memulai adalah hadir langsung. Lihat retret, seminar, dan pertemuan pengenalan terdekat dari kami.'
const INVITE_CTA_LABEL = 'Lihat Acara Terdekat'

/**
 * Section 02 — social proof, straight after the Hero. Columns divided by
 * hairlines rather than cards, so the quotes carry the section themselves.
 */
export default function SocialProof({ id }) {
  return (
    <section className="new-testimonials section section--white" id={id}>
      <div className="shell">
        <div className="new-testimonials__head">
          <p className="new-testimonials__headline">{HEADLINE}</p>
          <p className="new-testimonials__intro">{SUPPORTING_COPY}</p>
        </div>

        <div className="new-testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <figure className="new-testimonials__item" key={item.id}>
              <div className="new-testimonials__person">
                {/* grey placeholder block, the project's convention for
                    artwork that doesn't exist yet (--placeholder) */}
                <span className="new-testimonials__avatar" aria-hidden="true" />

                <span className="new-testimonials__identity">
                  <span className="new-testimonials__name">{item.name}</span>
                  <span className="new-testimonials__role">{item.role}</span>
                </span>

                <span className="new-testimonials__program">{item.program}</span>
              </div>

              <blockquote className="new-testimonials__quote">{item.quote}</blockquote>
            </figure>
          ))}
        </div>

        <div className="new-testimonials__invite">
          <p className="new-testimonials__invite-headline">{INVITE_HEADLINE}</p>
          <p className="new-testimonials__invite-copy">{INVITE_COPY}</p>
          <a href="#kegiatan" className="btn btn--amber">
            {INVITE_CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
