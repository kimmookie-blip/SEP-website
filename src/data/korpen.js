/**
 * Koordinator Pendamping (Korpen) periode 2025–2028.
 *
 * Sumber: Reference/Korpen 2025-2028.xlsx, sheet "Paroki" (kolom Area,
 * Paroki, Korpen). Urutan grup dan isinya mengikuti urutan baris di file
 * itu — "disusun by Dekanat", sesuai arahan.
 *
 * Sembilan dekenat pertama berisi 59 paroki KAJ yang bekerja sama. Dua grup
 * terakhir bukan paroki: `shekinah` adalah unit internal (SEPUM, SEPEKS,
 * SEPOMK, BLPI) dan `luar-negeri` adalah komunitas di Australia.
 *
 * Satu orang bisa mendampingi beberapa paroki — 34 korpen menutup 67 baris —
 * jadi nama berulang di sini memang disengaja, bukan duplikat.
 *
 * Trinitas, CENGKARENG memang dipegang dua orang: sel sumbernya berisi dua
 * nama yang dipisah baris baru, ditulis ulang di sini dengan garis miring.
 */
export const korpenGroups = [
  {
    id: 'dekenat-pusat',
    area: 'Dekenat Pusat',
    entries: [
      { paroki: 'Hati Kudus, KRAMAT', korpen: 'Stefanus Oey' },
      { paroki: 'Kristus Raja, PEJOMPONGAN', korpen: 'Gregorius Sutikno' },
      { paroki: 'St. Theresia, MENTENG', korpen: 'Ferry Yusuf Lubis' },
      { paroki: 'St. Ignatius, JL. MALANG', korpen: 'Ferry Yusuf Lubis' },
      { paroki: 'St. Paskalis, CEMPAKA PUTIH', korpen: 'Olivera Wijaya' },
    ],
  },
  {
    id: 'dekenat-utara',
    area: 'Dekenat Utara',
    entries: [
      { paroki: 'St. Lukas, SUNTER', korpen: 'Ridwan Sutyadi' },
      { paroki: 'St. Alfonsus Rodriguez, PADEMANGAN', korpen: 'Ridwan Sutyadi' },
      { paroki: 'St. Yakobus, KELAPA GADING', korpen: 'YE. Sendjaja' },
      { paroki: 'St. Yohanes don Bosko, DANAU SUNTER', korpen: 'Leny Indah Setiowati' },
      { paroki: 'Regina Caeli, PANTAI INDAH KAPUK', korpen: 'Patrick Moniaga' },
    ],
  },
  {
    id: 'dekenat-selatan',
    area: 'Dekenat Selatan',
    entries: [
      { paroki: 'St. Fransiskus Asisi, TEBET', korpen: 'Stefanus Oey' },
      { paroki: 'Keluarga Kudus, PASAR MINGGU', korpen: 'Emanuella Ridayati' },
      { paroki: 'Ratu Rosari, JAGAKARSA', korpen: 'Yuni Astuti' },
      { paroki: 'SP. Maria Ratu, BLOK Q', korpen: 'Ratna Ariani' },
      { paroki: 'St. Stefanus, CILANDAK', korpen: 'Martha Wati Tjandra' },
      { paroki: 'St. Yohanes Penginjil, BLOK B', korpen: 'Andi Susilo' },
    ],
  },
  {
    id: 'dekenat-timur',
    area: 'Dekenat Timur',
    entries: [
      { paroki: 'Keluarga Kudus, RAWAMANGUN', korpen: 'Yenny Lauw' },
      { paroki: 'St. Yosep, MATRAMAN', korpen: 'Gregorius Sutikno' },
      { paroki: 'St. Agustinus, HALIM PERDANAKUSUMA', korpen: 'Amelia Oeij' },
      { paroki: 'St. Aloysius Gonzaga, CIJANTUNG', korpen: 'Ferry Yusuf Lubis' },
      { paroki: 'St. Anna, DUREN SAWIT', korpen: 'Yenny Lauw' },
      { paroki: 'St. Gabriel, PULO GEBANG', korpen: 'YE. Sendjaja' },
      { paroki: 'St. Robertus Bellarminus, CILILITAN', korpen: 'Agustina Natalia' },
      { paroki: 'St. Yohanes Maria Vianney, CILANGKAP', korpen: 'Pinarwan Tenardi' },
      { paroki: 'St. Antonius Padua, BIDARACINA', korpen: 'Linda Maramis' },
      { paroki: 'St. Bonaventura, PULOMAS', korpen: 'Olivera Wijaya' },
    ],
  },
  {
    id: 'dekenat-barat-1',
    area: 'Dekenat Barat I',
    entries: [
      { paroki: 'Bunda Hati Kudus, KEMAKMURAN', korpen: 'Djuli Quaasalmy' },
      { paroki: 'Damai Kristus, KAMPUNG DURI', korpen: 'Hiu Kurniawan' },
      { paroki: 'Kristus Salvator, SLIPI', korpen: 'Pinarwan Tenardi' },
      { paroki: 'St. Maria De Fatima, TOASEBIO', korpen: 'Cecilia Wirianto' },
      { paroki: 'St. Petrus & Paulus, MANGGA BESAR', korpen: 'Cecilia Wirianto' },
    ],
  },
  {
    id: 'dekenat-barat-2',
    area: 'Dekenat Barat II',
    entries: [
      { paroki: 'Maria Kusuma Karmel, MERUYA', korpen: 'Patrick Moniaga' },
      { paroki: 'St. Maria Imakulata, KALIDERES', korpen: 'Sri Wahyuni' },
      { paroki: 'St. Andreas, KEDOYA', korpen: 'Sri Wahyuni' },
      { paroki: 'St. Kristoforus, GROGOL', korpen: 'Djuli Quaasalmy' },
      { paroki: 'St. Matias Rasul, KOSAMBI BARU', korpen: 'Birgita Fariati' },
      { paroki: 'St. Philipus Rasul, KAPUK', korpen: 'Gunawan Tjiu' },
      { paroki: 'St. Thomas Rasul, BOJONG INDAH', korpen: 'Birgita Fariati' },
      { paroki: 'Trinitas, CENGKARENG', korpen: 'Christian Muliadi / Reza Sjarif' },
    ],
  },
  {
    id: 'dekenat-bekasi',
    area: 'Dekenat Bekasi',
    entries: [
      { paroki: 'Kalvari, LUBANG BUAYA', korpen: 'Linda Maramis' },
      { paroki: 'St. Albertus, HARAPAN INDAH', korpen: 'Irma Hoesan' },
      { paroki: 'St. Arnoldus, BEKASI', korpen: 'Irma Hoesan' },
      { paroki: 'St. Bartolomeus, TAMAN GALAXI', korpen: 'Emmy Sriharjanti' },
      { paroki: 'St. Clara, BEKASI UTARA', korpen: 'Irma Hoesan' },
      { paroki: 'St. Leo Agung, JATIWARINGIN', korpen: 'Gregorius Sutikno' },
      { paroki: 'Ibu Teresa, CIKARANG', korpen: 'Emmy Sriharjanti' },
      { paroki: 'St. Servatius, KAMPUNG SAWAH', korpen: 'Amelia Oeij' },
      { paroki: 'St. Mikael, KRANJI', korpen: 'Emmy Sriharjanti' },
    ],
  },
  {
    id: 'dekenat-tangerang-1',
    area: 'Dekenat Tangerang 1',
    entries: [
      { paroki: 'St. Agustinus, KARAWACI', korpen: 'Grace Hartanto' },
      { paroki: 'St. Bernadet, PINANG', korpen: 'Pinarwan Tenardi' },
      { paroki: 'St. Gregorius Agung, KUTABUMI TANGERANG', korpen: 'Andreas Faizal Tjokro' },
      { paroki: 'St. Helena, CURUG', korpen: 'Andreas Faizal Tjokro' },
      { paroki: 'Hati St. Perawan Maria Tak Bernoda, TANGERANG', korpen: 'Grace Hartanto' },
    ],
  },
  {
    id: 'dekenat-tangerang-2',
    area: 'Dekenat Tangerang 2',
    entries: [
      { paroki: 'St. Barnabas, PAMULANG', korpen: 'Martha Wati Tjandra' },
      { paroki: 'St. Laurensius, ALAM SUTERA', korpen: 'Yohannes Alexander' },
      { paroki: 'St. Maria Regina, BINTARO JAYA', korpen: 'Stanley Ch. Budihardja' },
      { paroki: 'St. Matius Penginjil, BINTARO', korpen: 'Ekahananta' },
      { paroki: 'St. Monika, SERPONG', korpen: 'Yohannes Alexander' },
      { paroki: 'St. Nikodemus, CIPUTAT', korpen: 'Ekahananta' },
    ],
  },
  {
    id: 'shekinah',
    area: 'Shekinah',
    entries: [
      { paroki: 'SEPUM', korpen: 'Djuli Quaasalmy' },
      { paroki: 'SEPEKS', korpen: 'Yohannes Alexander' },
      { paroki: 'SEPOMK', korpen: 'Cecilia Wirianto' },
      { paroki: 'BLPI', korpen: 'Djuli Quaasalmy' },
    ],
  },
  {
    id: 'luar-negeri',
    area: 'Luar Negeri',
    entries: [
      { paroki: 'CIC - Sydney', korpen: 'Thomas Trika' },
      { paroki: 'Sydney', korpen: 'Thomas Trika' },
      { paroki: 'PDKK Epiphany, SYDNEY', korpen: 'Lenny Tano' },
      { paroki: 'KKI Melbourne', korpen: 'Thomas Trika' },
    ],
  },
]
