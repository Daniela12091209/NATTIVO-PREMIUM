import { useEffect, useState } from 'react'
import { getCategories, buildCategoryTree } from '../../services/categoryService'
import { FEATURED_PRODUCTS, HERO_VIDEO } from '../../services/homeService'
import './Home.css'

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
    <main className="home-page bg-black text-white">
      <section className="home-hero relative overflow-hidden">
        <video
          className="home-hero-video"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content mx-auto px-6 py-24 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-red-500">Nattivo Premium</p>
          <h1 className="mb-6 text-5xl font-black uppercase tracking-[0.2em] sm:text-6xl">Streetwear con actitud</h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/80">
            Una replica del sitio oficial con la estética de la tienda, el slider hero y los productos destacados de la colección.
          </p>
          <a href="#featured-products" className="home-hero-button inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold uppercase text-black transition hover:bg-zinc-100">
            Ver colección
          </a>
        </div>
      </section>

      <section className="home-categories py-20 bg-[#111111] text-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-500">Categorías</p>
              <h2 className="mt-4 text-4xl font-black uppercase">Explora por categorías</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase text-white/80">{loading ? 'Cargando...' : `${categories.length} categorías principales`}</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="min-h-[220px] rounded-[30px] bg-zinc-900/60 p-8 shadow-sm animate-pulse" />
              ))
            ) : (
              categories.map((category) => (
                <article key={category.id} className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-[0.15em]">{category.name}</h3>
                      <p className="mt-3 text-sm text-white/75">{category.count} productos</p>
                    </div>
                    <span className="rounded-full bg-red-500 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white">{category.slug}</span>
                  </div>
                  {category.image ? (
                    <img src={category.image.src} alt={category.image.alt || category.name} className="h-52 w-full rounded-[24px] object-cover" />
                  ) : (
                    <div className="mb-4 h-52 rounded-[24px] bg-white/10" />
                  )}
                  {category.children?.length ? (
                    <div className="mt-6 rounded-[24px] bg-white/5 p-4 text-sm text-white/80">
                      <p className="mb-3 uppercase tracking-[0.2em] text-white/60">Subcategorías</p>
                      <ul className="space-y-2">
                        {category.children.map((child) => (
                          <li key={child.id} className="flex items-center justify-between rounded-[18px] bg-white/5 px-4 py-3 text-sm">
                            <span>{child.name}</span>
                            <span className="text-white/60">{child.count}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="featured-products" className="home-products py-20 bg-[#070707] text-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-500">Destacados</p>
              <h2 className="mt-4 text-4xl font-black uppercase">Productos del sitio</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase text-white/80">12 productos</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:border-white/20">
                <a href={product.link} target="_blank" rel="noreferrer">
                  <img src={product.image} alt={product.name} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                </a>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">{product.category}</span>
                    <span className="rounded-full bg-red-500 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white">Ver</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-[0.05em]">{product.name}</h3>
                    <p className="mt-2 text-sm text-white/70">{product.price}</p>
                  </div>
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
