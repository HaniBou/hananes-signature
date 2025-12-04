'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initEmailJS, sendEmail } from '@/lib/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('An error occurred while sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-brown p-6 md:p-8 rounded-lg shadow-lg border-2 border-gold/30">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <svg 
            className="w-16 h-16 text-gold mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="text-2xl font-serif text-cream mb-2">Message sent!</h3>
          <p className="text-cream/80 mb-6">We will respond to you as soon as possible.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gold hover:bg-gold-dark text-brown-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold-dark hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            New message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-serif text-gold text-center mb-6">Contact Us</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gold mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-cream text-brown-dark border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gold mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-cream text-brown-dark border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gold mb-2 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-cream text-brown-dark border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gold mb-2 font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-cream text-brown-dark border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="">Select a subject</option>
                <option value="commande">Order Request</option>
                <option value="information">Information Request</option>
                <option value="partenariat">Partnership Proposal</option>
                <option value="autre">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gold mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-cream text-brown-dark border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`transition-all duration-300 cursor-pointer ${
                submitting
                  ? 'bg-gold/50 text-brown-dark/50 cursor-not-allowed border-gold/50 px-8 py-3 rounded-lg border-2 shadow-lg'
                  : 'bg-gold hover:bg-gold-dark text-brown-dark px-8 py-3 rounded-lg font-semibold border-2 border-gold-dark hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {submitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;