/**
 * Regenerates public/og.png — the 1200×630 social card.
 *   npm run og
 *
 * Rendered with resvg rather than sharp so the typeface is explicit:
 * librsvg resolves fonts through fontconfig and silently substitutes
 * Helvetica when Afacad isn't installed system-wide.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
// Two static instances: resvg does not select variable-font axes, so a
// `font-weight="700"` on the variable file would silently render at 400.
const fontFiles = [
  'src/assets/fonts/Afacad-VariableFont_wght.ttf',
  'src/assets/fonts/Afacad-Bold.ttf',
].map((p) => fileURLToPath(new URL(p, root)));
const out = fileURLToPath(new URL('public/og.png', root));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#333329"/>
  <rect x="0" y="0" width="1200" height="8" fill="#FFFF00"/>
  <rect x="88" y="117" width="56" height="3" fill="#FFFF00"/>
  <text x="164" y="128" font-family="Afacad" font-size="27" font-weight="600" fill="#9C9C88" letter-spacing="4.8">SENIOR FULL STACK ENGINEER</text>
  <text x="88" y="340" font-family="Afacad" font-size="164" font-weight="700" fill="#FFFFFF" letter-spacing="-3">Tobias Rosa<tspan fill="#FFFF00">.</tspan></text>
  <text x="88" y="416" font-family="Afacad" font-size="46" font-weight="400" fill="#C3C3B4">C# · .NET · React · TypeScript</text>
  <rect x="88" y="474" width="1024" height="1" fill="#4C4C3E"/>
  <text x="88" y="540" font-family="Afacad" font-size="31" font-weight="400" fill="#9C9C88" letter-spacing="1.5">tobiasrosa.dev</text>
  <text x="1112" y="540" text-anchor="end" font-family="Afacad" font-size="31" font-weight="400" fill="#9C9C88" letter-spacing="1.5">Brazil · remote</text>
</svg>`;

const resvg = new Resvg(svg, {
  font: {
    fontFiles,
    loadSystemFonts: false,
    defaultFontFamily: 'Afacad',
  },
});

writeFileSync(out, resvg.render().asPng());
const bytes = readFileSync(out).length;
console.log(`og.png written — 1200x630, ${(bytes / 1024).toFixed(1)} KB`);
