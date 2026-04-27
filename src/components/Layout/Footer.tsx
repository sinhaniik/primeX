import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-border pt-24 pb-8 mt-auto text-primary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <Link to="/" className="text-xl font-semibold tracking-tight text-primary block">
            Prime<span className="text-accent">X</span>
          </Link>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            High-quality, quick-drying spray paints engineered for automotive, industrial, and DIY applications. Built for professionals.
          </p>
        </div>
        <div>
          <h4 className="text-base font-medium mb-6 text-primary">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-medium mb-6 text-primary">Support</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Dealership Inquiry</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Bulk Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-medium mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>abni.unified.engineering@gmail.com</li>
            <li>9737223367</li>
            <li>C-73, Neelkanth Residency,<br/>Vadodra-389350</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted gap-4">
        <p>&copy; {new Date().getFullYear()} PrimeX Spray Paints. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
