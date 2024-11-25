/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: ['class', '[data-mode="dark"]'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: '#1D4ED8', // Default primary color
        //   light: '#3B82F6', // Light variant
        //   dark: '#1E40AF', // Dark variant
        // },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Add other custom colors here
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        brand: {
          one: { // azul // 203, 100, 33
            DEFAULT: '#0069aa',
            foreground: '#fff',
            100: '#001522',
            200: '#002a43',
            300: '#003e65',
            400: '#005387',
            500: '#0069aa',
            600: '#0092ed',
            700: '#32b0ff',
            800: '#76cbff',
            900: '#bbe5ff',
          },
          two: { //verdigris // 179, 78%, 42%
            DEFAULT: '#17bebb',
            100: '#052626',
            200: '#094c4b',
            300: '#0e7271',
            400: '#139996',
            500: '#17bebb',
            600: '#2ce5e2',
            700: '#61ebe9',
            800: '#96f2f0',
            900: '#caf8f8',
          },
          three: { // indigo // 281, 78, 23
            DEFAULT: '#4a0d67',
            100: '#0f0315',
            200: '#1e052a',
            300: '#2d083f',
            400: '#3c0a54',
            500: '#4a0d67',
            600: '#7e16ae',
            700: '#ab2de5',
            800: '#c773ee',
            900: '#e3b9f6',
          },
          four: { //carrot_orange // 29, 89, 58
            DEFAULT: '#f39237',
            100: '#381d03',
            200: '#703907',
            300: '#a8560a',
            400: '#e0730d',
            500: '#f39237',
            600: '#f6a75d',
            700: '#f8bd86',
            800: '#fad3ae',
            900: '#fde9d7',
          },
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring|from|to)-(primary|secondary|destructive|muted|accent|popover|card|sidebar|brand)(-foreground)?$/,
      variants: ['hover', 'focus', 'dark'], // Ensure different states and dark mode are preserved
    },
    {
      pattern: /^--/, // Match all CSS variables starting with --
    },
    'dark',
    'green', // Ensure specific utility classes
  ],
};
