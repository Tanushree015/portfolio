import { useInView } from "../hooks/useInView.js";
import PageHeader from "../components/PageHeader.jsx";

function Card({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`glass-card p-8 in-view ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Get to know me"
        description="A little about who I am and my academic background."
      />
      <section className="section !pt-0">
        <Card>
          <p className="mb-4 text-sm font-medium text-accent">About me</p>
          <p className="text-slate-400">
            A passionate and driven MCA 2026 candidate with a strong foundation in Java,
            Python, JavaScript, object-oriented programming, SQL, data structures, and SDLC
            concepts. I've applied these skills across multiple end-to-end academic projects
            and two industry internships, including ongoing full stack and IoT software
            development. Eager to contribute as a fresher software engineer, bringing a
            collaborative and problem-solving mindset, a continuous learning attitude, and a
            drive to grow within a global technology organization.
          </p>
          <p className="mt-4 text-slate-400">
            Based in Dharwad, Karnataka, with a steady focus on full stack development and
            applied AI. I like owning a feature end to end — from REST API design and database
            schema through to a working, tested UI — and documenting what I build so it's easy
            for someone else to pick up.
          </p>
        </Card>

        <Card delay={80}>
          <p className="mb-6 text-sm font-medium text-accent">Education summary</p>
          <div className="space-y-6">
            <div className="flex flex-col gap-1 border-b border-white/10 pb-5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display font-semibold">Master of Computer Applications (MCA)</h3>
                <p className="text-sm text-slate-400">KLE Technological University, Hubballi</p>
              </div>
              <div className="font-mono text-sm text-slate-400 sm:text-right">
                <p>2024 – Present (Expected 2026)</p>
                <p className="text-accent">CGPA 8.03/10</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display font-semibold">B.Sc. — Computer Science &amp; Mathematics</h3>
                <p className="text-sm text-slate-400">Government First Grade College, Dharwad</p>
              </div>
              <div className="font-mono text-sm text-slate-400 sm:text-right">
                <p>2021 – 2024</p>
                <p className="text-accent">CGPA 8.26/10</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
