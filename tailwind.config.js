/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        red:'#ddd',
      },
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1250px',
      },
    },
    fontFamily: {
      IRANSansWeb: 'IRANSansWeb',
      IRANSansFaNumBold: 'IRANSansFaNum-Bold'
    },
  },
  plugins: [],
}

