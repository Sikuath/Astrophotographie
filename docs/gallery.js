// =============================
// FOND ÉTOILES
// =============================
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.prepend(starsContainer);

const STAR_COUNT = 300;
const colors = ['#ff4500','#ff8c00','#ffffe0','#ffffff','#add8e6'];

for(let i=0;i<STAR_COUNT;i++){
  const star=document.createElement('div');
  star.classList.add('star');
  star.style.top=Math.random()*100+'%';
  star.style.left=Math.random()*100+'%';
  const size=Math.random()*2+1;
  star.style.width=size+'px';
  star.style.height=size+'px';
  star.style.background=colors[Math.floor(Math.random()*colors.length)];
  star.style.opacity=Math.random();
  star.style.animationDuration=(Math.random()*5+5)+'s';
  star.style.animationDelay=Math.random()*5+'s';
  starsContainer.appendChild(star);
}

// =============================
// GALERIE DYNAMIQUE
// =============================
const galleryContainer = document.querySelector('.gallery');
photos.forEach(photo => {
  const div = document.createElement('div');
  div.classList.add('photo');

  const img = document.createElement('img');
  img.src = `images/${photo}`;
  img.alt = photo;

  const caption = document.createElement('div');
  caption.classList.add('caption');
  caption.textContent = photo;

  div.appendChild(img);
  div.appendChild(caption);
  galleryContainer.appendChild(div);

  // LIGHTBOX
  img.addEventListener('click', () => {
    let overlay = document.getElementById('lightbox-overlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'lightbox-overlay';
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = '';
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    overlay.appendChild(largeImg);
    overlay.style.display = 'flex';

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  });
});

// =============================
// VISITOR BADGE (IMAGE)
// =============================
const badgeContainer = document.createElement('div');
badgeContainer.id = 'visitor-badge-container';
badgeContainer.innerHTML = `<img src="https://visitor-badge.glitch.me/badge?page_id=Yoye.Torn" alt="Visiteurs">`;
document.body.appendChild(badgeContainer);
