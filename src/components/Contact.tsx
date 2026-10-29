import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  const { email, github, linkedin, cv } = profile.links
  const rows = [
    email && { label: 'Email', text: email, href: `mailto:${email}`, icon: Mail, external: false },
    github && { label: 'GitHub', text: github.replace(/^https?:\/\//, ''), href: github, icon: Github, external: true },
    linkedin && { label: 'LinkedIn', text: linkedin.replace(/^https?:\/\//, ''), href: linkedin, icon: Linkedin, external: true },
    cv && { label: 'CV', text: 'Unduh CV', href: cv, icon: Download, external: false, download: true },
  ].filter(Boolean) as {
    label: string
    text: string
    href: string
    icon: typeof Mail
    external: boolean
    download?: boolean
  }[]

  return (
    <Section id="kontak" title="Kontak">
      <p className="max-w-xl text-lg leading-relaxed">
        Untuk kolaborasi dan informasi lebih lanjut, silakan hubungi saya melalui:
      </p>

      {rows.length === 0 ? (
        <p className="mt-8 text-muted">Informasi kontak belum ditambahkan.</p>
      ) : (
        <ul className="mt-8 border-t border-line">
          {rows.map(({ label, text, href, icon: Icon, external, download }) => (
            <li key={label} className="border-b border-line">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(download ? { download: true } : {})}
                className="group grid grid-cols-[6rem_1fr] items-center gap-4 py-4 transition-colors hover:bg-mist sm:px-2"
              >
                <span className="flex items-center gap-2 text-muted">
                  <Icon size={16} aria-hidden />
                  {label}
                </span>
                <span className="break-all font-medium text-navy-900 group-hover:text-accent">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
