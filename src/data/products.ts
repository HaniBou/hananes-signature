export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Algerian' | 'French' | 'Birthday';
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
    featured: true,
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
    id: 'mille-feuille',
    name: 'Mille-feuille',
    description: 'Classic French pastry made of thin layers of puff pastry and vanilla custard brown',
    category: 'French',
    images: [
      '/images/millefeuille.jpg',
      // Ajoutez plusieurs photos de mille-feuille ici
      // Exemple: '/images/millefeuille-2.jpg', '/images/millefeuille-3.jpg'
    ],
    featured: true,
  },
  {
    id: 'tarte-fruits',
    name: 'Fruit Tart',
    description: 'Tart topped with fresh seasonal fruits on a light custard cream',
    category: 'French',
    images: [
      '/images/tarte-fruits.jpg',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'eclair',
    name: 'Éclair au Chocolat',
    description: 'Oblong choux pastry filled with chocolate cream and topped with chocolate icing',
    category: 'French',
    images: [
      '/images/eclair.jpg',
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
  
  // Birthday Cakes
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate ganache and decoration',
    category: 'Birthday',
    images: [
      '/images/chocolat-cake.jpeg',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cake',
    description: 'Red velvet cake with cream cheese frosting and personalized decoration',
    category: 'Birthday',
    images: [
      '/images/red-velvet.webp',
      // Ajoutez d'autres photos ici
    ],
  },
  {
    id: 'number-cake',
    name: 'Number Cake',
    description: 'Custom cake with personalized flavors and decorations to celebrate your special occasion',
    category: 'Birthday',
    images: [
      '/images/birthday-cake.jpg',
      '/images/red-velvet.webp',
      // Ajoutez d'autres photos ici
    ],
    featured: true,
  },
  {
    id: 'character-cake',
    name: 'Character Cake',
    description: 'Themed cake inspired by your favorite character or theme',
    category: 'Birthday',
    images: [
      '/images/character-cake.jpg',
      // Ajoutez d'autres photos ici
    ],
  },
];

// Helper pour obtenir seulement les produits featured
export const getFeaturedProducts = () => products.filter(p => p.featured);

// Helper pour filtrer par catégorie
export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);
