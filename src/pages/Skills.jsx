import { useEffect, useRef, useState } from "react";
import { FiAward } from "react-icons/fi";
import { useInView } from "../hooks/useInView.js";
import PageHeader from "../components/PageHeader.jsx";
import { skillCategories, softSkills, certificates } from "../data/content.js";

function SkillRing({ name, level, delay = 0 }) {
  const size = 92;
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  const [ref, visible] = useInView();

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size/2} cy={size/2} r={radius} fill="none"
            stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
          <circle
            cx={size/2} cy={size/2} r={radius} fill="none"
            stroke="url(#rg)" strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            className="ring-fill"
            style={{
              "--ring-full": `${circumference}px`,
              "--ring-target": `${offset}px`,
              transitionDelay: visible ? `${delay}ms` : "0ms",
            }}
            ref={(el) => {
              if (el && visible) el.classList.add("visible");
            }}
          />
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-ink">
          {level}%
        </div>
      </div>
      <span className="text-center font-display text-xs font-medium text-slate-300 leading-tight">{name}</span>
    </div>
  );
}

function InViewCard({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`in-view ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <PageHeader eyebrow="Skills" title="What I work with"
        description="Languages, frameworks, and tools across full stack development and applied AI/ML." />

      <section className="section !pt-0 space-y-8">
        {skillCategories.map((cat, ci) => (
          <InViewCard key={cat.title} delay={ci * 40} className="glass-card p-6">
            <h3 className="mb-6 font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              {cat.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
              {cat.skills.map((skill, si) => (
                <SkillRing key={skill.name} name={skill.name} level={skill.level} delay={si * 70} />
              ))}
            </div>
          </InViewCard>
        ))}
      </section>

      <section className="section !pt-4">
        <p className="mb-5 text-sm font-medium text-accent">Soft skills</p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((s, i) => (
            <span key={s} className={`anim-fade-up glass rounded-full px-5 py-2.5 font-display text-sm font-medium text-slate-300`}
              style={{ animationDelay: `${i * 40}ms` }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="section !pt-4">
        <p className="mb-5 text-sm font-medium text-accent">Certificates</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <InViewCard key={cert.title} delay={i * 60} className="glass-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient">
                <FiAward size={17} />
              </div>
              <h3 className="font-display font-semibold">{cert.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">{cert.year}</p>
              <p className="mt-3 text-sm text-slate-400">{cert.description}</p>
            </InViewCard>
          ))}
        </div>
      </section>
    </div>
  );
}
