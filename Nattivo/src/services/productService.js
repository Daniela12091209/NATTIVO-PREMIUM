export async function createProduct(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, product: { ...product, id: Date.now() } })
    }, 500)
  })
}
