import { Heart, ShoppingCart, Eye } from "lucide-react"

function ProductCard({ product, onView }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-white/10 shadow-md hover:-translate-y-2 hover:shadow-lg transition group cursor-pointer">

      <div className="relative overflow-hidden h-64">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-600">Imagen no disponible</div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <button className="bg-white p-3 rounded-lg shadow hover:bg-red-600 hover:text-white transition transform hover:scale-110" title="Favorito">
            <Heart size={18} />
          </button>
          <button onClick={() => onView && onView(product)} className="bg-white p-3 rounded-lg shadow hover:bg-black hover:text-white transition transform hover:scale-110" title="Ver">
            <Eye size={18} />
          </button>
          <button className="bg-white p-3 rounded-lg shadow hover:bg-red-600 hover:text-white transition transform hover:scale-110" title="Carrito">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      <div className="p-6 text-white">
        <p className="text-xs uppercase text-red-400 font-semibold tracking-[0.1em] mb-2">{product.category}</p>
        <h3 className="text-lg font-black uppercase tracking-[0.05em] mb-2 group-hover:text-red-400 transition">{product.name}</h3>
        <p className="text-white/70 mt-2 text-sm leading-5">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-400 font-black text-lg">{product.price}</span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.1em] hover:bg-red-700 transition">Agregar</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
