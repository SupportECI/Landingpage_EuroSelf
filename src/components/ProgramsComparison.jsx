import { Check, ArrowRight, Star } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/landingData';

export function ProgramsComparison({ onSelectProgram }) {
  const { core, specialty } = PROGRAMS_DATA;

  const handleChoose = (programName) => {
    if (onSelectProgram) {
      onSelectProgram(programName);
    }
  };

  return (
    <section className="programs-section section-spacing" id="programas">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag badge-gold">Precios Claros y Transparentes</span>
          <h2 className="section-title">Elige el programa que mejor se adapte a tu meta</h2>
          <p className="section-subtitle">
            Sin costos ocultos ni letras pequeñas. Inversión fija durante los 4 meses de tu capacitación.
          </p>
        </div>

        <div className="programs-grid">
          {/* Tarjeta Programa 1: Euroself Core */}
          <div className="program-card featured">
            <span className="featured-top-badge">
              <Star size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
              {core.badge}
            </span>

            <div className="program-header">
              <h3 className="program-name">{core.name}</h3>
              <div className="program-target-box">
                🎯 {core.target}
              </div>

              <div className="program-price-container">
                <span className="program-price-currency">$</span>
                <span className="program-price-amount">{core.monthlyPrice}</span>
                <span className="program-price-period">MXN / mes</span>
              </div>
              <p className="program-price-subtext">
                4 pagos mensuales (Total: ${core.totalPrice.toLocaleString()} MXN)
              </p>
            </div>

            <ul className="program-features-list">
              {core.content.map((feature, idx) => (
                <li key={idx} className="program-feature-item">
                  <Check size={18} className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="program-meta-info">
              <div className="meta-row">
                <span className="meta-label">Requisito de ingreso:</span>
                <span className="meta-val">{core.requirements}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Duración:</span>
                <span className="meta-val">{core.duration}</span>
              </div>
            </div>

            <button 
              onClick={() => handleChoose(core.id)}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              {core.ctaText} <ArrowRight size={18} />
            </button>
          </div>

          {/* Tarjeta Programa 2: Euroself Specialty */}
          <div className="program-card">
            <div className="program-header">
              <h3 className="program-name">{specialty.name}</h3>
              <div className="program-target-box">
                💼 {specialty.target}
              </div>

              <div className="program-price-container">
                <span className="program-price-currency">$</span>
                <span className="program-price-amount">{specialty.monthlyPrice.toLocaleString()}</span>
                <span className="program-price-period">MXN / mes</span>
              </div>
              <p className="program-price-subtext">
                4 pagos mensuales (Total: ${specialty.totalPrice.toLocaleString()} MXN)
              </p>
            </div>

            <ul className="program-features-list">
              {specialty.content.map((feature, idx) => (
                <li key={idx} className="program-feature-item">
                  <Check size={18} className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="program-meta-info">
              <div className="meta-row">
                <span className="meta-label">Requisito de ingreso:</span>
                <span className="meta-val">{specialty.requirements}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Duración:</span>
                <span className="meta-val">{specialty.duration}</span>
              </div>
            </div>

            <button 
              onClick={() => handleChoose(specialty.id)}
              className="btn-outline"
              style={{ width: '100%', borderColor: 'var(--navy-900)' }}
            >
              {specialty.ctaText} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsComparison;
