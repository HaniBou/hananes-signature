'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Détermine si on a scrollé plus bas que 50px
      const isScrolledNow = window.scrollY > 50;
      setIsScrolled(isScrolledNow);
      
      // Détermine la direction du scroll pour cacher/montrer le header
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Si on scrolle vers le bas et qu'on est plus bas que 100px, cache le header
        setIsVisible(false);
      } else {
        // Si on scrolle vers le haut ou qu'on est en haut de page, montre le header
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{ backgroundColor: 'var(--cream)' }} // Utilisation directe de la couleur sans transparence
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-3'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="Hanane's Signature"
                className="h-14 w-auto object-contain bg-cream/90 p-1 rounded-sm"
              />
            </Link>
            
            {/* Titre Hanane's Signature */}
            <div className="hidden lg:block">
              <h1 className="font-signature text-3xl" style={{ color: 'var(--gold)' }}>
                Hanane's Signature
              </h1>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex justify-between space-x-12 lg:space-x-16 flex-1 max-w-xl ml-auto">
            {[
              { title: 'Home', href: '/' },
              { title: 'About Us', href: '/about-us' },
              { title: 'Our Creations', href: '/our-creations' },
              { title: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-serif text-cream hover:text-gold transition-colors duration-200 text-lg tracking-wide"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-light/95 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-5">
                {[
                  { title: 'Home', href: '/' },
                  { title: 'About Us', href: '/about-us' },
                  { title: 'Our Creations', href: '/our-creations' },
                  { title: 'Contact', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="font-serif text-cream hover:text-gold transition-colors duration-200 py-3 text-center text-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;