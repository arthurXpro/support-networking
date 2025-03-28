
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo size="medium" withText={true} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              الرئيسية
            </Link>
            <Link to="/services" className="nav-link">
              الخدمات
            </Link>
            <Link to="/associations" className="nav-link">
              الجمعيات المتخصصة
            </Link>
            <Link to="/success-stories" className="nav-link">
              قصص نجاح
            </Link>
            <Link to="/about" className="nav-link">
              من نحن
            </Link>
            <Link to="/contact" className="nav-link">
              اتصل بنا
            </Link>
            <Link to="/donate" className="nav-link text-primary font-medium">
              تبرع الآن
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center gap-2 py-2 px-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <User size={18} />
              <span>تسجيل الدخول</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-3 px-4">
              <Link
                to="/"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/services"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                الخدمات
              </Link>
              <Link
                to="/associations"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                الجمعيات المتخصصة
              </Link>
              <Link
                to="/success-stories"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                قصص نجاح
              </Link>
              <Link
                to="/about"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                اتصل بنا
              </Link>
              <Link
                to="/donate"
                className="py-2 text-primary font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                تبرع الآن
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link
                  to="/login"
                  className="flex items-center gap-2 py-2 px-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  <span>تسجيل الدخول</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
