/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        river: { DEFAULT: '#0A2647', light: '#144272', deep: '#061a33' },
        glacier: { DEFAULT: '#7ed6df', light: '#e0f7fa' },
        mountain: '#2C3333',
        accent: '#E94560'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        wave: 'wave 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
