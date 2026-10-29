import { useEffect, useRef, type ReactNode } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import type { Project } from '../types'
import { DevNote } from './Section'
import { ProjectImageBlock } from './ProjectImageBlock'
import { TagList } from './TagList'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

function Field({ label, empty, note, children }: { label: string; empty: boolean; note: string; children: ReactNode }) {
  if (empty) {
    return (
      <div>
        <DevNote>{`${label}: ${note}`}</DevNote>
      </div>
    )
  }
  return (
    <div>
      <h3 className="text-sm font-semibold text-navy-900">{label}</h3>
      <div className="mt-2 text-ink">{children}</div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    }
    if (!project && dialog.open) dialog.close()
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  return (
    <dialog
      ref={ref}
      aria-labelledby="dialog-proyek-judul"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current?.close()
      }}
      className="m-auto max-h-[90vh] w-[min(100%-1.5rem,46rem)] overflow-y-auto rounded-md bg-white p-0 text-ink shadow-xl backdrop:bg-navy-950/70"
    >
      {project && (
        <div className="p-5 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="dialog-proyek-judul" className="font-serif text-2xl font-semibold text-navy-900 md:text-3xl">
                {project.name}
              </h2>
              {project.status && <p className="mt-1 text-sm text-muted">{project.status}</p>}
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Tutup detail proyek"
              className="-mr-2 -mt-2 rounded p-2 text-muted hover:text-navy-900"
            >
              <X size={22} aria-hidden />
            </button>
          </div>

          <div className="mt-6">
            <ProjectImageBlock project={project} />
          </div>

          <p className="mt-6 leading-relaxed">{project.summary}</p>

          <div className="mt-8 space-y-7">
            <Field label="Tujuan proyek" empty={!project.goal} note="isi `goal` di src/data/profile.ts">
              <p className="leading-relaxed">{project.goal}</p>
            </Field>
            <Field label="Kontribusi saya" empty={!project.contribution} note="isi `contribution` di src/data/profile.ts">
              <p className="leading-relaxed">{project.contribution}</p>
            </Field>
            <Field label="Teknologi" empty={project.stack.length === 0} note="isi `stack` di src/data/profile.ts">
              <TagList items={project.stack} />
            </Field>
            <Field
              label={project.plannedFeatures ? 'Fitur yang sudah diimplementasikan' : 'Fitur utama'}
              empty={project.features.length === 0}
              note="isi `features` di src/data/profile.ts"
            >
              <BulletList items={project.features} />
            </Field>
            {project.plannedFeatures && (
              <Field
                label="Fitur yang masih direncanakan"
                empty={project.plannedFeatures.length === 0}
                note="isi `plannedFeatures` di src/data/profile.ts"
              >
                <BulletList items={project.plannedFeatures} />
              </Field>
            )}
          </div>

          {(project.githubUrl || project.demoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-navy-900 text-white hover:bg-navy-700"
                >
                  <Github size={16} aria-hidden />
                  Repository GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-line text-navy-900 hover:border-navy-900"
                >
                  <ExternalLink size={16} aria-hidden />
                  Buka demo
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  )
}
