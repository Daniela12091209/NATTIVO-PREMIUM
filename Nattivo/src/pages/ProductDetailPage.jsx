import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'

const SIZES = ['S', 'M', 'L', 'XL']

function ProductDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      const data = await getProductById(id)
      setProduct(data)
      setLoading(false)
    }

    loadProduct()
  }, [id])

  useEffect(() => {
    if (product) {
      const firstImage = product.gallery?.[0] || product.image
      setSelectedImage(firstImage)
    }
  }, [product])

  const gallery = useMemo(() => {
    if (!product) return []
    return product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]
  }, [product])

  if (loading) {
    return (
      <main className="product-detail-page py-20 bg-white text-black">
        <div className="mx-auto max-w-[1200px] px-6 text-center text-zinc-500">Cargando producto...</div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="product-detail-page py-20 bg-white text-black">
        <div className="mx-auto max-w-[1200px] px-6 text-center text-zinc-500">Producto no encontrado.</div>
      </main>
    )
  }

  return (
    <main className="product-detail-page py-20 bg-white text-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-black hover:text-black"
        >
          Volver al catálogo
        </button>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100">
              <img src={selectedImage} alt={product.name} className="w-full h-[600px] object-cover" />
            </div>
            {gallery.length > 1 && (
              <div className="grid gap-4 sm:grid-cols-3">
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-[24px] border p-1 transition ${selectedImage === image ? 'border-red-600' : 'border-zinc-200 hover:border-black'}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="h-36 w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-red-600 font-semibold">{product.classification}</p>
              <h1 className="mt-4 text-5xl font-black leading-tight">{product.name}</h1>
              <p className="mt-6 text-3xl font-black text-black">{product.price}</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">{product.description}</p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">Talla</span>
                  <div className="flex flex-wrap gap-3">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${selectedSize === size ? 'border-red-600 bg-red-50 text-black' : 'border-zinc-300 bg-white text-zinc-700 hover:border-black'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">Cantidad</span>
                  <div className="flex items-center gap-3 rounded-full border border-zinc-300 bg-white px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      className="text-xl font-bold text-zinc-600 transition hover:text-black"
                    >
                      −
                    </button>
                    <span className="min-w-[2rem] text-center text-base font-bold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="text-xl font-bold text-zinc-600 transition hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="w-full rounded-full bg-red-600 px-8 py-5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-red-700">
                  Agregar al carrito
                </button>
                <button className="w-full rounded-full border border-red-600 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.12em] text-red-600 transition hover:bg-zinc-100">
                  Comprar ahora
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-black">Información del producto</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-600">Este producto está hecho para un estilo streetwear premium, con materiales pensados para durar y un corte moderno. Ideal para combinar con piezas minimalistas, accesorios rojos y looks monocromáticos.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-zinc-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Material</p>
                  <p className="mt-2 text-sm text-zinc-700">Tejido suave, corte urbano y acabados premium.</p>
                </div>
                <div className="rounded-[24px] bg-zinc-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Fit</p>
                  <p className="mt-2 text-sm text-zinc-700">Ajuste cómodo con caída moderna y detalles limpios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
