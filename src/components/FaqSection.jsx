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
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Respuestas Claras
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Resolvemos tus dudas sobre horarios, metodología, certificación y formas de pago.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-brand-blue bg-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-brand-blue' : 'text-navy-900'
                  }`}>
                    {item.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-brand-blue shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloque de Ayuda Adicional */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 mb-3">
            ¿Tienes alguna otra duda específica sobre tu caso?
          </p>
          <a
            href={getQuickWhatsAppLink('Hola, tengo una pregunta específica sobre el programa de inglés de Euroself que me gustaría aclarar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold text-sm px-5 py-2.5 rounded-xl border border-slate-300 shadow-sm transition-all hover:shadow cursor-pointer"
          >
            <MessageCircle size={18} className="text-whatsapp" /> Hablar con un asesor en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
