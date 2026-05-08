import { Link } from 'react-router-dom';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ number, title, description, features }: ServiceCardProps) => {
  return (
    <div className="relative bg-[#132238] border border-[rgba(140,164,184,0.18)] p-8 md:p-10 overflow-hidden group transition-all duration-300 border-l-2 border-l-transparent hover:border-l-[#c9922a]">
      {/* Large background number */}
      <span
        className="absolute top-4 right-6 text-[120px] md:text-[160px] font-bold leading-none text-[#c9922a] opacity-[0.04] select-none pointer-events-none"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {number}
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
        {/* Left — number */}
        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
          <span
            className="text-[#c9922a] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {number}
          </span>
          <div className="w-8 h-px bg-[#c9922a] opacity-40 hidden md:block" />
        </div>

        {/* Right — content */}
        <div>
          <h3
            className="text-xl md:text-2xl font-bold text-[#d0dce8] mb-3 tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-[#7a95aa] text-sm leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
            {features.map((f) => (
              <li key={f} className="text-[#8ca4b8] text-sm flex items-start gap-2">
                <span className="text-[#c9922a] mt-0.5 flex-shrink-0">■</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[#c9922a] text-[#0d1b2a] px-7 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#e8b84b] transition-colors"
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
