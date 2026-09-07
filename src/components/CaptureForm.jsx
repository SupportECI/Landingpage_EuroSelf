import { useState } from 'react';
import { User, Phone, Check, Send, Lock } from 'lucide-react';
import { LEVEL_OPTIONS, GOAL_OPTIONS, generateWhatsAppLink } from '../data/whatsappConfig';

export function CaptureForm({ selectedProgram, onFormSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    level: 'basic',
    goal: 'work',
  });

  const program = selectedProgram || 'Euroself Core';

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLevelSelect = (levelId) => {
    setFormData((prev) => ({ ...prev, level: levelId }));
  };

  const handleGoalSelect = (goalId) => {
    setFormData((prev) => ({ ...prev, goal: goalId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = generateWhatsAppLink({
      name: formData.name,
      level: formData.level,
      goal: formData.goal,
      program,
      phone: formData.phone,
    });

    // Abrir WhatsApp en pestaña nueva o app nativa
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    if (onFormSubmitSuccess) {
      onFormSubmitSuccess({ ...formData, program });
    }
  };

  return (
    <div 
      className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-navy-950/20 border border-slate-200 text-slate-900 transition-all duration-300 relative lg:mt-6 scroll-mt-28"
      id="formulario-captura"
    >
      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight mb-1">
          Descubre tu plan ideal
        </h3>
        <p className="text-sm text-slate-500">
          Recibe recomendación personalizada y asegura tu precio de <strong className="text-navy-900 font-semibold">$895 MXN/mes</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo 1: Nombre */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5" htmlFor="form-name">
            Tu nombre
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              id="form-name"
              type="text"
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-cyan focus:ring-3 focus:ring-brand-cyan/15 focus:outline-none transition-all"
              placeholder="Ej. Carlos Mendoza"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Campo 2: Teléfono / WhatsApp */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs sm:text-sm font-bold text-navy-900" htmlFor="form-phone">
              WhatsApp / Teléfono
            </label>
            <span className="text-xs text-slate-400 font-normal">(Opcional)</span>
          </div>
          <div className="relative">
            <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              id="form-phone"
              type="tel"
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-cyan focus:ring-3 focus:ring-brand-cyan/15 focus:outline-none transition-all"
              placeholder="Ej. 55 7108 0066"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        </div>

        {/* Campo 3: Nivel de inglés actual */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5">
            Nivel de inglés actual
          </label>
          <div className="grid grid-cols-2 gap-2">
            {LEVEL_OPTIONS.map((opt, idx) => {
              const isSelected = formData.level === opt.id;
              const isLastFull = idx === LEVEL_OPTIONS.length - 1;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`${isLastFull ? 'col-span-2' : 'col-span-1'} p-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all duration-150 cursor-pointer text-center ${
                    isSelected
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md shadow-navy-900/20'
                      : 'bg-slate-50 text-navy-900 border-slate-200 hover:border-brand-cyan hover:bg-sky-50'
                  }`}
                  onClick={() => handleLevelSelect(opt.id)}
                >
                  {isSelected && <Check size={13} className="shrink-0 text-sky-300" />}
                  <span className="truncate">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Campo 4: ¿Para qué buscas aprender inglés? */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5">
            ¿Para qué buscas aprender inglés?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {GOAL_OPTIONS.map((opt) => {
              const isSelected = formData.goal === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`p-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all duration-150 cursor-pointer text-center ${
                    isSelected
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md shadow-navy-900/20'
                      : 'bg-slate-50 text-navy-900 border-slate-200 hover:border-brand-cyan hover:bg-sky-50'
                  }`}
                  onClick={() => handleGoalSelect(opt.id)}
                >
                  {isSelected && <Check size={13} className="shrink-0 text-sky-300" />}
                  <span className="truncate">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Específico */}
        <button 
          type="submit" 
          className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <Send size={18} /> Quiero conocer mi programa ideal
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
          <Lock size={12} /> Tus datos están 100% protegidos. Sin llamadas molestas.
        </div>
      </form>
    </div>
  );
}

export default CaptureForm;
