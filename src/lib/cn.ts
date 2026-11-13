import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge cannot tell a custom `text-*` colour from a custom
 * `text-*` font size, so it treats them as one conflict group and drops
 * whichever came first. Both sets are closed, so declare them — and keep
 * them in step with the `@theme` block in src/styles/global.css.
 */
const COLORS = [
  'canvas', 'lift', 'stroke', 'graphite', 'granite',
  'stone', 'bone', 'chalk', 'orange', 'green',
  // The shadcn aliases from the `@theme inline` block.
  'background', 'foreground', 'card', 'card-foreground',
  'popover', 'popover-foreground', 'primary', 'primary-foreground',
  'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
  'accent', 'accent-foreground', 'border', 'input', 'ring',
];

const FONT_SIZES = ['sm', 'base', 'metric', 'heading', 'display'];

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
