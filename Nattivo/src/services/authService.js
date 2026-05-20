export async function authenticateUser({ username, password }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({ success: true, user: { id: 1, name: 'Admin' } })
      } else {
        resolve({ success: false })
      }
    }, 500)
  })
}
