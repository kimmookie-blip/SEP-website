import './Prose.css'

/**
 * Renders the `body: [{ type, text }]` arrays in data/kegiatan.js and
 * data/pengumuman.js. Three block types only — a paragraph, a subheading, and
 * a pull quote — which is enough for the writing these pages carry and keeps
 * the data files free of markup.
 *
 * An unknown `type` falls through to a paragraph rather than disappearing, so
 * a typo in the data shows up as plain text instead of a blank gap.
 */
export default function Prose({ blocks = [] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`

        if (block.type === 'h2') return <h2 key={key}>{block.text}</h2>
        if (block.type === 'quote') return <blockquote key={key}>{block.text}</blockquote>
        return <p key={key}>{block.text}</p>
      })}
    </div>
  )
}
