import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-bg fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-primary">
          Prime<span className="text-accent">X</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-sm font-medium text-muted hover:text-primary transition-colors">Products</Link>
          <Link to="/contact" className="text-sm font-medium text-muted hover:text-primary transition-colors">Contact</Link>
          <div className="flex items-center gap-4 border-l border-border pl-6 ml-2">
             <ThemeToggle />
             <Link 
               to="/contact" 
               className="bg-accent text-white px-5 py-2.5 rounded-xl font-medium hover:opacity-90 transition text-sm shadow-sm"
             >
               Request Quote
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
