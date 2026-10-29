/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0E1F1A',
          900: '#1B3A31',
          800: '#244A3E',
          700: '#2F5E4F',
        },
        accent: {
          DEFAULT: '#1F6F5C',
          soft: '#8FCDB9',
        },
        ink: '#18241F',
        muted: '#56655D',
        line: '#D9DBD0',
        mist: '#F6F4EC',
        beige: '#F2EADB',
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
