import { 
  ShieldCheck, 
  Cpu, 
  CheckCheck, 
  Award, 
  FileCheck, 
  Info
} from 'lucide-react';
import { TOEIC_AUTHORITY_DATA } from '../data/landingData';
import alteLogo from '../assets/Logo_ALTE_2022.svg';
import iltaLogo from '../assets/logo_ilta.png';
import etsLogo from '../assets/ets-logo.png';
import atpLogo from '../assets/atp-logo.webp';
// import cenniLogo from '../assets/cenni_copy.png';

const sealLogos = {
  ETS: etsLogo,
  ATP: atpLogo,
  ALTE: alteLogo,
  ILTA: iltaLogo,
  // CENNI: cenniLogo,
};

const TOEICIconMap = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  CheckCheck: CheckCheck,
  Award: Award,
  FileCheck: FileCheck,
};

export function TOEICAuthority() {
  const { headline, subheadline, pillars } = TOEIC_AUTHORITY_DATA;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="certificacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Validez Oficial & Respaldo Global
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Sellos de Confianza (ETS, ATP, ALTE, ILTA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {/* ETS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="h-16 w-full flex items-center justify-center mb-4 p-1">
              <img 
                src={sealLogos.ETS} 
                alt="Certificación oficial ETS TOEIC" 
                className="max-h-14 max-w-[160px] w-auto h-auto object-contain transition-transform duration-200 hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              ETS
            </h3>
            <p className="text-xs sm:text-sm font-bold text-brand-blue mb-1">
              Creador Oficial TOEIC
            </p>
            <span className="text-xs text-slate-500">
              Educational Testing Service
            </span>
          </div>

          {/* ATP */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="h-16 w-full flex items-center justify-center mb-4 p-1">
              <img 
                src={sealLogos.ATP} 
                alt="Association of Test Publishers" 
                className="max-h-14 max-w-[160px] w-auto h-auto object-contain transition-transform duration-200 hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              ATP
            </h3>
            <p className="text-xs sm:text-sm font-bold text-brand-blue mb-1">
              Estándares de Evaluación
            </p>
            <span className="text-xs text-slate-500">
              Association of Test Publishers
            </span>
          </div>

          {/* ALTE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="h-16 w-full flex items-center justify-center mb-4 p-1">
              <img 
                src={sealLogos.ALTE} 
                alt="Certificación oficial ALTE" 
                className="max-h-14 max-w-[160px] w-auto h-auto object-contain transition-transform duration-200 hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              ALTE
            </h3>
            <p className="text-xs sm:text-sm font-bold text-brand-blue mb-1">
              Marco Común Europeo
            </p>
            <span className="text-xs text-slate-500">
              Pre-A1 a C2 Standard
            </span>
          </div>

          {/* ILTA */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="h-16 w-full flex items-center justify-center mb-4 p-1">
              <img 
                src={sealLogos.ILTA} 
                alt="Certificación oficial ILTA" 
                className="max-h-14 max-w-[160px] w-auto h-auto object-contain transition-transform duration-200 hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              ILTA
            </h3>
            <p className="text-xs sm:text-sm font-bold text-brand-blue mb-1">
              Validez Científica
            </p>
            <span className="text-xs text-slate-500">
              Psicometría Lingüística
            </span>
          </div>
        </div>

        {/* Pilares de Autoridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, idx) => {
            const IconComp = TOEICIconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="text-brand-blue mb-3">
                  <IconComp size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transparencia en Costo de Certificación */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 flex items-start sm:items-center gap-4 max-w-4xl mx-auto shadow-sm">
          <Info size={24} className="text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong className="font-bold text-amber-900">Transparencia Euroself:</strong> Te preparamos a fondo para que la apruebes con la máxima calificación cuando decidas certificar tu nivel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TOEICAuthority;
