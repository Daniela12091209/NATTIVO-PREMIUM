import { useMemo, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import './TShirts.css'

const PRODUCTS = [
  {
    id: 5,
    name: 'Basic Boxfit – Black',
    category: 'Box Fit',
    price: '$79,900',
    tag: 'SALE',
    description: 'Corte relajado con estilo urbano premium.',
    image: 'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Basic Boxfit – White',
    category: 'Box Fit',
    price: '$79,900',
    tag: 'SALE',
    description: 'Minimalismo blanco con detalles altos.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c0fb45a3b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Basic Oversize – White',
    category: 'Oversized',
    price: '$69,900',
    tag: 'NEW',
    description: 'Silhouette amplia y cómoda para use diario.',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Basic Boxfit – Sand',
    category: 'Box Fit',
    price: '$79,900',
    tag: 'NEW',
    description: 'Tono neutro con corte premium.',
    image: 'https://images.unsplash.com/photo-1526178616032-7a1f8b89f5bf?auto=format&fit=crop&w=900&q=80'
  }
]

const CATEGORIES = ['All', 'Box Fit', 'Oversized']

function TShirts() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOption, setSortOption] = useState('popularidad')

  const filteredProducts = useMemo(() => {
    const base = selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory)

    if (sortOption === 'precio_bajo') {
      return [...base].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')))
    }
    if (sortOption === 'precio_alto') {
      return [...base].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')))
    }
    return base
  }, [selectedCategory, sortOption])

  return (
    <section id="t-shirts" className="tshirts-section py-20 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold">Colección</p>
            <h2 className="text-5xl font-black">T-shirts</h2>
            <p className="mt-4 max-w-2xl text-zinc-600">Selecciona tu estilo streetwear con una experiencia limpia, sin barras laterales y con navegación intuitiva.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Filtrar</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="mt-2 w-full rounded-full border border-zinc-300 bg-white px-4 py-4 text-sm text-zinc-700 outline-none transition focus:border-black"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Ordenar</span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                className="mt-2 w-full rounded-full border border-zinc-300 bg-white px-4 py-4 text-sm text-zinc-700 outline-none transition focus:border-black"
              >
                <option value="popularidad">Popularidad</option>
                <option value="precio_bajo">Precio menor</option>
                <option value="precio_alto">Precio mayor</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewUrl={`/product/${product.id}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TShirts
