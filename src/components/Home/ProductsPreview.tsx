import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Product {
  title: string;
  desc: string;
  tag: string;
  image?: string;
  imageFit?: 'contain' | 'cover';
}

const primeXImage = '/images/primex-spray-paint.png';
const industrialChemicalsImage = '/images/industrial-chemicals.png';
const labInstrumentsImage = '/images/lab-instruments.png';

const products: Product[] = [
  {
    title: 'PrimeX Spray Paint',
    desc: 'Quick-drying, industrial-grade spray paints in 7+ variants. Gloss, matte, metallic, primer, and custom shades.',
    tag: 'Flagship',
    image: primeXImage,
    imageFit: 'contain',
  },
  {
    title: 'Industrial Chemicals',
    desc: 'Surface treatment chemicals for cleaning, degreasing, and industrial process applications.',
    tag: 'Chemicals',
    image: industrialChemicalsImage,
    imageFit: 'cover',
  },
  {
    title: 'Lab Instruments',
    desc: 'Precision measurement and testing instruments for laboratory and quality control use.',
    tag: 'Instruments',
    image: labInstrumentsImage,
    imageFit: 'cover',
  },
];

const ProductsPreview = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal bg-[var(--color-surface)] py-24 md:py-32 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              What We Make
            </h2>
          </div>
          <Link
            to="/products"
            className="text-[var(--color-accent)] text-sm font-semibold hover:text-[var(--color-accent-hover)] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            View All Products →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p.title}
              to="/products"
              className="card-gold-hover bg-[var(--color-bg)] border border-[var(--color-border)] p-8 flex flex-col justify-between min-h-[240px] group"
            >
              <div>
                {p.image && (
                  <div className="mb-6 h-40 bg-[var(--color-surface)] border border-[var(--color-border-soft)] flex items-center justify-center overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} product photo`}
                      className={
                        p.imageFit === 'cover'
                          ? 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                          : 'h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105'
                      }
                    />
                  </div>
                )}
                <span className="text-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 block">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <span className="mt-6 text-[var(--color-secondary)] text-xs font-medium uppercase tracking-widest group-hover:text-[var(--color-accent)] transition-colors">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
