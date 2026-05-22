import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Link } from 'react-router-dom'

function ProductCard({ product, viewUrl, onView }) {
  const category = product.category || product.classification || 'Producto'

  return (
    <article className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg cursor-pointer">
      <div className="relative overflow-hidden h-72 bg-zinc-100">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-500">Imagen no disponible</div>
        )}

        {viewUrl && <Link to={viewUrl} className="absolute inset-0 z-10" aria-label={`Ver ${product.name}`} />}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center gap-3 p-4 z-20">
          <button className="bg-white p-3 rounded-lg shadow hover:bg-red-600 hover:text-white transition transform hover:scale-110" title="Favorito">
            <Heart size={18} />
          </button>
          {viewUrl ? (
            <Link to={viewUrl} className="bg-white p-3 rounded-lg shadow hover:bg-black hover:text-white transition transform hover:scale-110" title="Ver producto">
              <Eye size={18} />
            </Link>
          ) : (
            <button onClick={() => onView && onView(product)} className="bg-white p-3 rounded-lg shadow hover:bg-black hover:text-white transition transform hover:scale-110" title="Ver">
              <Eye size={18} />
            </button>
          )}
          <button className="bg-white p-3 rounded-lg shadow hover:bg-red-600 hover:text-white transition transform hover:scale-110" title="Carrito">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      <div className="p-6 text-black">
        <Link to={viewUrl || '#'} className="block space-y-3">
          <p className="text-xs uppercase text-zinc-500 font-semibold tracking-[0.15em]">{category}</p>
          <h3 className="text-xl font-black tracking-[0.03em] transition group-hover:text-red-600">{product.name}</h3>
          <p className="text-sm text-zinc-600 leading-6">{product.description}</p>
        </Link>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-base font-black text-black">{product.price}</span>
          <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-red-700">
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
