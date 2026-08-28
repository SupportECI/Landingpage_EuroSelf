import { Star, TrendingUp} from 'lucide-react';
import { TESTIMONIALS_DATA, METRICS_DATA } from '../data/landingData';

export function SocialProof() {
  return (
    <section className="social-proof-section section-spacing" id="testimonios">
      <div className="container">
        {/* Strip de Métricas de Alto Impacto */}
        <div className="metrics-strip">
          {METRICS_DATA.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <div className="metric-val">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <span className="badge-tag">Casos Reales de Éxito</span>
          <h2 className="section-title">Resultados medibles que transforman carreras</h2>
          <p className="section-subtitle">
            Conoce a profesionistas y estudiantes que alcanzaron la fluidez y certificaron su nivel con la metodología de Euroself.
          </p>
        </div>

        {/* Grid de Testimonios Reales */}
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="testimonial-avatar" 
                  loading="lazy" 
                />
                <div className="testimonial-user-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                  <span className="testimonial-city">{t.city}</span>
                </div>
              </div>

              {/* Badge de Resultado Concreto */}
              <div className="testimonial-badge-outcome">
                <TrendingUp size={16} />
                <span>{t.levelChange}</span>
              </div>

              <p className="testimonial-quote">
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {t.outcome.slice(0, 38)}...
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
