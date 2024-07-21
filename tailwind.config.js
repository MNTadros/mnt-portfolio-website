/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(20px)' },
          '50%': { transform: 'translateY(20px) translateX(20px)' },
          '75%': { transform: 'translateY(20px) translateX(-20px)' },
        }
      },
      animation: {
        move: 'move 5s infinite',
      },
    },
  },
  plugins: [],
}
