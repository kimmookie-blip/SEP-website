/**
 * Section 5 — Pilihan Jalur Pertumbuhan.
 *
 * Per version_beta.md §3 requirement 1, the landing page carries only the
 * short focus blurb. Session breakdowns, module theory (Kitab Suci A–F), and
 * parish lists belong on the dedicated program pages, never inline here.
 */
export const programs = [
  {
    slug: 'kep-sep',
    tab: 'Kursus Utama (KEP/SEP)',
    title: 'Kursus Evangelisasi Pribadi',
    focus: 'Pemulihan Gambar Diri & Retret Luka Batin',
    blurb:
      'Langkah pertama untuk mengenal Kristus secara pribadi. Fokus pada pemulihan gambar diri dan retret luka batin, agar Anda berangkat dari hati yang dipulihkan sebelum melayani sesama.',
  },
  {
    slug: 'blpi',
    tab: 'Pendalaman Iman (BLPI)',
    title: 'Bina Lanjut Pendalaman Iman',
    focus: 'Pemuridan & Karunia Roh Kudus',
    blurb:
      'Kelanjutan bagi yang ingin bertumbuh lebih dalam. Fokus pada pemuridan dan pengenalan karunia Roh Kudus, membentuk kebiasaan iman yang berkelanjutan dalam hidup sehari-hari.',
  },
  {
    slug: 'blks',
    tab: 'Kelas Kitab Suci (BLKS)',
    title: 'Bina Lanjut Kitab Suci',
    focus: 'Metode Joy of Discovery',
    blurb:
      'Membaca Kitab Suci dengan metode Joy of Discovery — menemukan sendiri makna teks melalui pertanyaan terarah, bukan sekadar mendengarkan ceramah.',
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)
