import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Reason {
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    title: 'High Quality',
    desc: 'ISO 9001-2015 certified processes ensure consistent quality across every product and service we deliver.',
  },
  {
    title: 'Fast Delivery',
    desc: 'Pan-India supply chain with reliable logistics. From order to dispatch — we move on your timeline.',
  },
  {
    title: 'Custom Solutions',
    desc: 'Tailored products and job work configurations. We engineer to your exact specification.',
  },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="why-us" className="reveal bg-[#0d1b2a] py-24 md:py-32 border-b border-[rgba(140,164,184,0.18)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#c9922a] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#d0dce8] tracking-tight">
            Built for Industry
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="card-gold-hover bg-[#132238] border border-[rgba(140,164,184,0.18)] p-8 flex flex-col"
            >
              <h3 className="text-lg font-bold text-[#d0dce8] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {r.title}
              </h3>
              <p className="text-[#7a95aa] text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
