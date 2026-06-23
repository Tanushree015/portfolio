import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex min-h-[auto] items-center py-10 md:min-h-[calc(100dvh-160px)] md:py-0">
      <section className="section flex w-full flex-col items-center text-center">

        <div className="anim-scale-in float-anim">
          <div className="relative h-40 w-40 rounded-full bg-brand-gradient p-1 shadow-glow md:h-52 md:w-52">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-card font-display text-5xl font-bold text-slate-500">
              TS
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <h1 className="anim-fade-up delay-1 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Hi, I'm Tanushree Shahapurmath <span aria-hidden="true">👋</span>
          </h1>
          <p className="anim-fade-up delay-2 mt-4 font-display text-lg font-medium text-accent md:text-xl">
            MCA Student | Python Developer | Full Stack Developer
          </p>
          <p className="anim-fade-up delay-3 mt-5 text-base text-slate-400 md:text-lg">
            Passionate about building innovative web applications and solving real-world
            problems through technology. Currently pursuing MCA and continuously improving
            my skills in Python, Full Stack Development, and Software Engineering.
          </p>

          <div className="anim-fade-up delay-4 mt-8 flex items-center justify-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-accent">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/Tanushree-shahapurmath" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-accent">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:tanushahapurmath@gmail.com"
              aria-label="Email"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-accent">
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
