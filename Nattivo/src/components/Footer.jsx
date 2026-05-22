import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

function Footer() {

  return (
    <footer className="bg-white text-black border-t border-black/10">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Branding */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-2xl font-black uppercase tracking-[0.2em] text-red-600">nattivo</p>
                <p className="text-xs text-black/60 mt-2 uppercase tracking-[0.1em]">Streetwear Premium</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-black/80 font-semibold mb-3">Síguenos</p>
                <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-lg bg-black/5 hover:bg-red-600 hover:text-white transition" title="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-black/5 hover:bg-red-600 hover:text-white transition" title="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-black/5 hover:bg-red-600 hover:text-white transition" title="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-black/5 hover:bg-red-600 hover:text-white transition" title="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Servicio al Cliente */}
            <div>
              <h4 className="font-black uppercase tracking-[0.1em] text-sm mb-4">Servicio al cliente</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Contáctanos</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Forma de pago</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Cambios y devoluciones</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-black uppercase tracking-[0.1em] text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Términos y condiciones</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Políticas</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Políticas temporales</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Tratamiento de datos</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-black uppercase tracking-[0.1em] text-sm mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Marca</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Acerca de</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Nattivo Club</a></li>
                <li><a href="#" className="text-sm text-black/70 hover:text-red-600 transition">Blog</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-black/10 bg-black/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-black/60">© {new Date().getFullYear()} NATTIVO. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-black/60">
            <a href="#" className="hover:text-red-600 transition">Privacidad</a>
            <a href="#" className="hover:text-red-600 transition">Cookies</a>
            <a href="#" className="hover:text-red-600 transition">Contacto</a>
          </div>
        </div>
      </div>

    </footer>
  )

}

export default Footer
