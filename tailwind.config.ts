import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        app: {
          "050": "#f0fdfa",
          "100": "#ccfbf1",
          "200": "#99f6e4",
          "300": "#5eead4",
          "400": "#2dd4bf",
          "500": "#14b8a6",
          "600": "#0d9488",
          "700": "#0f766e",
          "800": "#115e59",
          "900": "#134e4a",
          "950": "#042f2e",          
          "primary": "#14b8a6", // 500          
          "secondary": "#99f6e4", // 200          
          "active": "#2dd4bf", // 400   
          "hover": "#ccfbf1", // 200           
          "light": "#ccfbf1", // 100           
          "dark": "#042f2e", // 950           
          "contrast": "#fbbf24", // amber 400    
        }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config

export default config