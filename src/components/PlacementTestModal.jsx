import { Sparkles, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PLACEMENT_TEST_INFO } from '../data/landingData';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';

export function PlacementTestSection({ onSelectRecommendedPlan }) {
  const { badge, title, description, benefits } = PLACEMENT_TEST_INFO;
  const whatsappUrl = getQuickWhatsAppLink(
    'Hola, quiero agendar mi examen de ubicación gratuito de inglés con los docentes de Euroself Academy.'
  );

  return (
    <section className="placement-section section-spacing" id="test-nivel">
      <div className="container">
        <div className="placement-compact-card">
          <span className="badge-tag badge-gold" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            <Sparkles size={14} /> {badge}
          </span>
          <h2 className="placement-compact-title">
            {title}
          </h2>
          <p className="placement-compact-desc">
            {description}
          </p>

          <div className="placement-benefits-list">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="placement-benefit-item">
                <CheckCircle2 size={18} className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="placement-actions-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '1rem', padding: '0.85rem 1.6rem' }}
            >
              <MessageSquare size={18} /> Agendar Examen por WhatsApp
            </a>

            {onSelectRecommendedPlan && (
              <button
                onClick={() => onSelectRecommendedPlan('Euroself Core')}
                className="btn-primary"
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.5rem' }}
              >
                <Calendar size={18} /> Solicitar Asesoría de Ubicación
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementTestSection;
