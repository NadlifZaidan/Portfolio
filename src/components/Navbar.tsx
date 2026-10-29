import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const items = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#pendidikan', label: 'Pendidikan' },
  { href: '#kontak', label: 'Kontak' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="dark-zone sticky top-0 z-40 border-b border-white/10 bg-navy-900 text-white">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#beranda" className="font-serif text-lg font-semibold">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 rounded p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-white/10 px-5 pb-4 md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-white/90 last:border-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}