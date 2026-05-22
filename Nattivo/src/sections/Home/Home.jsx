import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories, buildCategoryTree } from '../../services/categoryService'
import { FEATURED_PRODUCTS, HERO_VIDEO } from '../../services/homeService'
import './Home.css'

const CATEGORY_ROUTE = {
  bandanas: '/bandanas',
  beanies: '/beanies',
  boxfit: '/box-fit',
  oversized: '/oversized',
  skimask: '/skimask',
  jackets: '/concrete-jacket'
}

function Home() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      const list = await getCategories()
      setCategories(buildCategoryTree(list))
      setLoading(false)
    }

    loadCategories()
  }, [])

  return (
    <main className="home-page bg-white text-black">
      <section className="home-hero relative overflow-hidden bg-white">
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400 font-semibold">Destacado</p>
            <h1 className="mb-6 text-4xl md:text-6xl font-black uppercase tracking-[0.1em] drop-shadow-lg">Streetwear Premium</h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/90 drop-shadow">
              Las mejores colecciones de ropa y accesorios para tu estilo
            </p>
            <a href="#categories" className="rounded-lg bg-red-600 px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-red-700 tracking-[0.1em] shadow-lg">
              Explorar
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="home-categories py-24 bg-white text-black">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-600 font-semibold">Categorías</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-[0.05em]">Nuestras colecciones</h2>
            </div>
            <span className="rounded-lg border border-black/10 bg-black/5 px-4 py-2 text-xs uppercase text-black/80 w-fit font-semibold tracking-[0.1em]">
              {loading ? 'Cargando...' : `${categories.length} categorías`}
            </span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="min-h-[320px] rounded-lg bg-black/10 p-8 shadow-sm animate-pulse" />
              ))
            ) : (
              categories.map((category) => (
                <article 
                  key={category.id} 
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white p-0 shadow-md transition hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                >
                  <div className="relative overflow-hidden h-56">
                    {category.image ? (
                      <img 
                        src={category.image.src} 
                        alt={category.image.alt || category.name} 
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="h-full bg-black/10 group-hover:bg-black/20 transition" />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase tracking-[0.1em] mb-2">{category.name}</h3>
                    <p className="text-sm text-black/60 mb-4">{category.count} producto{category.count === 1 ? '' : 's'}</p>
                    
                    <Link
                      to={CATEGORY_ROUTE[category.slug] || '/categories'}
                      className="inline-flex items-center justify-center w-full rounded-lg bg-red-600 px-6 py-2.5 text-sm font-bold uppercase text-white transition hover:bg-red-700 tracking-[0.1em]"
                    >
                      Ver colección
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="featured-products" className="home-products py-24 bg-black text-white border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-400 font-semibold">Destacados</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-[0.05em]">Productos</h2>
            </div>
            <span className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase text-white/80 w-fit font-semibold tracking-[0.1em]">12 productos</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <article 
                key={product.id} 
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-md transition hover:-translate-y-2 hover:shadow-lg cursor-pointer"
              >
                <a href={product.link} target="_blank" rel="noreferrer" className="block overflow-hidden relative h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm uppercase transition hover:bg-red-700 transform scale-75 group-hover:scale-100">
                      Ver
                    </button>
                  </div>
                </a>
                <div className="space-y-3 p-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-red-400 font-semibold">{product.category}</span>
                    <h3 className="text-lg font-black uppercase tracking-[0.05em] mt-2">{product.name}</h3>
                  </div>
                  <p className="text-sm text-white/70">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
