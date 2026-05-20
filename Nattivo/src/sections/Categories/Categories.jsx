import { useEffect, useMemo, useState } from 'react'
import { getCategories, buildCategoryTree } from '../../services/categoryService'
import './Categories.css'

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories()
        setCategories(buildCategoryTree(data))
      } catch (err) {
        setError('No se pudieron cargar las categorías. Intenta de nuevo más tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  const categorySummary = useMemo(() => {
    return categories.reduce((acc, category) => acc + 1 + (category.children?.length || 0), 0)
  }, [categories])

  return (
    <section className="categories-section py-20 bg-[#f5f5f5] text-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 rounded-[30px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-red-600">Colección</p>
          <h1 className="mt-4 text-5xl font-black">Categorías NATTIVO</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
            Explora la tienda por categorías oficiales y subcategorías. Esta vista replica el listado de categorías de productos usando los datos del endpoint de WooCommerce.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {error && (
              <div className="rounded-[30px] border border-red-200 bg-red-50 p-8 text-red-700">
                {error}
              </div>
            )}

            <div className="rounded-[30px] bg-white p-8 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase text-zinc-500">Listado de categorías</p>
                  <h2 className="text-4xl font-black">Todas las categorías</h2>
                </div>
                <span className="rounded-full bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700">
                  {loading ? 'Cargando…' : `${categorySummary} categorías visibles`}
                </span>
              </div>

              {loading ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-72 animate-pulse rounded-[30px] bg-zinc-100"></div>
                  ))}
                </div>
              ) : (
                <div className="categories-grid">
                  {categories.map((category) => (
                    <article key={category.id} className="category-card group overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1">
                      <div className="category-card-image relative overflow-hidden">
                        <img
                          src={category.image?.src || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'}
                          alt={category.image?.alt || category.name}
                          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 p-6">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-black">{category.name}</h3>
                            <p className="mt-2 text-sm text-zinc-500">{category.count} producto{category.count === 1 ? '' : 's'}</p>
                          </div>
                          <span className="rounded-full bg-red-600 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
                            {category.slug}
                          </span>
                        </div>

                        {category.children?.length ? (
                          <div className="rounded-[24px] bg-zinc-100 p-4 text-sm text-zinc-700">
                            <p className="font-semibold uppercase tracking-[0.2em] text-zinc-500">Subcategorías</p>
                            <ul className="mt-3 space-y-2">
                              {category.children.map((child) => (
                                <li key={child.id} className="flex items-center justify-between rounded-[18px] bg-white px-4 py-3 shadow-sm">
                                  <span>{child.name}</span>
                                  <span className="text-zinc-400">{child.count}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-black">Detalles</h2>
            <p className="text-sm text-zinc-600 leading-7">
              Las categorías se agrupan por nivel. Las subcategorías de T-shirts aparecen dentro de su categoría padre para que la estructura sea clara y fácil de navegar.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] bg-zinc-100 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Fuente de datos</p>
                <p className="mt-2 text-sm text-zinc-700">{CATEGORY_API}</p>
              </div>
              <div className="rounded-[24px] bg-zinc-100 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Modo</p>
                <p className="mt-2 text-sm text-zinc-700">Replicar JSON de la API de WooCommerce con manejo de carga y fallback local.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Categories
