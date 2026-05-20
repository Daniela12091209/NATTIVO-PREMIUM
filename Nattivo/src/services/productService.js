const STORAGE_KEY = 'nattivo_products'

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Classic Black Beanie',
    price: '$29,900',
    size: 'One Size',
    description: 'Gorro suave con bordes cosidos para un look urbano y flexible.',
    classification: 'beanies',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Oversized White Tee',
    price: '$49,900',
    size: 'L',
    description: 'Camiseta oversized con costuras reforzadas y estilo relajado.',
    classification: 'oversized',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Box Fit Tee - Sand',
    price: '$59,900',
    size: 'M',
    description: 'Camiseta box fit con estampado minimalista y tejido premium.',
    classification: 'box-fit',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Bandana Street Art',
    price: '$19,900',
    size: 'One Size',
    description: 'Pañuelo con patrón moderno para completar tu outfit urbano.',
    classification: 'bandanas',
    image: 'https://images.unsplash.com/photo-1529676468690-2f5b80bf9f87?auto=format&fit=crop&w=900&q=80'
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getStoredProducts())
    }, 300)
  })
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
