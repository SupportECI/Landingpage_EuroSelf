import { 
  MonitorPlay, 
  Users, 
  UserCheck, 
  Sparkles, 
  Video, 
  Compass, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { WHAT_INCLUDES_DATA } from '../data/landingData';

const iconMap = {
  MonitorPlay: MonitorPlay,
  Users: Users,
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  Video: Video,
  Compass: Compass,
  GraduationCap: GraduationCap,
};

export function WhatIncludes() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24" id="que-incluye">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Metodología Comprobada
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            ¿Qué incluye estudiar con Euroself?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un ecosistema de aprendizaje integral diseñado para que hables con soltura y avances de nivel con acompañamiento continuo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_INCLUDES_DATA.map((item) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            return (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 text-brand-blue flex items-center justify-center shadow-inner">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-navy-700 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIncludes;
