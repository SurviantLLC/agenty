import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-accent',
    'text-accent',
    'bg-success',
    'text-success',
    'bg-warning',
    'text-warning',
    'bg-destructive',
    'text-destructive',
    'transition-standard',
    'focus-ring',
    'card-padding',
    'section-spacing',
    'element-spacing',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Primary palette
        'deep-blue': 'hsl(var(--deep-blue))',
        'purple-accent': 'hsl(var(--purple-accent))',
        
        // Functional colors
        'success-green': 'hsl(var(--success-green))',
        'warning-orange': 'hsl(var(--warning-orange))',
        'alert-red': 'hsl(var(--alert-red))',
        'neutral-gray': 'hsl(var(--neutral-gray))',
        
        // Component colors
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Chart colors
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        
        // Sidebar colors
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      
      // Border radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      
      // Spacing based on 8px grid system
      spacing: {
        '1': 'var(--space-1)',   // 8px
        '2': 'var(--space-2)',   // 16px
        '3': 'var(--space-3)',   // 24px
        '4': 'var(--space-4)',   // 32px
        '5': 'var(--space-5)',   // 40px
      },
      
      // Animation
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        'slide-in': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'slide-in': 'slide-in 0.3s ease-out'
      },
      
      // Box shadows
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 2px hsl(var(--ring))'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
