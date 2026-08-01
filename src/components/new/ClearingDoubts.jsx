import { useState } from 'react'
import './ClearingDoubts.css'

// struktur-homepage-sep-shekinah.md §8 — edit copy here.
// Layout (plain list + arrow, no circular +/- chip) borrows from
// demo.divi-pixel.com/church/'s FAQ section.
const HEADLINE = 'Masih ragu untuk memulai?'

const OBJECTIONS = [
  {
    question: 'Apakah Shekinah sungguh berakar pada Gereja Katolik?',
    answer:
      'Ya. Shekinah merupakan lembaga pembinaan iman di bawah naungan BPK PKK Keuskupan Agung Jakarta dan melibatkan Romo dalam proses pembinaannya.',
  },
  {
    question: 'Apakah saya harus sudah memahami Kitab Suci?',
    answer:
      'Tidak. Program dirancang agar peserta dapat belajar secara bertahap, termasuk bagi yang baru ingin memulai.',
  },
  {
    question: 'Apakah saya harus pandai berbicara atau mengajar?',
    answer: 'Tidak. Evangelisasi dimulai dari mengenal Kristus dan menghidupi kasih-Nya dalam keseharian.',
  },
  {
    question: 'Apakah pembinaannya hanya untuk kelompok karismatik?',
    answer:
      'Shekinah terbuka bagi umat Katolik dari berbagai latar belakang. Fokusnya adalah pembinaan iman dan pertumbuhan hidup bersama Kristus.',
  },
  {
    question: 'Apakah saya harus langsung aktif melayani?',
    answer:
      'Tidak. Setiap peserta memiliki proses dan panggilan yang berbeda. Langkah pertama adalah bertumbuh terlebih dahulu.',
  },
  {
    question: 'Apakah ada program untuk OMK dan profesional?',
    answer:
      'Ada. Pendekatan pembinaan dapat disesuaikan dengan tahap kehidupan dan konteks peserta.',
  },
]

/** Section 8 — objection-handling accordion; one open panel at a time. */
export default function ClearingDoubts({ id }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="new-doubts section section--cream" id={id}>
      <div className="shell">
        <p className="headline center new-doubts__headline">{HEADLINE}</p>

        <div className="new-doubts__list">
          {OBJECTIONS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className="new-doubts__item" key={item.question}>
                <button
                  type="button"
                  className="new-doubts__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span className={`new-doubts__icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    →
                  </span>
                </button>
                {isOpen && <p className="new-doubts__answer">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
