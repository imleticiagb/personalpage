import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  {
    icon: Github,
    href: 'https://github.com/imleticiagb',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/leticiagbatista',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:leticiabjti@gmail.com',
    label: 'E-mail',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-blush-light bg-cream-dark py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-charcoal-soft hover:text-blush-dark transition-colors"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="font-sans text-xs text-stone-soft tracking-wide">
          © {new Date().getFullYear()} Leticia Gonçalves Batista
        </p>
      </div>
    </footer>
  )
}
