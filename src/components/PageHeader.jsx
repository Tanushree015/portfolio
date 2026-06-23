export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="section !pb-6 !pt-10 md:!pb-8 md:!pt-16">
      <p className="anim-fade-up mb-2 text-sm font-medium text-accent">{eyebrow}</p>
      <h1 className="anim-fade-up delay-1 font-display text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h1>
      {description && (
        <p className="anim-fade-up delay-2 mt-3 max-w-2xl text-slate-400">{description}</p>
      )}
    </div>
  );
}
