https://sikuath.github.io/Astrophotographie/

# 🌌 Astrophotographie – Galerie en ligne

Cette galerie utilise un fichier JavaScript minimaliste (`photos.js`) contenant uniquement la liste des fichiers.
Tu n’as **jamais besoin de modifier `index.html`** pour ajouter des photos.

---

## 1️⃣ Placer le fichier image

Copie ton image dans le dossier `docs/images`.

Exemple :

```bash
images/NGC7000.jpg
```

Ou depuis un autre emplacement :

```bash
cp /chemin/vers/nouvelle_photo.jpg ~/Astrophotographie/docs/images/
```

---

## 2️⃣ Ajouter la photo dans `photos.js`

Chaque photo est un objet dans le tableau `photos` avec ces propriétés :

- `file` : nom du fichier image  
- `title` : nom complet de l’objet  
- `type` : type astronomique  
- `constellation` : constellation  
- `processing` : traitement utilisé (RGB / SHO / etc.)

Exemple d’objet à ajouter :

```js
{
  file: "nouvelle_photo.jpg",
  title: "NGC 7000 – Nébuleuse de l’Amérique du Nord",
  type: "Nébuleuse en émission",
  constellation: "Cygne",
  processing: "RGB"
}
```

⚠️ Ajoute le nouvel objet **à la fin du tableau `photos`**.
N’oublie pas la virgule après l’avant-dernier élément !

---

## 3️⃣ Régénérer le sitemap

Dans le dossier `docs` :

```bash
cd ~/Astrophotographie/docs
node generate-sitemap.js
```

Vérifie que le fichier `sitemap.xml` est bien créé ou mis à jour :

```bash
ls -l sitemap.xml
cat sitemap.xml
```

---

## 4️⃣ Commit et push vers GitHub

Ajouter les fichiers modifiés :

```bash
git add photos.js sitemap.xml
```

Créer un commit :

```bash
git commit -m "Ajout/modification de photos et mise à jour du sitemap"
```

Pousser sur GitHub :

```bash
git push
```

---

## 5️⃣ Vérification

1. Sur GitHub, vérifie que `photos.js` et `sitemap.xml` sont à jour.  
2. Sur ton site GitHub Pages, les nouvelles images apparaissent automatiquement.

---
# Astrophotographie

Site personnel d’astrophotographie présentant mes images du ciel profond et du ciel nocturne.

## License

### Code
The code of this project is licensed under the MIT License.

### Images
All astrophotography images are licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0).

You are free to share the images with proper attribution, but you may not use them for commercial purposes or modify them.

© 2026 Sikuath
