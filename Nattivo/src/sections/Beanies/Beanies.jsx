import { useMemo, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import './Beanies.css'

const PRODUCTS = [
  {
    id: 9,
    name: 'Beanie Negro',
    category: 'Beanies',
    price: '$39,900',
    tag: 'NEW',
    description: 'Gorro urbano con corte minimalista y textura suave.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 10,
    name: 'Beanie Vainilla',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    description: 'Tono cálido para un look urbano sofisticado.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 11,
    name: 'Beanie Gris Neo',
    category: 'Beanies',
    price: '$39,900',
    tag: 'SOLD OUT',
    description: 'Diseño contemporáneo con una paleta suave.',
    image: 'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 12,
    name: 'Beanie Gris',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    description: 'Perfecto para un outfit monocromático premium.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 13,
    name: 'Beanie Mostaza',
    category: 'Beanies',
    price: '$39,900',
    tag: 'SOLD OUT',
    description: 'Acento de color con un estilo discreto.',
    image: 'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 14,
    name: 'Beanie Borgoña',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    description: 'Acabado premium con una caída sofisticada.',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=900&q=80'
  }
]

const CATEGORIES = ['All', 'Beanies']

function Beanies() {
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
    <section id="beanies" className="beanies-section py-20 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold">Beanies</p>
            <h2 className="text-5xl font-black">Beanies</h2>
            <p className="mt-4 max-w-2xl text-zinc-600">Explora gorros con un acabado streetwear premium y un diseño más limpio sin barra lateral.</p>
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

export default Beanies
