import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Portfólio Pessoal',
    description:
      'Esta página! Desenvolvida com React.js e Tailwind CSS, com foco em design minimalista, responsivo e publicada no GitHub Pages.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    repoUrl: 'https://github.com/imleticiagb/personalpage',
    liveUrl: 'https://imleticiagb.github.io/personalpage/',
  },
  {
    title: 'Mulheres em STEM',
    description:
      'Artigo publicado no WIT 2025 sobre protagonismo feminino em STEM através de oficinas de reconstrução de jogos digitais, com meninas da rede pública de ensino em Jataí-GO.',
    tags: ['Pesquisa', 'STEM', 'Educação', 'Feminismo'],
    repoUrl: https://doi.org/10.5753/wit.2025.8994,
    liveUrl: null,
  },
  {
    title: 'NLW Expert — HTML/CSS/JS',
    description:
      'Projeto desenvolvido durante o NLW Expert da Rocketseat, aplicando fundamentos modernos de HTML, CSS e JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Front-End'],
    repoUrl: 'https://github.com/imleticiagb',
    liveUrl: null,
  },
  {
    title: 'NLW Unite — Java',
    description:
      'Aplicação backend desenvolvida em Java durante o NLW Unite, explorando APIs REST e boas práticas de desenvolvimento server-side.',
    tags: ['Java', 'API REST', 'Back-End'],
    repoUrl: 'https://github.com/imleticiagb',
    liveUrl: null,
  },
  {
    title: 'NLW Unite — React',
    description:
      'Interface web desenvolvida em React durante o NLW Unite da Rocketseat, com foco em componentização e consumo de APIs.',
    tags: ['React', 'JavaScript', 'Front-End'],
    repoUrl: 'https://github.com/imleticiagb',
    liveUrl: null,
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projetos" className="bg-cream-dark border-t border-blush-light">
      <div className="text-center mb-14">
        <p className="section-subtitle">O que construí</p>
        <h2 className="section-title">Projetos</h2>
        <div className="divider" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
