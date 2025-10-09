# Hanane's Signature - Site Web Vitrine

Un site web élégant et moderne pour Hanane's Signature, une pâtisserie artisanale spécialisée dans les gâteaux algériens, les pâtisseries françaises et les gâteaux d'anniversaire.

## Fonctionnalités

- Design moderne et épuré inspiré du site [Chocolatier Bouillet](https://www.chocolatier-bouillet.com/)
- Couleurs principales : doré et marron pour une esthétique élégante et raffinée
- Slider d'images pour mettre en valeur les créations
- Galerie de produits avec filtrage par catégorie
- Formulaire de contact fonctionnel
- Site entièrement responsive pour tous les appareils

## Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React avec App Router
- [TypeScript](https://www.typescriptlang.org/) - Typage statique pour JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animations
- [React Slick](https://react-slick.neostack.com/) - Composant de slider
- [React Icons](https://react-icons.github.io/react-icons/) - Icônes SVG

## Structure du Projet

```
hananes-signature/
├── src/
│   ├── app/                    # Routes de l'application
│   │   ├── a-propos/           # Page À Propos
│   │   ├── contact/            # Page Contact
│   │   ├── nos-creations/      # Page Nos Créations
│   │   ├── globals.css         # Styles globaux
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Page d'accueil
│   ├── components/             # Composants réutilisables
│   │   ├── layout/             # Composants de mise en page (Header, Footer)
│   │   └── ui/                 # Composants UI (Buttons, Cards, etc.)
└── public/                     # Assets statiques
    └── images/                 # Images du site
```

## Installation et Démarrage

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votrenom/hananes-signature.git
   cd hananes-signature
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Production

Pour construire le site pour la production :

```bash
npm run build
```

Pour démarrer le site en mode production :

```bash
npm run start
```

## Images

**Note importante :** Les images utilisées dans ce projet sont des placeholders. Avant le déploiement final, vous devrez remplacer les images du dossier `/public/images/` par vos propres photos de pâtisseries.

## Personnalisation

- Les couleurs principales peuvent être ajustées dans le fichier `tailwind.config.js`
- Les textes et contenus peuvent être modifiés directement dans les fichiers de pages et composants
- Pour ajouter ou modifier les produits, mettez à jour les tableaux de produits dans les fichiers correspondants
