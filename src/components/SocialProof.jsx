import { Star, TrendingUp } from 'lucide-react';
import { TESTIMONIALS_DATA, METRICS_DATA } from '../data/landingData';

export function SocialProof() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 bg-navy-900 text-white rounded-3xl p-6 sm:p-10 mb-16 shadow-xl shadow-navy-950/15">
          {METRICS_DATA.map((metric, idx) => (
            <div 
              key={idx} 
              className={`text-center ${idx !== METRICS_DATA.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-400 tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Casos Reales de Éxito
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Resultados medibles que transforman carreras
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conoce a profesionistas y estudiantes que alcanzaron la fluidez y certificaron su nivel con la metodología de Euroself.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-13 h-13 rounded-full object-cover border-2 border-brand-cyan shrink-0" 
                    loading="lazy" 
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm text-navy-900 truncate">{t.name}</span>
                    <span className="text-xs text-slate-500 truncate">{t.role}</span>
                    <span className="text-[11px] text-brand-blue font-semibold">{t.city}</span>
                  </div>
                </div>

                {/* Badge de Resultado Concreto */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-200/70 mb-4 w-full">
                  <TrendingUp size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate">{t.levelChange}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-[140px]">
                  {t.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
