import { profile } from '../data/profile'

export function Footer() {
  const { github, linkedin } = profile.links

  return (
    <footer className="dark-zone bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        {(github || linkedin) && (
          <ul className="flex gap-5">
            {github && (
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  GitHub
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </footer>
  )
}