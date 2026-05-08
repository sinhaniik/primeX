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
    <section ref={ref} className="reveal bg-[#132238] py-24 md:py-32 border-b border-[rgba(140,164,184,0.18)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#c9922a] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#d0dce8] tracking-tight">
              What We Make
            </h2>
          </div>
          <Link
            to="/products"
            className="text-[#c9922a] text-sm font-semibold hover:text-[#e8b84b] transition-colors"
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
              className="card-gold-hover bg-[#0d1b2a] border border-[rgba(140,164,184,0.18)] p-8 flex flex-col justify-between min-h-[240px] group"
            >
              <div>
                {p.image && (
                  <div className="mb-6 h-40 bg-[#132238] border border-[rgba(140,164,184,0.14)] flex items-center justify-center overflow-hidden">
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
                <span className="text-[#c9922a] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 block">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-[#d0dce8] mb-3 group-hover:text-[#c9922a] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-[#7a95aa] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <span className="mt-6 text-[#8ca4b8] text-xs font-medium uppercase tracking-widest group-hover:text-[#c9922a] transition-colors">
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
