import './Dashboard.css'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { fetchFeaturedProducts } from './dashboardService'
import { X } from 'lucide-react'

function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null)
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onView={(item) => setSelectedProduct(item)} />
            ))}
          </div>
        )}
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-6">
          <div className="bg-white max-w-5xl w-full rounded-[30px] overflow-hidden grid md:grid-cols-2 relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-5 right-5 bg-black text-white p-3 rounded-full">
              <X size={22} />
            </button>
            {selectedProduct.image ? (
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-500">Sin imagen</div>
            )}
            <div className="p-10 flex flex-col justify-center">
              <p className="text-red-600 uppercase font-bold tracking-[3px]">{selectedProduct.category}</p>
              <h2 className="text-5xl font-black mt-4">{selectedProduct.name}</h2>
              <p className="text-zinc-500 mt-8 text-lg leading-relaxed">{selectedProduct.description}</p>
              <p className="text-4xl text-red-600 font-black mt-10">{selectedProduct.price}</p>
              <button className="mt-10 bg-black text-white py-5 rounded-full text-lg font-bold hover:bg-red-600 transition">Añadir al carrito</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Dashboard
