/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#131313',
        'bright-green': '#00B14E',
        'white': '#FFFFFF',
        'deep-green': '#019040',
        'charcoal': '#1D1D1D',
        'soft-peach': '#F1E1DE',
        'light-grey': '#EBECED',
        'soft-blue': '#ECF1F4',
        'cool-grey':'#BBBBBB',
        'steel-grey':'#7A7A7A'
      },
    },
    variants: {},
    plugins: [

    ]
  }
};

