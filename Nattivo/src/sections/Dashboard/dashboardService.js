export async function fetchFeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Beanie Black',
      category: 'Beanies',
      price: '$39.900',
      description: 'Beanie premium streetwear edición limitada.',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee'
    },
    {
      id: 2,
      name: 'Oversized Tee',
      category: 'Oversized',
      price: '$89.900',
      description: 'Oversized fit premium cotton.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
    },
    {
      id: 3,
      name: 'Concrete Jacket',
      category: 'Concrete Jacket',
      price: '$280.000',
      description: 'Luxury concrete collection jacket.',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c'
    },
    {
      id: 4,
      name: 'Skimask Black',
      category: 'Skimask',
      price: '$59.900',
      description: 'Premium skimask collection.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  ]

  return new Promise((resolve) => setTimeout(() => resolve(products), 200))
}
