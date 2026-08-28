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

// Mapeo dinámico de componentes de iconos de lucide-react
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
    <section className="what-includes-section section-spacing" id="que-incluye">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Metodología Comprobada</span>
          <h2 className="section-title">¿Qué incluye estudiar con Euroself?</h2>
          <p className="section-subtitle">
            Un ecosistema de aprendizaje integral diseñado para que hables con soltura y avances de nivel con acompañamiento continuo.
          </p>
        </div>

        <div className="benefits-grid">
          {WHAT_INCLUDES_DATA.map((item) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            return (
              <div key={item.id} className="benefit-card">
                <div className="benefit-card-top">
                  <div className="benefit-icon-wrapper">
                    <IconComponent size={26} />
                  </div>
                  <span className="benefit-pill">{item.tag}</span>
                </div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIncludes;
