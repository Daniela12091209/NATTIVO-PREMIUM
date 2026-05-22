import './Dashboard.css'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { fetchFeaturedProducts } from './dashboardService'

function Dashboard() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchFeaturedProducts().then((data) => {
      if (!mounted) return
      setProducts(data)
      setLoading(false)
    })
    return () => { mounted = false }
  }, [])

  return (
    <div className="dashboard-page bg-white min-h-screen text-black overflow-x-hidden">

      <section className="hero-section relative overflow-hidden">
        <div className="hero-background absolute inset-0" />
        <div className="hero-overlay absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-[1400px] flex-col items-center justify-center px-6 text-center text-white">
          <p className="uppercase tracking-[0.4em] text-red-400 font-bold mb-5 text-sm md:text-base">AVAILABLE NOW</p>
          <h1 className="text-[4.5rem] font-black leading-[0.85] md:text-[7rem] md:leading-[0.9]">Diaz de Gol</h1>
          <p className="mt-6 max-w-2xl text-sm text-zinc-200 md:text-lg">La portada principal de la colección urbana de Nattivo, diseñada para destacar desde la primera pantalla.</p>
          <a href="#featured" className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-bold uppercase text-black transition hover:bg-zinc-200">
            Ver colección
          </a>
        </div>
      </section>

      <section id="featured" className="featured-section px-6 py-20 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14 gap-6">
          <div>
            <h2 className="text-6xl font-black">FEATURED</h2>
            <p className="text-zinc-500 mt-2">Limited collection</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">Cargando productos destacados...</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} viewUrl={`/product/${product.id}`} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}

export default Dashboard
