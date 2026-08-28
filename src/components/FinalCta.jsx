import { MessageSquare, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { getQuickWhatsAppLink } from '../data/whatsappConfig';
import { PROMO_DATA } from '../data/landingData';

export function FinalCta({ onFormScroll }) {
  return (
    <section className="final-cta-section section-spacing">
      <div className="container">
        <div className="final-cta-card">
          <span className="badge-tag badge-gold">
            <Flame size={14} /> Oferta de Lanzamiento Vigente
          </span>
          <h2 className="section-title light" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            Empieza hoy tu programa personalizado de inglés
          </h2>
          <p className="section-subtitle light" style={{ maxWidth: '650px', margin: '0 auto 2.25rem', fontSize: '1.15rem' }}>
            Aprende a tu ritmo desde <strong>{PROMO_DATA.pricePerMonth} MXN/mes</strong> con clases en vivo, especialidad para tu profesión y certificación internacional VTest.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onFormScroll}
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}
            >
              <Sparkles size={18} /> Quiero mi programa ideal
            </button>

            <a
              href={getQuickWhatsAppLink('Hola, quiero aprovechar la tarifa de lanzamiento de $975 MXN/mes en Euroself Academy. ¿Me pueden dar informes?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}
            >
              <MessageSquare size={18} /> Inscribirme por WhatsApp
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap', opacity: 0.85 }}>
            <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} color="#38bdf8" /> Sin costos ocultos
            </span>
            <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} color="#38bdf8" /> Examen de ubicación gratis
            </span>
            <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} color="#38bdf8" /> Clases grabadas 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
