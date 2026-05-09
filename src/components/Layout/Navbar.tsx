import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';
import { useCallback } from 'react';

interface NavLink {
  label: string;
  to: string;
  isAnchor: boolean;
}

const links: NavLink[] = [
  { label: 'Why Us', to: 'why-us', isAnchor: true },
  { label: 'Products', to: '/products', isAnchor: false },
  { label: 'Services', to: '/services', isAnchor: false },
  { label: 'About', to: 'about', isAnchor: true },
  { label: 'Contact', to: '/contact', isAnchor: false },
];

const logoImage = '/images/abni-logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state: RootState) => state.ui.mobileMenuOpen);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      dispatch(closeMobileMenu());

      if (location.pathname === '/') {
        // Already on Home — scroll directly
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to Home first, then scroll after render
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    },
    [location.pathname, navigate, dispatch]
  );

  const isActive = (link: NavLink): boolean => {
    if (link.isAnchor) return location.pathname === '/';
    return location.pathname === link.to;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1b2a]/95 backdrop-blur-md border-b border-[rgba(140,164,184,0.18)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => dispatch(closeMobileMenu())}>
          <img
            src={logoImage}
            alt="AbNi Unified Engineering"
            className="h-10 sm:h-11 w-auto max-w-[150px] sm:max-w-[170px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.to)}
                className={`text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                  isActive(link) ? 'text-[#c9922a]' : 'text-[#8ca4b8] hover:text-[#d0dce8]'
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-[#c9922a]' : 'text-[#8ca4b8] hover:text-[#d0dce8]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-2 bg-[#c9922a] text-[#0d1b2a] px-5 py-2 text-sm font-semibold hover:bg-[#e8b84b] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[#8ca4b8] hover:text-[#d0dce8] transition-colors"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#132238] border-t border-[rgba(140,164,184,0.18)] px-6 py-6 flex flex-col gap-4">
          {links.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.to)}
                className={`text-sm font-medium py-2 transition-colors text-left bg-transparent border-none cursor-pointer ${
                  isActive(link) ? 'text-[#c9922a]' : 'text-[#8ca4b8] hover:text-[#d0dce8]'
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => dispatch(closeMobileMenu())}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive(link) ? 'text-[#c9922a]' : 'text-[#8ca4b8] hover:text-[#d0dce8]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => dispatch(closeMobileMenu())}
            className="mt-2 bg-[#c9922a] text-[#0d1b2a] px-5 py-3 text-sm font-semibold text-center hover:bg-[#e8b84b] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
