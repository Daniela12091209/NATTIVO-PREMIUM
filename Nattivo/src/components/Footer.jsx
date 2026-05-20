function Footer() {

  return (
    <footer className="bg-black text-white py-8 mt-20">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="font-bold">© {new Date().getFullYear()} NATTIVO</p>

        <div className="flex gap-6 text-zinc-300">
          <button className="hover:text-white">Términos</button>
          <button className="hover:text-white">Privacidad</button>
          <button className="hover:text-white">Contacto</button>
        </div>

      </div>

    </footer>
  )

}

export default Footer
