import { useState } from 'react';
import { 
  ConciergeBell, 
  Briefcase, 
  HeartPulse, 
  Code2, 
  Wrench, 
  Scale, 
  MessagesSquare, 
  Building2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ESP_MODULES_DATA } from '../data/landingData';

const espIconMap = {
  ConciergeBell: ConciergeBell,
  Briefcase: Briefcase,
  HeartPulse: HeartPulse,
  Code2: Code2,
  Wrench: Wrench,
  Scale: Scale,
  MessagesSquare: MessagesSquare,
  Building2: Building2,
};

export function EspModules({ onSelectEspSpecialty }) {
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas las áreas (+8)' },
    { id: 'tech', label: 'Tech & IT' },
    { id: 'business', label: 'Negocios & Finanzas' },
    { id: 'health', label: 'Salud & Medicina' },
    { id: 'hospitality', label: 'Turismo' },
    { id: 'corporate', label: 'Ejecutivo & Legal' },
  ];

  const filteredModules = ESP_MODULES_DATA.filter((mod) => {
    if (selectedTag === 'all') return true;
    if (selectedTag === 'tech') return mod.id === 'tech' || mod.id === 'engineering';
    if (selectedTag === 'business') return mod.id === 'business' || mod.id === 'softskills';
    if (selectedTag === 'health') return mod.id === 'health';
    if (selectedTag === 'hospitality') return mod.id === 'hospitality';
    if (selectedTag === 'corporate') return mod.id === 'corporate' || mod.id === 'legal';
    return true;
  });

  return (
    <section 
      className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden" 
      id="especialidades"
    >
      {/* Subtle background blur spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-sky-300 border border-white/15 font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3 backdrop-blur-md">
            <Sparkles size={13} /> Módulos ESP Personalizados
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Inglés que sirve para tu profesión, no solo para el examen
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Elige tus módulos especializados (3 en Euroself Core) y aprende el vocabulario, dinámicas y situaciones que realmente vives en tu trabajo diario.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-150 cursor-pointer ${
                selectedTag === cat.id
                  ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/30'
                  : 'bg-white/10 hover:bg-white/15 text-slate-300 border-white/15'
              }`}
              onClick={() => setSelectedTag(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de 8 Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredModules.map((esp) => {
            const IconComp = espIconMap[esp.icon] || Briefcase;
            return (
              <div 
                key={esp.id} 
                className="bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-sky-400/30 text-sky-300 flex items-center justify-center">
                      <IconComp size={24} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-200 bg-sky-400/10 border border-sky-400/20 px-2.5 py-0.5 rounded-full">
                      {esp.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {esp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {esp.description}
                  </p>
                </div>

                <ul className="border-t border-white/10 pt-4 space-y-1.5 list-none m-0 p-0">
                  {esp.examples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-sky-400 shrink-0 font-bold">✦</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior Informativo */}
        <div className="bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              ¿Tu profesión o industria no está en la lista principal?
            </h4>
            <p className="text-sm text-slate-300">
              Contamos con más de 25 sub-especialidades adicionales (Arquitectura, Marketing Digital, Logística, etc.).
            </p>
          </div>
          <button 
            onClick={onSelectEspSpecialty}
            className="shrink-0 inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg shadow-brand-blue/30 transition-all duration-200 cursor-pointer"
          >
            Consultar catálogo completo <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default EspModules;
