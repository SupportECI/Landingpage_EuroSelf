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
    <header className="navbar">
      <div className="container">
        {/* Brand Logo Euroself Academy */}
        <div 
          className="navbar-brand" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={euroselfLogo} 
            alt="Euroself Academy" 
            className="navbar-brand-logo" 
          />
        </div>

        {/* Desktop Nav Menu */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#que-incluye" 
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); handleNavClick('que-incluye'); }}
              >
                Cómo funciona
              </a>
            </li>
            <li>
              <a 
                href="#programas" 
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); handleNavClick('programas'); }}
              >
                Programas
              </a>
            </li>
            <li>
              <a 
                href="#especialidades" 
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}
              >
                Especialidades
              </a>
            </li>
            <li>
              <a 
                href="#certificacion" 
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); handleNavClick('certificacion'); }}
              >
                Certificación VTest
              </a>
            </li>
            <li>
              <a 
                href="#test-nivel" 
                className="nav-link" 
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
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); handleNavClick('faqs'); }}
              >
                Preguntas frecuentes
              </a>
            </li>
            <li className="mobile-only-action" style={{ display: mobileMenuOpen ? 'block' : 'none', marginTop: '0.5rem' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onFormScroll(); }}
                className="btn-whatsapp"
                style={{ width: '100%', fontSize: '0.95rem' }}
              >
                <MessageSquare size={18} /> Iniciar mi Asesoría
              </button>
            </li>
          </ul>
        </nav>

        {/* Actions CTA */}
        <div className="nav-actions">
          <button 
            onClick={onFormScroll} 
            className="btn-primary nav-cta-btn"
          >
            Quiero mi programa ideal
          </button>
          
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
