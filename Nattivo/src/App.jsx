import { useState } from "react"
import {
  Menu,
  X,
  Heart,
  Eye,
  ShoppingCart
} from "lucide-react"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [

    {
      id: 1,
      name: "Beanie Black",
      category: "Beanies",
      price: "$39.900",
      description: "Beanie premium streetwear edición limitada.",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
    },

    {
      id: 2,
      name: "Oversized Tee",
      category: "Oversized",
      price: "$89.900",
      description: "Oversized fit premium cotton.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    },

    {
      id: 3,
      name: "Concrete Jacket",
      category: "Concrete Jacket",
      price: "$280.000",
      description: "Luxury concrete collection jacket.",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    },

    {
      id: 4,
      name: "Skimask Black",
      category: "Skimask",
      price: "$59.900",
      description: "Premium skimask collection.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }

  ]

  return (

    <div className="bg-white min-h-screen text-black overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="bg-red-600 text-white flex justify-between items-center px-8 py-5 sticky top-0 z-50 shadow-xl">

        <button onClick={() => setMenuOpen(true)}>
          <Menu size={32} />
        </button>

        <h1 className="text-4xl font-black tracking-[10px]">
          NATTIVO
        </h1>

        <button>
          <ShoppingCart size={30} />
        </button>

      </nav>

      {/* MODAL PRODUCT */}

      {
        selectedProduct && (

          <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-6">

            <div className="bg-white max-w-5xl w-full rounded-[30px] overflow-hidden grid md:grid-cols-2 relative">

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 bg-black text-white p-3 rounded-full"
              >
                <X size={22} />
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />

              <div className="p-10 flex flex-col justify-center">

                <p className="text-red-600 uppercase font-bold tracking-[3px]">
                  {selectedProduct.category}
                </p>

                <h2 className="text-5xl font-black mt-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-zinc-500 mt-8 text-lg leading-relaxed">
                  {selectedProduct.description}
                </p>

                <p className="text-4xl text-red-600 font-black mt-10">
                  {selectedProduct.price}
                </p>

                <button className="mt-10 bg-black text-white py-5 rounded-full text-lg font-bold hover:bg-red-600 transition">

                  Añadir al carrito

                </button>

              </div>

            </div>

          </div>

        )
      }

      {/* SIDEBAR */}

      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
        menuOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}>

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-3xl font-black">
            MENU
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>

        </div>

        <div className="flex flex-col gap-6 p-8 text-xl font-semibold">

          <button className="hover:text-red-600 transition text-left">
            Beanies
          </button>

          <button className="hover:text-red-600 transition text-left">
            T-shirts
          </button>

          <button className="hover:text-red-600 transition text-left">
            Skimask
          </button>

          <button className="hover:text-red-600 transition text-left">
            Oversized
          </button>

          <button className="hover:text-red-600 transition text-left">
            Box Fit
          </button>

        </div>

      </div>

      {/* HERO */}

      <section className="h-[80vh] bg-black flex flex-col justify-center items-center text-center text-white px-6">

        <p className="uppercase tracking-[5px] text-red-500 font-bold mb-5">
          Luxury Streetwear
        </p>

        <h1 className="text-7xl md:text-9xl font-black leading-none">
          NATTIVO
        </h1>

        <p className="text-zinc-300 mt-8 max-w-2xl text-lg">
          Moda premium inspirada en la cultura urbana y streetwear.
        </p>

        <button className="mt-10 bg-red-600 hover:bg-white hover:text-black transition px-10 py-5 rounded-full font-bold text-lg">

          SHOP NOW

        </button>

      </section>

      {/* PRODUCTS */}

      <section className="px-10 py-20">

        <div className="flex justify-between items-center mb-14">

          <h2 className="text-6xl font-black">
            FEATURED
          </h2>

          <p className="text-zinc-500">
            Limited collection
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover"
                />

                <div className="absolute top-4 right-4 flex flex-col gap-3">

                  <button className="bg-white p-3 rounded-full shadow hover:bg-red-600 hover:text-white transition">
                    <Heart size={20} />
                  </button>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white p-3 rounded-full shadow hover:bg-black hover:text-white transition"
                  >
                    <Eye size={20} />
                  </button>

                  <button className="bg-white p-3 rounded-full shadow hover:bg-red-600 hover:text-white transition">
                    <ShoppingCart size={20} />
                  </button>

                </div>

              </div>

              <div className="p-6">

                <p className="text-sm uppercase text-red-600 font-bold mb-2">
                  {product.category}
                </p>

                <h3 className="text-2xl font-black">
                  {product.name}
                </h3>

                <p className="text-zinc-500 mt-3">
                  {product.description}
                </p>

                <p className="text-red-600 text-2xl font-black mt-5">
                  {product.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>

  )
}

export default App