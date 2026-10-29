import type { Project } from '../types'

export function ProjectImageBlock({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width ?? 1280}
        height={project.image.height ?? 800}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full rounded border border-line object-cover object-top"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Gambar sementara untuk proyek ${project.name}. Screenshot belum ditambahkan.`}
      className="flex aspect-[16/10] w-full flex-col overflow-hidden rounded border border-line bg-mist"
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-line bg-white px-3" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 text-center text-sm text-muted">
        Screenshot belum ditambahkan
      </div>
    </div>
  )
}
