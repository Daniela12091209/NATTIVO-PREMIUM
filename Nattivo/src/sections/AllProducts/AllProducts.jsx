import './AllProducts.css'
import { useEffect, useMemo, useState } from 'react'
import { Edit3 } from 'lucide-react'
import { getProducts, updateProduct } from '../../services/productService'

const CLASSIFICATIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'concrete-jacket', label: 'Concrete Jacket' },
  { value: 't-shirts', label: 'T-shirts' },
  { value: 'beanies', label: 'Beanies' },
  { value: 'skimask', label: 'Skimask' },
  { value: 'bandanas', label: 'Bandanas' },
  { value: 'oversized', label: 'Oversized' },
  { value: 'box-fit', label: 'Box Fit' }
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'One Size']

const EMPTY_FORM = {
  name: '',
  price: '',
  size: 'M',
  description: '',
  classification: 't-shirts',
  image: '',
  imageFile: null
}

function AllProducts() {
  const [products, setProducts] = useState([])
  const [selectedClassification, setSelectedClassification] = useState('all')
  const [editingProduct, setEditingProduct] = useState(null)
  const [formState, setFormState] = useState(EMPTY_FORM)
  const [imagePreview, setImagePreview] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const list = await getProducts()
    setProducts(list)
  }

  const productCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      const key = product.classification
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {})
  }, [products])

  const filteredProducts = useMemo(() => {
    if (selectedClassification === 'all') return products
    return products.filter((product) => product.classification === selectedClassification)
  }, [products, selectedClassification])

  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormState({
      name: product.name,
      price: product.price,
      size: product.size,
      description: product.description,
      classification: product.classification,
      image: product.image,
      imageFile: null
    })
    setImagePreview(product.image)
    setStatus(null)
  }

  const handleCancel = () => {
    setEditingProduct(null)
    setFormState(EMPTY_FORM)
    setImagePreview('')
    setStatus(null)
  }

  const handleChange = (key) => (event) => {
    setFormState((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null
    setFormState((prev) => ({ ...prev, imageFile: file }))
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview)
    }
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    } else {
      setImagePreview(formState.image)
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!editingProduct) return

    setLoading(true)
    setStatus(null)

    try {
      const updated = await updateProduct({
        id: editingProduct.id,
        ...formState
      })

      if (updated.success) {
        setStatus({ type: 'success', message: 'Producto actualizado correctamente.' })
        setEditingProduct(null)
        setFormState(EMPTY_FORM)
        setImagePreview('')
        await fetchProducts()
      } else {
        setStatus({ type: 'error', message: 'No se pudo actualizar el producto. Intenta de nuevo.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error al actualizar. Verifica la conexión.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="all-products-section py-20 bg-[#f8f7f4]">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mb-10 rounded-[30px] bg-white p-10 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-500">Administrar productos</p>
              <h1 className="mt-4 text-5xl font-black">Todos los productos</h1>
            </div>
            <div className="rounded-full bg-black px-5 py-3 text-sm font-bold uppercase text-white shadow-lg">Productos registrados: {products.length}</div>
          </div>
          <p className="max-w-3xl text-sm text-zinc-600">Visualiza y actualiza los productos creados. Filtra por clasificación y edita cualquier campo antes de conectar con tu base de datos.</p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-black">Clasificaciones</h2>
            <div className="space-y-3">
              {CLASSIFICATIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedClassification(option.value)}
                  className={`w-full rounded-[24px] px-5 py-4 text-left text-sm transition ${selectedClassification === option.value ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <span className="text-xs text-zinc-400">{option.value === 'all' ? products.length : productCounts[option.value] || 0}</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase text-zinc-500">Listado completo</p>
                  <h2 className="text-4xl font-black">Productos por clasificación</h2>
                </div>
                <span className="rounded-full bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700">Mostrando {filteredProducts.length} productos</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <article key={product.id} className="group overflow-hidden rounded-[30px] border border-zinc-200 bg-[#fafafa] p-4 shadow-sm transition hover:-translate-y-1">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="mb-4 h-56 w-full rounded-[24px] object-cover" />
                    ) : (
                      <div className="mb-4 h-56 w-full rounded-[24px] bg-zinc-100 flex items-center justify-center text-zinc-500">Sin imagen</div>
                    )}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                        <span>{CLASSIFICATIONS.find((item) => item.value === product.classification)?.label || product.classification}</span>
                        <button type="button" onClick={() => handleEdit(product)} className="rounded-full bg-black px-3 py-2 text-white transition hover:bg-zinc-900">
                          <Edit3 size={14} />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-xl font-black">{product.name}</h3>
                        <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="font-bold text-black">{product.price}</span>
                        <span className="rounded-full bg-zinc-100 px-3 py-2 text-zinc-700">{product.size}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black">{editingProduct ? 'Editar producto' : 'Selecciona un producto'}</h3>
                  <p className="mt-2 text-sm text-zinc-600">Actualiza cualquier dato y guarda los cambios para que queden listos para la base de datos.</p>
                </div>
                {editingProduct && (
                  <button type="button" onClick={handleCancel} className="rounded-full border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100">
                    Cancelar</button>
                )}
              </div>

              {editingProduct ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-700">Nombre</span>
                      <input value={formState.name} onChange={handleChange('name')} className="input-field" required />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-700">Precio</span>
                      <input value={formState.price} onChange={handleChange('price')} className="input-field" required />
                    </label>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-700">Tamaño</span>
                      <select value={formState.size} onChange={handleChange('size')} className="input-field">
                        {SIZES.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-700">Clasificación</span>
                      <select value={formState.classification} onChange={handleChange('classification')} className="input-field">
                        {CLASSIFICATIONS.filter((item) => item.value !== 'all').map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">Descripción</span>
                    <textarea value={formState.description} onChange={handleChange('description')} className="input-field min-h-[140px] resize-none" required />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">Imagen</span>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="input-field" />
                  </label>

                  {imagePreview && (
                    <div className="rounded-[30px] border border-zinc-200 bg-[#fafafa] p-4">
                      <p className="text-sm font-semibold text-zinc-700">Vista previa de imagen</p>
                      <img src={imagePreview} alt="Vista previa" className="mt-4 h-[260px] w-full rounded-[24px] object-cover" />
                    </div>
                  )}

                  {status && (
                    <div className={`rounded-2xl p-4 text-sm ${status.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                      {status.message}
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="w-full rounded-full bg-black px-6 py-4 text-sm font-bold uppercase text-white transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60">
                    {loading ? 'Guardando...' : 'Guardar cambios'}
                  </button>
                </form>
              ) : (
                <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-8 text-sm text-zinc-700">
                  Selecciona un producto de la lista para editar su nombre, precio, imagen, clasificación y descripción.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProducts
