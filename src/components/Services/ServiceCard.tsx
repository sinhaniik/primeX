import { Link } from 'react-router-dom';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ number, title, description, features }: ServiceCardProps) => {
  return (
    <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-10 overflow-hidden group transition-all duration-300 border-l-2 border-l-transparent hover:border-l-[var(--color-accent)]">
      {/* Large background number */}
      <span
        className="absolute top-4 right-6 text-[120px] md:text-[160px] font-bold leading-none text-[var(--color-accent)] opacity-[0.04] select-none pointer-events-none"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {number}
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
        {/* Left — number */}
        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
          <span
            className="text-[var(--color-accent)] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {number}
          </span>
          <div className="w-8 h-px bg-[var(--color-accent)] opacity-40 hidden md:block" />
        </div>

        {/* Right — content */}
        <div>
          <h3
            className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-3 tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
            {features.map((f) => (
              <li key={f} className="text-[var(--color-secondary)] text-sm flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">■</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-on-accent)] px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
