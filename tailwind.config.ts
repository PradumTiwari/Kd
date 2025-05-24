import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
       keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'papermap': `
          radial-gradient(ellipse 80% 50% at 20% -20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 80% at 80% 50%, rgba(6, 95, 70, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #134e4a 50%, #065f46 75%, #047857 100%)
        `,
        'papermap-simple': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #134e4a 50%, #065f46 75%, #047857 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;