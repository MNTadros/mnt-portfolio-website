/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '20%': { transform: 'translateY(-10px) translateX(10px)' },
          '40%': { transform: 'translateY(10px) translateX(10px)' },
          '60%': { transform: 'translateY(10px) translateX(-10px)' },
          '80%': { transform: 'translateY(-10px) translateX(-10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        }
      },
      animation: {
        move: 'move 5s infinite',
      },
    },
  },
  plugins: [],
}
