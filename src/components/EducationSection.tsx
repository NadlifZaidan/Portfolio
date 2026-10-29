import { education } from '../data/profile'
import { DevNote, Section } from './Section'

export function EducationSection() {
  const meta = [education.status, education.period].filter(Boolean).join(', ')

  return (
    <Section id="pendidikan" title="Pendidikan" tone="mist">
      <div className="max-w-2xl">
        <h3 className="font-serif text-2xl font-semibold text-navy-900">{education.institution}</h3>
        <p className="mt-1 text-lg">{education.program}</p>
        {meta ? <p className="mt-1 text-muted">{meta}</p> : <div className="mt-2"><DevNote>Status kelulusan dan periode belum diisi (`education.status`, `education.period`)</DevNote></div>}
        {education.showGpa && education.gpa && <p className="mt-3">IPK {education.gpa}</p>}

        <h4 className="mt-8 text-sm font-semibold text-navy-900">Mata kuliah yang relevan</h4>
        <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {education.courses.map((course) => (
            <li key={course} className="border-t border-line pt-2 text-ink">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
