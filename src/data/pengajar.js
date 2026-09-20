import romoSugiri from '../assets/romo-sugiri.png'
import romoSubroto from '../assets/romo-subroto.png'
import romoKoelman from '../assets/romo-koelman.png'

import kepalaSekolahPhoto from '../assets/pengurus/kepala-sekolah.jpg'
import wakilKepalaSekolah1 from '../assets/pengurus/wakil-kepala-sekolah-1.jpg'
import wakilKepalaSekolah2 from '../assets/pengurus/wakil-kepala-sekolah-2.jpg'
import sekretaris from '../assets/pengurus/sekretaris.jpg'
import bendahara1 from '../assets/pengurus/bendahara-1.jpg'
import bendahara2 from '../assets/pengurus/bendahara-2.jpg'
import ketuaBidangAkademik from '../assets/pengurus/ketua-bidang-akademik.jpg'
import wakilKetuaBidangAkademik from '../assets/pengurus/wakil-ketua-bidang-akademik.jpg'
import ketuaBidangKepBlkep from '../assets/pengurus/ketua-bidang-kep-blkep.jpg'
import wakilKetuaBidangKepBlkep from '../assets/pengurus/wakil-ketua-bidang-kep-blkep.jpg'
import ketuaBidangFkpe from '../assets/pengurus/ketua-bidang-fkpe.jpg'
import wakilKetuaBidangFkpe from '../assets/pengurus/wakil-ketua-bidang-fkpe.jpg'
import ketuaBidangOutreach from '../assets/pengurus/ketua-bidang-outreach.jpg'
import wakilKetuaBidangOutreach from '../assets/pengurus/wakil-ketua-bidang-outreach.jpg'
import ketuaBidangLitbang from '../assets/pengurus/ketua-bidang-litbang.jpg'
import wakilKetuaKelasi from '../assets/pengurus/wakil-ketua-kelasi.jpg'
import ketuaKelasi from '../assets/pengurus/ketua-kelasi.jpg'

/**
 * Kepala sekolah, romo pembina, dan susunan pengurus SEP.
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
 *
 * Nama `kepalaSekolah` dan seluruh `timPengajar` diambil dari tabel
 * "Susunan Pengurus SEP" (per pesan pengguna), digabung sebagai
 * "<Nama Baptis> <Nama Lahir>". `bio` masih kosong untuk semuanya — tabel
 * sumber hanya berisi nama dan jabatan, belum ada keterangan tugas per
 * orang. Isi begitu tersedia.
 */

/**
 * Pemimpin pembinaan untuk periode berjalan — ditampilkan sendirian di
 * section paling atas /pengajar (halaman ini tidak lagi punya PageHeader
 * terpisah; section ini sendiri yang jadi pembuka halaman). Terpisah dari
 * `romoPembina` (yang sudah wafat; sekarang jadi bagian warisan/trust di
 * bagian bawah halaman yang sama) dan `timPengajar` (pengurus SEP lainnya).
 * `image: null` sampai fotonya tersedia di src/assets/. `period: null`
 * sampai masa bakti dikonfirmasi — Pengajar.jsx hanya menampilkan eyebrow
 * "Kepala Sekolah · <period>" bila field ini diisi.
 */
export const kepalaSekolah = {
  id: 'kepala-sekolah',
  role: 'Kepala Sekolah',
  period: null,
  name: 'Cecilia Novalasa Bungakarna',
  image: kepalaSekolahPhoto,
  // source photo is a wide landscape crop — nudge the visible crop left so
  // she isn't pushed off-centre
  imagePosition: '30% top',
  imageScale: 1.1,
  bio: '',
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
 * Susunan Pengurus SEP, di luar Kepala Sekolah (lihat `kepalaSekolah` di
 * atas). Urutan mengikuti tabel sumber. Tambahkan `image` bila fotonya
 * sudah ada.
 */
export const timPengajar = [
  {
    id: 'wakil-kepala-sekolah-1',
    name: 'Yohanes Patrick Moniaga',
    role: 'Wakil Kepala Sekolah 1',
    image: wakilKepalaSekolah1,
    imagePosition: '30% top',
    imageScale: 1.1,
    bio: '',
  },
  {
    id: 'wakil-kepala-sekolah-2',
    name: 'Stanislaus Emmanuel Stanley Christianto Budihardja',
    role: 'Wakil Kepala Sekolah 2',
    image: wakilKepalaSekolah2,
    imagePosition: '30% top',
    imageScale: 1.1,
    bio: '',
  },
  {
    id: 'sekretaris',
    name: 'Birgitta Then Fariati',
    role: 'Sekretaris',
    image: sekretaris,
    imagePosition: '30% top',
    imageScale: 1.1,
    bio: '',
  },
  {
    id: 'bendahara-1',
    name: 'Maria Monica Emmy Sriharjanti',
    role: 'Bendahara 1',
    image: bendahara1,
    bio: '',
  },
  {
    id: 'bendahara-2',
    name: 'Martha Clara Luciana Widjaja',
    role: 'Bendahara 2',
    image: bendahara2,
    bio: '',
  },
  {
    id: 'ketua-bidang-akademik',
    name: 'Margaretha Maria Alacogue Yuni Astuti',
    role: 'Ketua Bidang Akademik',
    image: ketuaBidangAkademik,
    imagePosition: 'center 60%',
    imageScale: 1.14,
    bio: '',
  },
  {
    id: 'wakil-ketua-bidang-akademik',
    name: 'Marcellus Cung Mu Liong',
    role: 'Wakil Ketua Bidang Akademik',
    image: wakilKetuaBidangAkademik,
    bio: '',
  },
  {
    id: 'ketua-bidang-kep-blkep',
    name: 'Yohanes Pinarwan Tenardi',
    role: 'Ketua Bidang KEP/BLKEP',
    image: ketuaBidangKepBlkep,
    bio: '',
  },
  {
    id: 'wakil-ketua-bidang-kep-blkep',
    name: 'Fransiskus Xaferius Hiu Kurniawan',
    role: 'Wakil Ketua Bidang KEP/BLKEP',
    image: wakilKetuaBidangKepBlkep,
    imagePosition: '30% top',
    imageScale: 1.1,
    bio: '',
  },
  {
    id: 'ketua-bidang-fkpe',
    name: 'Maria Margareth Irma Hoesan',
    role: 'Ketua Bidang FKPE',
    image: ketuaBidangFkpe,
    bio: '',
  },
  {
    id: 'wakil-ketua-bidang-fkpe',
    name: 'Angelina Beatrix Lenny Setiawati',
    role: 'Wakil Ketua Bidang FKPE',
    image: wakilKetuaBidangFkpe,
    imagePosition: '30% top',
    imageScale: 1.1,
    bio: '',
  },
  {
    id: 'ketua-bidang-outreach',
    name: 'Martha Maria Sri Wahyuni',
    role: 'Ketua Bidang Outreach',
    image: ketuaBidangOutreach,
    bio: '',
  },
  {
    id: 'wakil-ketua-bidang-outreach',
    name: 'Gabriel Krisnanda Andhika Svara',
    role: 'Wakil Ketua Bidang Outreach',
    image: wakilKetuaBidangOutreach,
    bio: '',
  },
  {
    id: 'ketua-bidang-litbang',
    name: 'Luciana Winny Harianto',
    role: 'Ketua Bidang Litbang',
    image: ketuaBidangLitbang,
    bio: '',
  },
  {
    id: 'ketua-kelasi',
    name: 'Petrus Hariyanto Soetarso',
    role: 'Ketua Kelasi',
    image: ketuaKelasi,
    bio: '',
  },
  {
    id: 'wakil-ketua-kelasi',
    name: 'Victor Victor Wei',
    role: 'Wakil Ketua Kelasi',
    image: wakilKetuaKelasi,
    bio: '',
  },
]
