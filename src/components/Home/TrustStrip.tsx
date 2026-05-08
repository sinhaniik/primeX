const TrustStrip = () => {
  return (
    <section id="about" className="bg-[#132238] py-12 border-b border-[rgba(140,164,184,0.18)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="w-10 h-10 border-2 border-[#c9922a] flex items-center justify-center text-[#c9922a] text-[10px] font-bold tracking-wide">
          ISO
        </div>
        <div className="text-center sm:text-left">
          <p className="text-[#d0dce8] text-sm font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            AbNi Unified Engineering — ISO 9001-2015 Certified
          </p>
          <p className="text-[#7a95aa] text-xs mt-1">
            Committed to quality, precision, and reliable industrial solutions since day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
