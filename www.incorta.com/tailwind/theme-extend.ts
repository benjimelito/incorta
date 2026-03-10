/**
 * SystemMiner Tailwind Theme Extension
 * Extracted from: https://www.incorta.com/
 * Generated: 2026-03-10T00:51:17.650Z
 * 
 * Usage: Merge this into your tailwind.config.ts extend section
 * These reference the CSS variables for single-source-of-truth
 */

export const systemMinerTheme = {
  colors: {
    'sm-brand-primary': 'var(--sm-color-brand-primary)',
    'sm-brand-accent': 'var(--sm-color-brand-accent)',
    'sm-brand-background': 'var(--sm-color-brand-background)',
    'sm-0096ff': 'var(--sm-color-0096ff)',
    'sm-350': 'var(--sm-color-350)',
  },
  fontFamily: {
    'sm-family-1': 'var(--sm-font-family-1)',
    'sm-family-5': 'var(--sm-font-family-5)',
  },
  fontSize: {
  },
  spacing: {
    'sm-xs': 'var(--sm-spacing-xs)',
    'sm-xs-1': 'var(--sm-spacing-xs-1)',
  },
  borderRadius: {
    'sm-radius-1': 'var(--sm-radius-1)',
    'sm-radius-2': 'var(--sm-radius-2)',
    'sm-radius-3': 'var(--sm-radius-3)',
  },
  boxShadow: {
  },
};

// Usage in tailwind.config.ts:
// import { systemMinerTheme } from './path/to/theme-extend';
// export default {
//   theme: {
//     extend: {
//       ...systemMinerTheme,
//     },
//   },
// };
