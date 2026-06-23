import { FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import PageHeader from "../components/PageHeader.jsx";

const links = [
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/Tanushree-shahapurmath" },
  { icon: FiGithub,   label: "GitHub",   href: "https://github.com/" },
];

export default function Contact() {
  return (
    <div>
      <PageHeader eyebrow="Contact" title="Let's connect"
        description="Open to fresher software engineer roles, internships, and collaborations." />
      <section className="section flex flex-col items-center !pt-6 gap-8">
        <div className="anim-fade-up flex items-center gap-5">
          {links.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-16 w-16 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-accent">
              <Icon size={24} />
            </a>
          ))}
        </div>
        <div className="anim-fade-up delay-2">
          <a href="/resume.pdf" download className="btn-primary">
            <FiDownload size={15} /> Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
