import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/landingData';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Primero abierto por defecto

  const toggleIndex = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-section section-spacing" id="faqs">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Respuestas Claras</span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Resolvemos tus dudas sobre horarios, metodología, certificación y formas de pago.
          </p>
        </div>

        <div className="faq-accordion-container">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <ChevronDown size={20} className="faq-toggle-icon" />
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloque de Ayuda Adicional */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            ¿Tienes alguna otra duda específica sobre tu caso?
          </p>
          <a
            href={getQuickWhatsAppLink('Hola, tengo una pregunta específica sobre el programa de inglés de Euroself que me gustaría aclarar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MessageCircle size={18} color="var(--whatsapp-green)" /> Hablar con un asesor en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
