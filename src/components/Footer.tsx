import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';
import { RevealAnimation } from './RevealAnimation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full z-20 overflow-hidden">
      
      {/* --- PRE-FOOTER (Yellow Section) --- */}
      <div className="bg-[#F5F0B8] py-16 md:py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center paper-grain">
        {/* Abstract balloons showing from bottom/side borders */}
        {/* Bottom Left Balloon */}
        <div className="absolute bottom-[-40px] left-[5%] w-24 h-36 opacity-85 select-none pointer-events-none transform -rotate-12 animate-float-balloon-2">
          <svg viewBox="0 0 100 150" className="w-full h-full">
            <path d="M50,10 C20,10 10,40 10,70 C10,100 30,120 50,120 C70,120 90,100 90,70 C90,40 80,10 50,10 Z" fill="#CB4178" stroke="#4B2032" strokeWidth="1.5" />
            <path d="M47,120 L53,120 L50,126 Z" fill="#CB4178" stroke="#4B2032" strokeWidth="1.5" />
            <path d="M50,126 Q45,140 52,150" stroke="#4B2032" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>
        
        {/* Bottom Right Balloon */}
        <div className="absolute bottom-[-20px] right-[10%] w-28 h-40 opacity-80 select-none pointer-events-none transform rotate-12 animate-float-balloon-1">
          <svg viewBox="0 0 100 150" className="w-full h-full">
            <path d="M50,10 C20,10 10,40 10,70 C10,100 30,120 50,120 C70,120 90,100 90,70 C90,40 80,10 50,10 Z" fill="#FFFDF8" stroke="#4B2032" strokeWidth="1.5" />
            <path d="M47,120 L53,120 L50,126 Z" fill="#FFFDF8" stroke="#4B2032" strokeWidth="1.5" />
            <path d="M50,126 Q55,140 48,150" stroke="#4B2032" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Top Right Orange Blob Balloon */}
        <div className="absolute top-[-30px] right-[5%] w-20 h-28 opacity-60 select-none pointer-events-none transform -rotate-12 animate-float-balloon-4">
          <svg viewBox="0 0 100 150" className="w-full h-full">
            <path d="M50,10 C20,10 10,40 10,70 C10,100 30,120 50,120 C70,120 90,100 90,70 C90,40 80,10 50,10 Z" fill="#E8A27F" stroke="#4B2032" strokeWidth="1.2" />
            <path d="M47,120 L53,120 L50,126 Z" fill="#E8A27F" stroke="#4B2032" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Title Content */}
        <div className="relative z-10">
          <RevealAnimation variant="scale-up">
            <h2 className="font-serif-tight text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] text-[#4B2032] font-bold tracking-tight mb-2 leading-none">
              Más ideas, más color.
            </h2>
          </RevealAnimation>
          <RevealAnimation variant="fade-up" delay={0.2}>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#945B72] uppercase font-bold">
              PLANIFIQUEMOS TU PRÓXIMA FIESTA
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* --- MAIN FOOTER (Bordeaux Section) --- */}
      <div className="bg-[#4B2032] text-[#FFFDF8] pt-16 pb-12 px-6 md:px-12 border-t border-white/5 paper-grain">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Headline */}
          <div className="flex flex-col text-left lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-[#DA90AE]/30 overflow-hidden shadow-sm">
                <img src="/logo.jpg" alt="Hule Logo" className="w-full h-full object-cover scale-[1.05]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-none font-bold tracking-tight">hule</span>
                <span className="font-mono text-[8px] tracking-[0.2em] text-[#E9CBB4] uppercase font-bold">Studio</span>
              </div>
            </div>
            <p className="font-sans text-xs text-[#E9CBB4]/70 leading-relaxed mb-4 max-w-xs">
              Hule — Studio de Celebración.<br />
              Celebraciones pensadas para sentirse muy tuyas.
            </p>
            <span className="font-mono text-[10px] tracking-wider text-[#F5F0B8] uppercase font-bold">
              CAMPANA, BUENOS AIRES
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-left">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-[#E9CBB4] uppercase font-bold mb-5">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleScroll('inicio')} className="text-white/70 hover:text-[#DA90AE] transition-colors focus:outline-none text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('servicios')} className="text-white/70 hover:text-[#DA90AE] transition-colors focus:outline-none text-left">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('nuestro-estilo')} className="text-white/70 hover:text-[#DA90AE] transition-colors focus:outline-none text-left">
                  Nuestro estilo
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('como-trabajamos')} className="text-white/70 hover:text-[#DA90AE] transition-colors focus:outline-none text-left">
                  Cómo trabajamos
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('contacto')} className="text-white/70 hover:text-[#DA90AE] transition-colors focus:outline-none text-left">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col text-left">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-[#E9CBB4] uppercase font-bold mb-5">
              Sociales
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/hule.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#DA90AE] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#DA90AE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493489000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#DA90AE] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DA90AE]" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:studiohule@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-[#DA90AE] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#DA90AE]" />
                  <span>studiohule@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="flex flex-col text-left">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-[#E9CBB4] uppercase font-bold mb-5">
              Ubicación & Cobertura
            </h3>
            <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
              Trabajamos principalmente en Campana, Zárate, Escobar y alrededores. Consultanos por traslados a otras zonas.
            </p>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#F5F0B8]">
              <span>Diseñado con</span>
              <Heart className="w-3 h-3 fill-[#CB4178] stroke-none" />
              <span>en Buenos Aires</span>
            </div>
          </div>

        </div>

        {/* Footer Meta bottom */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {currentYear} Hule — Studio de Celebración. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
export default Footer;
