import './Footer.css'

// struktur-homepage-sep-shekinah.md §14 — edit copy here.
// Closing wordmark borrows from demo.divi-pixel.com/church/'s giant
// "FAITH & LOVE" line at the very bottom of the footer.
const CLOSING_WORDMARK = (
  <>
    Kristus <em>&amp;</em> Komunitas
  </>
)

const MAIN_LINKS = [
  { label: 'Tentang Shekinah', href: '#legitimasi' },
  { label: 'Program Pembinaan', href: '#program' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Pengajar', href: '#pengajar' },
  { label: 'Paroki Mitra', href: '#legitimasi' },
  { label: 'Artikel dan Materi', href: '#artikel' },
  { label: 'Pengumuman', href: '#pengumuman' },
  { label: 'Hubungi Kami', href: '#kontak' },
]

const INSTITUTIONAL = {
  name: 'SEP Shekinah',
  underAuspicesOf: 'BPK PKK Keuskupan Agung Jakarta',
  address: '[Alamat lembaga]',
  phone: '[Nomor telepon]',
  whatsapp: '[Nomor WhatsApp]',
  email: '[Alamat email]',
}

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Facebook', href: '#' },
]

const LEGAL_LINKS = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat Penggunaan', href: '#' },
  { label: 'Hak Cipta', href: '#' },
]

/** Section 14 — closing navigation, institutional identity, legal/utility. */
export default function Footer() {
  return (
    <footer className="new-footer">
      <div className="shell">
        <div className="new-footer__top">
          <div className="new-footer__brand" id="kontak">
            <p className="new-footer__name">{INSTITUTIONAL.name}</p>
            <p className="new-footer__auspices">
              Di bawah naungan <strong>{INSTITUTIONAL.underAuspicesOf}</strong>
            </p>

            <ul className="new-footer__contact">
              <li>{INSTITUTIONAL.address}</li>
              <li>{INSTITUTIONAL.phone}</li>
              <li>WhatsApp: {INSTITUTIONAL.whatsapp}</li>
              <li>{INSTITUTIONAL.email}</li>
            </ul>

            <div className="new-footer__social">
              {SOCIAL_LINKS.map((social) => (
                <a href={social.href} key={social.label}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="new-footer__links" aria-label="Tautan footer">
            {MAIN_LINKS.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="new-footer__bottom">
          <p className="new-footer__copyright">
            &copy; {new Date().getFullYear()} {INSTITUTIONAL.name}. Semua hak cipta dilindungi.
          </p>

          <div className="new-footer__legal">
            {LEGAL_LINKS.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
            <a href="#masuk">Login Anggota</a>
          </div>
        </div>

        <p className="new-footer__wordmark">{CLOSING_WORDMARK}</p>
      </div>
    </footer>
  )
}
