import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="tentang" title="Tentang saya">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
