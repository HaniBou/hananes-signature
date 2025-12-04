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
        // backgroundImage: `url('/images/contact-banner.png')`,
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
              title="Contact Us"
              subtitle="A question, a special order, or a quote ? Don&apos;t hesitate to contact us, we&apos;ll be delighted to discuss with you."
              titleColor="text-cream"
              subtitleColor="text-cream/80"
              underlineColor="bg-gold"
            />

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
                titleColor="text-brown"
                underlineColor='bg-gold'
              />
              
              <div className="bg-brown p-6 rounded-lg shadow-md space-y-6 border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-full">
                    <FaMapMarkerAlt className="text-brown-dark text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gold mb-1">Address</h3>
                    <p className="text-cream">
                      1250 Bethlehem Pike, Unit G<br />
                       Hatfield PA 19440
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
                      (205) 342-4545
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
                      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 8:00 AM - 5:00 PM</li>
                      <li>Sunday: 8:00 AM - 5:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.492984258496!2d-75.2688015260865!3d40.287011663527544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a12392bfffff%3A0x6136d879929efaf8!2s1250%20Bethlehem%20Pike%20%23%20G%2C%20Hatfield%2C%20PA%2019440%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1764803723725!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
            <section className="py-16 relative" style={{
        // backgroundImage: `url('/images/faq-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-brown-dark/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Answers to questions you might be asking"
            titleColor="text-brown"
            subtitleColor="text-black"
            underlineColor='bg-gold'
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
                answer: "Yes, we offer delivery based on your location. Fees vary depending on distance and order size."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brown-dark p-6 rounded-lg shadow-md border border-gold/20"
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