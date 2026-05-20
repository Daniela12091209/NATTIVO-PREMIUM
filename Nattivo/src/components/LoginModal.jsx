import './LoginModal.css'
import { useState } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import { authenticateUser } from '../services/authService'

function LoginModal({ open, onClose }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  if (!open) return null

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await authenticateUser({ username, password })
      if (response.success) {
        setSuccess('Inicio de sesión exitoso. Próximamente lo conectaremos a la base de datos.')
      } else {
        setError('Usuario o contraseña incorrectos.')
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo más tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-modal fixed inset-0 z-50 flex items-center justify-end bg-black/60 p-4">
      <div className="login-panel relative h-full max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-l-[30px] bg-white text-black shadow-2xl">
        <button className="login-close absolute top-4 right-4 text-black" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="px-8 py-10">
          <h2 className="text-3xl font-black">Iniciar sesión</h2>
          <p className="mt-3 text-sm text-zinc-500">Accede a tu cuenta para ver ofertas, pedidos y más.</p>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase text-zinc-700">Usuario</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
                placeholder="Usuario"
                type="text"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold uppercase text-zinc-700">Contraseña</label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input pr-12"
                  placeholder="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-300 text-black focus:ring-black"
                />
                Remember me
              </label>
              <button type="button" className="text-sm font-semibold text-black/70 hover:text-black">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && <p className="text-sm text-green-600">{success}</p>}

            <button
              type="submit"
              className="w-full rounded-full bg-black px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>

            <button
              type="button"
              className="w-full rounded-full border border-black bg-white px-5 py-4 text-sm font-bold uppercase text-black transition hover:bg-black/5"
            >
              Crear una cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
