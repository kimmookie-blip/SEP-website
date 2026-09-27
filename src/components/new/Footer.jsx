import { Link } from 'react-router-dom'
import './Footer.css'

// Edit copy here.

// Every entry is a route — the footer is rendered on the inner pages too, so
// in-page anchors would have pointed at sections that aren't there. "Hubungi
// Kami" now goes to the /kontak page; the #kontak anchor below still resolves
// to this footer's own contact block, which is what FinalCta targets.
const MAIN_LINKS = [
  { label: 'Tentang Shekinah', to: '/tentang-kami' },
  { label: 'Program Pembinaan', to: '/program' },
  // both halves of the kegiatan section — the navbar reaches these through a
  // dropdown, but a footer list has room to name them outright
  { label: 'Kegiatan Mendatang', to: '/kegiatan/mendatang' },
  { label: 'Arsip Kegiatan', to: '/kegiatan' },
  { label: 'Pengurus Harian', to: '/pengajar' },
  { label: 'Pengumuman', to: '/pengumuman' },
  { label: 'Beranda', to: '/' },
  { label: 'Hubungi Kami', to: '/kontak' },
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
            {MAIN_LINKS.map((link) =>
              link.to ? (
                <Link to={link.to} key={link.label}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              )
            )}
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
      </div>
    </footer>
  )
}
