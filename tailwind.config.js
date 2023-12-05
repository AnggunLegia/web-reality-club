/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bekgron':'url(/images/bmth2.jpeg)',
        'bekgron2': 'url(/images/real1.jpg)',
        'bekgron3': 'url(/images/bg1.jpeg)',
        'bekgron4': 'url(/images/konser3.jpeg)',
        'bekgron5': 'url(/images/konser3.jpeg)'
      },
    },
  },
  plugins:  [require('flowbite/plugin')],
}
