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
overlay.style.background = 'rgba(0,0,0,0.92)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '1000';
overlay.style.cursor = 'pointer';
overlay.style.visibility = 'hidden';
document.body.appendChild(overlay);

// =============================
// Création de la galerie
// =============================
photos.forEach((photo, index) => {
  const figure = document.createElement('figure');
  figure.classList.add('photo');

  const img = document.createElement('img');
  img.src = `images/${photo.file}`;
  img.loading = "lazy";
  img.decoding = "async";
  img.alt = `Astrophotographie de ${photo.title}, ${photo.type} dans la constellation du ${photo.constellation}, traitement ${photo.processing}`;

  const caption = document.createElement('figcaption');
  caption.classList.add('caption');
  caption.innerHTML = `<strong>${photo.title}</strong><br>${photo.type} – Constellation du ${photo.constellation}<br>Traitement : ${photo.processing}`;

  figure.appendChild(img);
  figure.appendChild(caption);
  galleryContainer.appendChild(figure);

  img.addEventListener('click', () => {
    let currentIndex = index;

    function showImage(i) {
      overlay.innerHTML = '';

      // Flèches
      const arrows = document.createElement('div');
      arrows.classList.add('lb-arrows');
      arrows.innerHTML = `
        <span id="lb-prev">&#8592;</span>
        <span id="lb-next">&#8594;</span>
      `;
      overlay.appendChild(arrows);

      // Container image + infos
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '40px';
      container.style.alignItems = 'center';
      container.style.maxWidth = '90%';
      container.style.maxHeight = '90%';

      const info = document.createElement('div');
      info.style.color = '#1e90ff';
      info.style.maxWidth = '300px';
      info.innerHTML = `<h2 style="margin-top:0;">${photos[i].title}</h2>
        <p><strong>Type :</strong> ${photos[i].type}</p>
        <p><strong>Constellation :</strong> ${photos[i].constellation}</p>
        <p><strong>Processing :</strong> ${photos[i].processing}</p>`;

      const largeImg = document.createElement('img');
      largeImg.src = `images/${photos[i].file}`;
      largeImg.alt = photos[i].title;

      container.appendChild(info);
      container.appendChild(largeImg);
      overlay.appendChild(container);
      overlay.style.visibility = 'visible';

      // Flèches click
      overlay.querySelector('#lb-prev').onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showImage(currentIndex);
      };
      overlay.querySelector('#lb-next').onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % photos.length;
        showImage(currentIndex);
      };
    }

    showImage(currentIndex);

    // Navigation clavier
    const keyHandler = (e) => {
      if (overlay.style.visibility === 'visible') {
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + photos.length) % photos.length;
          showImage(currentIndex);
        } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % photos.length;
          showImage(currentIndex);
        } else if (e.key === 'Escape') {
          overlay.style.visibility = 'hidden';
          overlay.innerHTML = '';
        }
      }
    };
    document.addEventListener('keydown', keyHandler);

    // Retirer le handler quand on ferme le lightbox
    overlay.onclick = () => {
      overlay.style.visibility = 'hidden';
      overlay.innerHTML = '';
      document.removeEventListener('keydown', keyHandler);
    };
  });
});

// JSON-LD automatique
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
