import './AddProduct.css'
import { useEffect, useState } from 'react'
import { createProduct } from '../../services/productService'

const CLASSIFICATIONS = [
  { value: 'concrete-jacket', label: 'Concrete Jacket' },
  { value: 't-shirts', label: 'T-shirts' },
  { value: 'beanies', label: 'Beanies' },
  { value: 'skimask', label: 'Skimask' },
  { value: 'bandanas', label: 'Bandanas' },
  { value: 'oversized', label: 'Oversized' },
  { value: 'box-fit', label: 'Box Fit' }
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'One Size']

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    size: 'M',
    description: '',
    classification: 't-shirts',
    imageFile: null
  })
  const [imagePreview, setImagePreview] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, imageFile: file }))
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview)
    }
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)
    } else {
      setImagePreview('')
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)
    setLoading(true)

    try {
      const result = await createProduct(formData)
      if (result.success) {
        setStatus({ type: 'success', message: 'Producto guardado correctamente. Se asignará a la sección seleccionada.' })
        setFormData({ name: '', price: '', size: 'M', description: '', classification: 't-shirts', imageFile: null })
        setImagePreview('')
      } else {
        setStatus({ type: 'error', message: 'No se pudo guardar el producto. Intenta de nuevo.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de servidor. Revisa la conexión y vuelve a intentarlo.' })
    } finally {
      setLoading(false)
    }
  }

  const selectedLabel = CLASSIFICATIONS.find((item) => item.value === formData.classification)?.label || ''

  return (
    <section className="add-product-section py-20 bg-[#f8f7f4]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 rounded-[30px] bg-white p-10 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-500">Agregar producto</p>
              <h1 className="mt-4 text-5xl font-black">Nuevo ítem para la colección</h1>
            </div>
            <div className="rounded-full bg-black px-5 py-3 text-sm font-bold uppercase text-white shadow-lg">Sección: {selectedLabel}</div>
          </div>

          <p className="max-w-3xl text-sm text-zinc-600">Completa este formulario para crear un nuevo producto. La clasificación define a qué sección corresponderá el producto cuando lo conectes con la base de datos.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <form className="space-y-6 rounded-[30px] bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-zinc-700">Nombre</span>
                <input
                  value={formData.name}
                  onChange={handleChange('name')}
                  className="input-field"
                  placeholder="Ej. Beanie Negro"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-zinc-700">Precio</span>
                <input
                  value={formData.price}
                  onChange={handleChange('price')}
                  className="input-field"
                  placeholder="Ej. $39,900"
                  required
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-zinc-700">Tamaño</span>
                <select value={formData.size} onChange={handleChange('size')} className="input-field">
                  {SIZES.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-zinc-700">Clasificación</span>
                <select value={formData.classification} onChange={handleChange('classification')} className="input-field">
                  {CLASSIFICATIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-zinc-700">Descripción</span>
              <textarea
                value={formData.description}
                onChange={handleChange('description')}
                className="input-field min-h-[140px] resize-none"
                placeholder="Describe el producto, sus detalles y estilo."
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-zinc-700">Imagen</span>
              <input
                key={imagePreview}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="input-field"
                required
              />
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
              {loading ? 'Guardando...' : 'Guardar producto'}
            </button>
          </form>

          <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">Clasificaciones</h3>
            <p className="mt-3 text-sm text-zinc-600">Cada producto debe asignarse a una categoría. Esa categoría luego se utilizará para mostrarlo en la sección correspondiente.</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              {CLASSIFICATIONS.map((item) => (
                <li key={item.value} className="rounded-3xl border border-zinc-200 bg-[#fafafa] px-5 py-4">
                  <span className="font-semibold">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[24px] bg-black px-6 py-5 text-white">
              <p className="text-sm font-bold uppercase">Conexión futura:</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">Cuando conectes la base de datos, el producto se guardará con la clasificación seleccionada y podrá mostrarse automáticamente en su sección de catálogo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddProduct
