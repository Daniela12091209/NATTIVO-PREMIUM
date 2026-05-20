// Servicio para obtener productos de la colección Concrete
// Actualmente devuelve datos mock; reemplazar por llamadas reales a la API cuando exista.

export async function fetchConcreteJackets() {
  // Mock data — mantener campos compatibiles con ProductCard
  const data = [
    {
      id: 101,
      name: 'Blood Concrete Jacket Boxfit',
      category: 'Jackets',
      price: '$195.000',
      description: 'Jacket boxfit edición limitada con detalles cosidos.',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'
    },
    {
      id: 102,
      name: 'Grey Concrete Jacket',
      category: 'Jackets',
      price: '$185.000',
      description: 'Chaqueta gris con acabado texturizado.',
      image: 'https://images.unsplash.com/photo-1531123414780-f0b2b5c1d1a8'
    },
    {
      id: 103,
      name: 'Black Concrete Jacket',
      category: 'Jackets',
      price: '$210.000',
      description: 'Edición premium con forro térmico.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  ]

  // Simular latencia de red
  return new Promise((resolve) => setTimeout(() => resolve(data), 300))
}
