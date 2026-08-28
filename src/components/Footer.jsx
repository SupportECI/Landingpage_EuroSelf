import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  X
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/whatsappConfig';
import euroselfLogo from '../assets/Logo-Euroself.png';

export function Footer({ onNavClick }) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div 
              className="footer-brand-container"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src={euroselfLogo} 
                alt="Euroself Academy" 
                className="footer-brand-logo" 
              />
            </div>
            <p className="footer-bio-text">
              Plataforma y academia de inglés especializada para profesionistas y estudiantes en México. Clases en vivo, módulos por carrera y certificación internacional VTest.
            </p>
            <div className="footer-social-links">
              {/* Facebook Icon SVG */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn" 
                aria-label="Facebook Euroself"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram Icon SVG */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn" 
                aria-label="Instagram Euroself"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn Icon SVG */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn" 
                aria-label="LinkedIn Euroself"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Programas & Navegación */}
          <div>
            <h4 className="footer-col-title">Programas</h4>
            <ul className="footer-links-list">
              <li><a href="#programas" className="footer-link" onClick={(e) => { e.preventDefault(); onNavClick('programas'); }}>Euroself Core ($975/m)</a></li>
              <li><a href="#programas" className="footer-link" onClick={(e) => { e.preventDefault(); onNavClick('programas'); }}>Euroself Specialty ($1,100/m)</a></li>
              <li><a href="#especialidades" className="footer-link" onClick={(e) => { e.preventDefault(); onNavClick('especialidades'); }}>Módulos ESP por Industria</a></li>
              <li><a href="#certificacion" className="footer-link" onClick={(e) => { e.preventDefault(); onNavClick('certificacion'); }}>Certificación VTest</a></li>
              <li><a href="#test-nivel" className="footer-link" onClick={(e) => { e.preventDefault(); onNavClick('test-nivel'); }}>Examen de Ubicación</a></li>
            </ul>
          </div>

          {/* Col 3: Sellos & Respaldo */}
          <div>
            <h4 className="footer-col-title">Respaldos Oficiales</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <ShieldCheck size={17} color="#38bdf8" /> ALTE (MCER Pre-A1 a C2)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <ShieldCheck size={17} color="#38bdf8" /> ILTA (Validez Científica)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <ShieldCheck size={17} color="#38bdf8" /> SEP / CENNI México
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Ubicación */}
          <div>
            <h4 className="footer-col-title">Contacto & Ubicación</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Sede Central: Tuxtla Gutiérrez, Chiapas. Modalidad Online en todo México.</span>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_PHONE}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-contact-item interactive"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={18} />
              <span>WhatsApp: +52 961 849 6379</span>
            </a>
            <a 
              href="mailto:admisiones@euroself.edu.mx" 
              className="footer-contact-item interactive"
              style={{ textDecoration: 'none' }}
            >
              <Mail size={18} />
              <span>admisiones@euroself.edu.mx</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Euroself Academy. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="footer-privacy-btn"
            >
              Aviso de Privacidad
            </button>
            <a 
              href="#hero" 
              className="footer-back-top-btn" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Aviso de Privacidad */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={() => setShowPrivacyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowPrivacyModal(false)}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '1rem', fontWeight: 800 }}>
              Aviso de Privacidad Integral
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p>
                <strong>Euroself Academy</strong>, con domicilio en Tuxtla Gutiérrez, Chiapas, México, es responsable del tratamiento y protección de sus datos personales.
              </p>
              <p>
                Los datos recabados en este sitio web (nombre, teléfono/WhatsApp, nivel e interés educativo) tienen como finalidad exclusiva orientarle sobre los programas académicos, agendar su examen de ubicación y brindarle asesoría personalizada de inscripción.
              </p>
              <p>
                Euroself no comercializa, transfiere ni comparte sus datos con terceros con fines publicitarios ajenos a la academia. Usted puede ejercer sus derechos ARCO en cualquier momento enviando un correo a <em>privacidad@euroself.edu.mx</em>.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button className="btn-primary" onClick={() => setShowPrivacyModal(false)}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
