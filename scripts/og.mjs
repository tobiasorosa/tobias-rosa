/**
 * Regenerates public/og.png — the 1200×630 social card.
 *   npm run og
 *
 * Rendered with resvg rather than sharp so the typefaces are explicit:
 * librsvg resolves fonts through fontconfig and silently substitutes
 * Helvetica when Geist isn't installed system-wide. The site itself
 * gets Geist through Astro's font pipeline; these two static TTFs
 * exist only for this script.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const fontFiles = ['src/assets/fonts/Geist-Regular.ttf', 'src/assets/fonts/GeistMono-Regular.ttf'].map(
  (p) => fileURLToPath(new URL(p, root)),
);
const out = fileURLToPath(new URL('public/og.png', root));
const font = { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Geist' };

// Same tokens as src/styles/global.css.
const canvas = '#101010';
const stroke = '#3d3a39';
const granite = '#8a8380';
const stone = '#b8b3b0';
const bone = '#eeeeee';
const orange = '#ee6018';

const name = `<text x="88" y="336" font-family="Geist" font-size="148" fill="${bone}" letter-spacing="-5.9">Tobias Rosa</text>`;
const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${body}</svg>`;

// The block cursor sits right after the name, so measure the name first.
const nameBox = new Resvg(svg(name), { font }).getBBox();
const cursorX = Math.round(nameBox.x + nameBox.width + 24);

const card = svg(`
  <rect width="1200" height="630" fill="${canvas}"/>
  <circle cx="94" cy="118" r="6" fill="${orange}"/>
  <text x="114" y="126" font-family="Geist Mono" font-size="22" fill="${stone}" letter-spacing="-0.44">SENIOR FULL STACK ENGINEER</text>
  ${name}
  <rect x="${cursorX}" y="236" width="50" height="100" fill="${orange}"/>
  <text x="88" y="414" font-family="Geist" font-size="40" fill="${stone}" letter-spacing="-0.4">C# · .NET · React · TypeScript</text>
  <rect x="88" y="474" width="1024" height="1" fill="${stroke}"/>
  <text x="88" y="536" font-family="Geist Mono" font-size="22" fill="${granite}" letter-spacing="-0.44">tobiasrosa.dev</text>
  <text x="1112" y="536" text-anchor="end" font-family="Geist Mono" font-size="22" fill="${granite}" letter-spacing="-0.44">BRAZIL · REMOTE</text>
`);

writeFileSync(out, new Resvg(card, { font }).render().asPng());
const bytes = readFileSync(out).length;
console.log(`og.png written — 1200x630, ${(bytes / 1024).toFixed(1)} KB`);
