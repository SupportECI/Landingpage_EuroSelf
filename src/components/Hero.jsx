import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import CaptureForm from './CaptureForm';
import { PROMO_DATA } from '../data/landingData';

export function Hero({ selectedProgram, onFormSubmitSuccess, onOpenPlacementTest }) {
  return (
    <section 
      className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white scroll-mt-32 sm:scroll-mt-36 pt-10 pb-8 sm:pt-10 sm:pb-10 lg:pt-10 lg:pb-10 overflow-hidden" 
      id="hero"
    >
      {/* Background Glow Overlay */}
      <div 
        className="absolute -top-36 -right-24 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-36 -left-24 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-navy-700/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-start">
          {/* Left Column: Headlines, Trust & Features */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-sky-200 mb-6 shadow-sm max-w-full">
              <ShieldCheck size={16} className="text-sky-300 shrink-0" /> <span className="whitespace-normal leading-tight">Certificación VTest reconocida en +40 países</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight sm:leading-tight lg:leading-[1.15] tracking-tight mb-5">
              Aprende inglés a tu ritmo, con{' '}
              <span className="bg-linear-to-r from-sky-300 via-sky-400 to-brand-cyan bg-clip-text text-transparent">
                sesiones en vivo
              </span>{' '}
              y certificación internacional
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7 max-w-2xl">
              Un programa 100% personalizable y de autoaprendizaje — desde cero (A1) hasta especializarte en tu profesión — con plataforma interactiva 24/7 y respaldo oficial VTest, ALTE e ILTA.
            </p>

            {/* Bullets de Alto Valor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>2 sesiones en vivo/sem (Lun y Mié)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>1 tutoría individual 1 a 1 por semana</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>IA de corrección de pronunciación</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Módulos ESP adaptados a tu carrera</span>
              </div>
            </div>

            {/* Callout de Precio Transparente */}
            <div className="w-full flex items-center gap-3 p-3.5 sm:p-4 bg-sky-950/60 border-l-4 border-brand-cyan rounded-r-xl backdrop-blur-sm mb-6">
              <div className="text-xs sm:text-sm text-slate-200">
                🔥 <strong className="text-sky-300 font-bold text-sm sm:text-base">Desde {PROMO_DATA.pricePerMonth} {PROMO_DATA.currency}/mes</strong> — Precio congelado durante todo tu programa. Sin plazos forzosos.
              </div>
            </div>

            {/* Test de Ubicación Gratis Banner Link */}
            <div>
              <button 
                onClick={onOpenPlacementTest}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-150 cursor-pointer backdrop-blur-md"
              >
                <Sparkles size={16} className="text-amber-300" /> ¿No sabes tu nivel? Agenda tu Examen de Ubicación Gratis
              </button>
            </div>
          </div>

          {/* Right Column: High Converting Capture Form */}
          <div className="lg:col-span-5 w-full">
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
