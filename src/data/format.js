const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]

/**
 * 'YYYY-MM-DD' → '12 Mei 2026'.
 *
 * Written by hand rather than with toLocaleDateString so the result is the
 * same in every browser without depending on the visitor's machine locale —
 * and so the date can't shift by a day through a timezone conversion.
 *
 * Shared by kegiatan and pengumuman, which both store ISO dates.
 */
export const formatTanggal = (iso) => {
  const [year, month, day] = iso.split('-')
  return `${Number(day)} ${BULAN[Number(month) - 1]} ${year}`
}

/**
 * 'YYYY-MM-DD' → { day: '06', month: 'Sep', year: '2026' } for a date-badge
 * layout (UpcomingActivities' event rows). Slicing BULAN's full name to 3
 * characters happens to produce the correct Indonesian abbreviation for
 * every month ('Mei' is already 3 letters), so there's no separate list to
 * keep in sync with it.
 */
export const formatTanggalBadge = (iso) => {
  const [year, month, day] = iso.split('-')
  return { day: day.padStart(2, '0'), month: BULAN[Number(month) - 1].slice(0, 3), year }
}
