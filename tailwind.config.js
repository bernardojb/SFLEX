/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // sm: "575px",
      // md: "768px",
      // lg: "1025px",
      // xl: "1104px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1104px',      
    },
    colors: {
      //navbar
      'navbar-bg': '#000000a7',
      'navbar-text': '#ffffff',
      'navbar-text-hover': '#f20040',

      //footer
      'footer-bg': '#141414',
      'footer-title': '#9b9b9b',
      'footer-text': '#ffffff',
      'footer-text-hover': '#f20040',
      
      //text colors
      'text-primary': '#000000',
      'text-secondary': '#000000',
      'text-extra-0': '#000000',
      
      //backgrounds
      'background-0': '#000000',
      'background-1': '#000000',
      'background-2': '#000000',

      //main colors
      'accent': '#f20040',
      'warning' : '#000000',
      'success' : '#000000',
      
      'white': '#ffffff',
      'gray': '#838383',
      'black': '#000000',

      //other
      'teste': '#ae0000',
      'placeholder': '#d0d0d0bb'
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      sm: ["1.06rem", { lineHeight: "normal" }],
      base: ["1.25rem", { lineHeight: "normal" }],
      lg: ["2rem", { lineHeight: "normal" }],
      xl: ["3rem", { lineHeight: "58px" }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
