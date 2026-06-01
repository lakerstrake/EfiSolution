import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

// Brand mark (full-bleed dark square so maskable icons have no transparent edges).
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#6d8eff"/><stop offset="100%" stop-color="#3a5ef0"/>
  </linearGradient></defs>
  <rect width="512" height="512" fill="#0a0a0b"/>
  <path d="M272 96 L144 288 H240 L208 416 L368 224 H272 Z" fill="url(#g)"/>
</svg>`;

const buf = Buffer.from(svg);
await mkdir('./public/icons', { recursive: true });

const out = [
  ['./public/icons/icon-192.png', 192],
  ['./public/icons/icon-512.png', 512],
  ['./public/icons/icon-maskable-512.png', 512],
  ['./public/apple-touch-icon.png', 180],
];

for (const [path, size] of out) {
  await sharp(buf).resize(size, size).png().toFile(path);
  console.log(`generated ${path} (${size}x${size})`);
}
