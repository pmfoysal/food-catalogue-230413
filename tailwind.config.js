/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
         },
         fontWeight: {
            normal: '400',
            medium: '550',
            bold: '700',
         },
      },
   },
   plugins: [],
};
