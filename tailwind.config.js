/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          mid: '#0D2040',
          card: '#0F2744',
        },
        teal: {
          DEFAULT: '#0A9396',
          light: '#94D2BD',
          bright: '#00C8D7',
        },
        gold: '#E9C46A',
        green: '#2DC653',
        muted: '#6B8CAE',
        border: 'rgba(10,147,150,0.25)',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
