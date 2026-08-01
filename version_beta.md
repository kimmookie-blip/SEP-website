# Spesifikasi Pengembangan Landing Page SEP Shekinah

Dokumen ini berisi struktur konten, *requirements*, dan panduan gaya visual untuk membangun *landing page* optimasi konversi SEP Shekinah menggunakan Claude Code.

---

## 1. Panduan Gaya Visual & Desain (UI/UX Style Guide)

Desain wajib menggunakan skema warna *warm, glowing liturgic modern*. Dominasi visual harus terasa kekuningan hangat, bersih, dengan aksen biru tua yang tegas. **Maroon dilarang menjadi warna dominan.**

*   **Palet Warna Utama (Sesuai Gambar Referensi):**
    *   *Primary Honey/Amber:* `#F1A501` (Amber Honey) – Digunakan untuk elemen penarik perhatian, tombol aktif, angka statistik utama, dan aksen sorotan emosional.
    *   *Deep Space Blue:* `#0F314E` (Deep Space Blue) – Digunakan sebagai aksen kontras tinggi, warna teks utama (*headings*), latar belakang *hero* atau *footer* tertentu, dan pembatas visual.
*   **Palet Warna Netral & Latar Belakang:**
    *   *Dominant Background:* `#FEFDF9` (Warm Off-White/Kekuningan) – Harus mendominasi 70% area halaman untuk menciptakan kesan bersih namun tetap hangat (*warm tone*).
    *   *Secondary Background:* `#FFFFFF` (Pure White) – Digunakan untuk area kartu fitur atau pemisah seksi agar layout tetap dinamis.
*   **Tipografi (Google Fonts):**
    *   **Headline & Subheadline:** Menggunakan font **Amiri** (Serif klasik yang berciri elegan dan berwibawa).
    *   **Tagline / Teks Aksen Kecil / Label Kicker:** Menggunakan font **Balthazar** (Memberikan kesan editorial puitis).
    *   **Body Text / Isi Konten / Tombol / Detail:** Menggunakan font **Inter** (Sans-serif bersih dengan *tracking* longgar untuk keterbacaan tinggi).
*   **Layout & Komposisi:**
    *   Terapkan *whitespace* yang luas di atas dasar warna `#FEFDF9` untuk menghindari *information overload*.
    *   Gunakan elemen pembatas garis tipis vertikal/horizontal menggunakan warna `#0F314E` dengan opasitas rendah (transparan) atau aksen warna `#F1A501`.

---

## 2. Struktur Section Landing Page (Urutan Storytelling)

### Section 1: Hero Section (The Awakening)
*   **Visual:** Latar belakang menggunakan foto umat yang hangat dengan filter *warm/yellowish tone*, dipadukan dengan teks kontras tinggi menggunakan warna `#0F314E` atau *overlay blocking* `#0F314E` tipis agar tulisan terbaca jelas.
*   **Tagline (Balthazar):** Sekolah Evangelisasi Pribadi Shekinah Jakarta
*   **Headline (Amiri):** Bertumbuh Bersama Sahabat Seiman, Perbarui Hidup Sehari-hari
*   **Sub-headline (Amiri):** Wadah awam Katolik untuk mengalami perjumpaan pribadi dengan Kristus. Belajar berdampak bagi sesama, fokus pada perubahan hidup nyata.
*   **CTA Button (Inter):** "GABUNG KOMUNITAS SEKARANG" – Menggunakan basis warna `#F1A501` kontras (Tanpa *sticky CTA*).

### Section 2: Jalur Masalah & Solusi (The "Why")
*   **Visual:** Layout bersih dua kolom kontras di atas latar belakang `#FEFDF9`. Kiri menampilkan masalah, kanan menampilkan solusi emosional.
*   **Headline (Amiri):** Merasa Lelah Dengan Rutinitas Iman Formalitas?
*   **Body Text Kiri - Masalah (Inter):** Iman terasa sebatas rutinitas harian, hambar, dan dijalani sendiri tanpa arah.
*   **Body Text Kanan - Solusi (Inter):** Hidup kembali bermakna dan bersemangat saat dijalani bersama komunitas sahabat seiman yang saling mendukung.

### Section 3: Kredibilitas & Data Dinamis (Social Proof)
*   **Latar Belakang:** Blok warna bersih atau semi-box untuk area statistik.
*   **Tagline/Kicker (Balthazar):** Rekam Jejak Pelayanan
*   **Headline (Amiri):** Jejak Langkah Transformatif Bersama Awam Katolik
*   **Sub-headline (Amiri):** Resmi di bawah naungan BPK PKK KAJ sejak 1988, melayani umat di puluhan paroki.
*   **Elemen Database (Dinamis - Jangan Ubah Label):**
    *   [Angka warna #F1A501] KEP
    *   [Angka warna #F1A501] BLKEP
    *   [Angka warna #F1A501] SEP
    *   [Angka warna #F1A501] Seminar
*   **Teks Penjelas Statis (Inter - Wajib Ada di Bawah Angka, warna teks #0F314E):** 
    *Catatan: Singkatan di atas merupakan data angkatan berjalan untuk program Kursus Evangelisasi Pribadi (KEP/SEP) dan Bina Lanjut Pendalaman Iman (BLKEP).*

### Section 4: Pembongkar Keraguan (Objection Killers)
*   **Headline (Amiri):** Mengapa SEP Shekinah Berbeda?
*   **Struktur:** 3 Kolom kartu dengan latar belakang `#FFFFFF` di atas lantai halaman `#FEFDF9`.
    *   *Kolom 1:* **Bukan Jadi Pengkhotbah Mimbar** (Inter) — Fokus pada kesaksian hidup pribadi dan aplikasi praktis di dunia kerja atau keluarga.
    *   *Kolom 2:* **Tanpa Ujian Kaku & Jadwal Bebas** (Inter) — Pilihan kelas fleksibel (Rabu Malam atau Sabtu Pagi) yang dirancang ramah untuk profesional sibuk.
    *   *Kolom 3:* **Ruang Aman Bebas Kompetisi** (Inter) — Saling menguatkan dalam kelompok kecil (*sharing* Kitab Suci) tanpa tekanan akademis.

### Section 5: Pilihan Jalur Pertumbuhan (The Product)
*   **Headline (Amiri):** Tentukan Langkah Pertumbuhan Anda
*   **Fungsional UI:** Menggunakan *Tab Navigation*. Warna tab aktif menggunakan `#F1A501` atau tulisan `#0F314E` dengan garis bawah tegas.
    *   *Tab 1: Kursus Utama (KEP/SEP)* -> Tampilkan informasi singkat fokus program: Pemulihan Gambar Diri & Retret Luka Batin.
    *   *Tab 2: Pendalaman Iman (BLPI)* -> Tampilkan informasi singkat fokus program: Pemuridan & Karunia Roh Kudus.
    *   *Tab 3: Kelas Kitab Suci (BLKS)* -> Tampilkan informasi singkat fokus program: Metode *Joy of Discovery*.
*   **Tombol di Tiap Tab (Inter):** "Lihat Detail Materi" dengan warna teks `#0F314E` (Membuka halaman web terpisah khusus program, *bukan* memanjangkan halaman utama ini).

### Section 6: Bukti Nyata (Dual-Age Testimonials)
*   **Headline (Amiri):** Yang Dialami Bersama SEP Shekinah
*   **Struktur:** 2 Kolom Testimoni Berdampingan dengan aksen kutipan warna `#F1A501`.
    *   *Kolom Kiri (Target Muda/OMK):* "Di tengah penat karier, komunitas ini memberi energi positif dan ruang aman untuk bercerita." — Alumni Muda, 27 Tahun (Inter).
    *   *Kolom Kanan (Target Dewasa):* "Kursus ini mengubah cara saya berkomunikasi dengan pasangan. Relasi keluarga dipulihkan." — Alumni Dewasa, 45 Tahun (Inter).

### Section 7: Final CTA & Footer (Closing)
*   **Latar Belakang:** Warna solid `#0F314E` (Deep Space Blue) untuk memberikan penutup kontras yang megah dan fokus.
*   **Headline (Amiri, warna kontras terang):** Siap Bertumbuh Bersama Sahabat Seiman?
*   **Sub-headline (Amiri):** Kuota kelas terbatas untuk menjaga kualitas *sharing* kelompok. Daftar angkatan baru sekarang.
*   **CTA Button (Inter):** "GABUNG KOMUNITAS SEKARANG" dengan warna latar belakang penuh `#F1A501` dan teks `#0F314E`.

---

## 3. Persyaratan Teknis & Fungsional (Requirements)

1.  **Fokus Pemangkasan Informasi:** Jangan masukkan daftar nama paroki, detail susunan 17 - 20 pertemuan, atau daftar teori modul Kitab Suci A sampai F ke dalam file ini. Semua rincian itu dialokasikan ke tombol eksternal/halaman materi sekunder.
2.  **Keterbatasan Database:** Komponen angka statistik pada Section 3 harus disiapkan berupa variabel dinamis yang menerima *input text* kaku dari database lama ("KEP", "BLKEP", "SEP", "Seminar"). Penjelasan tambahan wajib menggunakan elemen teks statis di luar komponen pembaca database.
3.  **Responsivitas:** Layout wajib adaptif dari tampilan desktop multi-kolom menjadi tumpukan vertikal tunggal yang elegan di perangkat *mobile* (usia target 20 - 60 tahun membutuhkan keterbacaan teks yang bersih dan ukuran tombol yang mudah ditekan).