import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const variants = [
  'Gloss Finish', 'Matte Finish', 'Metallic Shades',
  'Red Oxide Primer', 'Grey Primer', 'Clear Coat', 'Custom Shades',
];

const Products = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal">
      {/* Header */}
      <section className="bg-[#132238] py-20 md:py-24 border-b border-[rgba(140,164,184,0.18)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#c9922a] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Our Products
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#d0dce8] tracking-tight">
            Product Range
          </h1>
          <p className="text-[#7a95aa] text-base mt-4 max-w-2xl leading-relaxed">
            From our flagship PrimeX Spray Paint to industrial chemicals and precision lab instruments — built for performance.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-[#0d1b2a] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Featured — PrimeX Spray Paint */}
            <div className="card-gold-hover bg-[#132238] border border-[rgba(140,164,184,0.18)] p-8 md:p-10 lg:row-span-2 flex flex-col">
              {/* Decorative can visual */}
              <div className="mb-8 flex items-center gap-6">
                <div className="w-16 h-28 bg-[#1a2d45] border border-[rgba(201,146,42,0.35)] flex flex-col items-center justify-center gap-1 relative flex-shrink-0">
                  <div className="absolute -top-2 w-5 h-2 bg-[#8ca4b8] rounded-t-sm" />
                  <span className="text-[#c9922a] text-[10px] font-bold tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    PrimeX
                  </span>
                  <div className="w-6 h-px bg-[#c9922a] opacity-30" />
                </div>
                <div>
                  <span className="text-[#c9922a] text-[10px] font-semibold uppercase tracking-[0.2em] block mb-1">
                    Flagship Product
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#d0dce8] tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    PrimeX Spray Paint
                  </h2>
                </div>
              </div>

              <p className="text-[#7a95aa] text-sm leading-relaxed mb-6">
                Quick-drying, industrial-grade spray paints designed for automobiles, home appliances, and industrial components. Smooth finish with strong coverage across multiple surfaces.
              </p>

              {/* Specs */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 text-xs text-[#8ca4b8]">
                <span><strong className="text-[#d0dce8]">Net Qty:</strong> 300g (440ml)</span>
                <span><strong className="text-[#d0dce8]">Variants:</strong> 7+</span>
              </div>

              {/* Variant pills */}
              <div className="mb-6">
                <p className="text-[#7a95aa] text-xs uppercase tracking-widest mb-3 font-semibold">
                  Available Variants
                </p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1.5 bg-[#0d1b2a] border border-[rgba(140,164,184,0.18)] text-[#8ca4b8] text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[#7a95aa] text-xs italic mb-8">
                Shade card available on request.
              </p>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="bg-[#c9922a] text-[#0d1b2a] px-8 py-3.5 text-sm font-semibold hover:bg-[#e8b84b] transition-colors inline-block"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Chemicals */}
            <div className="card-gold-hover bg-[#132238] border border-[rgba(140,164,184,0.18)] p-8 flex flex-col">
              <span className="text-[#c9922a] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                Chemicals
              </span>
              <h3 className="text-xl font-bold text-[#d0dce8] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Industrial Chemicals
              </h3>
              <p className="text-[#7a95aa] text-sm leading-relaxed mb-6 flex-1">
                Surface treatment chemicals for cleaning, degreasing, and industrial process applications. Custom formulations available.
              </p>
              <Link
                to="/contact"
                className="border border-[rgba(201,146,42,0.35)] text-[#c9922a] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[rgba(201,146,42,0.08)] transition-colors text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Enquire
              </Link>
            </div>

            {/* Lab Instruments */}
            <div className="card-gold-hover bg-[#132238] border border-[rgba(140,164,184,0.18)] p-8 flex flex-col">
              <span className="text-[#c9922a] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                Instruments
              </span>
              <h3 className="text-xl font-bold text-[#d0dce8] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Lab Instruments
              </h3>
              <p className="text-[#7a95aa] text-sm leading-relaxed mb-6 flex-1">
                All types of precision laboratory instruments for quality testing, measurement, and industrial process control.
              </p>
              <Link
                to="/contact"
                className="border border-[rgba(201,146,42,0.35)] text-[#c9922a] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[rgba(201,146,42,0.08)] transition-colors text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
