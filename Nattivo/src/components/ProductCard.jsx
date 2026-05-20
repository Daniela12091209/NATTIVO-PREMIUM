import { Heart, ShoppingCart, Eye } from "lucide-react"

function ProductCard({ product, onView }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:-translate-y-1 transition">

      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition"><Heart size={16} /></button>
          <button onClick={() => onView && onView(product)} className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"><Eye size={16} /></button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition"><ShoppingCart size={16} /></button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm uppercase text-red-600 font-bold mb-1">{product.category}</p>
        <h3 className="text-xl font-black">{product.name}</h3>
        <p className="text-zinc-500 mt-2 text-sm">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-600 font-black text-lg">{product.price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-600 transition">Add</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
