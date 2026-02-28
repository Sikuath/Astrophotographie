// =============================
// UTILITAIRES
// =============================
function getRatingColor(rating) {
  const red = Math.round(255 - (rating - 1) * 25.5);
  const green = Math.round((rating - 1) * 25.5);
  return `rgb(${red},${green},0)`;
}

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
// GALERIE
// =============================
window.updateGallery = function() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = ''; // vider la galerie

  const sortedPhotos = photos.slice().sort((a,b)=> {
    const dA = a.date.split('/').reverse().join('-');
    const dB = b.date.split('/').reverse().join('-');
    return new Date(dB) - new Date(dA);
  });

  sortedPhotos.forEach((photo,index)=>{
    const figure = document.createElement('figure');
    figure.classList.add('photo');

    const img = document.createElement('img');
    img.src = `images/${photo.file}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = `Astrophotography of ${photo.title[window.lang]}`;

    const caption = document.createElement('figcaption');
    caption.classList.add('caption');
    caption.innerHTML = `<strong>${photo.title[window.lang]}</strong><br>
      ${photo.type[window.lang]} – Constellation : ${photo.constellation[window.lang]}<br>
      Processing : ${photo.processing[window.lang]}<br>
      <a href="${photo.wiki}" target="_blank">${window.lang==='fr'?'En savoir plus':'More info'}</a>`;

    figure.appendChild(img);
    figure.appendChild(caption);
    galleryContainer.appendChild(figure);

    // =============================
    // LIGHTBOX
    // =============================
    img.addEventListener('click',()=>{
      let currentIndex = index;
      const overlay = document.getElementById('lightbox-overlay');
      overlay.innerHTML = '';
      overlay.style.visibility = 'visible';

      function showImage(i) {
        overlay.innerHTML = '';

        // Flèches
        const arrows = document.createElement('div');
        arrows.classList.add('lb-arrows');
        arrows.innerHTML = `<span id="lb-prev">&#8592;</span><span id="lb-next">&#8594;</span>`;
        overlay.appendChild(arrows);

        // Container lightbox
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.gap = '40px';
        container.style.alignItems = 'center';
        container.style.maxWidth = '100%';
        container.style.maxHeight = '100%';
        container.style.justifyContent = 'center';

        // Infos à gauche
        const info = document.createElement('div');
        info.classList.add('lightbox-info');
        info.innerHTML = `
          <h2>${sortedPhotos[i].title[window.lang]}</h2>
          <p><strong>${window.lang==='fr'?'Type':'Type'} :</strong> ${sortedPhotos[i].type[window.lang]}</p>
          <p><strong>${window.lang==='fr'?'Constellation':'Constellation'} :</strong> ${sortedPhotos[i].constellation[window.lang]}</p>
          <p><strong>${window.lang==='fr'?'Traitement':'Processing'} :</strong> ${sortedPhotos[i].processing[window.lang]}</p>
          <p><strong>${window.lang==='fr'?'Temps de pause':'Exposure'} :</strong> ${sortedPhotos[i].exposure}</p>
          <p><strong>${window.lang==='fr'?'Date de prise de vue':'Date'} :</strong> ${sortedPhotos[i].date}</p>
          <p><strong>${window.lang==='fr'?'Mon avis':'Notes'} :</strong> ${sortedPhotos[i].issues[window.lang] || (window.lang==='fr'?'Aucun':'None')}</p>
          <p><strong>${window.lang==='fr'?'Satisfaction':'Rating'} :</strong></p>
          <div class="rating-bar">
            ${[...Array(10)].map((_,idx)=>{
              const level = idx+1;
              const color = getRatingColor(level);
              return `<div class="rating-segment" style="background:${level <= sortedPhotos[i].rating ? color : '#222'}"></div>`;
            }).join('')}
          </div>
          <p><a href="${sortedPhotos[i].wiki}" target="_blank">${window.lang==='fr'?'En savoir plus sur Wikipedia':'More info on Wikipedia'}</a></p>
        `;

        // Image à droite
        const largeImg = document.createElement('img');
        largeImg.src = `images/${sortedPhotos[i].file}`;
        largeImg.alt = sortedPhotos[i].title[window.lang];
        largeImg.style.opacity = 0;
        largeImg.style.transform = 'scale(0.95)';
        const randDuration = (Math.random() * 1.7).toFixed(2);
        const randDelay = (Math.random() * 1.7).toFixed(2);
        largeImg.style.transition = `opacity ${randDuration}s ease ${randDelay}s, transform ${randDuration}s ease ${randDelay}s`;

        container.appendChild(info);
        container.appendChild(largeImg);
        overlay.appendChild(container);

        setTimeout(() => {
          largeImg.style.opacity = 1;
          largeImg.style.transform = 'scale(1)';
        }, 50);

        // Navigation flèches
        overlay.querySelector('#lb-prev').onclick = (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex - 1 + sortedPhotos.length) % sortedPhotos.length;
          showImage(currentIndex);
        };
        overlay.querySelector('#lb-next').onclick = (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex + 1) % sortedPhotos.length;
          showImage(currentIndex);
        };
      }

      showImage(currentIndex);

      // Clavier
      const keyHandler = (e) => {
        if (overlay.style.visibility === 'visible') {
          if(e.key==='ArrowLeft'){currentIndex=(currentIndex-1+sortedPhotos.length)%sortedPhotos.length; showImage(currentIndex);}
          else if(e.key==='ArrowRight'){currentIndex=(currentIndex+1)%sortedPhotos.length; showImage(currentIndex);}
          else if(e.key==='Escape'){overlay.style.visibility='hidden'; overlay.innerHTML=''; document.removeEventListener('keydown',keyHandler);}
        }
      };
      document.addEventListener('keydown', keyHandler);
      overlay.onclick = () => {overlay.style.visibility='hidden'; overlay.innerHTML=''; document.removeEventListener('keydown', keyHandler);}
    });
  });
};

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.updateGallery === 'function') window.updateGallery();
});