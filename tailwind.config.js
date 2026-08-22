/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* Neo-brutalist palette — loud, flat, zero gradients. */
        void: '#141414',      // the only black. borders, type, shadows.
        bone: '#F2EEE3',      // page background
        brick: {
          white: '#FFFFFF',
          yell: '#FFC900',
          pink: '#FF90E8',
          blue: '#6C8CFF',
          lime: '#B9FF66',
          orange: '#FF6B4A',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Arial Black', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0',
        /* shadcn compat */
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        8: '8px',
      },
      boxShadow: {
        /* Hard offsets only. No blur. Ever. */
        brut: '6px 6px 0 0 #141414',
        brutSm: '3px 3px 0 0 #141414',
        brutLg: '10px 10px 0 0 #141414',
        brutXl: '16px 16px 0 0 #141414',
        brutYell: '6px 6px 0 0 #FFC900',
        brutPink: '6px 6px 0 0 #FF90E8',
        brutBlue: '6px 6px 0 0 #6C8CFF',
        brutLime: '6px 6px 0 0 #B9FF66',
        brutNone: '0 0 0 0 #141414',
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "float-hard": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "float-hard": "float-hard 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
