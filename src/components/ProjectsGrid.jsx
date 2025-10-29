import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collab Boards',
    blurb:
      'Trello‑like boards with optimistic UI, CRDT sync, and fine‑grained auth.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'tRPC'],
    image:
      'https://images.unsplash.com/photo-1551281044-8afdd57b3b4b?q=80&w=1200&auto=format&fit=crop',
    stars: '1.8k',
    links: { live: '#', github: '#' },
  },
  {
    title: 'Edge‑rendered Analytics',
    blurb:
      'Privacy‑first analytics with SQL window functions and streaming charts.',
    stack: ['Next.js', 'Clickhouse', 'Tailwind', 'Vercel Edge'],
    image:
      'https://images.unsplash.com/photo-1551281044-3f4de6d52334?q=80&w=1200&auto=format&fit=crop',
    stars: '920',
    links: { live: '#', github: '#' },
  },
  {
    title: 'AI Doc Chat',
    blurb:
      'RAG over multi‑tenant docs with embeddings, structured tools, and guards.',
    stack: ['Next.js', 'OpenAI', 'Prisma', 'Postgres'],
    image:
      'https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1200&auto=format&fit=crop',
    stars: '2.1k',
    links: { live: '#', github: '#' },
  },
]

function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-slate-900">{project.title}</h3>
          <div className="inline-flex items-center gap-1 text-amber-600 text-sm">
            <Star size={16} />
            <span>{project.stars}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-600">{project.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.links.live}
            className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.links.github}
            className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured projects</h2>
          <p className="text-slate-600 mt-1">A few things I loved building recently.</p>
        </div>
        <a href="#" className="hidden sm:inline-flex px-3 py-1.5 rounded-md border border-slate-300 text-slate-700 hover:border-slate-400">All projects</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
