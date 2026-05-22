import './AllProducts.css'
import { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../../services/productService'
import ProductCard from '../../components/ProductCard'

const CLASSIFICATIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'concrete-jacket', label: 'Concrete Jacket' },
  { value: 't-shirts', label: 'T-shirts' },
  { value: 'beanies', label: 'Beanies' },
  { value: 'skimask', label: 'Skimask' },
  { value: 'bandanas', label: 'Bandanas' },
  { value: 'oversized', label: 'Oversized' },
  { value: 'box-fit', label: 'Box Fit' }
]

function AllProducts() {
  const [products, setProducts] = useState([])
  const [selectedClassification, setSelectedClassification] = useState('all')
  const [sortOption, setSortOption] = useState('recommended')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }

    load()
  }, [])

  const filteredProducts = useMemo(() => {
    const base = selectedClassification === 'all'
      ? products
      : products.filter((product) => product.classification === selectedClassification)

    if (sortOption === 'precio_bajo') {
      return [...base].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')))
    }
    if (sortOption === 'precio_alto') {
      return [...base].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')))
    }
    return base
  }, [products, selectedClassification, sortOption])

  return (
    <section className="all-products-section py-20 bg-white text-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold">Catálogo</p>
              <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.04em]">Productos premium</h1>
              <p className="mt-5 text-base leading-8 text-zinc-600">Navega la colección de streetwear en un diseño minimalista, rápido y pensado para una experiencia premium.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-zinc-500">Categoría</label>
                <select
                  value={selectedClassification}
                  onChange={(event) => setSelectedClassification(event.target.value)}
                  className="w-full rounded-full border border-zinc-300 bg-white px-4 py-4 text-sm text-zinc-700 outline-none transition focus:border-black"
                >
                  {CLASSIFICATIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-zinc-500">Ordenar por</label>
                <select
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value)}
                  className="w-full rounded-full border border-zinc-300 bg-white px-4 py-4 text-sm text-zinc-700 outline-none transition focus:border-black"
                >
                  <option value="recommended">Recomendados</option>
                  <option value="precio_bajo">Precio menor</option>
                  <option value="precio_alto">Precio mayor</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-zinc-500">
            <span>{loading ? 'Cargando productos...' : `${filteredProducts.length} productos disponibles`}</span>
            {selectedClassification !== 'all' && <span className="rounded-full bg-zinc-100 px-3 py-2">{CLASSIFICATIONS.find((option) => option.value === selectedClassification)?.label}</span>}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-[420px] rounded-[28px] bg-zinc-100 animate-pulse" />
            ))
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewUrl={`/product/${product.id}`} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default AllProducts
