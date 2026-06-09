import { Link } from 'react-router-dom';

const logoImage = '/images/abni-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-footer)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-4">
          <img
            src={logoImage}
            alt="AbNi Unified Engineering"
            className="h-14 w-auto max-w-[180px] object-contain"
          />
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            ISO 9001-2015 certified industrial manufacturer. Fabrication, coating, press shop services and high-performance spray paints.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-[var(--color-text)] font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Products
          </h4>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">PrimeX Spray Paint</Link></li>
            <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">PRIMEX COAT</Link></li>
            <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">Industrial Chemicals</Link></li>
            <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">Lab Instruments</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[var(--color-text)] font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Services
          </h4>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Fabrication Works</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Coating Job Work</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Press Shop Work</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[var(--color-text)] font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>+91 97372 23367</li>
            <li>abni.unified.engineering@gmail.com</li>
            <li>C-73, Neelkanth Residency,<br/>Halol, Vadodara – 389350</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border-subtle)] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>&copy; {new Date().getFullYear()} AbNi Unified Engineering. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-[var(--color-accent)] flex items-center justify-center text-[8px] text-[var(--color-accent)] font-bold">
              ISO
            </div>
            <span>ISO 9001-2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
