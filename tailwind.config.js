module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5F87DE',
        secondary: '#59EB6B',
        neutral: '#5DF5EA'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
