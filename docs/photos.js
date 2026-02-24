// photos.js
// Liste des photos de la galerie avec informations complètes

const photos = [
  {
    file: "IC1318A_RGB.jpg",
    title: "IC 1318A – Nébuleuse du Papillon",
    type: "Nébuleuse en émission",
    constellation: "Cygne",
    processing: "RGB"
  },
  {
    file: "IC1805_SHO.jpg",
    title: "IC 1805 – Nébuleuse du Cœur",
    type: "Nébuleuse en émission",
    constellation: "Cassiopée",
    processing: "SHO (Hubble Palette)"
  },
  {
    file: "M31.jpg",
    title: "M31 – Galaxie d'Andromède",
    type: "Galaxie spirale",
    constellation: "Andromède",
    processing: "RGB"
  },
  {
    file: "NGC6883_RGB.jpg",
    title: "NGC 6883",
    type: "Amas ouvert",
    constellation: "Cygne",
    processing: "RGB"
  },
  {
    file: "NGC6888_SHO.jpg",
    title: "NGC 6888 – Nébuleuse du Croissant",
    type: "Nébuleuse en émission",
    constellation: "Cygne",
    processing: "SHO (Hubble Palette)"
  },
  {
    file: "SH2-119.jpg",
    title: "SH2-119 – Nébuleuse du Dauphin",
    type: "Nébuleuse en émission",
    constellation: "Cygne",
    processing: "SHO (Hubble Palette)"
  },
  {
    file: "SH2-135.jpg",
    title: "SH2-135",
    type: "Nébuleuse en émission",
    constellation: "Céphée",
    processing: "SHO (Hubble Palette)"
  },
  {
    file: "SH2-157_SHO.jpg",
    title: "SH2-157 – La pince de Homard",
    type: "Nébuleuse en émission",
    constellation: "Cassiopée",
    processing: "SHO (Hubble Palette)"
  },
  {
    file: "NGC2841_RGB.jpg",
    title: "NGC 2841",
    type: "Galaxie spirale",
    constellation: "La grande Ourse",
    processing: "RGB"
  }
];

// Export pour Node.js (utilisé par generate-sitemap.js)
module.exports = { photos };
