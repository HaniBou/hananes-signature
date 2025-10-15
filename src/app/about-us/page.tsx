'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function About() {
  // Animation variants
  // const fadeIn = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-brown-dark text-cream relative" style={{
        backgroundImage: `url('/images/banner-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-brown-dark/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionTitle 
              title="About Us"
              subtitle="Discover the story and passion behind Hanane&apos;s Signature, an artisanal pastry shop that celebrates the richness of Algerian and French culinary traditions."
              titleColor="text-cream"
              subtitleColor="text-cream/80"
              underlineColor="bg-gold"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about-story.webp"
                  alt="The story of Hanane's Signature"
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
              className="space-y-6 order-1 md:order-2"
            >
              <SectionTitle 
                title="Our Story" 
                centered={false}
                underlineColor='bg-gold'
              />
              
              <p className="text-black">
                Hanane&apos;s Signature was born from a deep passion for traditional pastry making. It all began in a family kitchen, where Hanane learned the secrets of traditional recipes passed down through generations.
              </p>
              
              <p className="text-black">
                Today, Hanane&apos;s Signature is recognized for the exceptional quality of its creations, combining authentic traditional flavors with refined presentation. Each pastry tells a story, one of a rich and vibrant culinary heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Vision Section */}
      <section className="py-16 relative" style={{
        backgroundImage: `url('')`,
        backgroundSize: '200px',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-brown-dark/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              <SectionTitle 
                title="Our Vision" 
                centered={false}
                className="text-brown"
                underlineColor='bg-gold'
              />
              
              <p className="text-black">
                Our vision is to preserve and celebrate the richness of Algerian and French pastry traditions while reinventing them with a contemporary touch.
              </p>
              
              <p className="text-black">
                We believe that each pastry should be a complete sensory experience, from the first visual impression to the last flavor note.
              </p>
              
              <p className="text-black">
                At Hanane&apos;s Signature, we are committed to:
              </p>
              
              <ul className="space-y-2 pl-5 text-black">
                {[
                  'Using ingredients of the highest quality',
                  'Respecting traditional preparation methods',
                  'Paying meticulous attention to detail',
                  'Innovating while honoring culinary heritage',
                  'Offering personalized and warm service'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about-vision.jpg"
                  alt="The vision of Hanane's Signature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-brown-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work every day"
            titleColor="text-brown"
            subtitleColor="text-black"
            underlineColor='bg-gold'
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Authenticity',
                description: 'Respect for traditional recipes and ancestral preparation methods',
                icon: (
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                ),
              },
              {
                title: 'Excellence',
                description: 'Constant pursuit of perfection in every creation we offer',
                icon: (
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: 'Passion',
                description: 'Deep love for the art of pastry making and desire to share this passion',
                icon: (
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown p-6 rounded-lg shadow-md text-center border border-gold"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-gold mb-3">{value.title}</h3>
                <p className="text-cream">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Hanane Section */}
      <section className="py-16 bg-brown-light/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] w-[400px] mx-auto rounded-full overflow-hidden border-8 border-gold-light shadow-xl">
                <Image
                  src="/images/hanane-portrait.jpg"
                  alt="Hanane - Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
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
                title="Meet Hanane"
                className='text-brown'
                centered={false}
                underlineColor='bg-gold'
              />
              
              <p className="text-black">
                Hanane, the founder and pastry chef of Hanane&apos;s Signature, has always been passionate about the art of pastry making. Born into a family where cooking was a true celebration, she learned from an early age the importance of authentic flavors and quality ingredients.
              </p>

              <p className="text-black">
                After years spent perfecting her techniques and exploring traditional recipes, Hanane decided to share her passion with the world by opening Hanane&apos;s Signature. Her vision: to create pastries that not only delight the taste buds but also tell a story and create emotions.
              </p>

              <p className="text-black font-medium italic mt-6">
                {`"I believe that pastry is an art that speaks to all the senses. Each creation is a unique piece that reflects my passion and my heritage."`}
              </p>
              <p className="text-right text-black">- Hanane</p>

            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}