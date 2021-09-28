module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    outline: false,
  },
};
