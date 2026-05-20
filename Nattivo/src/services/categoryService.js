const CATEGORY_API = 'https://nattivopremium.com/wp-json/wc/v3/products/categories'

const DEFAULT_CATEGORIES = [
  {
    id: 113,
    name: 'Bandanas',
    slug: 'bandanas',
    parent: 0,
    description: '',
    display: 'default',
    image: {
      id: 13204,
      date_created: '2025-09-18T20:37:32',
      date_created_gmt: '2025-09-19T01:37:32',
      date_modified: '2026-04-30T21:16:19',
      date_modified_gmt: '2026-05-01T02:16:19',
      src: 'https://nattivopremium.com/wp-content/uploads/2025/09/1.1-1.jpg',
      name: 'Nattivo Bandana Reino del Cielo',
      alt: 'Bandana Nattivo con diseño de ángeles y flores, símbolo de paz y espiritualidad.'
    },
    menu_order: 0,
    count: 2,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/113',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  },
  {
    id: 114,
    name: 'Beanies',
    slug: 'beanies',
    parent: 0,
    description: '',
    display: 'default',
    image: {
      id: 12911,
      date_created: '2025-09-02T20:22:44',
      date_created_gmt: '2025-09-03T01:22:44',
      date_modified: '2026-04-30T21:32:48',
      date_modified_gmt: '2026-05-01T02:32:48',
      src: 'https://nattivopremium.com/wp-content/uploads/2025/09/GRIS1.jpg',
      name: 'Gorro Gris Neo Nattivo',
      alt: 'Gorro gris Neo de Nattivo, estilo beanie para invierno.'
    },
    menu_order: 0,
    count: 12,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/114',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  },
  {
    id: 116,
    name: 'Box Fit',
    slug: 'boxfit',
    parent: 110,
    description: '',
    display: 'default',
    image: null,
    menu_order: 0,
    count: 4,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/116',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ],
      up: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/110'
        }
      ]
    }
  },
  {
    id: 111,
    name: 'Jackets',
    slug: 'jackets',
    parent: 0,
    description: '',
    display: 'default',
    image: {
      id: 13144,
      date_created: '2025-09-16T17:37:24',
      date_created_gmt: '2025-09-16T22:37:24',
      date_modified: '2026-04-30T21:18:17',
      date_modified_gmt: '2026-05-01T02:18:17',
      src: 'https://nattivopremium.com/wp-content/uploads/2020/12/chaqueta-1.jpg',
      name: 'Chaqueta de concreto XL para protección y estilo.',
      alt: 'Chaqueta de concreto XL, resistente y moderna, ideal para protección en trabajos pesados y uso diari.'
    },
    menu_order: 0,
    count: 1,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/111',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  },
  {
    id: 115,
    name: 'Oversized',
    slug: 'oversized',
    parent: 110,
    description: '',
    display: 'default',
    image: null,
    menu_order: 0,
    count: 4,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/115',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ],
      up: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/110'
        }
      ]
    }
  },
  {
    id: 15,
    name: 'Sin categorizar',
    slug: 'sin-categorizar',
    parent: 0,
    description: '',
    display: 'default',
    image: null,
    menu_order: 0,
    count: 0,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/15',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  },
  {
    id: 112,
    name: 'Skimask',
    slug: 'skimask',
    parent: 0,
    description: '',
    display: 'default',
    image: {
      id: 12825,
      date_created: '2025-08-30T19:28:52',
      date_created_gmt: '2025-08-31T00:28:52',
      date_modified: '2026-04-30T21:37:42',
      date_modified_gmt: '2026-05-01T02:37:42',
      src: 'https://nattivopremium.com/wp-content/uploads/2025/08/1-5.jpg',
      name: 'Nattivo máscara de protección facial',
      alt: 'Máscara de protección facial con diseño moderno y seguro.'
    },
    menu_order: 0,
    count: 1,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/112',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  },
  {
    id: 110,
    name: 'T-shirts',
    slug: 'tshirts',
    parent: 0,
    description: '',
    display: 'default',
    image: {
      id: 13491,
      date_created: '2025-09-29T18:30:10',
      date_created_gmt: '2025-09-29T23:30:10',
      date_modified: '2026-04-30T21:08:02',
      date_modified_gmt: '2026-05-01T02:08:02',
      src: 'https://nattivopremium.com/wp-content/uploads/2025/09/2-10.jpg',
      name: 'Nattivo Basic Boxfit – Blanco',
      alt: 'Camiseta blanca de boxeo con logo Nattivo Premium en rojo, ideal para entrenamiento y fitness.'
    },
    menu_order: 0,
    count: 8,
    _links: {
      self: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories/110',
          targetHints: {
            allow: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
          }
        }
      ],
      collection: [
        {
          href: 'https://nattivopremium.com/wp-json/wc/v3/products/categories'
        }
      ]
    }
  }
]

async function fetchCategories() {
  try {
    const response = await fetch(CATEGORY_API)

    if (!response.ok) {
      throw new Error(`Error ${response.status}`)
    }

    const categories = await response.json()
    return categories
  } catch (error) {
    console.warn('No se pudo cargar categorías remotas:', error)
    return DEFAULT_CATEGORIES
  }
}

export async function getCategories() {
  return fetchCategories()
}

export function buildCategoryTree(categories) {
  const map = new Map()

  categories.forEach((category) => {
    map.set(category.id, { ...category, children: [] })
  })

  const roots = []

  map.forEach((category) => {
    if (category.parent && map.has(category.parent)) {
      map.get(category.parent).children.push(category)
    } else {
      roots.push(category)
    }
  })

  return roots
}
