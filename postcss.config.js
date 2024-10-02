module.exports = {
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
        '40': '10rem',
        '56': '14rem',
        '72': '15rem',
        '80': '20rem',  
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
