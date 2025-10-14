'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold">Hanane&apos;s Signature</h3>
            <p className="text-cream/80">
              Authentic artisanal pastries, created with passion and expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { title: 'Home', href: '/' },
                { title: 'About Us', href: '/about-us' },
                { title: 'Our Creations', href: '/our-creations' },
                { title: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              {[
                'Algerian Pastries',
                'French Pastries',
                'Birthday Cakes',
                'Special Orders',
              ].map((category) => (
                <li key={category} className="hover:text-gold transition-colors duration-200">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold" />
                <span>+33 01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold" />
                <span>contact@hananes-signature.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1" />
                <span>8 Rue des Gourmandises<br />69003 Lyon, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-6 text-center text-cream/70">
          <p>© {currentYear} Hanane&apos;s Signature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;