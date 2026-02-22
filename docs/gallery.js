// =============================
// FOND ÉTOILES
// =============================
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.prepend(starsContainer);

const STAR_COUNT = 300;
const colors = ['#ff4500','#ff8c00','#ffffe0','#ffffff','#add8e6'];

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.background = colors[Math.floor(Math.random() * colors.length)];
  star.style.opacity = Math.random();
  star.style.animationDuration = (Math.random() * 5 + 5) + 's';
  star.style.animationDelay = Math.random() * 5 + 's';
  starsContainer.appendChild(star);
}

// =============================
// GALERIE DYNAMIQUE
// =============================
const galleryContainer = document.querySelector('.gallery');

// Lightbox unique
const overlay = document.createElement('div');
overlay.id = 'lightbox-overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0,0,0,0.9)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '1000';
overlay.style.cursor = 'pointer';
overlay.style.visibility = 'hidden';
document.body.appendChild(overlay);

overlay.addEventListener('click', () => {
  overlay.style.visibility = 'hidden';
  overlay.innerHTML = '';
});

// =============================
// Création de la galerie à partir de photos.js
// =============================
photos.forEach(photo => {
  const figure = document.createElement('figure');
  figure.classList.add('photo');

  const img = document.createElement('img');
  img.src = `images/${photo.file}`;
  img.loading = "lazy";
  img.decoding = "async";

  img.alt = `Astrophotographie de ${photo.title}, ${photo.type} dans la constellation du ${photo.constellation}, traitement ${photo.processing}`;

  const caption = document.createElement('figcaption');
  caption.classList.add('caption');
  caption.innerHTML = `
    <strong>${photo.title}</strong><br>
    ${photo.type} – Constellation du ${photo.constellation}<br>
    Traitement : ${photo.processing}
  `;

  figure.appendChild(img);
  figure.appendChild(caption);
  galleryContainer.appendChild(figure);

  // Lightbox
  img.addEventListener('click', () => {
    overlay.innerHTML = '';
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.alt = img.alt;
    largeImg.style.maxWidth = '95%';
    largeImg.style.maxHeight = '95%';
    overlay.appendChild(largeImg);
    overlay.style.visibility = 'visible';
  });
});

// =============================
// JSON-LD automatique pour Google
// =============================
const ld = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Galerie Astrophotographie",
  "description": "Galerie de photos du ciel profond : nébuleuses, galaxies et amas stellaires",
  "url": "https://sikuath.github.io/Astrophotographie/",
  "image": photos.map(p => `https://sikuath.github.io/Astrophotographie/images/${p.file}`)
};
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(ld, null, 2);
document.head.appendChild(script);
