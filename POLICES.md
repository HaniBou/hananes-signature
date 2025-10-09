# Instructions pour ajouter une police manuscrite/calligraphique

Pour utiliser une belle police manuscrite ou calligraphique sur votre site web, suivez ces étapes :

1. **Choisissez et achetez une police manuscrite élégante**
   - Options recommandées :
     - [Mightyheart](https://www.myfonts.com/collections/mightyheart-font-typesenses) - Élégante signature manuscrite
     - [Autography](https://www.myfonts.com/collections/autography-font-resistenza) - Style signature luxueuse
     - [Northwell](https://creativemarket.com/Sam_Parrett/1389442-Northwell-Font) - Belle écriture manuscrite fluide
     - [Coneria Script](https://www.myfonts.com/collections/coneria-script-font-creativemedialab) - Script élégant

2. **Convertissez la police au format web**
   - Après l'achat, téléchargez les fichiers de police (.otf ou .ttf)
   - Utilisez [Font Squirrel Generator](https://www.fontsquirrel.com/tools/webfont-generator) pour convertir en formats web
   - Sélectionnez "Expert" et cochez "WOFF" et "WOFF2"
   - Assurez-vous de respecter la licence de la police lors de la conversion

3. **Ajoutez les fichiers à votre projet**
   - Placez les fichiers convertis dans le dossier `/public/fonts/`
   - Renommez-les en :
     - signature-script.woff2
     - signature-script.woff

4. **Tout est déjà configuré**
   - Le fichier `/src/app/fonts.css` est déjà configuré pour utiliser votre police
   - La classe `font-signature` est appliquée au titre principal
   - En attendant l'installation de votre police personnalisée, la police Dancing Script de Google Fonts est utilisée

## Police actuellement utilisée

Dancing Script est une police manuscrite élégante qui est utilisée temporairement. C'est une belle police script cursive avec une apparence calligraphique, mais pour un site de pâtisserie haut de gamme, une police manuscrite premium personnalisée pourrait offrir un aspect encore plus distinctif et exclusif.