// Détection de la langue du navigateur
window.lang = navigator.language.startsWith('en') ? 'en' : 'fr';

// Switch de langue via boutons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.lang-switch button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.lang = btn.dataset.lang; // changer la langue globale
      // Mettre à jour la page et les vignettes
      if (typeof window.updateGallery === 'function') {
        window.updateGallery();
      }
      // Mettre à jour le texte du header
      const title = document.getElementById('page-title');
      const subtitle = document.getElementById('page-subtitle');
      if (window.lang === 'fr') {
        title.textContent = "Galerie d’Astrophotographie";
        subtitle.textContent = "Photos du ciel profond : nébuleuses, galaxies et amas stellaires";
      } else {
        title.textContent = "Astrophotography Gallery";
        subtitle.textContent = "Deep sky images: nebulae, galaxies and star clusters";
      }
    });
  });
});
