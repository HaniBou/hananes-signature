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

  // Initialiser EmailJS au chargement du composant
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
        throw new Error('Échec de l\'envoi du message');
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err);
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <svg 
            className="w-16 h-16 text-green-500 mx-auto mb-4" 
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
          <h3 className="text-2xl font-serif text-black mb-2">Message sent!</h3>
          <p className="text-black mb-6">We will respond to you as soon as possible.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold-dark hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            New message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-serif text-black text-center mb-6">Contact Us</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brown-light/30 rounded focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-black mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brown-light/30 rounded focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-black mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brown-light/30 rounded focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
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
            <label htmlFor="message" className="block text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brown-light/30 rounded focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`transition-all duration-300 cursor-pointer ${
                submitting
                  ? 'bg-brown text-cream/70 cursor-not-allowed border-brown-light px-8 py-3 rounded-lg border-2 shadow-lg'
                  : 'bg-brown hover:bg-gold-dark text-gold px-8 py-3 rounded-lg font-semibold border-2 border-gold hover:border-gold-dark shadow-lg hover:shadow-xl transform hover:scale-105'
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