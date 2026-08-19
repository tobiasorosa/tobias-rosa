import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge cannot tell a custom `text-*` colour from a custom
 * `text-*` font size, so it treats them as one conflict group and drops
 * whichever came first — which silently rendered primary buttons as
 * yellow text on yellow. Both sets are closed, so declare them.
 */
const COLORS = [
  'brand', 'brand-2', 'brand-3', 'brand-4', 'brand-5',
  'olive-950', 'olive-900', 'olive-800', 'olive-700', 'olive-600',
  'olive-500', 'olive-400', 'olive-300', 'olive-200', 'olive-150', 'olive-100', 'olive-50',
  'page', 'sunken', 'deep', 'card', 'raised', 'inset', 'accent-quiet',
  'ink', 'ink-strong', 'ink-muted', 'ink-faint', 'accent', 'on-accent',
  'subtle', 'line', 'line-strong',
  'success', 'warning', 'danger', 'info',
];

const FONT_SIZES = [
  'display-xl', 'display', 'h1', 'h2', 'h3', 'h4',
  'lead', 'body', 'body-sm', 'caption', 'micro',
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: FONT_SIZES }],
      'text-color': [{ text: COLORS }],
      'bg-color': [{ bg: COLORS }],
      'border-color': [{ border: COLORS }],
    },
  },
});

/** Merge conditional classes, letting later Tailwind utilities win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
