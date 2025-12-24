/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* primary-opacity */
        input: 'var(--color-input)', /* warm-gray */
        ring: 'var(--color-ring)', /* terracotta */
        background: 'var(--color-background)', /* warm-off-white / dark-warm-base */
        foreground: 'var(--color-foreground)', /* charcoal / warm-white-reduced */
        primary: {
          DEFAULT: 'var(--color-primary)', /* terracotta */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* sage */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* gold */
          foreground: 'var(--color-accent-foreground)', /* charcoal / dark-warm */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* terracotta */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* natural-green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* gold */
          foreground: 'var(--color-warning-foreground)', /* charcoal / dark-warm */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* terracotta */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* warm-gray / dark-warm-muted */
          foreground: 'var(--color-muted-foreground)', /* medium-gray / warm-white-muted */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* warm-gray / dark-warm-elevated */
          foreground: 'var(--color-card-foreground)', /* charcoal / warm-white-reduced */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white / dark-warm-elevated */
          foreground: 'var(--color-popover-foreground)', /* charcoal / warm-white-reduced */
        },
        'text-primary': 'var(--color-text-primary)', /* charcoal / warm-white-reduced */
        'text-secondary': 'var(--color-text-secondary)', /* medium-gray / warm-white-muted */
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Karla', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.1' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.375rem', { lineHeight: '1.4' }],
        'h5': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['17px', { lineHeight: '1.7' }],
        'body-mobile': ['16px', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'data': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '6': '6px',
        '12': '12px',
        '18': '18px',
        '24': '24px',
        '36': '36px',
        '48': '48px',
        '72': '72px',
        '96': '96px',
        '144': '144px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '18px',
        'xl': '24px',
      },
      boxShadow: {
        'warm-sm': '0 2px 4px rgba(180, 84, 80, 0.12)',
        'warm': '0 4px 6px rgba(180, 84, 80, 0.12)',
        'warm-md': '0 6px 12px rgba(180, 84, 80, 0.15)',
        'warm-lg': '0 12px 24px rgba(180, 84, 80, 0.18)',
        'warm-xl': '0 24px 48px rgba(180, 84, 80, 0.21)',
        'warm-2xl': '0 32px 64px -16px rgba(180, 84, 80, 0.24)',
      },
      transitionDuration: {
        'smooth': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      ringWidth: {
        '3': '3px',
      },
      ringOffsetWidth: {
        '3': '3px',
      },
      zIndex: {
        '1': '1',
        '10': '10',
        '50': '50',
        '100': '100',
        '200': '200',
        '250': '250',
        '300': '300',
      },
      maxWidth: {
        'prose': '70ch',
      },
      scrollPadding: {
        '80': '80px',
      },
    },
  },
  plugins: [],
}