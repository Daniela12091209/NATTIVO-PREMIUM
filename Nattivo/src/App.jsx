import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          <h1 className="text-2xl md:text-3xl font-black tracking-[0.3em]">
            NATTIVO
          </h1>

          <nav className="hidden md:flex gap-10 text-sm tracking-widest text-gray-300">
            <a href="#home" className="hover:text-white transition">HOME</a>
            <a href="#shop" className="hover:text-white transition">SHOP</a>
            <a href="#about" className="hover:text-white transition">ABOUT</a>
          </nav>

          <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            SHOP
          </button>

          {/* mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300">
            <a href="#home">HOME</a>
            <a href="#shop">SHOP</a>
            <a href="#about">ABOUT</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <p className="text-gray-400 tracking-[0.4em] mb-4">
          PREMIUM SNEAKERS
        </p>

        <h2 className="text-5xl md:text-8xl font-black uppercase leading-tight">
          STEP INTO
          <br />
          LUXURY
        </h2>

        <p className="text-gray-500 max-w-xl mt-6">
          Sneakers de edición limitada, diseño premium y cultura streetwear en
          su máxima expresión.
        </p>

        <button className="mt-10 bg-green-500 hover:bg-green-400 px-10 py-4 rounded-full font-bold text-black transition hover:scale-105">
          COMPRAR AHORA
        </button>
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="px-6 md:px-12 py-20">
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-2xl md:text-4xl font-black tracking-widest">
            FEATURED DROPS
          </h3>
          <p className="text-gray-500">Limited stock</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Jordan 1 Chicago",
              img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Lost-and-Found.jpg",
            },
            {
              name: "Nike Dunk Panda",
              img: "https://images.stockx.com/images/Nike-Dunk-Low-Panda-2021-W.jpg",
            },
            {
              name: "Jordan 4 Military",
              img: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold tracking-wide">
                  {item.name}
                </h4>
                <p className="text-gray-500 mt-2">Limited Edition</p>

                <button className="mt-5 w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                  Ver producto
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="px-6 md:px-12 py-20">
        <div className="bg-zinc-900 rounded-3xl p-10 md:p-20 text-center">
          <h3 className="text-3xl md:text-6xl font-black uppercase">
            Exclusive Streetwear
          </h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Acceso a drops limitados, sneakers exclusivos y colecciones premium.
          </p>

          <button className="mt-8 bg-green-500 text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            UNIRME
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10 border-t border-white/10 text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p>© {new Date().getFullYear()} Nattivo Premium</p>
          <p>Streetwear & Sneakers Culture</p>
        </div>
      </footer>
    </div>
  );
}