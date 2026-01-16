/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Based on the Emerald Green in the Vetri logo
        brand: {
          DEFAULT: '#047857', // Primary Emerald
          dark: '#065f46',    // For hover states
          light: '#ecfdf5',   // For light backgrounds/trust boxes
        },
        space: {
          900: '#0f172a',     // Deep slate for high-contrast text
          50: '#f8fafc',      // Clean background
        }
      },
      fontFamily: {
        // High-contrast sans-serif to match the "Vetri" wordmark
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'trust': '0 10px 40px -10px rgba(4, 120, 87, 0.1)',
      }
    },
  },
  plugins: [],
}