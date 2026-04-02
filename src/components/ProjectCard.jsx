import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], liveUrl, repoUrl }) {
  return (
    <div className="group bg-cream-dark border border-blush-light rounded-sm p-6 flex flex-col gap-4 hover:border-blush hover:shadow-md transition-all duration-300">
      <div className="flex-1">
        <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-blush-dark transition-colors">
          {title}
        </h3>
        <p className="font-sans text-sm text-charcoal-soft leading-relaxed">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="font-sans text-xs text-stone-deep border border-stone-warm px-2 py-0.5 rounded-sm tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-1">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs text-charcoal-soft hover:text-blush-dark transition-colors"
          >
            <Github size={13} strokeWidth={1.5} />
            Repositório
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs text-charcoal-soft hover:text-blush-dark transition-colors"
          >
            <ExternalLink size={13} strokeWidth={1.5} />
            Ver projeto
          </a>
        )}
      </div>
    </div>
  )
}
