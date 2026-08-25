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
 *
 * `outline` is either a flat array of strings, or — when the material has
 * named sub-sections (see `blpi`) — an array of { group, items } objects.
 * ProgramPage.jsx renders whichever shape is present.
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
      'Amanat Perutusan Agung',
      'Pembawa Kabar Baik',
      'Kunjungan',
      "What's Next",
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
    // grouped outline — ProgramPage.jsx renders each { group, items } as its
    // own numbered list with a subheading, instead of one flat <ol>.
    outline: [
      { group: 'Deeper A', items: ['Pertumbuhan', 'Dasar Kedewasaan Kristiani', 'Pemuridan'] },
      { group: 'Deeper B', items: ['Gospel Sharing', 'Iman Katolik'] },
      {
        group: 'Deeper C',
        items: ['Mendoakan Orang Sakit', 'Gambar Diri', 'Kursus Pelayanan Pribadi'],
      },
    ],
  },
  {
    slug: 'blks',
    order: 4,
    tab: 'Kelas Kitab Suci (BLKS)',
    title: 'Bina Lanjut Kitab Suci',
    focus: 'Kelas Tatap Muka Bersama Pengajar',
    stageBefore: 'Pendalaman',
    stageEmphasis: 'Kitab Suci',
    name: 'BLKS',
    blurb: 'Pembelajaran Kitab Suci yang dibawakan oleh pengajar dari Shekinah.',
    intro:
      'Kelas tatap muka di pusat Shekinah, mengikuti rangkaian modul terstruktur bersama pengajar — mendalami Kitab Suci, dokumen Gereja, dan teologi dasar dari Perjanjian Lama hingga Kitab Wahyu.',
    duration: 'Modul A sampai F, masing-masing satu rangkaian kelas',
    audience: 'Terbuka bagi alumni pembinaan Shekinah',
    format: 'Kelas tatap muka di pusat Shekinah',
    outline: [
      {
        group: 'Modul A',
        items: ['Pengantar Perjanjian Lama dan Baru', 'Dei Verbum', 'Teologi Dasar', 'Inspirasi Kanon'],
      },
      {
        group: 'Modul B',
        items: ['Pentateukh', 'Injil Sinoptik', 'Verbum Domini', 'Prinsip Menafsir KS', 'Merenungkan KS Pribadi'],
      },
      {
        group: 'Modul C',
        items: ['Kitab Sejarah', 'Injil Yohanes', 'Sejarah Gereja', 'Lumen Gentium'],
      },
      {
        group: 'Modul D',
        items: [
          'Kitab Nabi',
          'Surat Paulus',
          'Sacrosanctum Concilium',
          'Prinsip Menafsir KS',
          'Merenungkan KS secara Pribadi/Kelompok',
        ],
      },
      {
        group: 'Modul E',
        items: ['Kitab Kebijaksanaan', 'Kisah Para Rasul', 'Surat Katolik', 'Pneumatologi', 'Praktek Narasi'],
      },
      {
        group: 'Modul F',
        items: ['Kitab Deuterokanonika', 'Kitab Wahyu', 'Sejarah dan Hakekat PKK', 'Latihan Membawa Renungan'],
      },
    ],
  },
  {
    slug: 'blkep',
    order: 6,
    tab: 'Bina Lanjut Paroki (BLKEP)',
    title: 'Bina Lanjut Kursus Evangelisasi Pribadi',
    focus: 'Pendampingan Lanjutan Bersama Paroki',
    stageBefore: 'Bina Lanjut',
    stageEmphasis: 'Paroki',
    name: 'BLKEP',
    blurb: 'Program lanjutan bagi alumni KEP/SEP yang ingin terus dibina bersama paroki asal.',
    intro:
      'Kelanjutan pembinaan di tingkat paroki bagi alumni KEP atau SEP. Pendampingan tetap dekat dengan komunitas paroki, sambil terus bertumbuh dalam iman bersama umat setempat.',
    duration: 'Rangkaian bertahap bersama paroki',
    audience: 'Alumni KEP atau SEP di paroki penyelenggara',
    format: 'Tatap muka di paroki penyelenggara',
    outline: ['Pertumbuhan', 'Pemuridan', 'Gospel Sharing', 'Iman Katolik', 'Gambar Diri'],
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
