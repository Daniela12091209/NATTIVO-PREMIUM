import { NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import LoginButton from './LoginButton'

function Header({ menuOpen, setMenuOpen, navItems = [], onLoginClick }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="h-1 bg-red-500" />
        <nav className="bg-[#111111] text-white shadow-2xl">
          <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
            <button onClick={() => setMenuOpen(true)} className="md:hidden text-white/90 transition hover:text-white">
              <Menu size={28} />
            </button>

            <NavLink to="/" className="text-3xl font-black tracking-[0.35em] uppercase md:text-4xl">
              NATTIVO
            </NavLink>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-white ${isActive ? 'text-white font-black' : 'text-white/80'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LoginButton onClick={onLoginClick} label="Iniciar sesión" />
              <button className="rounded-full border border-white/20 p-2 transition hover:bg-white/10">
                <ShoppingCart size={22} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`fixed inset-y-0 left-0 z-50 w-80 transform bg-white text-black shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-zinc-200 p-6">
            <span className="text-lg font-black uppercase tracking-[0.2em]">Menú</span>
            <button onClick={() => setMenuOpen(false)} className="rounded-full bg-zinc-100 px-3 py-2 text-lg font-bold transition hover:bg-zinc-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-6 text-base font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 transition hover:bg-zinc-50 ${isActive ? 'bg-red-50 text-red-600' : 'text-black/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button onClick={onLoginClick} className="mt-6 rounded-full bg-black px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-zinc-900">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
