import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

interface SocialLinksProps {
  className?: string
}

/** Menampilkan hanya tautan yang sudah diisi di profile.links. */
export function SocialLinks({ className = '' }: SocialLinksProps) {
  const { email, github, linkedin } = profile.links
  const items = [
    github && { href: github, label: 'GitHub', icon: Github, external: true },
    linkedin && { href: linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    email && { href: `mailto:${email}`, label: 'Email', icon: Mail, external: false },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github; external: boolean }[]

  if (items.length === 0) return null

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex h-10 w-10 items-center justify-center rounded border border-navy-900/25 text-navy-900 transition-colors hover:border-navy-900"
          >
            <Icon size={18} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  )
}