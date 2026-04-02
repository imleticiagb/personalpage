import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="topo"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-cream-dark opacity-60 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        {/* Profile photo */}
        <div className="relative">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blush-light shadow-lg">
            <img
              src={`${BASE}img/profile.jpg`}
              alt="Foto de perfil de Leticia Gonçalves Batista"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blush rounded-full border-2 border-cream" />
        </div>

        {/* Name & Title */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-sans text-xs tracking-[0.25em] text-stone-soft uppercase">
            Desenvolvedora Full Stack
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
            Leticia <br className="md:hidden" />
            <span className="italic text-blush-dark">Gonçalves</span>
          </h1>
          <p className="font-sans text-sm text-charcoal-soft max-w-md leading-relaxed mt-2">
            Mestranda em Ciência da Computação pela UFRGS · Java · Python · React
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/imleticiagb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-charcoal-soft hover:text-blush-dark transition-colors"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <div className="w-px h-4 bg-stone-warm" />
          <a
            href="https://linkedin.com/in/leticiagbatista"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-charcoal-soft hover:text-blush-dark transition-colors"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <div className="w-px h-4 bg-stone-warm" />
          <a
            href="mailto:leticiabjti@gmail.com"
            aria-label="E-mail"
            className="text-charcoal-soft hover:text-blush-dark transition-colors"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#projetos"
            className="font-sans text-sm tracking-wide border border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="font-sans text-sm tracking-wide border border-blush text-blush-dark px-8 py-3 hover:bg-blush hover:text-cream transition-all duration-300"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-warm hover:text-blush transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={22} strokeWidth={1.5} />
      </a>
    </section>
  )
}
