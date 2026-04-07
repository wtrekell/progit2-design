import type { Config } from 'tailwindcss';
import tokens from '../../design-tokens.json';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        surface: tokens.colors.surface,
        'on-surface': tokens.colors['on-surface'],
        error: tokens.colors.error,
        success: tokens.colors.success,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: tokens['border-radius'].sm,
        md: tokens['border-radius'].md,
        lg: tokens['border-radius'].lg,
        full: tokens['border-radius'].full,
      },
      spacing: {
        xs: tokens.spacing.xs,
        sm: tokens.spacing.sm,
        md: tokens.spacing.md,
        lg: tokens.spacing.lg,
        xl: tokens.spacing.xl,
        '2xl': tokens.spacing['2xl'],
      },
    },
  },
  plugins: [],
};

export default config;
