'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
            <p className="text-lg text-cream/80">
              A question, a special order, or a quote? Don't hesitate to contact us, we'll be delighted to discuss with you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-brown-dark/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <SectionTitle 
                title="Our Contact Information" 
                centered={false}
                titleColor="text-gold"
              />
              
              <div className="bg-brown p-6 rounded-lg shadow-md space-y-6 border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-full">
                    <FaMapMarkerAlt className="text-brown-dark text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gold mb-1">Address</h3>
                    <p className="text-cream">
                      3 Rue de la Corderie<br />
                      69003 Lyon, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-full">
                    <FaPhone className="text-brown-dark text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gold mb-1">Phone</h3>
                    <p className="text-cream">
                      +33 01 23 45 67 89
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-full">
                    <FaEnvelope className="text-brown-dark text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gold mb-1">Email</h3>
                    <p className="text-cream">
                      contact@hananes-signature.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-full">
                    <FaClock className="text-brown-dark text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gold mb-1">Hours</h3>
                    <ul className="text-cream space-y-1">
                      <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                      <li>Saturday: 10:00 AM - 6:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7215828226294!2d4.804340074348893!3d45.77676971253196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb2d97bbb493%3A0x8e2f61ad598705f6!2s3%20Rue%20de%20la%20Corderie%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1760047780765!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Carte"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
            <section className="py-16 bg-brown-dark relative" style={{
        backgroundImage: `url('/images/faq-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-brown-dark/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Answers to questions you might be asking"
            titleColor="text-gold"
            subtitleColor="text-cream"
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "How do I place a custom order?",
                answer: "For a custom order, you can contact us through the form above, by phone, or by email. We will respond within 24 hours to discuss the details of your order."
              },
              {
                question: "What is the lead time for a special order?",
                answer: "We recommend placing your order at least 72 hours in advance for standard orders, and one week for more elaborate orders or large events."
              },
              {
                question: "Do you offer options for special diets (gluten-free, vegan)?",
                answer: "Yes, we offer alternatives for different dietary needs. Feel free to let us know your specific requirements when placing your order."
              },
              {
                question: "Do you offer a delivery service?",
                answer: "Yes, we deliver throughout Lyon and its nearby suburbs. Delivery fees vary depending on distance and order size."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown-dark/50 p-6 rounded-lg shadow-md border border-gold/20"
              >
                <h3 className="font-serif text-xl text-gold mb-3">{faq.question}</h3>
                <p className="text-cream">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}