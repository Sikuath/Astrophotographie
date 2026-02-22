// =============================
// Générer des étoiles colorées
// =============================
const starsContainer = document.querySelector('.stars');
const STAR_COUNT = 300;
const colors = ['#ff4500', '#ff8c00', '#ffffe0', '#ffffff', '#add8e6'];

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
// Générer la galerie dynamiquement
// =============================
const gallery = document.querySelector('.gallery');

photos.forEach(name => {
  const div = document.createElement('div');
  div.className = 'photo';
  div.innerHTML = `
    <a href="images/${name}" class="lightbox">
      <img src="images/${name}" alt="${name}">
    </a>
    <div class="caption">${name}</div>
  `;
  gallery.appendChild(div);
});

// =============================
// Lightbox
// =============================
function setupLightbox() {
  const lightboxLinks = document.querySelectorAll('.lightbox');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImage = document.getElementById('lightbox-image');

  lightboxLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      lightboxImage.src = link.href;
      lightboxOverlay.style.display = 'flex';
    });
  });
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').style.display = 'none';
  document.getElementById('lightbox-image').src = '';
}

setupLightbox();
