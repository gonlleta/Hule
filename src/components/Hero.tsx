import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { RevealAnimation } from './RevealAnimation';
import BalloonArtwork from './BalloonArtwork';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-[#F8F2E8] paper-grain"
    >
      {/* Background Animated Blobs (Self-contained vectors with backdrop filters for a premium glass-paper feel) */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-[#F5F0B8] opacity-60 filter blur-[80px] animate-float-slow pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#DA90AE] opacity-50 filter blur-[100px] animate-float-medium pointer-events-none z-0"></div>
      <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#E8A27F] opacity-40 filter blur-[90px] animate-float-slow pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Title and details */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Top Label */}
          <RevealAnimation variant="fade-up" delay={0.1}>
            <span className="font-mono text-xs tracking-[0.25em] text-[#945B72] font-bold uppercase mb-4 block">
              — Dónde cada detalle importa
            </span>
          </RevealAnimation>

          {/* Hero Headline */}
          <RevealAnimation variant="fade-up" delay={0.25}>
            <h1 className="font-serif-tight text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1.02] tracking-tight text-[#4B2032] mb-6 font-bold">
              Hacemos que tu<br />
              <span className="text-[#CB4178] relative inline-block">
                fiesta
                {/* Underline ornament SVG */}
                <svg className="absolute left-0 bottom-[-4px] w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,7 C30,2 70,2 100,7" stroke="#CB4178" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span> sea<br />
              tan única como vos.
            </h1>
          </RevealAnimation>

          {/* Subtext description */}
          <RevealAnimation variant="fade-up" delay={0.4}>
            <p className="font-sans text-[#945B72] text-lg md:text-xl max-w-lg leading-relaxed mb-8">
              Globos, color y detalles para celebrar eso que no querés que pase desapercibido.
            </p>
          </RevealAnimation>

          {/* Call-to-actions buttons */}
          <RevealAnimation variant="fade-up" delay={0.5}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <button
                onClick={() => scrollToSection('contacto')}
                className="group px-7 py-4 bg-[#CB4178] hover:bg-[#4B2032] text-[#FFFDF8] rounded-full text-sm font-semibold tracking-wider font-mono uppercase shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Contame tu idea</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>

              <button
                onClick={() => scrollToSection('servicios')}
                className="px-6 py-4 border border-[#4B2032]/20 hover:border-[#4B2032] text-[#4B2032] font-semibold text-sm rounded-full tracking-wider font-mono uppercase transition-all duration-300 flex items-center gap-2 hover:bg-[#4B2032]/5"
              >
                <span>Ver inspiración</span>
                <span>↘</span>
              </button>
            </div>
          </RevealAnimation>

          {/* Badges footer */}
          <RevealAnimation variant="fade-up" delay={0.6} className="border-t border-[#4B2032]/10 pt-6 flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#945B72] font-mono">
              <MapPin className="w-4 h-4 text-[#CB4178]" />
              <span>Campana, Buenos Aires</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#945B72] font-mono">
              <Star className="w-4 h-4 text-[#CB4178]" />
              <span>Diseños personalizados</span>
            </div>
          </RevealAnimation>

        </div>

        {/* Right Column: High visual balloon layout */}
        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <RevealAnimation variant="scale-up" delay={0.35} className="w-full">
            <BalloonArtwork />
          </RevealAnimation>
        </div>

      </div>
    </section>
  );
};
export default Hero;
