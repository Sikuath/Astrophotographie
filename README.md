Ajouter une photo à la galerie

La galerie utilise un fichier JavaScript minimaliste (photos.js) qui contient uniquement la liste des fichiers. Tu n’as jamais besoin de toucher index.html.

1️⃣ **Placer le fichier image**

Mets ton image dans le dossier docs/images

Exemple : images/NGC7000.jpg

2️⃣ **Ajouter la photo dans photos.js**

Ouvre photos.js.

Tu verras un tableau photos contenant tous les noms de fichiers existants :

const photos = [
  'IC1318A_RGB.jpg',
  'IC1805_SHO.jpg',
  'M31.jpg'
  // autres fichiers…
];

**Ajoute simplement le nom de ton fichier à la fin et ne pas oublier la virgule à l'avant dernier fichier!**

const photos = [
  'IC1318A_RGB.jpg',
  'IC1805_SHO.jpg',
  'M31.jpg',
  'NGC7000.jpg' // nouvelle photo
];


3️⃣ **Vérification**

Tu n’as rien à modifier dans index.html.

La galerie se mettra à jour automatiquement avec la nouvelle photo.

Le lightbox, la légende et les étoiles colorées fonctionnent immédiatement.

4️⃣ **Ajouter plusieurs photos en une fois**

Ajoute juste chaque fichier comme nouvel élément dans le tableau photos :

const photos = [
  'IC1318A_RGB.jpg',
  'IC1805_SHO.jpg',
  'M31.jpg',
  'NGC7000.jpg',
  'NGC6999.jpg',
  'NGC7023.jpg'
];

À chaque ajout, la galerie se mettra automatiquement à jour.
