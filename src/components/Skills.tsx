import { skillGroups } from '../data/profile'
import { Section } from './Section'
import { TagList } from './TagList'

export function Skills() {
  return (
    <Section id="keahlian" title="Keahlian teknis">
      <dl className="border-t border-line">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[13rem_1fr] sm:items-center">
            <dt className="font-medium text-navy-900">{group.title}</dt>
            <dd>
              <TagList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
