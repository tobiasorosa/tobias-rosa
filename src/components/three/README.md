# 3D islands

Nothing here yet. This is where a WebGL piece goes, and the stack is already
shaped for it — no config changes needed.

```
npm i three @react-three/fiber @react-three/drei
```

```tsx
// HeroScene.tsx
export default function HeroScene() { /* <Canvas frameloop="demand"> … */ }
```

```astro
---
import HeroScene from '../components/three/HeroScene';
---
<HeroScene client:visible />
```

Rules that keep the page at its current 0 KB initial JS and 100 Lighthouse:

- **`client:visible`**, or `client:only="react"` if the scene can't SSR. Astro
  bundles each island separately, so the ~150 KB gz three.js chunk is only
  fetched when the element scrolls into view. The rest of the page is unaffected.
- **Never `client:load`** — that pulls React and three into the critical path
  and costs the perf score outright.
- **Bail on `prefers-reduced-motion: reduce`** and on `navigator.connection.saveData`.
  Skip mounting entirely rather than degrading; every other element on this page
  already rests in its final state without motion.
- **`frameloop="demand"`** plus an IntersectionObserver pause, so a scrolled-past
  canvas costs nothing.
- The design system bans looping ambient animation, parallax and scroll-jacking.
  A 3D piece here should be a deliberate, interaction-driven object — not a
  background.

SEO is unaffected either way: every word on the page is server-rendered HTML and
the canvas is decorative.
