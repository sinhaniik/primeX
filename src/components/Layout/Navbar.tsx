import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-contrast/10 bg-surface fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-contrast">
          Prime<span className="text-primary">X</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-contrast hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-contrast hover:text-primary transition-colors">Products</Link>
          <Link to="/contact" className="text-contrast hover:text-primary transition-colors">Contact</Link>
          <Link 
            to="/contact" 
            className="px-5 py-2.5 bg-primary text-white rounded-[12px] hover:bg-[#2c7179] transition-colors shadow-sm"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
