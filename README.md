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

## Catatan implementasi

- **Hero fixed** — foto hero `position: fixed` di belakang konten; konten menggulung menutupinya. Di bawah 768px efek ini dimatikan (fixed background tidak stabil di iOS Safari) dan hero menjadi statis biasa.
- **Navbar** — satu elemen, dua state. Di atas hero: transparan, teks krem, logo **negative** (putih). Setelah `scrollY > 80`: kartu krem mengambang dengan bayangan lembut, logo **neutral** (berwarna). Halaman program memakai `<Navbar solid />` karena tidak punya hero.
- **Logo** — kedua varian dirender bertumpuk lalu di-*cross-fade*, bukan tukar `src`, agar tidak berkedip saat navbar bertransisi. Kotaknya berukuran tetap (34×46) supaya layout tidak bergeser.
- **Statistik** — komponen `StatFigures` hanya merender angka + label dari database. Teks penjelas ditempatkan **di luar** komponen tersebut, sesuai §3 requirement 2.
- **Urutan impor CSS** — `styles.css` wajib diimpor sebelum `App` di `main.jsx`, agar CSS komponen menang pada specificity yang sama.
- Tidak ada sticky CTA di mana pun, sesuai §Section 1.
