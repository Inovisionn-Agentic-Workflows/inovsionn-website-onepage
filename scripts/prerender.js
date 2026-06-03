import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const distDir = 'dist';

const routes = [
  {
    path: '/over-mij',
    title: 'Over Niels Heijman | AI Automatisering Specialist Roermond | Inovisionn',
    description: 'Leer Niels Heijman kennen, oprichter van Inovisionn. Gecertificeerd AI-automatisering specialist uit Roermond met aantoonbare resultaten in Make.com, n8n en Claude.',
    canonical: 'https://www.inovisionn.com/over-mij',
  },
  {
    path: '/werkwijze',
    title: 'Make.com, n8n & Claude Code | AI Tools Specialist Roermond | Inovisionn',
    description: 'Ontdek hoe Inovisionn in Roermond Make.com, n8n en Claude Code inzet voor AI-automatisering. Wij bouwen maatwerk workflows en AI-agents voor mkb-bedrijven in Limburg en Nederland.',
    canonical: 'https://www.inovisionn.com/werkwijze',
  },
  {
    path: '/privacy',
    title: 'Privacyverklaring | Inovisionn',
    description: 'Privacyverklaring van Inovisionn. Lees hoe wij omgaan met uw persoonsgegevens.',
    canonical: 'https://www.inovisionn.com/privacy',
  },
  {
    path: '/voorwaarden',
    title: 'Algemene Voorwaarden | Inovisionn',
    description: 'Algemene voorwaarden van Inovisionn.',
    canonical: 'https://www.inovisionn.com/voorwaarden',
  },
];

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  let html = baseHtml;

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );

  html = html.replace(
    /<meta name="description" content=".*?"\s*\/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Remove any existing canonical then inject the correct one
  html = html.replace(/<link rel="canonical".*?\/>\n?/g, '');
  html = html.replace(
    '</head>',
    `  <link rel="canonical" href="${route.canonical}" />\n</head>`
  );

  // Update og:url and twitter:url
  html = html.replace(
    /<meta property="og:url" content=".*?"\s*\/>/,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta property="twitter:url" content=".*?"\s*\/>/,
    `<meta property="twitter:url" content="${route.canonical}" />`
  );

  const dir = join(distDir, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✓ Prerendered ${route.path}`);
}

console.log('Prerendering done.');
