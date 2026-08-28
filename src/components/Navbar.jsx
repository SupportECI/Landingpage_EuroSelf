import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import euroselfLogo from '../assets/Logo-Euroself.png';

export function Navbar({ onOpenPlacementTest, onFormScroll }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo Euroself Academy */}
        <div 
          className="flex items-center cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={euroselfLogo} 
            alt="Euroself Academy" 
            className="h-10 sm:h-12 w-auto object-contain" 
          />
        </div>

        {/* Desktop Nav Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <a 
                href="#que-incluye" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { e.preventDefault(); handleNavClick('que-incluye'); }}
              >
                Cómo funciona
              </a>
            </li>
            <li>
              <a 
                href="#programas" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { e.preventDefault(); handleNavClick('programas'); }}
              >
                Programas
              </a>
            </li>
            <li>
              <a 
                href="#especialidades" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}
              >
                Especialidades
              </a>
            </li>
            <li>
              <a 
                href="#certificacion" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { e.preventDefault(); handleNavClick('certificacion'); }}
              >
                Certificación VTest
              </a>
            </li>
            <li>
              <a 
                href="#test-nivel" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setMobileMenuOpen(false);
                  if (onOpenPlacementTest) onOpenPlacementTest();
                  else handleNavClick('test-nivel');
                }}
              >
                Examen de Ubicación
              </a>
            </li>
            <li>
              <a 
                href="#faqs" 
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200" 
                onClick={(e) => { e.preventDefault(); handleNavClick('faqs'); }}
              >
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions CTA */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onFormScroll} 
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Quiero mi programa ideal
          </button>
          
          <button 
            className="lg:hidden p-2 text-navy-900 hover:text-brand-blue cursor-pointer rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-slate-200 bg-white shadow-xl ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-5 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <ul className="flex flex-col gap-4 list-none m-0 p-0">
          <li>
            <a 
              href="#que-incluye" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick('que-incluye'); }}
            >
              Cómo funciona
            </a>
          </li>
          <li>
            <a 
              href="#programas" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick('programas'); }}
            >
              Programas
            </a>
          </li>
          <li>
            <a 
              href="#especialidades" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}
            >
              Especialidades
            </a>
          </li>
          <li>
            <a 
              href="#certificacion" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick('certificacion'); }}
            >
              Certificación VTest
            </a>
          </li>
          <li>
            <a 
              href="#test-nivel" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { 
                e.preventDefault(); 
                setMobileMenuOpen(false);
                if (onOpenPlacementTest) onOpenPlacementTest();
                else handleNavClick('test-nivel');
              }}
            >
              Examen de Ubicación
            </a>
          </li>
          <li>
            <a 
              href="#faqs" 
              className="block text-base font-semibold text-slate-700 hover:text-brand-blue py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick('faqs'); }}
            >
              Preguntas frecuentes
            </a>
          </li>
          <li className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onFormScroll(); }}
              className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md cursor-pointer"
            >
              <MessageSquare size={18} /> Iniciar mi Asesoría en WhatsApp
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
