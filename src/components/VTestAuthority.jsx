import { 
  ShieldCheck, 
  Cpu, 
  CheckCheck, 
  Award, 
  FileCheck, 
  Info
} from 'lucide-react';
import { VTEST_AUTHORITY_DATA } from '../data/landingData';
import alteLogo from '../assets/Logo_ALTE_2022.svg';
import iltaLogo from '../assets/logo_ilta.png';
import cenniLogo from '../assets/cenni_copy.png';

const sealLogos = {
  ALTE: alteLogo,
  ILTA: iltaLogo,
  CENNI: cenniLogo,
};

const vtestIconMap = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  CheckCheck: CheckCheck,
  Award: Award,
  FileCheck: FileCheck,
};

export function VTestAuthority() {
  const { headline, subheadline, costNote, pillars, seals } = VTEST_AUTHORITY_DATA;

  return (
    <section className="vtest-section section-spacing" id="certificacion">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Validez Oficial & Respaldo Global</span>
          <h2 className="section-title">{headline}</h2>
          <p className="section-subtitle">{subheadline}</p>
        </div>

        {/* Sellos de Confianza (ALTE, ILTA, CENNI) */}
        <div className="vtest-seals-row">
          {seals.map((seal, idx) => (
            <div key={idx} className="seal-card">
              <div className="seal-logo-box">
                <img 
                  src={sealLogos[seal.name]} 
                  alt={`Certificación oficial ${seal.name}`} 
                  className="seal-logo-img" 
                />
              </div>
              <h3 className="seal-name">{seal.name}</h3>
              <p className="seal-role">{seal.role}</p>
              <span className="seal-sub">{seal.subtitle}</span>
            </div>
          ))}
        </div>

        {/* Pilares de Autoridad */}
        <div className="vtest-features-grid">
          {pillars.map((pillar, idx) => {
            const IconComp = vtestIconMap[pillar.icon] || ShieldCheck;
            return (
              <div key={idx} className="vtest-feature-card">
                <IconComp size={28} className="vtest-card-icon" />
                <h3 className="vtest-card-title">{pillar.title}</h3>
                <p className="vtest-card-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Transparencia en Costo de Certificación */}
        <div className="vtest-price-transparency-box">
          <Info size={24} color="#b45309" style={{ flexShrink: 0 }} />
          <p>
            <strong>Transparencia Euroself:</strong> {costNote} Te preparamos a fondo para que la apruebes con la máxima calificación cuando decidas certificar tu nivel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VTestAuthority;
