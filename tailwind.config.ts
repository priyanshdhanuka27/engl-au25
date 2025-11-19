import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uw: {
          purple: '#4b2e83',
          'purple-dark': '#32006e',
          gold: '#b7a57a',
          'gold-light': '#e8e3d3',
        },
        background: {
          dark: '#0a0612',
          'dark-mid': '#1a0f2e',
          'dark-light': '#2a1854',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(to bottom, #0a0612, #1a0f2e, #2a1854)',
        'gradient-purple': 'linear-gradient(135deg, #4b2e83, #32006e)',
        'gradient-gold': 'linear-gradient(135deg, #b7a57a, #e8e3d3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
