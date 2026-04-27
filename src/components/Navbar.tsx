import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wrench } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Book Service' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          {/* Logo / Banner */}
<Link to="/" className="group">
  <img
    src="/banner.jpeg"
    alt="FixIt Mumbai"
    className="h-12 md:h-16 w-[140px] md:w-[180px] object-cover rounded-lg shadow-md group-hover:shadow-accent/40 transition-all duration-300"
  />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  pathname === link.to
                    ? 'bg-accent text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                } ${link.to === '/contact' ? '!bg-accent !text-white hover:!bg-accent-hover ml-2' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:8116622811"
            className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            8116622811
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary border-t border-white/10 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2.5 rounded-lg font-medium transition-all ${
                pathname === link.to
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:8116622811"
            className="flex items-center gap-2 px-4 py-2.5 text-accent font-semibold"
          >
            <Phone className="w-4 h-4" />
            8116622811
          </a>
        </div>
      </div>
    </header>
  );
}
