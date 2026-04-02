import SectionWrapper from '../components/SectionWrapper'

const skillGroups = [
  {
    category: 'Front-End',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Back-End',
    skills: ['Java', 'Python', 'Node.js', 'APIs REST'],
  },
  {
    category: 'Banco de Dados',
    skills: ['PostgreSQL', 'MariaDB'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'GitHub', 'Excel Avançado', 'VBA', 'Google Apps Script', 'Figma'],
  },
  {
    category: 'Idiomas',
    skills: ['Português (nativo)', 'Inglês C2 (EFSET)'],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="habilidades" className="border-t border-blush-light">
      <div className="text-center mb-14">
        <p className="section-subtitle">Ferramentas & tecnologias</p>
        <h2 className="section-title">Habilidades</h2>
        <div className="divider" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="font-sans text-xs text-blush-dark tracking-widest uppercase mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-sans text-xs text-charcoal border border-stone-warm bg-cream px-3 py-1.5 rounded-sm hover:border-blush hover:text-blush-dark transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
