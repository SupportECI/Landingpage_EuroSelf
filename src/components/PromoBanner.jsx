import { ArrowRight, Flame } from 'lucide-react';
import { PROMO_DATA } from '../data/landingData';

export function PromoBanner({ onCtaClick }) {
  return (
    <aside 
      className="bg-gradient-to-r from-navy-950 via-navy-700 to-navy-950 text-white py-2.5 px-4 text-sm font-medium border-b border-white/10 relative z-50"
      aria-label="Aviso promocional de lanzamiento"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-3 gap-y-1.5 text-center">
        <span className="inline-flex items-center gap-1 bg-brand-gold text-navy-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
          <Flame size={13} className="text-navy-950" />
          Lanzamiento Exclusivo
        </span>
        <p className="text-slate-200 text-xs sm:text-sm">
          Inscríbete desde{' '}
          <strong className="text-sky-300 font-bold">
            {PROMO_DATA.pricePerMonth} {PROMO_DATA.currency}/mes
          </strong>{' '}
          — {PROMO_DATA.urgencyText}
        </p>
        <button 
          onClick={onCtaClick}
          className="text-brand-gold hover:text-amber-200 font-bold text-xs sm:text-sm underline cursor-pointer inline-flex items-center gap-1 transition-colors duration-150"
        >
          Asegurar lugar <ArrowRight size={13} />
        </button>
      </div>
    </aside>
  );
}

export default PromoBanner;
