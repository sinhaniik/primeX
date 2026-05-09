const TrustStrip = () => {
  return (
    <section id="about" className="bg-[var(--color-surface)] py-12 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="w-10 h-10 border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] text-[10px] font-bold tracking-wide">
          ISO
        </div>
        <div className="text-center sm:text-left">
          <p className="text-[var(--color-text)] text-sm font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            AbNi Unified Engineering — ISO 9001-2015 Certified
          </p>
          <p className="text-[var(--color-muted)] text-xs mt-1">
            Committed to quality, precision, and reliable industrial solutions since day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
