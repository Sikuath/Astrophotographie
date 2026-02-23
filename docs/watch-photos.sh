#!/bin/bash

# Script pour générer sitemap automatiquement

FILE="photos.js"

echo "Surveillance de $FILE…"

while true; do
  inotifywait -e close_write $FILE
  echo "$FILE modifié, génération du sitemap…"
  node generate-sitemap.js
done

