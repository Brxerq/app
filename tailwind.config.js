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

        /* Hand-drawn palette — the only colors this site should use. */
        paper: {
          DEFAULT: '#fdfbf7', // warm paper
          card: '#ffffff',    // fresh sheet
          aged: '#e5e0d8',    // old paper / erased pencil
        },
        ink: {
          DEFAULT: '#2d2d2d', // soft pencil black, never pure black
          soft: '#5a5a5a',    // 7.0:1 on white
          faint: '#6b665c',   // 5.7:1 on white — the lightest text tone allowed
        },
        /* `marker` is the loud red: fills, borders, icons and display type only.
           Red text under 24px must use `marker-deep`, which clears 4.5:1. */
        marker: {
          DEFAULT: '#ff4d4d',
          deep: '#d92828',
        },
        pen: '#2d5da1',     // blue ballpoint
        postit: '#fff9c4',  // sticky note yellow
      },
      fontFamily: {
        kalam: ['Kalam', 'Comic Sans MS', 'cursive'],
        hand: ['"Patrick Hand"', 'Kalam', 'cursive'],
      },
      borderRadius: {
        /* Wobbly, hand-drawn edges. Never perfect circles or even corners. */
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        wobblyLg: '60px 14px 48px 18px / 18px 52px 16px 56px',
        wobblyMd: '14px 30px 16px 26px / 26px 15px 28px 15px',
        wobblySm: '9px 16px 11px 14px / 14px 9px 16px 11px',
        blob: '48% 52% 41% 59% / 56% 44% 56% 44%',
        blobAlt: '62% 38% 55% 45% / 40% 58% 42% 60%',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        /* Hard offsets only — no blur, ever. Cut-paper collage. */
        sketch: '4px 4px 0px 0px #2d2d2d',
        sketchSm: '2px 2px 0px 0px #2d2d2d',
        sketchLg: '8px 8px 0px 0px #2d2d2d',
        sketchSoft: '3px 3px 0px 0px rgba(45, 45, 45, 0.12)',
        sketchMarker: '4px 4px 0px 0px #ff4d4d',
        sketchPen: '4px 4px 0px 0px #2d5da1',
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
        "doodle-bounce": {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "doodle-bounce": "doodle-bounce 3s ease-in-out infinite",
        "wiggle": "wiggle 2.5s ease-in-out infinite",
        "draw": "draw 1.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
