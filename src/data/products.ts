export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Algerian' | 'French' | 'Custom Cakes';
  images: string[]; // Tableau d'images pour la galerie
  featured?: boolean; // Pour afficher sur la page d'accueil
}

export const products: Product[] = [
  // Algerian Pastries
  {
    id: 'makrout',
    name: 'Date Makrout',
    description: 'Traditional Algerian pastry made with semolina and dates, perfumed with orange blossom water',
    category: 'Algerian',
    images: [
      '/images/makrout.jpg',
      // Ajoutez d'autres photos du makrout ici quand vous les aurez
    ],
  },
  {
    id: 'baklawa',
    name: 'Baklawa',
    description: 'Layered pastry with almonds and honey, flavored with orange blossom water',
    category: 'Algerian',
    images: [
      '/images/baklawa.avif',
      // Ajoutez d'autres photos de baklawa ici
    ],
  },
  {
    id: 'kalb-el-louz',
    name: 'Kalb el Louz',
    description: 'Cake made with semolina and almonds, topped with flavored syrup',
    category: 'Algerian',
    images: [
      '/images/kalb-el-louz.jpg',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'ktayef',
    name: 'Ktayef',
    description: 'Sweet dumplings filled with nuts and drenched in syrup',
    category: 'Algerian',
    images: [
      '/images/ktayef.png',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'griwech',
    name: 'Griwech',
    description: 'Crispy fried pastry coated with honey',
    category: 'Algerian',
    images: [
      '/images/griwech.jpg',
      // Ajoutez d'autres photos ici
    ],
  },
  
  // French Pastries
  {
    id: 'trompe-l-oeil',
    name: "Trompe l'œil",
    description: 'Pastry that looks like a savory dish but is actually sweet',
    category: 'French',
    images: [
      '/images/trompe-loeil-1.png',
      '/images/trompe-loeil.png',
      '/images/trompe-loeil-2.png',
      // Ajoutez d'autres photos ici
    ],
    featured: true,
  },
  {
    id: 'mille-feuille',
    name: 'Mille-feuille',
    description: 'Classic French pastry made of thin layers of puff pastry and vanilla custard brown',
    category: 'French',
    images: [
      '/images/mille-feuilles.png',
      // Ajoutez plusieurs photos de mille-feuille ici
      // Exemple: '/images/millefeuille-2.jpg', '/images/millefeuille-3.jpg'
    ],
  },
  {
    id:'petit-four',
    name: 'Petit Four',
    description: 'Assorted small pastries often served at the end of a meal or with tea',
    category: 'French',
    images: [
      '/images/petits-fours.png',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'entremet',
    name: 'Entremet',
    description: 'Elegant multi-layered dessert with various textures and flavors, often decorated beautifully',
    category: 'French',
    images: [
      '/images/entremet-3.png',
      '/images/entremet-caramel.png',
      '/images/entremet-chocolat.png',
      '/images/entremet-fraise.png',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'tarte-fruits',
    name: 'Fruit Tart',
    description: 'Tart topped with fresh seasonal fruits on a light custard cream',
    category: 'French',
    images: [
      '/images/tartes-fraises.png',
      // Ajoutez d'autres photos ici
    ],
    featured: true,
  },
  {
    id: 'eclair',
    name: 'Éclair au Chocolat',
    description: 'Oblong choux pastry filled with chocolate cream and topped with chocolate icing',
    category: 'French',
    images: [
      '/images/eclair.jpg',
      '/images/eclairs.png',

      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'paris-brest',
    name: 'Paris-Brest',
    description: 'Ring-shaped choux pastry filled with praline cream',
    category: 'French',
    images: [
      '/images/paris-brest.jpeg',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'cup-cakes', 
    name: 'Cup Cakes',
    description: 'Assorted flavored cup cakes with colorful frosting and decorations',
    category: 'French',
    images: [
      '/images/cupcakes.png',
      '/images/cupcakes-1.png',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust, topped with fresh fruit or sauce',
    category: 'French',
    images: [
      '/images/cheese-cake.png',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'brookies',
    name: 'Brookies',
    description: 'Delicious combination of brownies and cookies, perfect for chocolate lovers',
    category: 'French',
    images: [
      '/images/brookie.png',
      // Ajoutez d'autres photos ici
    ],
  },
  
  // Custom Cakes - Personalized cakes for all occasions
  {
    id: 'birthday-cake',
    name: 'Birthday Cake',
    description: 'Custom birthday cake with your choice of flavors and personalized decorations to celebrate your special day',
    category: 'Custom Cakes',
    images: [
      '/images/custom-cake-3.png',
      '/images/custom-cake-4.png',
      '/images/custom-cake-6.png',
      '/images/custom-cake-7.png',
      // Ajoutez d'autres photos ici
    ],
    featured: true,
  },
  {
    id: 'wedding-cake',
    name: 'Wedding Cake',
    description: 'Elegant and refined multi-tiered cake for your special day with customized decorations',
    category: 'Custom Cakes',
    images: [
      '/images/red-velvet.webp',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'character-cake',
    name: 'Themed Character Cake',
    description: 'Cake inspired by your favorite characters or themes (cartoons, superheroes, princesses, etc.) perfect for children',
    category: 'Custom Cakes',
    images: [
      '/images/custom-cake.png',
      '/images/custom-cake-2.png',
      '/images/custom-cake-8.png',
      '/images/custom-cake-5.png',


      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'simple-cake',
    name: 'Simple & Elegant Cake',
    description: 'Clean and elegant design cake perfect for any occasion, available in multiple flavors',
    category: 'Custom Cakes',
    images: [
      '/images/chocolat-cake.jpeg',
      // Ajoutez d'autres photos ici
    ],
  },
];

// Helper pour obtenir seulement les produits featured
export const getFeaturedProducts = () => products.filter(p => p.featured);

// Helper pour filtrer par catégorie
export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);
