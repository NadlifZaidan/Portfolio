export interface ProjectImage {
  /** Path di folder public, mis. "/images/projects/apotek-jwp.png" */
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Project {
  id: string
  name: string
  summary: string
  /** Masalah atau tujuan yang ingin diselesaikan */
  goal?: string
  /** Peran dan kontribusi pribadi di dalam proyek */
  contribution?: string
  stack: string[]
  /** Fitur yang sudah diimplementasikan */
  features: string[]
  /** Fitur yang masih direncanakan (opsional, dipisahkan dari fitur yang sudah ada) */
  plannedFeatures?: string[]
  image?: ProjectImage
  githubUrl?: string
  demoUrl?: string
  /** Mis. "Selesai", "Dalam pengembangan" */
  status?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Profile {
  name: string
  headline: string
  intro: string
  targetRoles: string[]
  highlightStack: string[]
  photo?: { src: string; alt: string }
  about: string[]
  links: {
    email: string
    github: string
    linkedin: string
    /** Path file CV di folder public, mis. "/cv.pdf" */
    cv: string
  }
}

export interface Education {
  institution: string
  program: string
  gpa: string
  showGpa: boolean
  /** Mis. "Lulus" atau "Mahasiswa aktif". Kosongkan jika belum ingin dicantumkan. */
  status: string
  /** Mis. "2021 - 2025". Kosongkan jika belum ingin dicantumkan. */
  period: string
  courses: string[]
}
