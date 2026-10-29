import { Download } from 'lucide-react'
import { profile, projects } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const summary = [
    { label: 'Pendidikan', value: 'Sistem Informasi, Universitas Gunadarma' },
    { label: 'Posisi yang dituju', value: profile.targetRoles.join(', ') },
    { label: 'Tech Stack', value: profile.highlightStack.join(', ') },
    { label: 'Total proyek', value: `${projects.length} proyek di bawah` },
  ]

  return (
    <section
      id="beranda"
      aria-labelledby="hero-judul"
      className="scroll-mt-16 bg-beige text-navy-900"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.35fr_1fr] md:items-end md:gap-16 md:px-8 md:py-24">
        <div className="hero-in">
          <h1
            id="hero-judul"
            className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-accent md:text-xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-900/80">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#proyek" className="btn bg-navy-900 text-white hover:bg-navy-700">
              Lihat Project
            </a>
            {profile.links.cv && (
              <a
                href={profile.links.cv}
                download
                className="btn border border-navy-900/30 text-navy-900 hover:border-navy-900"
              >
                <Download size={16} aria-hidden />
                Download CV
              </a>
            )}
            <SocialLinks className="sm:ml-2" />
          </div>
        </div>

        <div className="hero-in [animation-delay:120ms]">
          {profile.photo && (
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={448}
              height={560}
              decoding="async"
              className="mb-8 aspect-[4/5] w-48 rounded border border-navy-900/15 object-cover md:w-56"
            />
          )}

          <dl className="border-t border-navy-900/20 text-sm">
            {summary.map((row) => (
              <div key={row.label} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-navy-900/15 py-3.5">
                <dt className="text-muted">{row.label}</dt>
                <dd className="text-navy-900">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}