import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="floating-whatsapp-container" aria-label="Contacto directo por WhatsApp">
      {showTooltip && (
        <div className="floating-whatsapp-tooltip">
          <span>💬 ¿Tienes dudas? Asesoría en vivo</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              marginLeft: '6px',
              cursor: 'pointer',
              verticalAlign: 'middle',
            }}
            aria-label="Ocultar mensaje"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <a
        href={getQuickWhatsAppLink('Hola, estoy viendo la landing page de Euroself y me gustaría recibir asesoría sobre el programa de inglés y las promociones vigentes.')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn pulse-animation"
        aria-label="Abrir chat de WhatsApp con asesor de Euroself"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
