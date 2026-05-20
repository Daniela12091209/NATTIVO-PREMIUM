import { NavLink } from 'react-router-dom'
import { Menu, ShoppingCart } from 'lucide-react'
import LoginButton from './LoginButton'

function Header({ menuOpen, setMenuOpen, navItems = [], onLoginClick }) {
  return (
    <>
      <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>

          <NavLink to="/" className="text-3xl font-black tracking-[0.35em] uppercase md:text-4xl">
            NATTIVO
          </NavLink>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-gray-200 ${isActive ? 'text-white/90 font-black' : 'text-white/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LoginButton onClick={onLoginClick} label="Iniciar sesión" />
            <button className="rounded-full border border-white/50 p-2 transition hover:bg-white/10">
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-between border-b p-6">
          <span className="text-lg font-black uppercase text-black">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-black">✕</button>
        </div>
        <div className="flex flex-col gap-4 p-6 text-base font-semibold text-black">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="hover:text-red-600">
              {item.label}
            </NavLink>
          ))}
          <button onClick={onLoginClick} className="mt-6 rounded-full bg-black px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-zinc-900">
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
