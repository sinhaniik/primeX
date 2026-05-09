import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ServiceCard from '../components/Services/ServiceCard';

interface ServiceData {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceData[] = [
  {
    number: '01',
    title: 'Fabrication Works',
    description:
      'Structural and custom metal fabrication for industrial components, assemblies, and enclosures. Manufactured as per client drawings and specifications.',
    features: [
      'Structural steel fabrication',
      'Custom component manufacturing',
      'Assembly and finishing',
      'As per drawing / spec',
    ],
  },
  {
    number: '02',
    title: 'Coating Job Work',
    description:
      'Industrial surface coating and painting services for manufacturers requiring large-volume, consistent finish quality.',
    features: [
      'Powder coating',
      'Liquid coating',
      'Plating coating',
    ],
  },
  {
    number: '03',
    title: 'Press Shop Work',
    description:
      'Sheet metal press work for precision components — blanking, forming, and deep drawing operations at scale.',
    features: [
      'Sheet metal blanking',
      'Forming and bending',
      'Component pressing',
      'High-volume batch orders',
    ],
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal">
      {/* Page Hero */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Job Work & Capabilities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">
            Services We Offer
          </h1>
          <p className="text-[var(--color-muted)] text-base mt-4 max-w-2xl leading-relaxed">
            End-to-end manufacturing support — from raw metal to finished surface.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-[var(--color-bg)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {services.map((s) => (
            <ServiceCard
              key={s.number}
              number={s.number}
              title={s.title}
              description={s.description}
              features={s.features}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight mb-4">
            Need a custom solution? Let's talk.
          </h2>
          <p className="text-[var(--color-muted)] text-base mb-8 max-w-lg mx-auto leading-relaxed">
            We work with manufacturers across India. Contact us with your specifications.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-on-accent)] px-10 py-4 text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
