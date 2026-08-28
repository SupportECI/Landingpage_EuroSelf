import { useState } from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIncludes from './components/WhatIncludes';
import ProgramsComparison from './components/ProgramsComparison';
import EspModules from './components/EspModules';
import VTestAuthority from './components/VTestAuthority';
import PlacementTestSection from './components/PlacementTestModal';
import SocialProof from './components/SocialProof';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [selectedProgram, setSelectedProgram] = useState('Euroself Core');

  const scrollToForm = (programName) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    const formElement = document.getElementById('formulario-captura');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus visual sutil con clases Tailwind / animación
      formElement.classList.add('ring-4', 'ring-brand-cyan', 'ring-offset-2');
      setTimeout(() => {
        formElement.classList.remove('ring-4', 'ring-brand-cyan', 'ring-offset-2');
      }, 2000);
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      {/* 1A. Banner Superior Promocional */}
      <PromoBanner onCtaClick={() => scrollToForm('Euroself Core')} />

      {/* 1B. Navbar Principal */}
      <Navbar 
        onOpenPlacementTest={() => scrollToSection('test-nivel')} 
        onFormScroll={() => scrollToForm('Euroself Core')} 
      />

      <main className="flex-1">
        {/* 2 & 3. Hero con Formulario Inteligente y Lógica WhatsApp */}
        <Hero 
          selectedProgram={selectedProgram}
          onFormSubmitSuccess={(data) => {
            console.log('Lead generado hacia WhatsApp:', data);
          }}
          onOpenPlacementTest={() => scrollToSection('test-nivel')}
        />

        {/* 4. ¿Qué incluye estudiar con Euroself? */}
        <WhatIncludes />

        {/* 5. Tabla Comparativa de Programas (Core vs Specialty) */}
        <ProgramsComparison onSelectProgram={(pName) => scrollToForm(pName)} />

        {/* 5B. Especialidades por Profesión (Módulos ESP) */}
        <EspModules onSelectEspSpecialty={() => scrollToForm('Euroself Specialty')} />

        {/* 6. Certificación VTest — Bloque de Autoridad */}
        <VTestAuthority />

        {/* 7. Examen de Ubicación Gratuito según el MCER */}
        <PlacementTestSection 
          onSelectRecommendedPlan={(pName) => scrollToForm(pName)} 
        />

        {/* 8. Prueba Social y Casos de Éxito */}
        <SocialProof />

        {/* 9. Preguntas Frecuentes (Acordeón) */}
        <FaqSection />

        {/* 10A. CTA Final de Cierre */}
        <FinalCta onFormScroll={() => scrollToForm(selectedProgram)} />
      </main>

      {/* 10B. Footer con sellos, aviso de privacidad y contactos */}
      <Footer onNavClick={scrollToSection} />

      {/* Botón Flotante Permanente de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
