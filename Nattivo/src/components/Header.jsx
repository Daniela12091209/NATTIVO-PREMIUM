import { NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import LoginButton from './LoginButton'

function Header({ menuOpen, setMenuOpen, navItems = [], onLoginClick }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="h-1 bg-red-600" />
        <nav className="bg-red-600 text-white shadow-lg">
          <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
            <button onClick={() => setMenuOpen(true)} className="md:hidden text-white/90 transition hover:text-white">
              <Menu size={24} />
            </button>

            <NavLink to="/" className="text-2xl font-black tracking-[0.2em] uppercase md:text-2xl text-white">
              nattivo
            </NavLink>

            <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">
              {navItems.slice(0, 7).map((item) => (
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

            <div className="hidden md:flex items-center gap-3">
              <button className="rounded-full border border-white/30 p-2 transition hover:bg-white/20">
                <ShoppingCart size={18} className="text-white" />
              </button>
              <LoginButton onClick={onLoginClick} label="Entrar" />
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white text-black shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-black/10 p-6">
            <span className="text-sm font-black uppercase tracking-[0.15em]">Menú</span>
            <button onClick={() => setMenuOpen(false)} className="rounded-full bg-black/5 p-2 text-sm font-bold transition hover:bg-black/10">
              <X size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-2 p-6 text-sm font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition uppercase text-xs tracking-[0.1em] ${isActive ? 'bg-red-50 text-red-600' : 'text-black/70 hover:bg-black/5'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button onClick={onLoginClick} className="mt-6 rounded-lg bg-red-600 px-4 py-3 text-xs font-bold uppercase text-white transition hover:bg-red-700 tracking-[0.1em]">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
