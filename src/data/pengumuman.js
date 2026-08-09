/**
 * Pengumuman — brosur yang diunggah pengurus Shekinah beserta penjelasannya.
 *
 * Dibaca oleh pages/new/PengumumanIndex.jsx dan PengumumanPost.jsx.
 * Halaman detail dirancang agar brosur terbaca hampir seluruhnya tanpa perlu
 * menggulir; penjelasan panjang menyusul di bawahnya.
 *
 * CARA MEMASANG PENGUMUMAN BARU
 * 1. Unggah gambar brosur ke folder `public/pengumuman/` — misalnya
 *    `public/pengumuman/kep-49.jpg`. Simpan di `public/`, bukan `src/assets/`,
 *    supaya file bisa diganti tanpa membangun ulang situs.
 * 2. Tambahkan satu objek di bawah dengan `brochure: '/pengumuman/kep-49.jpg'`.
 *    Path selalu diawali garis miring.
 * 3. Selama gambarnya belum ada, biarkan `brochure: null`. Halaman akan
 *    menampilkan kotak abu-abu bertuliskan "Brosur menyusul", bukan gambar
 *    rusak — begitu pula bila nama filenya salah ketik.
 * 4. `brochureRatio` mengikuti bentuk brosur ('3 / 4' untuk potret A4, '1 / 1'
 *    untuk unggahan Instagram). Angka ini memesan ruang lebih dulu supaya
 *    halaman tidak melompat saat gambar selesai dimuat.
 * 5. `summary` adalah satu paragraf pendek yang tampil di samping brosur —
 *    isinya menjawab "ini pengumuman tentang apa". Uraian lengkapnya di `body`.
 * 6. `date` format ISO 'YYYY-MM-DD'; urutan tampil dihitung dari sini.
 *
 * Belum ada backend: menambah pengumuman berarti menyunting file ini lalu
 * menerbitkan ulang situs.
 */
export const pengumuman = [
  {
    slug: 'kep-angkatan-49',
    date: '2026-08-01',
    title: 'Pendaftaran KEP Angkatan 49',
    category: 'Pendaftaran',
    brochure: null,
    brochureRatio: '3 / 4',
    summary:
      'Kursus Evangelisasi Pribadi angkatan ke-49 dibuka untuk umum. Tujuh belas pertemuan mingguan mulai 6 September 2026 di paroki mitra terdekat.',
    details: [
      { label: 'Mulai', value: '6 September 2026' },
      { label: 'Jadwal', value: 'Setiap Minggu, 17 pertemuan' },
      { label: 'Lokasi', value: 'Paroki mitra terdekat' },
      { label: 'Biaya', value: 'Sukarela' },
      { label: 'Kontak', value: 'Koordinator paroki masing-masing' },
    ],
    cta: { label: 'Daftar Sekarang', href: '#daftar' },
    body: [
      {
        type: 'p',
        text: 'KEP adalah pembinaan dasar Shekinah bagi umat yang ingin mengenal Kristus secara pribadi. Tidak ada syarat pembinaan sebelumnya — siapa pun boleh mendaftar, termasuk yang baru kembali aktif di paroki.',
      },
      {
        type: 'h2',
        text: 'Siapa yang sebaiknya ikut',
      },
      {
        type: 'p',
        text: 'Umat yang ingin memulai perjalanan imannya dari awal, alumni yang ingin mengantar keluarga atau teman, dan siapa pun yang selama ini merasa tidak tahu harus mulai dari mana.',
      },
      {
        type: 'h2',
        text: 'Yang perlu disiapkan',
      },
      {
        type: 'p',
        text: 'Kesediaan hadir pada seluruh rangkaian pertemuan. Materi disediakan oleh Shekinah; peserta cukup membawa alat tulis dan Kitab Suci pribadi bila ada.',
      },
    ],
  },
  {
    slug: 'retret-penyembuhan-batin-oktober',
    date: '2026-07-24',
    title: 'Retret Penyembuhan Batin — Oktober 2026',
    category: 'Retret',
    brochure: null,
    brochureRatio: '3 / 4',
    summary:
      'Retret dua hari satu malam di pusat Shekinah, terbuka untuk semua tahap perjalanan iman. Jumlah peserta dibatasi agar setiap orang tetap terdampingi.',
    details: [
      { label: 'Tanggal', value: '10 – 11 Oktober 2026' },
      { label: 'Lokasi', value: 'Pusat Shekinah' },
      { label: 'Kuota', value: 'Terbatas' },
      { label: 'Pendaftaran', value: 'Ditutup bila kuota terpenuhi' },
    ],
    cta: { label: 'Hubungi Panitia', href: '#kontak' },
    body: [
      {
        type: 'p',
        text: 'Retret ini memberi ruang hening untuk membawa luka yang selama ini disimpan sendiri. Rangkaiannya mencakup sesi doa pribadi, pendampingan, dan Sakramen Tobat.',
      },
      {
        type: 'quote',
        text: 'Yang datang tidak perlu siap. Justru itu sebabnya retret ini ada.',
      },
      {
        type: 'p',
        text: 'Peserta menginap di pusat Shekinah. Perlengkapan pribadi dibawa sendiri; konsumsi disediakan panitia.',
      },
    ],
  },
  {
    slug: 'jadwal-blks-modul-d',
    date: '2026-07-15',
    title: 'Jadwal Baru BLKS Modul D',
    category: 'Jadwal',
    brochure: null,
    brochureRatio: '1 / 1',
    summary:
      'Kelas Kitab Suci Modul D — Injil Yohanes — dibuka bagi peserta yang telah menyelesaikan Modul C. Kelas kelompok kecil, tatap muka dan daring.',
    details: [
      { label: 'Mulai', value: '15 Agustus 2026' },
      { label: 'Jadwal', value: 'Setiap Sabtu pagi' },
      { label: 'Format', value: 'Tatap muka dan daring' },
      { label: 'Syarat', value: 'Telah menyelesaikan Modul C' },
    ],
    cta: { label: 'Lihat Program BLKS', href: '/program/blks' },
    body: [
      {
        type: 'p',
        text: 'Modul D membahas Injil Yohanes dengan metode Joy of Discovery: peserta menemukan sendiri makna teks melalui pertanyaan terarah, bukan mendengarkan ceramah.',
      },
      {
        type: 'p',
        text: 'Kelas dibatasi agar diskusi tetap berjalan. Peserta yang belum menyelesaikan Modul C dipersilakan bergabung pada rangkaian Modul A berikutnya.',
      },
    ],
  },
  {
    slug: 'rekrutmen-pendamping-kelompok',
    date: '2026-06-28',
    title: 'Terbuka: Pendamping Kelompok KEP',
    category: 'Pelayanan',
    brochure: null,
    brochureRatio: '3 / 4',
    summary:
      'Alumni KEP dan SEP diundang menjadi pendamping kelompok untuk angkatan berikutnya. Pembekalan disediakan sebelum angkatan dimulai.',
    details: [
      { label: 'Pembekalan', value: '23 Agustus 2026' },
      { label: 'Syarat', value: 'Alumni KEP atau SEP' },
      { label: 'Komitmen', value: '17 pertemuan mingguan' },
      { label: 'Kontak', value: 'Sekretariat Shekinah' },
    ],
    cta: { label: 'Hubungi Sekretariat', href: '#kontak' },
    body: [
      {
        type: 'p',
        text: 'Pendamping kelompok menemani lima sampai delapan peserta sepanjang rangkaian KEP: memandu diskusi, mengingatkan kehadiran, dan mendoakan kelompoknya.',
      },
      {
        type: 'p',
        text: 'Tidak dibutuhkan kemampuan mengajar. Yang dibutuhkan adalah kesediaan hadir dan mendengarkan.',
      },
    ],
  },
]

const byNewest = (a, b) => b.date.localeCompare(a.date)

export const allPengumuman = () => [...pengumuman].sort(byNewest)

export const latestPengumuman = (n) => allPengumuman().slice(0, n)

export const getPengumuman = (slug) => pengumuman.find((item) => item.slug === slug)
