/**
 * Section 3 — Kredibilitas & Data Dinamis.
 *
 * Per version_beta.md §3 requirement 2: these come from the legacy database,
 * which returns RIGID label strings. Do not rename, translate, or expand the
 * `label` values — "KEP", "BLKEP", "SEP", "Seminar" are what the DB emits.
 *
 * The explanatory note that decodes these abbreviations is deliberately NOT
 * part of this data — it lives as a static element in Stats.jsx, outside the
 * database-reading component.
 *
 * Replace `value` with the live DB response when the API is wired up.
 */
export const stats = [
  { label: 'KEP', value: '48' },
  { label: 'BLKEP', value: '32' },
  { label: 'SEP', value: '24' },
  { label: 'Seminar', value: '120' },
]
