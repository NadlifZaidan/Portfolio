import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/profile'
import type { Project } from '../types'
import { DevNote, Section } from './Section'
import { ProjectDialog } from './ProjectDialog'
import { ProjectImageBlock } from './ProjectImageBlock'
import { TagList } from './TagList'

function ProjectRow({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="grid gap-6 border-b border-line py-10 first:pt-0 last:border-b-0 md:grid-cols-[17rem_1fr] md:gap-8">
      <ProjectImageBlock project={project} />

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-2xl font-semibold text-navy-900">{project.name}</h3>
          {project.status && <span className="text-sm text-muted">{project.status}</span>}
        </div>

        <p className="mt-3 leading-relaxed text-ink">{project.summary}</p>

        <div className="mt-4">
          {project.stack.length > 0 ? (
            <TagList items={project.stack} />
          ) : (
            <DevNote>Teknologi belum diisi (`stack`)</DevNote>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="btn bg-navy-900 text-white hover:bg-navy-700"
          >
            Lihat Detail
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-line text-navy-900 hover:border-navy-900"
            >
              <Github size={16} aria-hidden />
              GitHub
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
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section id="proyek" title="Proyek pilihan" tone="mist">
      {projects.length === 0 ? (
        <p className="text-muted">Proyek belum ditambahkan.</p>
      ) : (
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
      )}
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
