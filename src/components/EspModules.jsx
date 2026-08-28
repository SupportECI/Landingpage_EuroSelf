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
    <section className="esp-section section-spacing" id="especialidades">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag badge-navy">
            <Sparkles size={14} /> Módulos ESP Personalizados
          </span>
          <h2 className="section-title light">
            Inglés que sirve para tu profesión, no solo para el examen
          </h2>
          <p className="section-subtitle light">
            Elige tus módulos especializados (3 en Euroself Core o 5 en Euroself Specialty) y aprende el vocabulario, dinámicas y situaciones que realmente vives en tu trabajo diario.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="esp-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`esp-filter-pill ${selectedTag === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedTag(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de 8 Especialidades */}
        <div className="esp-grid">
          {filteredModules.map((esp) => {
            const IconComp = espIconMap[esp.icon] || Briefcase;
            return (
              <div key={esp.id} className="esp-card">
                <div className="esp-card-top">
                  <div className="esp-icon-box">
                    <IconComp size={24} />
                  </div>
                  <span className="esp-tag">{esp.tag}</span>
                </div>

                <h3 className="esp-title">{esp.title}</h3>
                <p className="esp-description">{esp.description}</p>

                <ul className="esp-examples-list">
                  {esp.examples.map((ex, idx) => (
                    <li key={idx} className="esp-example-item">
                      <span className="bullet">✦</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior Informativo */}
        <div className="esp-bottom-banner">
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.25rem' }}>
              ¿Tu profesión o industria no está en la lista principal?
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Contamos con más de 25 sub-especialidades adicionales (Arquitectura, Marketing Digital, Logística, etc.).
            </p>
          </div>
          <button 
            onClick={onSelectEspSpecialty}
            className="btn-primary"
            style={{ whiteSpace: 'nowrap' }}
          >
            Consultar catálogo completo <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default EspModules;
