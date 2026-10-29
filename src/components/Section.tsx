import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  tone?: 'light' | 'mist'
}

export function Section({ id, title, children, tone = 'light' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-judul`}
      className={`scroll-mt-16 border-t border-line py-16 md:py-24 ${
        tone === 'mist' ? 'bg-mist' : 'bg-white'
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[12rem_1fr] md:gap-12 md:px-8">
        <h2
          id={`${id}-judul`}
          className="font-serif text-3xl font-semibold text-navy-900 md:sticky md:top-24 md:self-start"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

/** Catatan untuk kolom kosong; hanya tampil saat `npm run dev`. */
export function DevNote({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null
  return (
    <p className="rounded border border-dashed border-line px-3 py-2 text-sm italic text-muted">
      {children} (catatan ini hanya tampil saat pengembangan)
    </p>
  )
}
