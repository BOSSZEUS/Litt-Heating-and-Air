import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C41E2A',
          hover: '#A3181F',
          light: '#E8323E',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#C41E2A',
          600: '#A3181F',
          700: '#881318',
          800: '#6D0F13',
          900: '#520B0E',
        },
        dark: {
          DEFAULT: '#000000',
          alt: '#1A1A1A',
          card: '#111111',
        },
        grey: {
          DEFAULT: '#6B7280',
          light: '#F3F4F6',
          medium: '#D1D5DB',
          dark: '#374151',
          bg: '#F0F0F0',
        },
      },
      fontFamily: {
        primary: ['var(--font-montserrat)', 'Arial', 'Verdana', 'sans-serif'],
      },
      maxWidth: {
        container: '960px',
        wide: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
