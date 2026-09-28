// Configuración de WhatsApp y generador de enlaces wa.me

export const WHATSAPP_PHONE = '529618496379'; // Número oficial de Euroself Academy

export const LEVEL_OPTIONS = [
  { id: 'none', label: 'No sé nada', valueText: 'Principiante / Desde cero (A1)' },
  { id: 'basic', label: 'Básico', valueText: 'Básico' },
  { id: 'intermediate', label: 'Intermedio', valueText: 'Intermedio' },
  { id: 'advanced', label: 'Avanzado', valueText: 'Avanzado' },
  { id: 'unsure', label: 'No estoy seguro, quiero hacer el examen', valueText: 'desconocido (quiero hacer el examen de ubicación gratuito)' },
];

export const GOAL_OPTIONS = [
  { id: 'work', label: 'Trabajo o profesión', valueText: 'trabajo o mi profesión' },
  { id: 'travel', label: 'Viajar', valueText: 'viajar' },
  { id: 'cert', label: 'Certificación (TOEIC)', valueText: 'una certificación oficial (TOEIC / TOEIC)' },
  { id: 'school', label: 'Escuela o universidad', valueText: 'la escuela o universidad' },
];

/**
 * Genera la URL dinámica de WhatsApp según la lógica de la Sección 3 del Brief
 * @param {Object} data { name, level, goal, program, phone }
 * @returns {string} URL tipo https://wa.me/...
 */
export function generateWhatsAppLink({ name, level, goal, program, phone = '' }) {
  const safeName = name && name.trim() ? name.trim() : 'un interesado';

  // Buscar textos amigables mapeados
  const levelObj = LEVEL_OPTIONS.find((l) => l.id === level || l.label === level);
  const levelText = levelObj ? levelObj.valueText : (level || 'por definir');

  const goalObj = GOAL_OPTIONS.find((g) => g.id === goal || g.label === goal);
  const goalText = goalObj ? goalObj.valueText : (goal || 'mejorar mis oportunidades');

  let baseMessage = `Hola, soy ${safeName}. Quiero información sobre el programa de inglés de Euroself. Mi nivel actual es ${levelText} y busco el inglés principalmente para ${goalText}.`;

  if (program) {
    baseMessage += ` Me interesa el plan ${program}.`;
  }

  if (phone && phone.trim()) {
    baseMessage += ` Mi teléfono es ${phone.trim()}.`;
  }

  baseMessage += ` ¿Me pueden orientar sobre el programa que más me conviene?`;

  const encodedText = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
}

/**
 * Mensaje directo genérico para botones de contacto rápido
 */
export function getQuickWhatsAppLink(customMessage = '') {
  const msg = customMessage || 'Hola, quiero recibir asesoría personalizada sobre los programas de inglés de Euroself Academy y la promoción de lanzamiento de $95/mes.';
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}
