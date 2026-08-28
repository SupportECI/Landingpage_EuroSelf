import { useState } from 'react';
import { User, Phone, MessageSquare, Check, Sparkles, Send, Lock } from 'lucide-react';
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

  // Preview dinámico del mensaje
  const previewLevel = LEVEL_OPTIONS.find((l) => l.id === formData.level)?.valueText || 'Básico';
  const previewGoal = GOAL_OPTIONS.find((g) => g.id === formData.goal)?.valueText || 'trabajo o mi profesión';
  const previewName = formData.name.trim() || '[Tu Nombre]';

  return (
    <div className="smart-form-card" id="formulario-captura">
      <div className="form-header">
        <span className="form-header-badge">
          <Sparkles size={13} /> Asesoría 1 a 1 Gratuita
        </span>
        <h3 className="form-title">Descubre tu plan ideal</h3>
        <p className="form-subtitle">
          Recibe recomendación personalizada y asegura tu precio de <strong>$975 MXN/mes</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Campo 1: Nombre */}
        <div className="form-group">
          <label className="form-label" htmlFor="form-name">
            <span>Tu nombre</span>
          </label>
          <div className="input-with-icon">
            <User size={18} className="input-icon" />
            <input
              id="form-name"
              type="text"
              className="form-input"
              placeholder="Ej. Carlos Mendoza"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Campo 2: Teléfono / WhatsApp */}
        <div className="form-group">
          <label className="form-label" htmlFor="form-phone">
            <span>WhatsApp / Teléfono</span>
            <span className="form-label-optional">(Opcional)</span>
          </label>
          <div className="input-with-icon">
            <Phone size={18} className="input-icon" />
            <input
              id="form-phone"
              type="tel"
              className="form-input"
              placeholder="Ej. 961 849 6379"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        </div>

        {/* Campo 3: Nivel de inglés actual (Botones interactivos) */}
        <div className="form-group">
          <label className="form-label">
            <span>Nivel de inglés actual</span>
          </label>
          <div className="pill-grid grid-full-first">
            {LEVEL_OPTIONS.map((opt) => {
              const isSelected = formData.level === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`pill-option-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleLevelSelect(opt.id)}
                >
                  {isSelected && <Check size={14} />}
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Campo 4: ¿Para qué quieres el inglés? (Botones interactivos) */}
        <div className="form-group">
          <label className="form-label">
            <span>¿Para qué buscas aprender inglés?</span>
          </label>
          <div className="pill-grid">
            {GOAL_OPTIONS.map((opt) => {
              const isSelected = formData.goal === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`pill-option-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleGoalSelect(opt.id)}
                >
                  {isSelected && <Check size={14} />}
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vista previa del mensaje de WhatsApp */}
        <div className="whatsapp-preview-box">
          <div className="whatsapp-preview-header">
            <MessageSquare size={14} /> Mensaje pre-cargado que enviarás:
          </div>
          <p className="whatsapp-preview-text">
            "Hola, soy {previewName}. Quiero información sobre el programa de inglés de Euroself. Mi nivel actual es {previewLevel} y busco el inglés principalmente para {previewGoal}. ¿Me pueden orientar...?"
          </p>
        </div>

        {/* CTA Específico */}
        <button type="submit" className="btn-whatsapp form-submit-btn">
          <Send size={18} /> Quiero conocer mi programa ideal
        </button>

        <div className="form-guarantee-note">
          <Lock size={13} /> Tus datos están 100% protegidos. Sin llamadas molestas.
        </div>
      </form>
    </div>
  );
}

export default CaptureForm;
