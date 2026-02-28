const photos = [
  {
    file: "NGC6883_RGB.jpg",
    title: { fr: "NGC 6883", en: "NGC 6883" },
    type: { fr: "Amas ouvert", en: "Open Cluster" },
    constellation: { fr: "Cygne", en: "Cygnus" },
    processing: { fr: "RGB", en: "RGB" },
    wiki: "https://fr.wikipedia.org/wiki/NGC_6883",
    exposure: "2h 2min",
    date: "23/07/2025",
    issues: {
      fr: "Première sortie, tout excité à l'idée de faire ma première photo !",
      en: "First session, very excited to take my first astrophotography picture!"
    },
    rating: 3
  },
  {
    file: "IC1318A_RGB.jpg",
    title: { fr: "IC 1318A – Nébuleuse du Papillon", en: "IC 1318A – Butterfly Nebula" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Cygne", en: "Cygnus" },
    processing: { fr: "RGB", en: "RGB" },
    wiki: "https://fr.wikipedia.org/wiki/IC_1318",
    exposure: "1h",
    date: "09/08/2025",
    issues: {
      fr: "Deuxième sortie, du gradient à cause de la Lune.",
      en: "Second session, gradient caused by moonlight."
    },
    rating: 2
  },
  {
    file: "NGC6888_SHO.jpg",
    title: { fr: "NGC 6888 – Nébuleuse du Croissant", en: "NGC 6888 – Crescent Nebula" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Cygne", en: "Cygnus" },
    processing: { fr: "SHO (Palette Hubble)", en: "SHO (Hubble Palette)" },
    wiki: "https://fr.wikipedia.org/wiki/NGC_6888",
    exposure: "4h 45min",
    date: "15/08/2025",
    issues: {
      fr: "Première SHO, le résultat n'est pas mauvais. Des problèmes avec les scripts Siril !",
      en: "First SHO attempt, result is quite good. Some issues with Siril scripts."
    },
    rating: 8
  },
  {
    file: "SH2-157_SHO.jpg",
    title: { fr: "SH2-157 – La pince de Homard", en: "Sh2-157 – Lobster Claw Nebula" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Cassiopée", en: "Cassiopeia" },
    processing: { fr: "SHO (Palette Hubble)", en: "SHO (Hubble Palette)" },
    wiki: "https://fr.wikipedia.org/wiki/SH2-157",
    exposure: "4h 30min",
    date: "12/08/2025",
    issues: {
      fr: "Pas de problèmes pendant la soirée. La pince n'est pas entière sur la photo.",
      en: "No issues during the session. The claw is not fully framed."
    },
    rating: 6
  },
  {
    file: "IC1805_SHO.jpg",
    title: { fr: "IC 1805 – Nébuleuse du Cœur", en: "IC 1805 – Heart Nebula" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Cassiopée", en: "Cassiopeia" },
    processing: { fr: "SHO (Palette Hubble)", en: "SHO (Hubble Palette)" },
    wiki: "https://fr.wikipedia.org/wiki/N%C3%A9buleuse_du_C%C5%93ur",
    exposure: "4h 39min",
    date: "05/09/2025",
    issues: {
      fr: "Pas de soucis pendant la prise de vue. Le résultat est bon et les couleurs ressortent bien.",
      en: "No issues during capture. Good result with well-balanced colors."
    },
    rating: 10
  },
  {
    file: "SH2-119.jpg",
    title: { fr: "SH2-119 – Nébuleuse du Dauphin", en: "Sh2-119 – Dolphin Nebula" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Cygne", en: "Cygnus" },
    processing: { fr: "SHO (Palette Hubble)", en: "SHO (Hubble Palette)" },
    wiki: "https://fr.wikipedia.org/wiki/SH2-119",
    exposure: "4h 30min",
    date: "14/09/2025",
    issues: {
      fr: "RAS pendant la prise de vue.",
      en: "No issues during capture."
    },
    rating: 8
  },
  {
    file: "SH2-135.jpg",
    title: { fr: "SH2-135", en: "Sh2-135" },
    type: { fr: "Nébuleuse en émission", en: "Emission Nebula" },
    constellation: { fr: "Céphée", en: "Cepheus" },
    processing: { fr: "SHO (Palette Hubble)", en: "SHO (Hubble Palette)" },
    wiki: "https://fr.wikipedia.org/wiki/SH2-135",
    exposure: "4h 10min",
    date: "11/10/2025",
    issues: {
      fr: "RAS pendant la prise de vue. Un peu déçu par les couleurs.",
      en: "No issues during capture. Slightly disappointed with the colors."
    },
    rating: 7
  },
  {
    file: "M31.jpg",
    title: { fr: "M31 – Galaxie d'Andromède", en: "M31 – Andromeda Galaxy" },
    type: { fr: "Galaxie spirale", en: "Spiral Galaxy" },
    constellation: { fr: "Andromède", en: "Andromeda" },
    processing: { fr: "RGB", en: "RGB" },
    wiki: "https://fr.wikipedia.org/wiki/Galaxie_d%27Androm%C3%A8de",
    exposure: "1h 43min",
    date: "20/10/2025",
    issues: {
      fr: "Deux temps de poses différents pour les bras et le cœur. Assez satisfait du résultat.",
      en: "Two different exposure lengths for the arms and the core. Quite satisfied with the result."
    },
    rating: 9
  },
  {
    file: "NGC2841_RGB.jpg",
    title: { fr: "NGC 2841", en: "NGC 2841" },
    type: { fr: "Galaxie spirale", en: "Spiral Galaxy" },
    constellation: { fr: "La Grande Ourse", en: "Ursa Major" },
    processing: { fr: "RGB", en: "RGB" },
    wiki: "https://fr.wikipedia.org/wiki/NGC_2841",
    exposure: "4h 30min",
    date: "23/02/2026",
    issues: {
      fr: "De la buée !!! Je me suis arraché les cheveux pour en sortir quelque chose. Photo trop rouge.",
      en: "Dew issues! I struggled a lot to salvage something. Image is too red."
    },
    rating: 1
  }
];

module.exports = { photos };