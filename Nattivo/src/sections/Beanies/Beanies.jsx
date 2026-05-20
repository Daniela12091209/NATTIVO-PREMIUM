import { useMemo, useState } from 'react'
import './Beanies.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Beanie Negro',
    category: 'Beanies',
    price: '$39,900',
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Beanie Vainilla',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Beanie Gris Neo',
    category: 'Beanies',
    price: '$39,900',
    tag: 'SOLD OUT',
    image: 'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Beanie Gris',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Beanie Mostaza',
    category: 'Beanies',
    price: '$39,900',
    tag: 'SOLD OUT',
    image: 'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Beanie Borgoña',
    category: 'Beanies',
    price: '$39,900',
    tag: null,
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=900&q=80'
  }
]

const CATEGORIES = [
  { name: 'Bandanas', count: 2 },
  { name: 'Beanies', count: 12 },
  { name: 'Jackets', count: 1 },
  { name: 'Skimask', count: 1 },
  {
    name: 'T-shirts', count: 9, children: [
      { name: 'Box Fit', count: 4 },
      { name: 'Oversized', count: 4 }
    ]
  }
]

function Beanies() {
  const [selectedCategory, setSelectedCategory] = useState('Beanies')
  const [sortOption, setSortOption] = useState('popularidad')

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Beanies') return PRODUCTS
    return PRODUCTS.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section id="beanies" className="beanies-section py-20 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="category-sidebar rounded-[30px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black uppercase">Categoria</h3>
              <span className="text-sm text-zinc-500">▾</span>
            </div>
            <div className="space-y-3 text-sm text-zinc-700">
              {CATEGORIES.map((category) => (
                <div key={category.name}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left ${selectedCategory === category.name ? 'font-black text-black' : 'font-medium text-zinc-700 hover:text-black'}`}>
                    {category.name} <span className="text-zinc-400">({category.count})</span>
                  </button>
                  {category.children && selectedCategory === category.name && (
                    <div className="ml-4 mt-2 space-y-2 text-sm">
                      {category.children.map((child) => (
                        <button
                          key={child.name}
                          type="button"
                          onClick={() => setSelectedCategory(child.name)}
                          className={`block w-full text-left ${selectedCategory === child.name ? 'font-black text-black' : 'text-zinc-600 hover:text-black'}`}>
                          {child.name} <span className="text-zinc-400">({child.count})</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase text-zinc-500">Inicio › Tienda › Beanies</p>
                <h2 className="text-5xl font-black mt-4">Beanies</h2>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm uppercase text-zinc-500">Ordenar por</label>
                <select
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value)}
                  className="rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-black"
                >
                  <option value="popularidad">Popularidad</option>
                  <option value="precio_bajo">Precio: menor a mayor</option>
                  <option value="precio_alto">Precio: mayor a menor</option>
                </select>
              </div>
            </div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-600 shadow-sm">
              {selectedCategory}
              <button type="button" onClick={() => setSelectedCategory('Beanies')} className="rounded-full bg-zinc-100 px-3 py-1 text-xs uppercase text-zinc-500">x</button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.id} className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                    {product.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{product.category}</p>
                    <h3 className="text-xl font-black">{product.name}</h3>
                    <p className="text-sm text-zinc-600">{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beanies
