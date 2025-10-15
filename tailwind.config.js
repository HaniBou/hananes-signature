/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      'gold': { light: 'var(--gold-light)', DEFAULT: 'var(--gold)', dark: 'var(--gold-dark)' },
      'brown': { light: 'var(--brown-light)', DEFAULT: 'var(--brown)', dark: 'var(--brown-dark)' },
      'cream': 'var(--cream)',
      'black': 'var(--black)',
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
};
export const plugins = [];