import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '7+', label: 'Product Lines' },
  { value: '3', label: 'Services' },
  { value: 'ISO', label: '9001-2015' },
];

const primeXImage = '/images/primex-spray-paint.png';

const HeroSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal bg-[#0d1b2a] py-20 md:py-28 border-b border-[rgba(140,164,184,0.18)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#c9922a] text-sm font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              AbNi Unified Engineering
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d0dce8] leading-[1.08] tracking-tight">
              Precision.<br />Performance.<br />Engineering.
            </h1>
          </div>
          <p className="text-[#7a95aa] text-base leading-relaxed max-w-lg">
            ISO 9001-2015 certified manufacturer delivering fabrication, surface coating, and high-performance spray paints for industrial and commercial applications across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-[#c9922a] text-[#0d1b2a] px-8 py-3.5 text-sm font-semibold hover:bg-[#e8b84b] transition-colors text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="border border-[rgba(201,146,42,0.35)] text-[#c9922a] px-8 py-3.5 text-sm font-semibold hover:bg-[rgba(201,146,42,0.08)] transition-colors text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Right — decorative visual */}
        <div className="hidden md:flex justify-end">
          <div className="relative w-full max-w-sm">
            <div className="bg-[#132238] border border-[rgba(140,164,184,0.18)] min-h-[380px] flex flex-col items-center justify-center px-10 py-8">
              <img
                src={primeXImage}
                alt="PrimeX spray paint can"
                className="max-h-[310px] w-auto object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
              />
              <span className="mt-6 text-[#7a95aa] text-[10px] uppercase tracking-[0.3em]">
                Industrial Grade
              </span>
            </div>
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c9922a]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c9922a]" />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-[rgba(140,164,184,0.12)]">
        <div className="flex flex-wrap justify-center md:justify-start gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl font-bold text-[#c9922a]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-[#7a95aa] text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
