import { FiBriefcase } from "react-icons/fi";
import { useInView } from "../hooks/useInView.js";
import PageHeader from "../components/PageHeader.jsx";
import { experiences } from "../data/content.js";

function TimelineItem({ exp, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`relative mb-10 last:mb-0 in-view ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <span className="absolute -left-[35px] top-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient shadow-glow md:-left-[46px]">
        <FiBriefcase size={13} />
      </span>
      <div className="glass-card p-6 md:p-7">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">{exp.period}</p>
        <h3 className="mt-2 font-display text-lg font-bold md:text-xl">{exp.role}</h3>
        <p className="mt-1 text-slate-400">{exp.company}</p>
        <ul className="mt-4 space-y-2">
          {exp.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-sm text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div>
      <PageHeader eyebrow="Experience" title="Where I've worked"
        description="Hands-on full stack development experience across IoT and web-focused teams." />
      <section className="section !pt-0">
        <div className="relative ml-4 border-l border-white/10 pl-8 md:ml-0 md:pl-10">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} delay={i * 100} />
          ))}
        </div>
      </section>
    </div>
  );
}
