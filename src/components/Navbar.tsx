import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md text-primary shadow-sm border-gray-100 py-3'
          : 'bg-transparent text-white py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-tight">
          THE SMITHS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase opacity-80 hover:opacity-100 hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "px-5 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-full border",
              isScrolled 
                ? "bg-[#D4AF37] text-white border-[#D4AF37] hover:bg-[#B5952F] hover:border-[#B5952F]" 
                : "bg-[#D4AF37] text-white border-[#D4AF37] hover:bg-[#B5952F] hover:border-[#B5952F]"
            )}
          >
            Reservations
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white text-primary flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-2xl font-bold">THE SMITHS</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl font-medium tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-8 border-t border-gray-100">
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <a href="#location" className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{RESTAURANT_INFO.address.split(',')[0]}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 text-center bg-[#D4AF37] text-white uppercase tracking-widest text-sm font-medium mt-6 hover:bg-[#B5952F] transition-colors"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
