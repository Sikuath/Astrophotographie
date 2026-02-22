const fs = require('fs');
const path = require('path');

// Importer photos.js
const photos = require('./photos.js').photos || require('./photos.js');

const baseUrl = 'https://sikuath.github.io/Astrophotographie/';
const urls = [];

// Page principale
urls.push({
  loc: baseUrl,
  priority: 1.0,
  changefreq: 'weekly'
});

// Ajouter chaque image
photos.forEach(p => {
  urls.push({
    loc: baseUrl + 'images/' + p.file,
    priority: 0.8,
    changefreq: 'monthly'
  });
});

// Générer sitemap.xml
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(u => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${u.loc}</loc>\n`;
  sitemap += `    <changefreq>${u.changefreq}</changefreq>\n`;
  sitemap += `    <priority>${u.priority}</priority>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

// Écrire sitemap.xml
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
console.log('✅ sitemap.xml généré avec', urls.length, 'URLs');
