import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Service {
  num: string;
  title: string;
  desc: string;
  features: string[];
}

const services: Service[] = [
  {
    num: '01',
    title: 'Fabrication Works',
    desc: 'Custom metal fabrication for structural and industrial applications.',
    features: ['Structural steel', 'Custom components', 'Built to specification'],
  },
  {
    num: '02',
    title: 'Coating Job Work',
    desc: 'Surface coating solutions for durability, finish, and corrosion resistance.',
    features: ['Powder coating', 'Liquid coating', 'Plating coating'],
  },
  {
    num: '03',
    title: 'Press Shop Work',
    desc: 'Precision press operations for industrial component manufacturing.',
    features: ['Blanking', 'Forming & bending', 'High-volume production'],
  },
];

const ServicesPreview = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="reveal bg-[var(--color-bg)] py-24 md:py-32 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              What We Do
            </h2>
          </div>
          <Link
            to="/contact"
            className="text-[var(--color-accent)] text-sm font-semibold hover:text-[var(--color-accent-hover)] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request Service →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.num}
              data-reveal-item
              className="reveal-item motion-card card-gold-hover bg-[var(--color-surface)] border border-[var(--color-border)] p-8 flex flex-col"
            >
              <span className="motion-accent text-[var(--color-accent)] text-2xl font-bold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {s.num}
              </span>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="text-[var(--color-secondary)] text-xs flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-0.5">■</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="motion-button border border-[var(--color-accent-border)] text-[var(--color-accent)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent-soft)] text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
