/**
 * Jalur pembinaan Shekinah — satu sumber untuk landing page dan halaman program.
 *
 * Dibaca oleh:
 *   - components/new/ProgramOverview.jsx  → hanya `stageBefore`/`stageEmphasis`/
 *     `name`/`blurb`. Per version_beta.md §3 requirement 1, landing page cukup
 *     membawa blurb pendek.
 *   - pages/new/ProgramIndex.jsx          → kartu ringkasan seluruh jalur.
 *   - pages/ProgramPage.jsx               → seluruh field, termasuk `outline`.
 *
 * Rincian berat — susunan pertemuan, teori modul Kitab Suci A–F, daftar paroki
 * pelaksana — hanya boleh muncul di halaman detail (`/program/:slug`), tidak
 * pernah di landing page.
 *
 * Menambah jalur baru: tambahkan satu objek di bawah, `slug` menentukan URL-nya.
 */
export const programs = [
  {
    slug: 'kep',
    order: 1,
    tab: 'Pembinaan Dasar (KEP)',
    title: 'Kursus Evangelisasi Pribadi',
    focus: 'Pemulihan Gambar Diri & Retret Luka Batin',
    // dipakai ProgramOverview — dua kata yang dipisah agar kata kedua bisa dimiringkan
    stageBefore: 'Pembinaan',
    stageEmphasis: 'Dasar',
    name: 'KEP',
    blurb:
      'Pembinaan dasar yang diselenggarakan bersama paroki untuk membantu umat mengenal panggilannya sebagai murid Kristus.',
    intro:
      'Langkah pertama untuk mengenal Kristus secara pribadi. Fokus pada pemulihan gambar diri dan retret luka batin, agar Anda berangkat dari hati yang dipulihkan sebelum melayani sesama.',
    duration: '17 pertemuan mingguan',
    audience: 'Umat umum, tanpa syarat pembinaan sebelumnya',
    format: 'Tatap muka di paroki penyelenggara',
    outline: [
      'Pengenalan pribadi akan Kristus',
      'Pemulihan gambar diri',
      'Retret luka batin',
      'Doa dan hidup rohani sehari-hari',
      'Pengutusan sebagai murid',
    ],
  },
  {
    slug: 'sep',
    order: 2,
    tab: 'Pembinaan Intensif (SEP)',
    title: 'Sekolah Evangelisasi Pribadi',
    focus: 'Pembinaan Lengkap di Pusat Shekinah',
    stageBefore: 'Pembinaan',
    stageEmphasis: 'Intensif',
    name: 'SEP',
    blurb: 'Program pembinaan yang lebih lengkap dan mendalam di pusat Shekinah.',
    intro:
      'Kelanjutan yang lebih intensif dari KEP. Materi disampaikan dalam rangkaian yang lebih panjang di pusat Shekinah, dengan pendampingan yang lebih dekat untuk setiap peserta.',
    duration: '20 pertemuan',
    audience: 'Alumni KEP atau pembinaan setara',
    format: 'Tatap muka di pusat Shekinah',
    outline: [
      'Pendalaman pengalaman akan Kristus',
      'Doa pribadi dan doa komunitas',
      'Pengenalan karunia Roh Kudus',
      'Pelayanan dan kepemimpinan rohani',
      'Praktik pendampingan',
    ],
  },
  {
    slug: 'blpi',
    order: 3,
    tab: 'Pendalaman Iman (BLPI)',
    title: 'Bina Lanjut Pendalaman Iman',
    focus: 'Pemuridan & Karunia Roh Kudus',
    stageBefore: 'Pendalaman',
    stageEmphasis: 'Iman',
    name: 'BLPI',
    blurb: 'Program lanjutan bagi alumni yang ingin terus bertumbuh.',
    intro:
      'Kelanjutan bagi yang ingin bertumbuh lebih dalam. Fokus pada pemuridan dan pengenalan karunia Roh Kudus, membentuk kebiasaan iman yang berkelanjutan dalam hidup sehari-hari.',
    duration: 'Rangkaian bertahap sepanjang tahun',
    audience: 'Alumni KEP atau SEP',
    format: 'Tatap muka, dibuka beberapa angkatan per tahun',
    outline: [
      'Dasar pemuridan Kristiani',
      'Karunia dan buah Roh Kudus',
      'Hidup doa yang berkelanjutan',
      'Kebiasaan iman dalam keseharian',
    ],
  },
  {
    slug: 'blks',
    order: 4,
    tab: 'Kelas Kitab Suci (BLKS)',
    title: 'Bina Lanjut Kitab Suci',
    focus: 'Metode Joy of Discovery',
    stageBefore: 'Pendalaman',
    stageEmphasis: 'Kitab Suci',
    name: 'BLKS',
    blurb: 'Pembelajaran Kitab Suci yang dibawakan oleh pengajar dari Shekinah.',
    intro:
      'Membaca Kitab Suci dengan metode Joy of Discovery — menemukan sendiri makna teks melalui pertanyaan terarah, bukan sekadar mendengarkan ceramah.',
    duration: 'Modul A sampai F, masing-masing satu rangkaian kelas',
    audience: 'Terbuka bagi alumni pembinaan Shekinah',
    format: 'Kelas kelompok kecil, tatap muka dan daring',
    outline: [
      'Modul A — pengantar membaca Kitab Suci',
      'Modul B — Perjanjian Lama',
      'Modul C — Injil Sinoptik',
      'Modul D — Injil Yohanes',
      'Modul E — Surat-surat Paulus',
      'Modul F — pendalaman tematik',
    ],
  },
  {
    slug: 'retret',
    order: 5,
    tab: 'Retret dan Seminar',
    title: 'Retret dan Kegiatan Terbuka',
    focus: 'Retret Keluarga, Penyembuhan, dan Seminar',
    stageBefore: 'Retret dan',
    stageEmphasis: 'Kegiatan',
    // ProgramOverview menampilkan `name` sebagai singkatan setelah judul; jalur
    // ini tidak punya singkatan resmi, jadi sengaja null agar barisnya bersih.
    name: null,
    blurb: 'Retret keluarga, retret penyembuhan, seminar, dan kegiatan terbuka lainnya.',
    intro:
      'Kegiatan terbuka yang bisa diikuti siapa saja, tanpa perlu menyelesaikan pembinaan lebih dulu. Sering menjadi perkenalan pertama umat dengan Shekinah.',
    duration: 'Satu hari sampai akhir pekan',
    audience: 'Terbuka untuk umum, termasuk keluarga',
    format: 'Tatap muka di pusat Shekinah atau paroki mitra',
    outline: [
      'Retret keluarga',
      'Retret penyembuhan batin',
      'Seminar pengenalan Shekinah',
      'Malam doa dan devosi bersama',
    ],
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)
