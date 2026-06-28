import sharp from 'sharp';

const dir = './public';
// nombre base -> extensión del archivo de origen
const files = {
  navegador_social: 'jpg',
  lluvias: 'jpg',
  mapa_kennedy: 'jpg',
  calculadora_liquidacion: 'jpg',
  buho: 'png',
  'buho-ia-1': 'png',
  'buho-ia-2': 'png',
};

for (const [f, ext] of Object.entries(files)) {
  const input = `${dir}/${f}.${ext}`;
  await sharp(input).webp({ quality: 80 }).toFile(`${dir}/${f}.webp`);
  await sharp(input).avif({ quality: 58 }).toFile(`${dir}/${f}.avif`);
  console.log(`converted ${f}`);
}
