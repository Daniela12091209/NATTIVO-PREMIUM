import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import Dashboard from './sections/Dashboard/Dashboard'
import ConcreteJacketPage from './pages/ConcreteJacketPage'
import TShirtsPage from './pages/TShirtsPage'
import BeaniesPage from './pages/BeaniesPage'
import SkimaskPage from './pages/SkimaskPage'
import BandanasPage from './pages/BandanasPage'
import OversizedPage from './pages/OversizedPage'
import BoxFitPage from './pages/BoxFitPage'

const NAV_ITEMS = [
  { to: '/concrete-jacket', label: 'Concrete Jacket' },
  { to: '/t-shirts', label: 'T-shirts' },
  { to: '/beanies', label: 'Beanies' },
  { to: '/skimask', label: 'Skimask' },
  { to: '/bandanas', label: 'Bandanas' },
  { to: '/oversized', label: 'Oversized' },
  { to: '/box-fit', label: 'Box Fit' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <BrowserRouter>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={NAV_ITEMS}
        onLoginClick={() => setLoginOpen(true)}
      />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/concrete-jacket" element={<ConcreteJacketPage />} />
        <Route path="/t-shirts" element={<TShirtsPage />} />
        <Route path="/beanies" element={<BeaniesPage />} />
        <Route path="/skimask" element={<SkimaskPage />} />
        <Route path="/bandanas" element={<BandanasPage />} />
        <Route path="/oversized" element={<OversizedPage />} />
        <Route path="/box-fit" element={<BoxFitPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
