import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';
import { useCallback, useEffect, useState } from 'react';

interface NavLink {
  label: string;
  to: string;
  isAnchor: boolean;
}

type ThemeMode = 'dark' | 'light';

const links: NavLink[] = [
  { label: 'Why Us', to: 'why-us', isAnchor: true },
  { label: 'Products', to: '/products', isAnchor: false },
  { label: 'Services', to: '/services', isAnchor: false },
  { label: 'About', to: 'about', isAnchor: true },
  { label: 'Contact', to: '/contact', isAnchor: false },
];

const logoImage = '/images/abni-logo.png';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';

  try {
    return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state: RootState) => state.ui.mobileMenuOpen);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // Keep theme switching functional even when storage is unavailable.
    }
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-9 items-center gap-2 border border-[var(--color-border)] px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)] transition-colors hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)] ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'light'}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <span className="relative h-4 w-4">
        {theme === 'dark' ? (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m8.49-10h-2M5.51 12h-2m14.14-5.66-1.42 1.42M7.76 16.24l-1.42 1.42m11.31 0-1.42-1.42M7.76 7.76 6.34 6.34M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
          </svg>
        )}
      </span>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgb(var(--color-bg-rgb)/0.95)] backdrop-blur-md border-b border-[var(--color-border)]">
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
                  isActive(link) ? 'text-[var(--color-accent)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-[var(--color-accent)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="motion-button ml-2 bg-[var(--color-accent)] text-[var(--color-on-accent)] px-5 py-2 text-sm font-semibold hover:bg-[var(--color-accent-hover)]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get a Quote
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="h-8 px-2" />
          {/* Hamburger */}
          <button
            className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-text)] transition-colors"
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
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-4">
          {links.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.to)}
                className={`text-sm font-medium py-2 transition-colors text-left bg-transparent border-none cursor-pointer ${
                  isActive(link) ? 'text-[var(--color-accent)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-text)]'
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
                  isActive(link) ? 'text-[var(--color-accent)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => dispatch(closeMobileMenu())}
            className="motion-button mt-2 bg-[var(--color-accent)] text-[var(--color-on-accent)] px-5 py-3 text-sm font-semibold text-center hover:bg-[var(--color-accent-hover)]"
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
