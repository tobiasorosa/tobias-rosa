# Tobias Rosa — portfolio

Astro 7, static output, React installed but unused on `/`. Deploys to Vercel.

## Commands

```
npm run dev        # dev server
npm run build      # static build to dist/
npm run preview    # serve dist/
npm run og         # regenerate public/og.png
```

## Shape

- `src/data/*.ts` — the content layer. Identity, experience, projects, toolkit,
  stats. The page **and** the JSON-LD both read from here, so structured data
  cannot drift from the visible copy. Edit content here, not in markup.
- `src/components/ds/` — the design system, ported from the Claude Design project
  (`_ds/tobias-rosa-design-system-eb00cfa0…`). Prop contracts match the original
  JSX. Variant-heavy primitives use `cva`.
- `src/components/sections/` — page sections, composed from `ds/`.
- `src/styles/global.css` — the DS tokens as a Tailwind v4 `@theme`, plus the
  `@font-face` rules and the base layer.
- `src/pages/index.astro` — composition plus the page's only script.

## Rules

- **`/` ships zero external JavaScript.** The ~2 KB enhancement script is inlined.
  React is installed only for a future 3D island (`src/components/three/`).
  Do not add `client:*` directives to anything above the fold.
- **Everything renders in its final state.** Entrance animations, the stat
  count-up and the contact form are progressive enhancement — with JS off or
  `prefers-reduced-motion: reduce`, the finished design still shows.
- **Colour names**: `text-*` is a font size (`text-body`, `text-h2`), ink colours
  are `text-ink*` / `text-accent`. `src/lib/cn.ts` teaches tailwind-merge the
  difference — add new colour or size tokens to both `@theme` and that file, or
  merged classes silently drop.
- Contrast: small text must clear 4.5:1 on `--color-card` (#3e3e33), the lightest
  surface. That is why `--color-ink-faint` is `--color-olive-150`, not the DS's
  `olive-200`.
- Voice, palette and motion rules live in the design system readme. No emoji,
  no exclamation marks, sentence case, numbers only if true.

## Verification

Lighthouse must stay at 100/100/100/100 on both presets, and axe-core at zero
violations. See the "Verification" section of the implementation plan.
