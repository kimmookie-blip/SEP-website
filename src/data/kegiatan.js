import coverKegiatan from '../assets/kegiatan.png'
import coverArtikel1 from '../assets/artikel-1.png'
import coverArtikel2 from '../assets/artikel-2.png'
import coverArtikel3 from '../assets/artikel-3.png'

/**
 * Kegiatan Shekinah — sumber tunggal untuk halaman /kegiatan sekaligus untuk
 * tiga bagian di landing page:
 *
 *   - components/new/ActivityCards.jsx      → latestKegiatan(3), galeri foto
 *   - components/new/UpcomingActivities.jsx → upcomingKegiatan(), tabel jadwal
 *   - pages/new/KegiatanIndex.jsx & KegiatanPost.jsx → seluruh isi
 *
 * CARA MENAMBAH KEGIATAN BARU
 * 1. Salin satu objek di bawah dan letakkan di mana saja dalam array — urutan
 *    tampil dihitung dari `date`, bukan dari posisi di file ini.
 * 2. `slug` menentukan URL-nya: /kegiatan/<slug>. Gunakan huruf kecil dan tanda
 *    hubung, dan jangan diubah lagi setelah dibagikan.
 * 3. `date` selalu format ISO 'YYYY-MM-DD' supaya bisa diurutkan; tampilan
 *    tanggal berbahasa Indonesia dihasilkan otomatis oleh formatTanggal()
 *    di data/format.js.
 * 4. `cover` boleh dikosongkan (null) — kartu akan menampilkan kotak abu-abu
 *    sebagai ganti foto, bukan gambar rusak. Isi dengan import file dari
 *    src/assets/ bila dokumentasinya sudah ada.
 * 5. `upcoming: true` menaikkan kegiatan ke tabel jadwal di landing page. Saat
 *    kegiatannya sudah lewat, ubah menjadi false dan lengkapi `body`.
 *
 * `audience`, `location`, dan `status` hanya terpakai selama `upcoming: true`.
 * `program` menautkan kegiatan ke satu jalur di data/programs.js (atau null).
 *
 * Empat field opsional berikut mengikuti struktur artikel di
 * "Kegiatan Shekinah Content Guide.md" (§Struktur Halaman Artikel) — boleh
 * dikosongkan (undefined), bagian terkait di KegiatanPost.jsx akan tersembunyi
 * dengan sendirinya kalau tidak diisi:
 *   - `summary`    Ringkasan: satu paragraf pembuka di atas Isi Artikel,
 *                  beda dari `excerpt` (yang lebih pendek, dipakai kartu).
 *   - `time`       Waktu acara, tampil di blok Informasi Acara.
 *   - `learnPoints` Daftar poin "Yang Akan Dipelajari", array of string.
 *   - `ctaText`    Kalimat ajakan di atas tombol "Daftar Sekarang".
 */
export const kegiatan = [
  {
    // Konten dari "Kegiatan Shekinah Content Guide.md" §Contoh Artikel.
    // Slug diubah dari 'rosary-night-duren-sawit' karena lokasinya kini
    // "Shekinah Community Center" (→ "Pusat Shekinah", nama Indonesia yang
    // sudah dipakai entri lain di file ini), bukan paroki tertentu.
    slug: 'rosary-night-at-shekinah',
    date: '2026-05-12',
    title: 'Rosary Night at Shekinah',
    category: 'Doa Bersama',
    cover: coverArtikel1,
    excerpt:
      'Mari menghidupi Bulan Maria melalui doa Rosario bersama komunitas Shekinah. Sebuah malam doa, refleksi, dan persaudaraan untuk semakin dekat kepada Kristus melalui Bunda Maria.',
    summary:
      'Bulan Mei merupakan Bulan Maria, sebuah kesempatan istimewa bagi umat Katolik untuk semakin dekat kepada Yesus melalui Bunda Maria. Rosary Night at Shekinah mengundang setiap orang untuk berkumpul dalam doa, membangun persaudaraan, dan mengalami damai Tuhan bersama komunitas.',
    time: '19.00 WIB',
    upcoming: false,
    audience: null,
    location: 'Pusat Shekinah',
    status: null,
    program: null,
    learnPoints: [
      'Makna Bulan Maria',
      'Cara mendoakan Rosario dengan lebih mendalam',
      'Refleksi Kitab Suci',
      'Doa syafaat bersama',
      'Persaudaraan dalam komunitas',
    ],
    ctaText:
      'Mari bergabung bersama komunitas Shekinah dan alami malam doa yang membawa damai, harapan, dan pertumbuhan iman.',
    body: [
      {
        type: 'h2',
        text: 'Menemukan Keheningan di Tengah Kesibukan',
      },
      {
        type: 'p',
        text: 'Kesibukan sering kali membuat kita kehilangan ruang untuk berhenti dan mendengarkan suara Tuhan. Melalui doa Rosario, Gereja mengajak kita merenungkan kehidupan Kristus bersama Bunda Maria, bukan sekadar mengulang doa, tetapi membiarkan hati dibentuk oleh kasih Allah.',
      },
      {
        type: 'p',
        text: 'Rosary Night at Shekinah hadir sebagai ruang yang sederhana namun penuh makna. Malam dimulai dengan pujian singkat, dilanjutkan doa Rosario bersama, pembacaan Kitab Suci, refleksi, dan doa syafaat. Suasananya hangat, tenang, dan terbuka bagi siapa pun — baik yang sudah terbiasa berdoa Rosario maupun yang baru ingin mengenalnya.',
      },
      {
        type: 'p',
        text: 'Kami percaya pertumbuhan iman tidak terjadi sendirian. Tuhan sering memakai komunitas untuk saling menguatkan, menghibur, dan mengingatkan bahwa setiap orang memiliki tempat untuk pulang.',
      },
      {
        type: 'p',
        text: 'Di akhir acara peserta dapat berbincang santai, saling mengenal, dan membangun persaudaraan yang berlanjut di luar kegiatan. Harapannya, setiap orang pulang dengan hati yang lebih damai, relasi yang lebih erat dengan Tuhan, dan semangat baru untuk menghidupi iman dalam kehidupan sehari-hari.',
      },
    ],
  },
  {
    slug: 'eucharist-festival',
    date: '2026-05-10',
    title: 'Eucharist Festival',
    category: 'Ekaristi',
    cover: coverArtikel2,
    excerpt:
      'Satu hari untuk memperdalam cinta kepada Yesus dalam Sakramen Mahakudus melalui adorasi, pengajaran, perayaan Ekaristi, dan kesaksian iman.',
    summary:
      'Ekaristi adalah pusat kehidupan iman Katolik — bukan sekadar ritual, melainkan perjumpaan nyata dengan Kristus yang hadir dalam rupa roti dan anggur. Eucharist Festival mengajak umat meluangkan satu hari penuh untuk berhenti sejenak dari kesibukan, dan kembali menaruh Ekaristi sebagai pusat dari segala sesuatu.',
    time: '08.00 – 17.00 WIB',
    upcoming: false,
    audience: null,
    location: 'Pusat Shekinah',
    status: null,
    program: null,
    learnPoints: [
      'Makna kehadiran nyata Kristus dalam Ekaristi',
      'Cara berdoa dalam Adorasi Sakramen Mahakudus',
      'Sejarah dan makna Misa sebagai puncak ibadah Katolik',
      'Kesaksian iman dari sesama umat',
      'Mempersiapkan hati sebelum menerima Komuni',
    ],
    ctaText:
      'Mari luangkan satu hari penuh untuk berdiam di hadapan Yesus dalam Sakramen Mahakudus, dan pulang dengan iman yang diperbarui.',
    body: [
      {
        type: 'p',
        text: 'Acara dimulai pukul delapan pagi dengan Misa pembukaan, dan sejak awal suasana sudah terasa berbeda dari hari Minggu biasa. Ratusan umat dari berbagai paroki mitra hadir bersama — sebagian datang berombongan dengan bus paroki, sebagian datang sendiri karena penasaran dengan nama acaranya.',
      },
      {
        type: 'h2',
        text: 'Sehari penuh di hadapan Sakramen Mahakudus',
      },
      {
        type: 'p',
        text: 'Setelah Misa pembukaan, Sakramen Mahakudus ditahtakan untuk Adorasi sepanjang hari. Umat bergiliran masuk dalam kelompok kecil, duduk hening di hadapan Hosti Kudus — sebagian berdoa dalam diam, sebagian menuliskan doa permohonan di kartu yang disediakan panitia. Di sela-sela adorasi, beberapa Romo bergantian memberi pengajaran singkat tentang kehadiran nyata Kristus dalam Ekaristi: bukan simbol, melainkan Tubuh dan Darah-Nya sendiri.',
      },
      {
        type: 'p',
        text: 'Sore harinya rangkaian dilanjutkan dengan sesi kesaksian. Tiga orang berbagi bagaimana Ekaristi mengubah hidup mereka — seorang bapak yang kembali rajin ke Misa harian setelah bertahun-tahun menjauh, seorang ibu yang menemukan penghiburan di tengah masa sulit lewat Adorasi setiap Jumat, dan seorang anak muda yang justru menemukan panggilan hidupnya lewat kebiasaan sederhana: hadir di depan Sakramen Mahakudus tanpa buru-buru pulang.',
      },
      {
        type: 'quote',
        text: 'Saya kira Ekaristi itu hanya bagian dari Misa yang harus saya lewati. Hari ini saya baru sadar, itu adalah Yesus sendiri yang menunggu saya.',
      },
      {
        type: 'p',
        text: 'Festival ditutup dengan perayaan Ekaristi bersama menjelang petang, dipimpin oleh beberapa Romo pendamping Shekinah, dan diakhiri dengan berkat penutup. Banyak peserta memilih tinggal beberapa menit lebih lama di dalam ruangan sebelum benar-benar pulang — enggan buru-buru meninggalkan tempat yang terasa begitu penuh.',
      },
    ],
  },
  {
    slug: 'krk-faithful-fruitful',
    date: '2026-05-02',
    title: 'KRK Faithful & Fruitful',
    category: 'KRK',
    cover: coverArtikel3,
    excerpt:
      'Mengalami pembaruan iman melalui pujian, penyembahan, pengajaran, dan doa bersama agar hidup semakin setia kepada Kristus dan berbuah dalam kasih.',
    summary:
      'KRK Faithful & Fruitful adalah malam pujian, penyembahan, dan pengajaran yang mengajak setiap orang kembali menaruh Kristus sebagai pusat hidupnya — supaya iman yang dijalani bukan hanya setia, tetapi juga berbuah bagi orang-orang di sekitarnya.',
    time: '18.30 WIB',
    upcoming: false,
    audience: null,
    location: 'Pusat Shekinah',
    status: null,
    program: null,
    learnPoints: [
      'Arti hidup setia (faithful) dan berbuah (fruitful) dalam iman',
      'Memasuki pujian dan penyembahan dengan hati yang terbuka',
      'Pengajaran firman yang aplikatif untuk keseharian',
      'Doa pembaruan komitmen bersama komunitas',
      'Langkah konkret menghidupi panggilan iman sehari-hari',
    ],
    ctaText:
      'Mari bergabung dan alami pembaruan iman bersama komunitas Shekinah — hidup yang setia dan berbuah dimulai dari satu langkah kecil hari ini.',
    body: [
      {
        type: 'p',
        text: 'Ruangan sudah dipenuhi umat sejak setengah jam sebelum acara dimulai. Musik pujian mengalun pelan sementara peserta saling menyapa — sebagian sudah saling kenal dari kegiatan Shekinah sebelumnya, sebagian baru pertama kali datang karena diajak teman.',
      },
      {
        type: 'h2',
        text: 'Setia lebih dulu, baru berbuah',
      },
      {
        type: 'p',
        text: 'Tema Faithful & Fruitful sengaja dipilih untuk mengingatkan bahwa buah selalu datang setelah kesetiaan, bukan sebaliknya. Dalam sesi pengajaran, pembicara mengajak peserta merenungkan Yohanes 15 — tentang ranting yang tinggal dalam pokok anggur. Tanpa tinggal dalam Kristus, tegasnya, segala usaha untuk "berbuah" hanya akan berakhir lelah dan kosong.',
      },
      {
        type: 'p',
        text: 'Sesi penyembahan berlangsung cukup lama, dan suasana berubah hening di tengah-tengahnya. Beberapa peserta terlihat menitikkan air mata — bukan karena kesedihan, tetapi karena, seperti yang diakui salah satu dari mereka setelahnya, baru sekali itu mereka benar-benar berhenti dan mendengarkan, bukan sekadar bernyanyi.',
      },
      {
        type: 'quote',
        text: 'Saya datang karena diajak, tanpa ekspektasi apa-apa. Tapi malam itu saya merasa didengar oleh Tuhan untuk pertama kalinya dalam waktu yang lama.',
      },
      {
        type: 'p',
        text: 'Acara ditutup dengan doa pembaruan komitmen, di mana setiap peserta diajak menuliskan satu langkah konkret yang ingin mereka jalani minggu itu — entah kembali rajin berdoa pagi, memperbaiki relasi dengan seseorang, atau sekadar meluangkan waktu diam bersama Tuhan setiap hari. Kartu-kartu itu dibawa pulang sebagai pengingat, bukan janji besar yang berat, tetapi langkah kecil yang bisa benar-benar dijalani.',
      },
    ],
  },

  /* ---------- kegiatan lalu lainnya ---------- */

  {
    // Digeser dari Juni ke Maret supaya tiga kegiatan di atas (Mei 2026, dari
    // Content Guide) tetap menjadi tiga kegiatan TERBARU yang tampil di
    // galeri beranda (ActivityCards menarik latestKegiatan(3)). Slug ikut
    // disesuaikan karena sebelumnya menyebut 'juni'.
    slug: 'retret-keluarga-maret',
    date: '2026-03-18',
    title: 'Retret Keluarga: Pulang ke Rumah yang Sama',
    category: 'Retret',
    cover: coverKegiatan,
    excerpt:
      'Dua hari bersama tiga puluh keluarga, membicarakan hal-hal yang biasanya tidak sempat dibicarakan di rumah.',
    upcoming: false,
    audience: null,
    location: 'Pusat Shekinah',
    status: null,
    program: 'retret',
    body: [
      {
        type: 'p',
        text: 'Retret keluarga tahun ini diikuti tiga puluh keluarga, dari pasangan muda sampai yang sudah menikah lebih dari tiga puluh tahun. Sesi dibagi dua: pasangan bersama, lalu anak-anak dengan pendamping terpisah.',
      },
      {
        type: 'h2',
        text: 'Sesi yang paling sulit',
      },
      {
        type: 'p',
        text: 'Sesi rekonsiliasi pasangan berlangsung paling lama. Setiap pasangan diminta menuliskan satu hal yang belum pernah diucapkan, lalu membacakannya. Banyak yang berhenti di tengah kalimat.',
      },
      {
        type: 'quote',
        text: 'Kami sudah dua puluh tahun menikah, dan baru malam itu saya benar-benar mendengarkan.',
      },
      {
        type: 'p',
        text: 'Retret ditutup dengan Misa bersama pada Minggu siang, dilanjutkan pembaruan janji perkawinan bagi pasangan yang bersedia.',
      },
    ],
  },
  {
    // Digeser dari Juli ke April — lihat catatan pada 'retret-keluarga-maret'.
    slug: 'pembukaan-kep-angkatan-48',
    date: '2026-04-02',
    title: 'Pembukaan KEP Angkatan 48',
    category: 'KEP',
    cover: coverKegiatan,
    excerpt:
      'Angkatan ke-48 dibuka dengan Misa dan perkenalan pendamping kelompok. Tujuh puluh dua peserta terdaftar.',
    upcoming: false,
    audience: null,
    location: 'Paroki St. Anna, Duren Sawit',
    status: null,
    program: 'kep',
    body: [
      {
        type: 'p',
        text: 'Tujuh puluh dua peserta hadir pada pembukaan KEP Angkatan 48. Sebagian besar mendaftar atas ajakan alumni angkatan sebelumnya — pola yang berulang sejak angkatan pertama.',
      },
      {
        type: 'h2',
        text: 'Tujuh belas pertemuan di depan',
      },
      {
        type: 'p',
        text: 'Rangkaian KEP berjalan tujuh belas pertemuan mingguan. Peserta dibagi dalam kelompok kecil dengan satu pendamping tetap, supaya tidak ada yang tertinggal di tengah jalan.',
      },
      {
        type: 'p',
        text: 'Materi lengkap dan susunan pertemuan dapat dilihat pada halaman program KEP.',
      },
    ],
  },
  {
    // Digeser dari Juli ke April — lihat catatan pada 'retret-keluarga-maret'.
    slug: 'seminar-pengenalan-shekinah',
    date: '2026-04-19',
    title: 'Seminar Pengenalan Shekinah untuk Orang Muda',
    category: 'Seminar',
    cover: null,
    excerpt:
      'Satu sore untuk menjawab satu pertanyaan: apa sebenarnya yang dikerjakan Shekinah, dan dari mana seseorang bisa mulai.',
    upcoming: false,
    audience: null,
    location: 'Daring dan tatap muka',
    status: null,
    program: null,
    body: [
      {
        type: 'p',
        text: 'Seminar ini dirancang untuk orang muda yang belum pernah mengikuti pembinaan apa pun. Formatnya sengaja pendek — satu sore, tanpa pendaftaran berbayar, dan boleh diikuti dari rumah.',
      },
      {
        type: 'p',
        text: 'Sesi tanya jawab berlangsung lebih panjang dari yang dijadwalkan. Pertanyaan yang paling sering muncul adalah soal perbedaan KEP dan SEP, dan apakah pembinaan ini hanya untuk yang sudah aktif di paroki.',
      },
      {
        type: 'quote',
        text: 'Saya pikir harus jadi orang yang sudah rajin ke gereja dulu. Ternyata justru sebaliknya.',
      },
    ],
  },
  {
    // Digeser dari Juli ke April — lihat catatan pada 'retret-keluarga-maret'.
    slug: 'blks-modul-c-selesai',
    date: '2026-04-26',
    title: 'BLKS Modul C Ditutup dengan Pendalaman Injil Sinoptik',
    category: 'Komunitas',
    cover: null,
    excerpt:
      'Kelas kecil, pertanyaan terarah, dan kebiasaan baru: membaca Kitab Suci tanpa menunggu dijelaskan.',
    upcoming: false,
    audience: null,
    location: 'Pusat Shekinah',
    status: null,
    program: 'blks',
    body: [
      {
        type: 'p',
        text: 'Modul C ditutup setelah rangkaian kelas tentang Injil Sinoptik. Metode Joy of Discovery membuat peserta menemukan sendiri makna teks melalui pertanyaan terarah, bukan menerima kesimpulan yang sudah jadi.',
      },
      {
        type: 'p',
        text: 'Sebagian peserta melanjutkan ke Modul D, sebagian mengulang dari Modul A bersama kelompok baru.',
      },
    ],
  },

  /* ---------- akan datang ---------- */

  {
    slug: 'kep-angkatan-49',
    date: '2026-09-06',
    title: 'KEP Angkatan 49 Dibuka',
    category: 'KEP',
    cover: null,
    excerpt:
      'Angkatan berikutnya dibuka September ini di paroki mitra. Pendaftaran melalui koordinator paroki masing-masing.',
    upcoming: true,
    audience: 'Umat umum',
    location: 'Paroki mitra terdekat',
    // paling dekat tanggalnya dari tiga entri upcoming — pendaftaran yang
    // realistis untuk angkatan ini sudah mendekati tenggat, bukan lagi "baru dibuka"
    status: 'Hampir ditutup',
    program: 'kep',
    body: [
      {
        type: 'p',
        text: 'KEP Angkatan 49 akan berjalan tujuh belas pertemuan mingguan, dimulai awal September. Pendaftaran dibuka melalui koordinator paroki mitra.',
      },
      {
        type: 'p',
        text: 'Tidak ada syarat pembinaan sebelumnya. Peserta cukup bersedia hadir pada seluruh rangkaian pertemuan.',
      },
    ],
  },
  {
    slug: 'retret-penyembuhan-batin-oktober',
    date: '2026-10-10',
    title: 'Retret Penyembuhan Batin',
    category: 'Retret',
    cover: null,
    excerpt:
      'Akhir pekan hening di pusat Shekinah, terbuka untuk semua tahap perjalanan iman.',
    upcoming: true,
    audience: 'Semua tahap iman',
    location: 'Pusat Shekinah',
    status: 'Pendaftaran dibuka',
    program: 'retret',
    body: [
      {
        type: 'p',
        text: 'Retret berlangsung dua hari satu malam, dengan sesi doa pribadi, pendampingan, dan Sakramen Tobat. Jumlah peserta dibatasi agar setiap orang tetap mendapat pendampingan.',
      },
    ],
  },
  {
    slug: 'seminar-keluarga-november',
    date: '2026-11-14',
    title: 'Seminar Keluarga: Iman yang Diteruskan di Rumah',
    category: 'Seminar',
    cover: null,
    excerpt:
      'Untuk orang tua yang ingin kembali membiasakan doa bersama di rumah, tanpa merasa harus menggurui.',
    upcoming: true,
    audience: 'Pasangan dan orang tua',
    location: 'Online & tatap muka',
    status: 'Pendaftaran dibuka',
    program: null,
    body: [
      {
        type: 'p',
        text: 'Seminar setengah hari yang membahas kebiasaan doa keluarga, pendampingan anak, dan cara membicarakan iman di rumah tanpa memaksa.',
      },
    ],
  },
]

/** Urut terbaru lebih dulu — dipakai galeri dan daftar cerita. */
const byNewest = (a, b) => b.date.localeCompare(a.date)

/** Urut paling dekat lebih dulu — dipakai tabel jadwal. */
const bySoonest = (a, b) => a.date.localeCompare(b.date)

/** Kegiatan yang sudah berlangsung dan sudah ada ceritanya. */
export const publishedKegiatan = () =>
  kegiatan.filter((item) => !item.upcoming).sort(byNewest)

/** Cerita terbaru — `n` teratas. */
export const latestKegiatan = (n) => publishedKegiatan().slice(0, n)

/**
 * Cerita untuk slot unggulan di /kegiatan. Slot itu dipimpin gambar besar,
 * jadi yang dipilih adalah cerita terbaru yang sudah punya `cover`; kalau
 * belum ada satu pun, jatuh kembali ke cerita terbaru apa adanya.
 */
export const featuredKegiatan = () => {
  const published = publishedKegiatan()
  return published.find((item) => item.cover) ?? published[0]
}

/** Jadwal yang akan datang, paling dekat lebih dulu. */
export const upcomingKegiatan = () =>
  kegiatan.filter((item) => item.upcoming).sort(bySoonest)

/**
 * Urutan halaman indeks: yang akan datang lebih dulu (paling dekat di atas),
 * lalu cerita yang sudah lewat dari yang terbaru.
 */
export const allKegiatan = () => [...upcomingKegiatan(), ...publishedKegiatan()]

export const getKegiatan = (slug) => kegiatan.find((item) => item.slug === slug)

/** Kegiatan yang terkait satu jalur program, untuk /program/:slug. */
export const kegiatanByProgram = (slug) =>
  slug ? allKegiatan().filter((item) => item.program === slug) : []

/** Kategori unik untuk deretan tombol filter, selalu diawali "Semua". */
export const kegiatanCategories = () => [
  'Semua',
  ...Array.from(new Set(kegiatan.map((item) => item.category))),
]

