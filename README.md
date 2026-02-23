https://sikuath.github.io/Astrophotographie/

Ajouter une photo à la galerie

La galerie utilise un fichier JavaScript minimaliste (photos.js) qui contient uniquement la liste des fichiers. Tu n’as jamais besoin de toucher index.html.

1 **Placer le fichier image**

Mets ton image dans le dossier docs/images

Exemple : images/NGC7000.jpg

2  **Ajouter la photo dans photos.js**

Copier vos nouvelles photos dans le dossier images/ :

cp /chemin/vers/nouvelle_photo.jpg ~/Astrophotographie/docs/images/

Ajouter les informations de la photo dans photos.js :

{
  file: "nouvelle_photo.jpg",
  title: "Nom complet de l'objet",
  type: "Type astronomique",
  constellation: "Constellation",
  processing: "RGB / SHO / etc."
}

Ajouter un nouvel objet à la fin du tableau photos.
**Ne pas oublier la virgule à l'avant dernier fichier!**

3  **Régénérer le sitemap**

Dans le dossier docs :

cd ~/Astrophotographie/docs
node generate-sitemap.js

Vérifiez que sitemap.xml est bien créé ou mis à jour :

ls -l sitemap.xml
cat sitemap.xml

4 **Commit et push vers Github**

Ajouter les fichiers modifiés :

git add photos.js sitemap.xml

Créer un commit :

git commit -m "Ajout/modification de photos et mise à jour du sitemap"

Pousser vers GitHub :

git push

5 **Vérification**

Sur GitHub, vérifier que photos.js et sitemap.xml sont à jour.
Sur le site GitHub Pages, les nouvelles images doivent apparaître automatiquement.
