import sharp from 'sharp';

const dir = './public';
const files = ['navegador_social', 'lluvias', 'mapa_kennedy', 'calculadora_liquidacion'];

for (const f of files) {
  const input = `${dir}/${f}.jpg`;
  await sharp(input).webp({ quality: 80 }).toFile(`${dir}/${f}.webp`);
  await sharp(input).avif({ quality: 58 }).toFile(`${dir}/${f}.avif`);
  console.log(`converted ${f}`);
}
