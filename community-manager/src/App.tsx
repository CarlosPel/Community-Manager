import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold">Mi App</h1>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#" className="hover:text-blue-600">Sobre</a>
          <a href="#" className="hover:text-blue-600">Contacto</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col bg-white shadow-md p-4">
          <a href="#" className="py-2 hover:text-blue-600">Inicio</a>
          <a href="#" className="py-2 hover:text-blue-600">Sobre</a>
          <a href="#" className="py-2 hover:text-blue-600">Contacto</a>
        </nav>
      )}

      {/* Main section */}
      <main className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bienvenido a tu primera app responsive 🚀
          </h2>
          <p className="text-lg mb-6">
            Esta aplicación está construida con <strong>React</strong> y <strong>TailwindCSS</strong>.
            Se adapta automáticamente a pantallas de móvil y ordenador.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition">
            Empezar
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://source.unsplash.com/400x400/?technology,app"
            alt="Demo"
            className="rounded-2xl shadow-md"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-100 mt-8">
        <p className="text-sm">© 2025 Mi App. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
