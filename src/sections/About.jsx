import SectionWrapper from '../components/SectionWrapper'

const timeline = [
  {
    period: 'Mar 2026 – presente',
    title: 'Mestrado em Ciência da Computação',
    place: 'UFRGS — Universidade Federal do Rio Grande do Sul',
    detail: 'Foco em Engenharia de Software',
  },
  {
    period: 'Abr 2025 – Dez 2025',
    title: 'Estagiária em Automação de Processos',
    place: 'The X-Lab Brasil',
    detail: 'Automação com Google Apps Script e VBA · Dashboards em Excel · Otimização de processos manuais por meio da automação de tarefas.',
  },
  {
    period: 'Ago 2024 – Dez 2024',
    title: 'Estagiária em Desenvolvimento Web',
    place: 'SECOM UFJ',
    detail: 'Interfaces com HTML/CSS · WordPress (Elementor)',
  },
  {
    period: 'Ago 2022 – Dez 2025',
    title: 'Bacharelado em Ciência da Computação',
    place: 'UFJ — Universidade Federal de Jataí',
    detail: 'Concluído',
  },
]

export default function About() {
  return (
    <SectionWrapper id="sobre" className="border-t border-blush-light">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <p className="section-subtitle">Sobre mim</p>
          <h2 className="section-title">
            Código com <br />
            <em>propósito</em>
          </h2>
          <div className="divider ml-0" />
          <div className="font-sans text-sm text-charcoal-soft leading-relaxed space-y-4 mt-6">
            <p>
              Olá! Sou Leticia, desenvolvedora Full Stack e mestranda em Ciência da
              Computação pela UFRGS, com foco em Engenharia de Software. Minha experiência abrange desde automação de processos
              até desenvolvimento de interfaces e integração com banco de dados.
            </p>
            <p>
              Tenho inglês C2 (EFSET) e já publiquei pesquisas sobre mulheres em STEM.
              Acredito que a tecnologia deve ser acessível, funcional e bem construída.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="mailto:leticiabjti@gmail.com"
              className="font-sans text-xs tracking-widest uppercase border-b border-blush text-blush-dark pb-0.5 hover:border-blush-dark transition-colors"
            >
              Fale comigo
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blush mt-1.5 flex-shrink-0" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-blush-light mt-1" />
                )}
              </div>
              <div className="pb-6">
                <p className="font-sans text-xs text-stone-soft tracking-wide mb-0.5">
                  {item.period}
                </p>
                <p className="font-serif text-base text-charcoal">{item.title}</p>
                <p className="font-sans text-xs text-charcoal-soft mt-0.5">{item.place}</p>
                <p className="font-sans text-xs text-stone-soft mt-0.5 italic">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
