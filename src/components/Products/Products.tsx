import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const variants = [
  'Gloss Finish', 'Matte Finish', 'Metallic Shades',
  'Red Oxide Primer', 'Grey Primer', 'Clear Coat', 'Custom Shades',
];

const primeXImage = '/images/primex-spray-paint.jpeg';
const primeXCoatImage = '/images/primex-coat.jpeg';

const Products = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal">
      {/* Header */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Our Products
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">
            Product Range
          </h1>
          <p className="text-[var(--color-muted)] text-base mt-4 max-w-2xl leading-relaxed">
            From PrimeX spray paints and powder coatings to industrial chemicals and precision lab instruments — built for performance.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-[var(--color-bg)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Featured — PrimeX Spray Paint */}
            <div data-reveal-item className="reveal-item motion-card card-gold-hover bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-10 lg:row-span-2 flex flex-col">
              <div className="mb-8 flex items-center gap-6">
                <div className="w-36 h-36 bg-[var(--color-bg)] border border-[var(--color-accent-border-soft)] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={primeXImage}
                    alt="PrimeX spray paint applications"
                    className="motion-image h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-[0.2em] block mb-1">
                    Flagship Product
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    PrimeX Spray Paint
                  </h2>
                </div>
              </div>

              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                Quick-drying, industrial-grade spray paints designed for automobiles, home appliances, and industrial components. Smooth finish with strong coverage across multiple surfaces.
              </p>

              {/* Specs */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 text-xs text-[var(--color-secondary)]">
                <span><strong className="text-[var(--color-text)]">Net Qty:</strong> 300g (440ml)</span>
                <span><strong className="text-[var(--color-text)]">Variants:</strong> 7+</span>
              </div>

              {/* Variant pills */}
              <div className="mb-6">
                <p className="text-[var(--color-muted)] text-xs uppercase tracking-widest mb-3 font-semibold">
                  Available Variants
                </p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1.5 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-secondary)] text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[var(--color-muted)] text-xs italic mb-8">
                Shade card available on request.
              </p>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="motion-button bg-[var(--color-accent)] text-[var(--color-on-accent)] px-8 py-3.5 text-sm font-semibold hover:bg-[var(--color-accent-hover)] inline-block"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Chemicals */}
            <div data-reveal-item className="reveal-item motion-card card-gold-hover bg-[var(--color-surface)] border border-[var(--color-border)] p-8 flex flex-col">
              <span className="text-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                Chemicals
              </span>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Industrial Chemicals
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-1">
                Surface treatment chemicals for cleaning, degreasing, and industrial process applications. Custom formulations available.
              </p>
              <Link
                to="/contact"
                className="motion-button border border-[var(--color-accent-border)] text-[var(--color-accent)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent-soft)] text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Enquire
              </Link>
            </div>

            {/* Lab Instruments */}
            <div data-reveal-item className="reveal-item motion-card card-gold-hover bg-[var(--color-surface)] border border-[var(--color-border)] p-8 flex flex-col">
              <span className="text-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                Instruments
              </span>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Lab Instruments
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-1">
                All types of precision laboratory instruments for quality testing, measurement, and industrial process control.
              </p>
              <Link
                to="/contact"
                className="motion-button border border-[var(--color-accent-border)] text-[var(--color-accent)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-accent-soft)] text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Enquire
              </Link>
            </div>
          </div>

          {/* PRIMEX COAT Powder Coatings */}
          <div data-reveal-item className="reveal-item motion-card card-gold-hover mt-8 bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-12 items-center">
              <div className="bg-[var(--color-bg)] border border-[var(--color-accent-border-soft)] overflow-hidden">
                <img
                  src={primeXCoatImage}
                  alt="PRIMEX COAT powder coatings package"
                  className="motion-image w-full h-auto object-cover"
                />
              </div>
              <div>
                <span className="text-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-[0.2em] block mb-3">
                  Powder Coatings
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight mb-4">
                  PRIMEX COAT
                </h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8">
                  With advanced formulation technology, PRIMEX COAT ensures uniform coverage, vibrant color retention, and enhanced aesthetic appeal while supporting environmentally responsible coating processes. Suitable for metal furniture, automotive components, electrical enclosures, architectural structures, and general industrial products, PRIMEX COAT offers reliable performance and a premium finish that meets modern industry standards.
                </p>
                <Link
                  to="/contact"
                  className="motion-button inline-block bg-[var(--color-accent)] text-[var(--color-on-accent)] px-8 py-3.5 text-sm font-semibold hover:bg-[var(--color-accent-hover)]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Enquire About PRIMEX COAT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
