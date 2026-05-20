import './ConcreteJacket.css'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { fetchConcreteJackets } from './concreteService'
import { X } from 'lucide-react'

function ConcreteJacket() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

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
    <section id="concrete-jacket" className="concrete-section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black">Concrete Jacket</h2>
          <p className="text-zinc-500 mt-4">Colección Concrete — piezas destacadas.</p>
        </div>

        {loading ? (
          <div className="text-center py-20">Cargando...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} onView={(prod) => setSelected(prod)} />
            ))}
          </div>
        )}

        {selected && (
          <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-6">
            <div className="bg-white max-w-3xl w-full rounded-[20px] overflow-hidden relative">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">
                <img src={selected.image} alt={selected.name} className="w-full h-96 object-cover" />
                <div className="p-8">
                  <p className="text-red-600 uppercase font-bold tracking-[3px]">{selected.category}</p>
                  <h3 className="text-3xl font-black mt-4">{selected.name}</h3>
                  <p className="text-zinc-500 mt-6">{selected.description}</p>
                  <p className="text-2xl text-red-600 font-black mt-8">{selected.price}</p>
                  <button className="mt-6 bg-black text-white py-3 px-6 rounded-full font-bold hover:bg-red-600 transition">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default ConcreteJacket
