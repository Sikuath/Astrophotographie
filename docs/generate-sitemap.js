// generate-sitemap.js
// Génère un sitemap.xml pour toutes les images de la galerie

const fs = require('fs');
const { photos } = require('./photos.js'); // importe ton tableau d’objets

// URL de base de ton site GitHub Pages
const BASE_URL = 'https://sikuath.github.io/Astrophotographie/images/';

// Début du sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Ajouter chaque photo
photos.forEach(p => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${BASE_URL}${p.file}</loc>\n`;
  sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.8</priority>\n`;
  sitemap += `  </url>\n`;
});

// Fin du sitemap
sitemap += `</urlset>`;

// Écriture du fichier sitemap.xml
fs.writeFileSync('sitemap.xml', sitemap, 'utf8');

console.log('✅ sitemap.xml généré avec succès !');
