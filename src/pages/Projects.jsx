import { useInView } from "../hooks/useInView.js";
import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../data/content.js";

function ProjectCard({ project, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref}
      className={`glass-card group relative overflow-hidden p-7 in-view ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-25`} />
      <h3 className="font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-1 font-display text-sm font-medium text-accent">{project.subtitle}</p>
      <p className="mt-3 text-sm text-slate-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <PageHeader eyebrow="Projects" title="Things I've built"
        description="End-to-end systems spanning full stack web apps, applied AI/ML, and CRUD platforms." />
      <section className="section !pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 80} />
          ))}
        </div>
      </section>
    </div>
  );
}
