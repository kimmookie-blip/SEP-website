/**
 * Copy + placeholder data for the /prototype route.
 *
 * Everything here is transcribed from Reference/Fixed Content Section.png.
 * Where the comp shows a grey box instead of artwork, the item carries no
 * `image` and the component renders the grey placeholder instead.
 */

/* --- blocks 1 and 5: credibility bands ------------------------------- */

export const credibilityLight = {
  stats: [
    { value: '1990', label: 'Tahun Berdiri' },
    { value: '59', label: 'Paroki Bekerjasama' },
    { value: '4', label: 'Jalur Program Utama' },
  ],
}

export const credibilityAmber = {
  stats: [
    { value: '1990', label: 'Tahun Berdiri' },
    { value: '59', label: 'Paroki Bekerjasama' },
    { value: '3', label: 'Jalur Program Utama' },
  ],
}

/* --- block 2: program strip ------------------------------------------ */

export const protoPrograms = [
  {
    slug: 'evangelisasi',
    tab: 'Evangelisasi',
    title: 'Evangelisasi | SEP, KEP',
    blurb: 'Fokus pada pengajaran teologi awam dan pendalaman firman.',
    image: 'evangelisasi',
  },
  {
    slug: 'pendalaman-iman',
    tab: 'Pendalaman Iman',
    title: 'Pendalaman Iman | BLPI',
    blurb: 'Fokus pada pemuridan dan pengenalan karunia Roh Kudus.',
    image: null,
  },
  {
    slug: 'kitab-suci',
    tab: 'Kitab Suci',
    title: 'Kitab Suci | BLKS',
    blurb: 'Fokus pada metode Joy of Discovery dalam membaca Kitab Suci.',
    image: null,
  },
  {
    slug: 'pelayanan',
    tab: 'Pelayanan',
    title: 'Pelayanan | Seminar',
    blurb: 'Fokus pada pembekalan praktis bagi pelayan awam di paroki.',
    image: null,
  },
]

/* --- block 3: event countdown ---------------------------------------- */

/**
 * Ticks against a real target so the prototype shows live behaviour. The comp
 * renders a two-digit hour (`19 : 20 : 15`), so the clock has no days field —
 * the demo target sits just under a day out to stay in that shape. A real
 * event date comes from the CMS later, and the component clamps at 99 hours.
 */
export const featuredEvent = {
  eyebrow: 'KEP St. Anna, Duren Sawit',
  title: 'KEP St. Anna, Duren Sawit',
  startsAt: new Date(Date.now() + (19 * 3600 + 20 * 60 + 15) * 1000).toISOString(),
}

export const upcomingEvents = [
  { date: '19 Agustus', title: 'KEP St. Anna, Duren Sawit' },
  { date: '19 Agustus', title: 'KEP St. Anna, Duren Sawit' },
]

/* --- block 4: aneka kegiatan ----------------------------------------- */

export const activities = [
  {
    id: 'rosary-1',
    date: '12 Mei 2026',
    title: 'Rosary Night at Shekinah',
    blurb:
      'Bulan Mei merupakan Bulan yang di devosikan khusus untuk menghormati Bunda Maria. Pada bulan ini semua umat Katolik akan berdevosi penuh kepada .....',
  },
  {
    id: 'rosary-2',
    date: '12 Mei 2026',
    title: 'Rosary Night at Shekinah',
    blurb:
      'Bulan Mei merupakan Bulan yang di devosikan khusus untuk menghormati Bunda Maria. Pada bulan ini semua umat Katolik akan berdevosi penuh kepada .....',
  },
  {
    id: 'rosary-3',
    date: '12 Mei 2026',
    title: 'Rosary Night at Shekinah',
    blurb:
      'Bulan Mei merupakan Bulan yang di devosikan khusus untuk menghormati Bunda Maria. Pada bulan ini semua umat Katolik akan berdevosi penuh kepada .....',
  },
]
