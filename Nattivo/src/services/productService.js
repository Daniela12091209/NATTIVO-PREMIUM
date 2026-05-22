const STORAGE_KEY = 'nattivo_products'

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Classic Black Beanie',
    price: '$29,900',
    size: 'One Size',
    description: 'Gorro suave con bordes cosidos para un look urbano y flexible.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 2,
    name: 'Oversized White Tee',
    price: '$49,900',
    size: 'L',
    description: 'Camiseta oversized con costuras reforzadas y estilo relajado.',
    classification: 'oversized',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c0fb45a3b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 3,
    name: 'Box Fit Tee - Sand',
    price: '$59,900',
    size: 'M',
    description: 'Camiseta box fit con estampado minimalista y tejido premium.',
    classification: 'box-fit',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526178616032-7a1f8b89f5bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 4,
    name: 'Bandana Street Art',
    price: '$19,900',
    size: 'One Size',
    description: 'Pañuelo con patrón moderno para completar tu outfit urbano.',
    classification: 'bandanas',
    image: 'https://images.unsplash.com/photo-1529676468690-2f5b80bf9f87?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529676468690-2f5b80bf9f87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 5,
    name: 'Basic Boxfit – Black',
    price: '$79,900',
    size: 'M',
    description: 'Corte relajado con estilo urbano premium.',
    classification: 'box-fit',
    image: 'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c0fb45a3b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 6,
    name: 'Basic Boxfit – White',
    price: '$79,900',
    size: 'M',
    description: 'Minimalismo blanco con detalles altos.',
    classification: 'box-fit',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c0fb45a3b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c0fb45a3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 7,
    name: 'Basic Oversize – White',
    price: '$69,900',
    size: 'L',
    description: 'Silhouette amplia y cómoda para uso diario.',
    classification: 'oversized',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 8,
    name: 'Basic Boxfit – Sand',
    price: '$79,900',
    size: 'M',
    description: 'Tono neutro con corte premium.',
    classification: 'box-fit',
    image: 'https://images.unsplash.com/photo-1526178616032-7a1f8b89f5bf?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526178616032-7a1f8b89f5bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 9,
    name: 'Beanie Negro',
    price: '$39,900',
    size: 'One Size',
    description: 'Gorro urbano con corte minimalista y textura suave.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 10,
    name: 'Beanie Vainilla',
    price: '$39,900',
    size: 'One Size',
    description: 'Tono cálido para un look urbano sofisticado.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 11,
    name: 'Beanie Gris Neo',
    price: '$39,900',
    size: 'One Size',
    description: 'Diseño contemporáneo con una paleta suave.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520975865985-e2cce8e5bbc4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 12,
    name: 'Beanie Gris',
    price: '$39,900',
    size: 'One Size',
    description: 'Perfecto para un outfit monocromático premium.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 13,
    name: 'Beanie Mostaza',
    price: '$39,900',
    size: 'One Size',
    description: 'Acento de color con un estilo discreto.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517153294491-81e3de4bd3c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 14,
    name: 'Beanie Borgoña',
    price: '$39,900',
    size: 'One Size',
    description: 'Acabado premium con una caída sofisticada.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80'
    ]
  }
]

function getStoredProducts() {
  if (typeof window === 'undefined') {
    return DEFAULT_PRODUCTS.slice()
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS.slice()
}

function saveStoredProducts(products) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function resolveImageInput(file, image) {
  if (file) {
    return fileToDataUrl(file)
  }
  return Promise.resolve(image || '')
}

export async function getProducts() {
  // Try remote WooCommerce API first (read-only). Provide Vite env vars:
  // VITE_WC_KEY and VITE_WC_SECRET. If not available or fetch fails, fall back
  // to stored/local products.
  const PRODUCTS_API = 'https://nattivopremium.com/wp-json/wc/v3/products'

  async function fetchRemote() {
    try {
      if (typeof window === 'undefined') return null
      const key = import.meta.env.VITE_WC_KEY || null
      const secret = import.meta.env.VITE_WC_SECRET || null
      const url = key && secret
        ? `${PRODUCTS_API}?per_page=100&consumer_key=${key}&consumer_secret=${secret}`
        : `${PRODUCTS_API}?per_page=100`

      const res = await fetch(url)
      if (!res.ok) throw new Error('remote fetch failed')
      const data = await res.json()

      // map remote shape to local product shape
      const mapped = data.map((p) => {
        const image = (p.images && p.images[0] && p.images[0].src) || ''
        const category = (p.categories && p.categories[0] && p.categories[0].slug) || 't-shirts'
        // try to get size from attributes
        let size = 'One Size'
        if (Array.isArray(p.attributes)) {
          const attr = p.attributes.find((a) => /size/i.test(a.name || ''))
          if (attr && attr.options && attr.options.length) size = attr.options[0]
        }
        const price = p.price ? (p.price + '') : (p.regular_price ? p.regular_price + '' : '')

        return {
          id: p.id,
          name: p.name || p.title || 'Producto',
          price: price ? `$${price}` : p.price_html || '',
          size,
          description: p.description ? p.description.replace(/<[^>]+>/g, '').trim() : '',
          classification: category,
          image: image || '',
          gallery: (p.images || []).map((item) => item.src).filter(Boolean)
        }
      })

      return mapped
    } catch (err) {
      console.warn('Could not fetch remote products:', err)
      return null
    }
  }

  const remote = await fetchRemote()
  if (remote && remote.length) return remote

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getStoredProducts())
    }, 300)
  })
}

export async function getProductById(id) {
  const products = await getProducts()
  return products.find((product) => `${product.id}` === `${id}`) || null
}

export async function createProduct(product) {
  const image = await resolveImageInput(product.imageFile, product.image)
  const stored = getStoredProducts()
  const newProduct = {
    id: Date.now(),
    ...product,
    image,
    imageFile: undefined,
    createdAt: new Date().toISOString()
  }
  const updated = [...stored, newProduct]
  saveStoredProducts(updated)

  return { success: true, product: newProduct }
}

export async function updateProduct(product) {
  const image = await resolveImageInput(product.imageFile, product.image)
  const stored = getStoredProducts()
  const updated = stored.map((item) =>
    item.id === product.id
      ? {
          ...item,
          ...product,
          image,
          imageFile: undefined,
          updatedAt: new Date().toISOString()
        }
      : item
  )
  saveStoredProducts(updated)
  const savedProduct = updated.find((item) => item.id === product.id)

  return { success: !!savedProduct, product: savedProduct }
}
