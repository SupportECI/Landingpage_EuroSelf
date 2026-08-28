import { ArrowRight, Flame } from 'lucide-react';
import { PROMO_DATA } from '../data/landingData';

export function PromoBanner({ onCtaClick }) {
  return (
    <aside className="promo-banner" aria-label="Aviso promocional de lanzamiento">
      <div className="container">
        <span className="promo-tag">
          <Flame size={14} style={{ marginRight: 3, verticalAlign: 'middle' }} />
          Lanzamiento Exclusivo
        </span>
        <p>
          Inscríbete desde <strong className="promo-price-highlight">{PROMO_DATA.pricePerMonth} {PROMO_DATA.currency}/mes</strong> — {PROMO_DATA.urgencyText}
        </p>
        <button 
          onClick={onCtaClick}
          className="promo-link"
          style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
        >
          Asegurar lugar <ArrowRight size={14} />
        </button>
      </div>
    </aside>
  );
}

export default PromoBanner;
