import { Check, ArrowRight, Star } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/landingData';

export function ProgramsComparison({ onSelectProgram }) {
  const { core, moduleC1 } = PROGRAMS_DATA;

  const handleChoose = (programName) => {
    if (onSelectProgram) {
      onSelectProgram(programName);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="programas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Precios Claros y Transparentes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Elige el programa que mejor se adapte a tu meta
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Sin costos ocultos ni letras pequeñas. Inversión fija durante los 4 meses de tu capacitación.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Tarjeta 1: Euroself Core (Destacada) */}
          <div className="relative bg-gradient-to-b from-sky-50/70 via-white to-white border-2 border-brand-blue rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-brand-blue/10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
            {/* Featured Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-extrabold uppercase px-4 py-1 rounded-full shadow-md whitespace-nowrap tracking-wider">
              <Star size={13} className="fill-current text-amber-300" />
              {core.badge}
            </span>

            <div>
              <div className="text-center pb-6 mb-6 border-b border-slate-200 pt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
                  {core.name}
                </h3>
                <div className="inline-block bg-slate-100 text-navy-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg mb-4">
                  🎯 {core.target}
                </div>

                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-xl font-bold text-navy-900">$</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
                    {core.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">MXN / mes</span>
                </div>
                <p className="text-xs text-slate-500">
                  4 pagos mensuales (Total: ${core.totalPrice.toLocaleString()} MXN)
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {core.content.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <Check size={18} className="text-brand-blue shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Meta details */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-xs sm:text-sm space-y-2 border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Requisito de ingreso:</span>
                  <span className="font-bold text-navy-900 text-right">{core.requirements}</span>
                </div>
                <div className="flex justify-between items-center border-t border-dashed border-slate-200 pt-2">
                  <span className="text-slate-500">Duración:</span>
                  <span className="font-bold text-navy-900 text-right">{core.duration}</span>
                </div>
              </div>

              <button 
                onClick={() => handleChoose(core.id)}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {core.ctaText} <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Tarjeta 2: Euroself Specialty */}
          <div className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
            <div>
              <div className="text-center pb-6 mb-6 border-b border-slate-200 pt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
                  {moduleC1.name}
                </h3>
                <div className="inline-block bg-slate-100 text-navy-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg mb-4">
                  💼 {moduleC1.target}
                </div>

                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-xl font-bold text-navy-900">$</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
                    {moduleC1.totalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">MXN</span>
                </div>
                <p className="text-xs text-slate-500">
                  Pago único o 3 MSI
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {moduleC1.content.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <Check size={18} className="text-brand-blue shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Meta details */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-xs sm:text-sm space-y-2 border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Requisito de ingreso:</span>
                  <span className="font-bold text-navy-900 text-right">{moduleC1.requirements}</span>
                </div>
                <div className="flex justify-between items-center border-t border-dashed border-slate-200 pt-2">
                  <span className="text-slate-500">Duración:</span>
                  <span className="font-bold text-navy-900 text-right">{moduleC1.duration}</span>
                </div>
              </div>

              <button 
                onClick={() => handleChoose(moduleC1.id)}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border-2 border-navy-900 text-navy-900 font-bold text-base py-3.5 px-6 rounded-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {moduleC1.ctaText} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsComparison;
