import romoSugiri from '../assets/romo-sugiri.png'
import romoSubroto from '../assets/romo-subroto.png'
import romoKoelman from '../assets/romo-koelman.png'

/**
 * Kepala sekolah, romo pembina, dan tim pengajar Shekinah.
 *
 * Dibaca oleh components/new/Founders.jsx (karosel di landing page, hanya
 * `romoPembina`) dan pages/new/Pengajar.jsx (seluruhnya).
 *
 * `years` bersifat opsional: barisnya hanya tampil bila diisi, supaya entri
 * tanpa masa bakti terkonfirmasi tidak menampilkan tanggal karangan. Tanggal
 * Romo Sugiri berasal dari mockup kartu yang sudah disetujui; dua lainnya
 * menunggu konfirmasi.
 *
 * `image: null` menampilkan kotak abu-abu, bukan gambar rusak — pakai itu
 * sampai fotonya tersedia di src/assets/.
 */

/**
 * Pemimpin pembinaan untuk periode berjalan — ditampilkan sendirian di
 * section paling atas /pengajar (halaman ini tidak lagi punya PageHeader
 * terpisah; section ini sendiri yang jadi pembuka halaman). Terpisah dari
 * `romoPembina` (yang sudah wafat; sekarang jadi bagian warisan/trust di
 * bagian bawah halaman yang sama) dan `timPengajar` (pengajar aktif
 * lainnya). `image: null` sampai fotonya tersedia di src/assets/.
 */
export const kepalaSekolah = {
  id: 'kepala-sekolah',
  role: 'Kepala Sekolah',
  // tampil di eyebrow sebagai "Kepala Sekolah · <period>"
  period: '2016 – Sekarang',
  name: 'Stanley Ch. Budihardja',
  image: null,
  bio: 'Memimpin penyelenggaraan pembinaan Shekinah sejak 2016, menjaga agar setiap program tetap berjalan dengan arah yang jelas dan tetap berakar pada semangat pendampingan yang telah dibangun sejak 1990.',
}

/**
 * Para Romo pendiri — sudah wafat, jadi bagiannya di halaman ini sekarang
 * murni warisan dan legitimasi (trust), bukan lagi tim pengajar aktif.
 * Diletakkan di bagian paling bawah /pengajar untuk itu.
 */
export const romoPembina = [
  {
    id: 'sugiri',
    role: 'Pendiri',
    name: 'Romo L. Sugiri SJ',
    years: '1988 – 1995',
    image: romoSugiri,
    bio: 'Merintis pembinaan Shekinah dan menyusun kerangka pengajaran yang masih dipakai sampai hari ini.',
  },
  {
    id: 'subroto',
    role: 'Romo Pembina',
    name: 'Romo Subroto',
    years: null,
    image: romoSubroto,
    bio: 'Mendampingi penyusunan materi pembinaan dan pengutusan pengajar di paroki mitra.',
  },
  {
    id: 'koelman',
    role: 'Romo Pembina',
    name: 'Romo Koelman',
    years: null,
    image: romoKoelman,
    bio: 'Mendampingi retret dan pembinaan lanjutan bersama tim pengajar Shekinah.',
  },
]

/**
 * Pengajar awam. Isi contoh — ganti nama, peran, dan keterangannya dengan tim
 * yang sebenarnya, lalu tambahkan `image` bila fotonya sudah ada.
 */
export const timPengajar = [
  {
    id: 'koordinator-kep',
    name: '[Nama pengajar]',
    role: 'Koordinator KEP',
    image: null,
    bio: 'Mengoordinasikan penyelenggaraan KEP bersama paroki mitra.',
  },
  {
    id: 'pengajar-kitab-suci',
    name: '[Nama pengajar]',
    role: 'Pengajar Kitab Suci',
    image: null,
    bio: 'Membawakan kelas BLKS dengan metode Joy of Discovery.',
  },
  {
    id: 'pendamping-retret',
    name: '[Nama pengajar]',
    role: 'Pendamping Retret',
    image: null,
    bio: 'Mendampingi peserta pada retret keluarga dan retret penyembuhan batin.',
  },
  {
    id: 'pembina-komunitas',
    name: '[Nama pengajar]',
    role: 'Pembina Komunitas',
    image: null,
    bio: 'Menjaga pendampingan alumni setelah rangkaian pembinaan selesai.',
  },
]
