import { Sparkles, Calendar, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { PLACEMENT_TEST_INFO } from '../data/landingData';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';

export function PlacementTestSection({ onSelectRecommendedPlan }) {
  const info = PLACEMENT_TEST_INFO || {
    badge: 'Diagnóstico Académico sin Costo',
    title: '¿No estás seguro de cuál es tu nivel de inglés?',
    description: 'En Euroself Academy aplicamos un examen de ubicación personalizado directamente con nuestros docentes para medir con precisión tus competencias según el Marco Común Europeo (MCER) y definir tu plan de estudio ideal.',
    benefits: [
      'Evaluación oral y gramatical realizada directamente por un docente',
      'Diagnóstico 100% gratuito y sin ningún compromiso',
      'Asignación al nivel exacto y módulos profesionales (ESP) ideales',
    ],
  };

  const scheduleWhatsAppLink = getQuickWhatsAppLink('Hola, quiero agendar mi examen de ubicación gratuito con un docente de Euroself para conocer mi nivel de inglés según el MCER.');

  return (
    <section 
      className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden" 
      id="test-nivel"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl border border-slate-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
                <Sparkles size={13} /> {info.badge}
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
                {info.title}
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {info.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {info.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={scheduleWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare size={18} /> Agendar Examen de Ubicación Gratis
                </a>

                {onSelectRecommendedPlan && (
                  <button
                    onClick={() => onSelectRecommendedPlan('Euroself Core')}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Ver Programas <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="w-full lg:w-72 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-inner shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <Calendar size={32} />
              </div>
              <h3 className="text-base font-extrabold text-navy-900 mb-1">
                Evaluación 1 a 1
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                15 minutos con un docente en vivo para determinar tu nivel MCER (A1 a C1).
              </p>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                <ShieldCheck size={13} /> 100% Gratuito
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementTestSection;
