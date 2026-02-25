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
const galleryContainer = document.querySelector('.gallery');
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
overlay.style.padding = '20px';
overlay.style.boxSizing = 'border-box';
overlay.style.backdropFilter = 'blur(6px)';
overlay.style.WebkitBackdropFilter = 'blur(6px)';
document.body.appendChild(overlay);

// Trier photos par date décroissante
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
  img.loading="lazy";
  img.decoding="async";
  img.alt=`Astrophotographie de ${photo.title}`;

  const caption = document.createElement('figcaption');
  caption.classList.add('caption');
  caption.innerHTML = `<strong>${photo.title}</strong><br>
    ${photo.type} – Constellation du ${photo.constellation}<br>
    Traitement : ${photo.processing}<br>
    <a href="${photo.wiki}" target="_blank" style="color:#00ffff;text-decoration:underline;">En savoir plus</a>`;

  figure.appendChild(img);
  figure.appendChild(caption);
  galleryContainer.appendChild(figure);

  // LIGHTBOX
  img.addEventListener('click',()=>{
    let currentIndex=index;

    function showImage(i){
      overlay.innerHTML='';

      // Flèches
      const arrows = document.createElement('div');
      arrows.classList.add('lb-arrows');
      arrows.innerHTML=`<span id="lb-prev">&#8592;</span><span id="lb-next">&#8594;</span>`;
      overlay.appendChild(arrows);

      // Container lightbox
      const container = document.createElement('div');
      container.style.display='flex';
      container.style.gap='40px';
      container.style.alignItems='center';
      container.style.maxWidth='100%';
      container.style.maxHeight='100%';
      container.style.justifyContent='center';

      // Infos à gauche
      const info = document.createElement('div');
      info.style.color='#00ffff';
      info.style.maxWidth='300px';
      info.innerHTML=`
        <h2>${sortedPhotos[i].title}</h2>
        <p><strong>Type :</strong> ${sortedPhotos[i].type}</p>
        <p><strong>Constellation :</strong> ${sortedPhotos[i].constellation}</p>
        <p><strong>Processing :</strong> ${sortedPhotos[i].processing}</p>
        <p><strong>Temps de pause :</strong> ${sortedPhotos[i].exposure}</p>
        <p><strong>Date de prise de vue :</strong> ${sortedPhotos[i].date}</p>
        <p><strong>Problèmes rencontrés :</strong> ${sortedPhotos[i].issues || 'Aucun'}</p>
        <p><strong>Satisfaction :</strong></p>
        <div class="rating-bar">
          ${[...Array(10)].map((_,idx)=>{
            const level=idx+1;
            const color=getRatingColor(level);
            return `<div class="rating-segment" style="background:${level<=sortedPhotos[i].rating?color:'#222'}"></div>`;
          }).join('')}
        </div>
        <p><a href="${sortedPhotos[i].wiki}" target="_blank">En savoir plus sur Wikipedia</a></p>
      `;

      // Image à droite
      const largeImg = document.createElement('img');
      largeImg.src = `images/${sortedPhotos[i].file}`;
      largeImg.alt = sortedPhotos[i].title;
      largeImg.classList.add('show'); // fade + zoom via CSS

      container.appendChild(info);
      container.appendChild(largeImg);
      overlay.appendChild(container);
      overlay.style.visibility='visible';

      // Navigation flèches
      overlay.querySelector('#lb-prev').onclick=(e)=>{
        e.stopPropagation();
        currentIndex=(currentIndex-1+sortedPhotos.length)%sortedPhotos.length;
        showImage(currentIndex);
      };
      overlay.querySelector('#lb-next').onclick=(e)=>{
        e.stopPropagation();
        currentIndex=(currentIndex+1)%sortedPhotos.length;
        showImage(currentIndex);
      };
    }

    showImage(currentIndex);

    // Support clavier
    const keyHandler=(e)=>{
      if(overlay.style.visibility==='visible'){
        if(e.key==='ArrowLeft'){currentIndex=(currentIndex-1+sortedPhotos.length)%sortedPhotos.length; showImage(currentIndex);}
        else if(e.key==='ArrowRight'){currentIndex=(currentIndex+1)%sortedPhotos.length; showImage(currentIndex);}
        else if(e.key==='Escape'){overlay.style.visibility='hidden'; overlay.innerHTML=''; document.removeEventListener('keydown',keyHandler);}
      }
    };
    document.addEventListener('keydown',keyHandler);

    overlay.onclick=()=>{overlay.style.visibility='hidden'; overlay.innerHTML=''; document.removeEventListener('keydown',keyHandler);}
  });
});