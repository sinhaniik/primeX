import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-contrast pt-16 pb-8 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">
            Prime<span className="text-primary">X</span>
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            High-quality, quick-drying spray paints engineered for automotive, industrial, and DIY applications. Built for professionals.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Support</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Dealership Inquiry</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Bulk Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>abni.unified.engineering@gmail.com</li>
            <li>9737223367</li>
            <li>C-73, Neelkanth Residency,<br/>Vadodra-389350</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} PrimeX Spray Paints. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
