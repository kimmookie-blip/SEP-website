import './FinalCta.css'

/** Section 7 — Final CTA & Footer (Closing). Deep-blue block, amber button. */
export default function FinalCta() {
  return (
    <footer className="final" id="daftar">
      <div className="shell center">
        <h2 className="final__headline">Siap Bertumbuh Bersama Sahabat Seiman?</h2>
        <p className="final__sub">
          Kuota kelas terbatas untuk menjaga kualitas sharing kelompok. Daftar
          angkatan baru sekarang.
        </p>

        <a href="#masuk" className="btn btn--amber final__cta">
          Gabung Komunitas Sekarang
        </a>

        <div className="final__meta">
          <span className="final__brand">SEP Shekinah</span>
          <span className="final__note">
            Sekolah Evangelisasi Pribadi Shekinah Jakarta
          </span>
          <span className="final__note final__note--right">
            Di bawah naungan BPK PKK KAJ sejak 1988
          </span>
        </div>
      </div>

      {/* D9 — giant wordmark clipped at the baseline by the page edge.
          Decorative: .final__brand above already announces the name. */}
      <div className="final__wordmark" aria-hidden="true">
        SEP Shekinah
      </div>
    </footer>
  )
}
