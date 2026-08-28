import { MessageSquare, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';
import { PROMO_DATA } from '../data/landingData';

export function FinalCta({ onFormScroll }) {
  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider mb-6">
          <Flame size={14} className="text-amber-400" /> Oferta de Lanzamiento Vigente
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Empieza hoy tu programa personalizado de inglés
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Aprende a tu ritmo desde <strong className="text-sky-300 font-bold">{PROMO_DATA.pricePerMonth} MXN/mes</strong> con clases en vivo, especialidad para tu profesión y certificación internacional VTest.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button 
            onClick={onFormScroll}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Sparkles size={18} /> Quiero mi programa ideal
          </button>

          <a
            href={getQuickWhatsAppLink('Hola, quiero aprovechar la tarifa de lanzamiento de $975 MXN/mes en Euroself Academy. ¿Me pueden dar informes?')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <MessageSquare size={18} /> Inscribirme por WhatsApp
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-sky-400" /> Sin costos ocultos
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-sky-400" /> Examen de ubicación gratis
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-sky-400" /> Clases grabadas 24/7
          </span>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
