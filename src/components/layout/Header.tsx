'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          style={{ backgroundColor: '#ffd0ba' }}
          className={`fixed w-full z-[100] transition-all duration-300 ${
            isScrolled ? 'shadow-md py-2' : 'shadow-md py-3'
          } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
            <Image
              src="/images/mon-logo.png"
              alt="Hanane's Signature"
              width={802}        // largeur réelle de ton image
              height={241}       // hauteur réelle de ton image
              quality={100}      // pour éviter la compression floue
              className="h-auto w-[300px] object-contain bg-cream/90 p-1 rounded-sm"
            />
            </Link>
            
            {/* Titre Hanane's Signature
            <div className="hidden lg:block">
              <h1 className="font-signature text-3xl text-gold">
                Hanane's Signature
              </h1>
            </div> */}
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex justify-between space-x-12 lg:space-x-16 flex-1 max-w-xl ml-auto">
            {[
              { title: 'Home', href: '/' },
              { title: 'About Us', href: '/about-us' },
              { title: 'Our Creations', href: '/our-creations' },
              { title: 'Contact', href: '/contact' },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`font-serif transition-all duration-300 text-lg tracking-wide relative ${
                    isActive 
                      ? 'text-gold font-bold' 
                      : 'text-black hover:text-gold'
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-gold focus:outline-none transition-colors duration-300"
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
            className="md:hidden bg-black/95 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-5">
                {[
                  { title: 'Home', href: '/' },
                  { title: 'About Us', href: '/about-us' },
                  { title: 'Our Creations', href: '/our-creations' },
                  { title: 'Contact', href: '/contact' },
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`font-serif transition-all duration-300 py-3 text-center text-xl relative ${
                        isActive 
                          ? 'text-gold font-bold bg-gold/10 rounded-lg' 
                          : 'text-black hover:text-gold'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;