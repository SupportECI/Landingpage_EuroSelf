import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, CheckCircle2, ExternalLink } from 'lucide-react';
import { VIDEO_TESTIMONIALS, METRICS_DATA } from '../data/landingData';

export function SocialProof() {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Split videos into pages according to itemsPerPage
  const pages = [];
  for (let i = 0; i < VIDEO_TESTIMONIALS.length; i += itemsPerPage) {
    pages.push(VIDEO_TESTIMONIALS.slice(i, i + itemsPerPage));
  }

  const totalPages = pages.length;
  // Compute safe page index during render to avoid cascading renders
  const activePage = Math.min(currentPage, Math.max(0, totalPages - 1));

  const prevSlide = () => {
    setCurrentPage(() => (activePage <= 0 ? totalPages - 1 : activePage - 1));
  };

  const nextSlide = () => {
    setCurrentPage(() => (activePage >= totalPages - 1 ? 0 : activePage + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 bg-navy-900 text-white rounded-3xl p-6 sm:p-10 mb-16 shadow-xl shadow-navy-950/15">
          {METRICS_DATA.map((metric, idx) => (
            <div 
              key={idx} 
              className={`text-center ${idx !== METRICS_DATA.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-400 tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 text-brand-cyan font-bold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider mb-3">
            Casos Reales de Éxito
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Resultados que transforman vidas y carreras
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Escucha directamente los testimonios en video de nuestros alumnos y descubre cómo alcanzaron la fluidez con Eurocentro de Idiomas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Controls Bar Above Carousel */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Mostrando {activePage + 1} de {totalPages} {totalPages === 1 ? 'página' : 'páginas'} ({VIDEO_TESTIMONIALS.length} testimonios)
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-brand-cyan hover:text-white hover:border-brand-cyan shadow-sm hover:shadow transition-all flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-brand-cyan hover:text-white hover:border-brand-cyan shadow-sm hover:shadow transition-all flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            className="overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {pages.map((pageVideos, pageIdx) => (
                <div 
                  key={pageIdx}
                  className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6 p-1"
                >
                  {pageVideos.map((video, vIdx) => {
                    const globalIndex = pageIdx * itemsPerPage + vIdx + 1;
                    return (
                      <div 
                        key={video.id}
                        className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
                      >
                        {/* Frame Header */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-cyan/10 text-brand-cyan font-extrabold text-xs">
                              0{globalIndex}
                            </span>
                            <span className="font-bold text-sm text-navy-900">
                              Testimonio de Alumno
                            </span>
                          </div>
                          <div className="flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill="currentColor" />
                            ))}
                          </div>
                        </div>

                        {/* Video Frame */}
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-navy-950 shadow-inner border border-slate-100">
                          <iframe
                            src={`${video.embedUrl}?rel=0`}
                            title={video.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>

                        {/* Frame Footer */}
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                            <span>Caso Real Verificado • Eurocentro</span>
                          </div>
                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors"
                          >
                            <span>Ver en YouTube</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {pages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activePage === idx
                    ? 'w-8 bg-brand-cyan'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al grupo ${idx + 1}`}
              />
            ))}
          </div>

          {/* Quick Tabs to jump to specific video */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            {VIDEO_TESTIMONIALS.map((video, idx) => {
              const targetPage = Math.floor(idx / itemsPerPage);
              const isActive = activePage === targetPage;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setCurrentPage(targetPage)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Play size={10} className={isActive ? 'text-sky-400 fill-sky-400' : 'text-slate-400'} />
                  <span>Video {idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
