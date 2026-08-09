import { useState } from 'react'
import './Faq.css'

// SEP-Shekinah-Homepage-Structure.md §08 — edit copy here.
// Layout (plain list + arrow, no circular +/- chip) borrows from
// demo.divi-pixel.com/church/'s FAQ section.
// Answers marked [placeholder] need confirming against current program policy.
const HEADLINE = 'Pertanyaan yang Sering Diajukan'

const QUESTIONS = [
  {
    question: 'Apa itu KEP?',
    answer:
      'KEP (Kursus Evangelisasi Pribadi) adalah pembinaan dasar yang diselenggarakan bersama paroki untuk membantu umat mengenal panggilannya sebagai murid Kristus.',
  },
  {
    question: 'Apa bedanya SEP dan KEP?',
    answer:
      'KEP adalah pembinaan dasar yang diselenggarakan bersama paroki, sedangkan SEP adalah program yang lebih lengkap dan mendalam di pusat Shekinah.',
  },
  {
    question: 'Apakah ini komunitas karismatik?',
    answer:
      'Shekinah terbuka bagi umat Katolik dari berbagai latar belakang. Fokusnya adalah pembinaan iman dan pertumbuhan hidup bersama Kristus.',
  },
  {
    question: 'Bagaimana memilih program?',
    answer:
      'Mulai dari tahap perjalanan iman Anda saat ini — lihat Peta Perjalanan di atas, atau hubungi kami untuk berkonsultasi.',
  },
  {
    question: 'Apakah saya harus menjadi anggota paroki tertentu?',
    answer:
      'Tidak. Program terbuka bagi umat Katolik dari paroki mana pun; beberapa program diselenggarakan bersama paroki mitra terdekat Anda.',
  },
  {
    question: 'Apakah boleh ikut jika belum pernah aktif di komunitas?',
    answer:
      'Boleh. Program dirancang ramah bagi pencari dan pemula yang baru ingin memulai perjalanan imannya.',
  },
  {
    question: 'Siapa yang mengajar?',
    answer: 'Materi dan pengajaran dikoordinasikan oleh Shekinah, didampingi Romo dan pengajar terpilih.',
  },
  {
    question: 'Berapa lama setiap program berlangsung?',
    answer: '[placeholder] Durasi berbeda tiap program — akan diinformasikan saat pendaftaran angkatan.',
  },
  {
    question: 'Apakah program ini berbayar?',
    answer: '[placeholder] Sesuaikan dengan kebijakan biaya program yang berlaku saat ini.',
  },
  {
    question: 'Apakah tersedia program online?',
    answer: '[placeholder] Sesuaikan dengan ketersediaan kelas daring untuk angkatan berjalan.',
  },
]

/** Section 08 — general FAQ. */
export default function Faq({ id }) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="new-faq section section--white" id={id}>
      <div className="shell">
        <p className="headline center new-faq__headline">{HEADLINE}</p>

        <div className="new-faq__list">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className="new-faq__item" key={item.question}>
                <button
                  type="button"
                  className="new-faq__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span className={`new-faq__icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    →
                  </span>
                </button>
                {isOpen && <p className="new-faq__answer">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
