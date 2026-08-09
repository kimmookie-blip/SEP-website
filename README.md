# SEP Shekinah — Landing Page

Landing page konversi untuk Sekolah Evangelisasi Pribadi Shekinah Jakarta.
Dibangun dengan Vite + React sesuai spesifikasi di `version_beta.md`.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output ke dist/
npm run preview  # cek hasil build
```

## Yang perlu Anda isi

| Item | Lokasi | Catatan |
|---|---|---|
| **Logo resolusi tinggi** | `public/logo_neutral.png` | Sudah terpasang, tapi file aslinya hanya **56×73 px** sehingga terlihat buram di layar retina. Ganti dengan versi ≥140×184 px (atau SVG) — nama file tetap sama, tidak perlu ubah kode. `logo_negative.png` (224×292) sudah tajam. |
| **Angka statistik** | `src/data/stats.js` | Ganti `value` dengan data dari database. **Jangan ubah `label`** — "KEP", "BLKEP", "SEP", "Seminar" adalah string kaku dari database lama. |
| **Detail materi program** | `src/pages/ProgramPage.jsx` | Susunan pertemuan, materi per sesi, jadwal, daftar paroki. Sengaja tidak dimuat di landing page (§3 requirement 1). |
| **Link CTA** | `href="#masuk"` / `href="#daftar"` | Arahkan ke form pendaftaran / halaman login anggota yang sebenarnya. |

## Struktur

```
src/
  main.jsx              # entry — styles.css diimpor lebih dulu (urutan CSS penting)
  App.jsx               # routing + ScrollToTop
  styles.css            # design token & tipografi global
  hooks/useScrollPosition.js
  data/stats.js         # label kaku dari database
  data/programs.js      # 3 jalur program
  components/           # Navbar, Hero, + Section 2–7
  pages/                # Home, ProgramPage
```

## Riwayat perubahan

### 2026-08-10

**Halaman Pengumuman (`/pengumuman`)**
- Teks tiap slide (tanggal, judul, ringkasan) dipindah dari center vertikal jadi menempel di kiri-atas kolomnya, sejajar dengan tepi atas brosur — sebelumnya terlihat "mengambang" di tengah kalau brosur di sebelahnya lebih tinggi.
- Urutan di mobile dibalik: teks tampil dulu, foto brosur menyusul di bawahnya.

**Section "Kegiatan Terdekat" (`EventCountdown`)**
- Kotak abu-abu di sisi kartu diganti jadi kartu kalender putih berisi bulan + tanggal.
- Copy diperbarui: band utama sekarang "SEP Terdekat", band kedua jadi "KEP Terdekat — Lihat paroki masing-masing" (KEP dijadwalkan per paroki, jadi tidak ada satu tanggal yang berlaku untuk semua).
- Dihapus dari halaman `/program`; sekarang hanya tampil di `/kegiatan/mendatang`, sebagai elemen pembuka halaman (PageHeader-nya dilepas, judul band ini dipromosikan jadi `<h1>`).

**Tabel "Ambil Langkah Pertamamu" (`UpcomingActivities`, tampil di beranda & `/kegiatan/mendatang`)**
- Dirombak dari tabel data biasa jadi baris bergaya kartu: badge tanggal (hari/bulan/tahun), judul + ringkasan singkat kegiatan, ikon lokasi, dan pil status ("Pendaftaran Dibuka" / "Hampir Ditutup", dua warna berbeda).
- Kolom "Target Peserta" dihapus; lebar kolom disesuaikan ulang beberapa kali supaya pil status tidak terpotong.
- Di mobile, baris tabel diganti jadi kartu bertumpuk (bukan lagi baris tabel dengan label `::before`).
- Komponen menerima prop `headline` dan `cta` supaya halaman `/kegiatan/mendatang` bisa memakai versi tanpa tombol "Lihat Semua Kegiatan" (karena halaman itu sendiri sudah jadi daftar lengkapnya).

**Halaman Pengajar (`/pengajar`)**
- Ditambah section baru "Kepala Sekolah" di paling atas: latar hitam, foto di kiri, profil di kanan. Sudah diisi data asli — Stanley Ch. Budihardja, periode 2016–Sekarang.
- Romo Pembina (semuanya sudah wafat) dipindah ke bagian paling bawah halaman, sekarang diberi catatan bahwa bagian ini adalah warisan/legitimasi, bukan tim pengajar aktif. Tim Pengajar periode berjalan naik ke atas.
- `PageHeader` dilepas dari halaman ini; judul kepala sekolah yang sekarang jadi `<h1>` satu-satunya di halaman.

**Lain-lain**
- Section "Program Reguler" dihapus dari `/tentang-kami` (masih tampil di beranda).
- Section pertama `/tentang-kami` ("Lembaga pembinaan iman...") dan header `/kegiatan` (Arsip Kegiatan) diubah jadi latar hitam.
- Tombol outline (`.btn--outline`) yang sebelumnya nyaris tak terlihat (bingkai biru 12% opacity) diperbaiki jadi bingkai biru solid — berlaku otomatis di semua pemakaian (galeri kegiatan, dll.).
- **Perbaikan bug penting:** situs ini punya dua navbar terpisah total — `components/new/Navbar.css` (untuk `/new` dan halaman di baliknya) dan `components/Navbar.css` (untuk `/` dan `/legacy`). Beberapa permintaan "tambah padding tombol masuk anggota" awalnya salah sasaran ke file yang salah karena mengira halaman yang dilihat adalah `/new`; sudah dikoreksi ke `components/Navbar.css` yang benar.
- Menu "Kegiatan" di navbar sekarang jadi dropdown (desktop, hover) / drill-down dua panel dengan animasi geser (mobile) berisi "Kegiatan Mendatang" dan "Arsip Kegiatan" — halaman `/kegiatan/mendatang` baru dibuat untuk ini.

## Catatan implementasi

- **Hero fixed** — foto hero `position: fixed` di belakang konten; konten menggulung menutupinya. Di bawah 768px efek ini dimatikan (fixed background tidak stabil di iOS Safari) dan hero menjadi statis biasa.
- **Navbar** — satu elemen, dua state. Di atas hero: transparan, teks krem, logo **negative** (putih). Setelah `scrollY > 80`: kartu krem mengambang dengan bayangan lembut, logo **neutral** (berwarna). Halaman program memakai `<Navbar solid />` karena tidak punya hero.
- **Logo** — kedua varian dirender bertumpuk lalu di-*cross-fade*, bukan tukar `src`, agar tidak berkedip saat navbar bertransisi. Kotaknya berukuran tetap (34×46) supaya layout tidak bergeser.
- **Statistik** — komponen `StatFigures` hanya merender angka + label dari database. Teks penjelas ditempatkan **di luar** komponen tersebut, sesuai §3 requirement 2.
- **Urutan impor CSS** — `styles.css` wajib diimpor sebelum `App` di `main.jsx`, agar CSS komponen menang pada specificity yang sama.
- Tidak ada sticky CTA di mana pun, sesuai §Section 1.
