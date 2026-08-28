import { CheckCircle2, ShieldCheck, Sparkles} from 'lucide-react';
import CaptureForm from './CaptureForm';
import { PROMO_DATA } from '../data/landingData';

export function Hero({ selectedProgram, onFormSubmitSuccess, onOpenPlacementTest }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headlines, Trust & Features */}
          <div className="hero-content">
            <div className="hero-trust-badge">
              <ShieldCheck size={16} /> Certificación VTest reconocida en +40 países
            </div>

            <h1 className="hero-headline">
              Aprende inglés a tu ritmo, con <span className="highlight">clases en vivo</span> y certificación internacional
            </h1>

            <p className="hero-subheadline">
              Un programa 100% personalizable — desde cero (A1) hasta especializarte en tu profesión — con plataforma interactiva 24/7 y respaldo oficial VTest, ALTE e ILTA.
            </p>

            {/* Bullets de Alto Valor */}
            <div className="hero-highlights-list">
              <div className="hero-highlight-item">
                <CheckCircle2 size={18} className="icon-check" />
                <span>2 clases en vivo/sem (Lun y Mié 8–9 pm)</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle2 size={18} className="icon-check" />
                <span>1 tutoría individual 1 a 1 por semana</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle2 size={18} className="icon-check" />
                <span>IA de corrección de pronunciación</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle2 size={18} className="icon-check" />
                <span>Módulos ESP adaptados a tu carrera</span>
              </div>
            </div>

            {/* Callout de Precio Transparente */}
            <div className="hero-price-callout">
              <div className="hero-price-callout-text">
                🔥 <strong>Desde {PROMO_DATA.pricePerMonth} {PROMO_DATA.currency}/mes</strong> — Precio congelado durante todo tu programa. Sin plazos forzosos.
              </div>
            </div>

            {/* Test de Ubicación Gratis Banner Link */}
            <div style={{ marginTop: '1.25rem' }}>
              <button 
                onClick={onOpenPlacementTest}
                className="btn-outline-white"
                style={{ fontSize: '0.88rem', padding: '0.6rem 1.1rem' }}
              >
                <Sparkles size={16} /> ¿No sabes tu nivel? Agenda tu Examen de Ubicación Gratis
              </button>
            </div>
          </div>

          {/* Right Column: High Converting Capture Form */}
          <div className="hero-form-wrapper">
            <CaptureForm 
              selectedProgram={selectedProgram}
              onFormSubmitSuccess={onFormSubmitSuccess} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
