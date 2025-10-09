'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Simulate sending an email (in a real project, we would use an API)
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: '',
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred while sending the message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-cream p-6 rounded-lg shadow-lg">
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
          <h3 className="text-2xl font-serif text-brown-dark mb-2">Message sent!</h3>
          <p className="text-brown mb-6">We will respond to you as soon as possible.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-brown-dark text-cream rounded hover:bg-gold transition-colors duration-200"
          >
            New message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-serif text-brown-dark text-center mb-6">Contact Us</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-brown-dark mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brown-light/30 rounded focus:outline-none focus:ring-2 focus:ring-gold-light focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-brown-dark mb-1">
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
              <label htmlFor="phone" className="block text-brown-dark mb-1">
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
              <label htmlFor="subject" className="block text-brown-dark mb-1">
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
            <label htmlFor="message" className="block text-brown-dark mb-1">
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
              className={`px-8 py-3 rounded ${
                submitting
                  ? 'bg-brown-light text-cream/70 cursor-not-allowed'
                  : 'bg-brown-dark text-cream hover:bg-gold-dark transition-colors duration-200'
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