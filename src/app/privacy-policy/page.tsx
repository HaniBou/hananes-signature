'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-brown-light/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionTitle 
              title="Privacy Policy"
              subtitle="Last updated: December 14, 2025"
              titleColor="text-brown-dark"
              subtitleColor="text-black/70"
              underlineColor="bg-gold"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Introduction</h2>
              <p className="text-black">
                Hanane's Signature ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when 
                you visit our website www.hananessignature.com.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-serif text-brown mb-3">Contact Information</h3>
              <p className="text-black mb-4">
                When you contact us through our contact form, we collect:
              </p>
              <ul className="list-disc pl-6 text-black mb-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number (if provided)</li>
                <li>Your message content</li>
              </ul>

              <h3 className="text-xl font-serif text-brown mb-3">Analytics Information</h3>
              <p className="text-black">
                We use Google Analytics to understand how visitors interact with our website. 
                This may include:
              </p>
              <ul className="list-disc pl-6 text-black">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Browser type and device information</li>
                <li>Geographic location (country/city level only)</li>
                <li>Referring website</li>
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">How We Use Your Information</h2>
              <p className="text-black mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-black">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process your custom pastry orders</li>
                <li>Send you information about our products and services (only if you've requested it)</li>
                <li>Improve our website and services</li>
                <li>Understand how visitors use our website through analytics</li>
              </ul>
            </motion.div>

            {/* Google Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Google Analytics</h2>
              <p className="text-black mb-4">
                We use Google Analytics to help us understand how visitors use our website. 
                Google Analytics uses cookies to collect information about your use of our site.
              </p>
              <p className="text-black mb-4">
                You can opt-out of Google Analytics by installing the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brown-dark hover:text-gold underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
              <p className="text-black">
                For more information on how Google uses data, visit{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brown-dark hover:text-gold underline"
                >
                  Google's Privacy Policy
                </a>.
              </p>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Data Sharing</h2>
              <p className="text-black mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-black">
                <li>With service providers who help us operate our website (e.g., email services, analytics)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Data Security</h2>
              <p className="text-black">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Your Rights</h2>
              <p className="text-black mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-black">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-black mt-4">
                To exercise these rights, please contact us at{' '}
                <a 
                  href="mailto:contact@hananessignature.com"
                  className="text-brown-dark hover:text-gold underline"
                >
                  contact@hananessignature.com
                </a>.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Children's Privacy</h2>
              <p className="text-black">
                Our website is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </motion.div>

            {/* Changes to Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Changes to This Privacy Policy</h2>
              <p className="text-black">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8 bg-brown-light/10 p-6 rounded-lg border border-gold/20"
            >
              <h2 className="text-2xl font-serif text-brown-dark mb-4">Contact Us</h2>
              <p className="text-black mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-black">
                <li className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:contact@hananessignature.com"
                    className="text-brown-dark hover:text-gold underline"
                  >
                    contact@hananessignature.com
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> 1250 Bethlehem Pike Unit G, Hatfield, PA 19440
                </li>
                <li>
                  <strong>Website:</strong>{' '}
                  <a 
                    href="https://www.hananessignature.com"
                    className="text-brown-dark hover:text-gold underline"
                  >
                    www.hananessignature.com
                  </a>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
