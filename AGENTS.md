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
- `src/components/ui/` — the primitives of the "Console" design: `Button`,
  `GhostLink`, `TextLink`, `Tag`, `TagList`, `StatusDot`, `MonoLabel`,
  `SectionHeader`, `LightCard`, `Field`, `Input`, `Textarea`, `SlideUpText`.
  Variant-heavy ones use `cva`.
- `src/components/sections/` — page sections, composed from `ui/`.
- `src/styles/global.css` — the design tokens as a Tailwind v4 `@theme` (the
  only source of colour, type, radius and motion values; the default Tailwind
  scales are cleared), the base layer, and the `label-mono` / `grain` classes.
- `astro.config.mjs` — registers Geist and Geist Mono with Astro's Fonts API.
  They are fetched from Google Fonts at build time and self-hosted;
  `Base.astro` emits the `@font-face` rules and preloads through `<Font>`.
- `src/pages/index.astro` — composition plus the scroll-spy and contact-form
  script. `SlideUpText` carries its own small script.

## Rules

- **`/` ships zero external JavaScript.** The enhancement scripts are inlined.
  React is installed only for a future 3D island (`src/components/three/`).
  Do not add `client:*` directives to anything above the fold.
- **Everything renders in its final state.** The hero entrance and the contact
  form are progressive enhancement — with JS off or
  `prefers-reduced-motion: reduce`, the finished design still shows. The hero
  is the only entrance; nothing animates on scroll.
- **Colour names**: `text-sm`, `text-base`, `text-metric`, `text-heading` and
  `text-display` are font sizes; `text-bone`, `text-stone`, `text-granite` and
  the rest of the palette are colours. `src/lib/cn.ts` teaches tailwind-merge
  the difference — add new colour or size tokens to both `@theme` and that
  file, or merged classes silently drop.
- **Design rules**: weight 400 everywhere, 500 only for the profile name and
  the experience role titles. No shadows, glows, blur or `backdrop-filter`.
  Line height never above 1.5. Orange and green never fill a button, card or
  large text — only the 6px status dots, the "Open to work" label and the
  headline cursor. The only bright surfaces are the two `LightCard`s.
- **Light cards**: `LightCard` sets `data-surface="light"`. `Tag` and
  `TextLink` adapt through the `on-light:` variant; `Button` and `GhostLink`
  take an explicit `ink` variant. Focus rings turn canvas-coloured inside.
- Contrast: small text must clear 4.5:1. On canvas the dimmest text colour
  allowed is `granite`; on a light card it is `graphite`. `graphite` on canvas
  is for `aria-hidden` glyphs only (bullet dashes, the eyebrow slash).
- Voice: no emoji, no exclamation marks, sentence case, numbers only if true.

## Verification

Lighthouse must stay at 100/100/100/100 on both presets, and axe-core at zero
violations.
