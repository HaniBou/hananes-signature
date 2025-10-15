'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SimpleImageSlider from '@/components/ui/SimpleImageSlider';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';

// Placeholder images - to be replaced with your own images
const heroImages = [
  { src: '/images/hero-1.jpeg', alt: 'Traditional Algerian pastries' },
  { src: '/images/hero-2.jpeg', alt: 'French pastries' },
  { src: '/images/hero-3.jpeg', alt: 'Birthday cakes' },
];

// Featured products data
const featuredProducts = [
  {
    name: 'Date Makrout',
    description: 'Traditional Algerian pastry made with semolina and dates, perfumed with orange blossom water',
    imageSrc: '/images/makrout.jpg',
    category: 'Algerian',
  },
  {
    name: 'Mille-feuille',
    description: 'Classic French pastry made of thin layers of puff pastry and vanilla custard brown',
    imageSrc: '/images/millefeuille.jpg',
    category: 'French',
  },
  {
    name: 'Birthday Cake',
    description: 'Custom cake with personalized flavors and decorations to celebrate your special occasion',
    imageSrc: '/images/birthday-cake.jpg',
    category: 'Birthday',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen relative pt-30">
        <div className="h-full">
          <SimpleImageSlider 
            images={heroImages}
            overlay={false}
            className="h-full"
          />
        </div>
      </section>
      
      {/* À Propos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-gold">
                <Image
                  src="/images/about.jpg"
                  alt="Hanane's Signature - About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <SectionTitle 
                title="Our Story" 
                centered={false}
                titleColor="text-brown-dark"
                underlineColor="bg-gold"
              />
              
              <p className="text-black">
                Hanane&apos;s Signature was born from a deep passion for the art of traditional Algerian and French pastry. Founded by Hanane, who has been passionate about cooking since her early years, our bakery combines ancestral know-how and modern techniques to offer you exceptional creations.
              </p>

              <p className="text-black">
                Each pastry is prepared with love and attention to detail, using only premium ingredients to ensure an unforgettable taste experience.
              </p>
              
              <Link
                href="/about-us"
                className="inline-block bg-brown hover:bg-brown-dark text-gold px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Learn more about us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Creations Section */}
      <section className="py-20 text-brown">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Creations" 
            subtitle="Discover our selection of artisanal pastries, prepared with passion and expertise"
            className="text-brown"
            underlineColor="bg-gold"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                imageSrc={product.imageSrc}
                category={product.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/our-creations"
              className="inline-block bg-brown hover:bg-gold-dark text-gold px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View all our creations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 relative" style={{
        backgroundImage: `url('/images/testimonial-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="What Our Customers Say" 
            subtitle="Satisfied clients who have enjoyed our pastries for their special events"
            titleColor="text-dark-brown"
            subtitleColor="text-black"
            underlineColor="bg-gold"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "The pastries from Hanane's Signature are truly exceptional! Everything was delicious and beautifully presented. My guests were impressed.",
                name: "Sarah L.",
                service: "Birthday Cake",
                initial: "S"
              },
              {
                text: "Incredible quality and authentic flavors! The traditional Algerian pastries reminded me of my grandmother's recipes. Simply perfect!",
                name: "Mohammed R.",
                service: "Wedding Assortment",
                initial: "M"
              },
              {
                text: "Professional service and exquisite taste. Our corporate event was a huge success thanks to these amazing pastries. Highly recommended!",
                name: "Lucy D.",
                service: "Corporate Order",
                initial: "L"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown p-6 rounded-lg shadow-md border-2 border-gold"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream mb-4">
                 {`"${testimonial.text}"`}
                   
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-brown-dark font-semibold mr-3">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gold">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 text-brown relative" style={{
        backgroundImage: ``,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Ready to order a delicious creation?"
              subtitle="Contact us to discuss your project and create pastries together that will delight your guests."
              titleColor="text-brown"
              subtitleColor="text-black"
              underlineColor="bg-gold"
            />
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-brown hover:bg-gold-dark text-gold px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-gold/10 rounded-br-full"></div>
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-gold/10 rounded-tl-full"></div>
      </section>
      
      <Footer />
    </>
  );
}
