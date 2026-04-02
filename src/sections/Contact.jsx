import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const contacts = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'leticiabjti@gmail.com',
    href: 'mailto:leticiabjti@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'imleticiagb',
    href: 'https://github.com/imleticiagb',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'leticiagbatista',
    href: 'https://linkedin.com/in/leticiagbatista',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Porto Alegre, RS · Brasil',
    href: null,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contato" className="bg-cream-dark border-t border-blush-light">
      <div className="max-w-lg mx-auto text-center">
        <p className="section-subtitle">Vamos conversar</p>
        <h2 className="section-title">Contato</h2>
        <div className="divider" />

        <p className="font-sans text-sm text-charcoal-soft leading-relaxed mt-6 mb-10">
          Estou aberta a oportunidades, colaborações e conversas sobre tecnologia.
          Sinta-se à vontade para entrar em contato!
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-cream border border-blush-light p-4 rounded-sm hover:border-blush transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0 group-hover:bg-blush transition-colors">
                <Icon size={15} strokeWidth={1.5} className="text-blush-dark group-hover:text-cream transition-colors" />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs text-stone-soft tracking-wide uppercase">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-charcoal hover:text-blush-dark transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-sans text-sm text-charcoal">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
