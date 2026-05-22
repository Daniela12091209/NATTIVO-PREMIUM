import './ConcreteJacket.css'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { fetchConcreteJackets } from './concreteService'

function ConcreteJacket() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchConcreteJackets().then((data) => {
      if (!mounted) return
      setItems(data)
      setLoading(false)
    })
    return () => { mounted = false }
  }, [])

  return (
    <section id="concrete-jacket" className="concrete-section py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold">Colección</p>
          <h2 className="text-4xl font-black">Concrete Jacket</h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Piezas destacadas de la línea Concrete, con un estilo urbano y minimalista.</p>
        </div>

        {loading ? (
          <div className="text-center py-20">Cargando...</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} viewUrl={`/product/${p.id}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ConcreteJacket
