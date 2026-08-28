import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3" aria-label="Contacto directo por WhatsApp">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-xl border border-white/15 animate-pulse-subtle">
          <span>💬 ¿Tienes dudas? Asesoría en vivo</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white cursor-pointer ml-1"
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
        className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-108 hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-pulse-subtle"
        aria-label="Abrir chat de WhatsApp con asesor de Euroself"
      >
        <MessageCircle size={30} className="sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
