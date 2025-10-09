/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          light: '#f0e6cc',
          DEFAULT: '#d4af37',
          dark: '#b8860b',
        },
        'brown': {
          light: '#8d6e63',
          DEFAULT: '#5d4037',
          dark: '#3e2723',
        },
        'cream': '#f8f4e8',
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'signature': ['SignatureScript', 'var(--font-dancing-script)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}