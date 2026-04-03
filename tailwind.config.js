/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // Dark mode palette
        dark: {
          bg: '#08080f',
          surface: '#10101a',
          card: '#14141f',
          border: '#1e1e2e',
        },
        // Light mode palette
        light: {
          bg: '#f4f4f8',
          surface: '#ffffff',
          card: '#f9f9fc',
          border: '#e2e2ee',
        },
        // Brand accent colors
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00d4ff',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          glow: '#ff9500',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(228,100%,10%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,8%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,8%,1) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'amber-glow': '0 0 20px rgba(255, 149, 0, 0.3)',
        'card-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
