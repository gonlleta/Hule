import React, { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useAdminContext } from '../context/AdminContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdminLoggedIn, adminUser, setIsAdminModalOpen } = useAdminContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 h-20 md:h-24 flex items-center justify-between px-6 md:px-12 ${
          isScrolled
            ? 'bg-[#F8F2E8]/90 backdrop-blur-md border-b border-[#4B2032]/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#DA90AE]/40 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img src="/logo.jpg" alt="Hule Logo" className="w-full h-full object-cover scale-[1.05]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg md:text-xl leading-none text-[#4B2032] font-bold tracking-tight">hule</span>
            <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#945B72] uppercase font-bold">Studio de Celebración</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#inicio" className="text-sm font-medium text-[#4B2032] hover:text-[#CB4178] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CB4178] hover:after:w-full after:transition-all after:duration-300">Inicio</a>
          <a href="#servicios" className="text-sm font-medium text-[#4B2032] hover:text-[#CB4178] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CB4178] hover:after:w-full after:transition-all after:duration-300">Servicios</a>
          <a href="#nuestro-estilo" className="text-sm font-medium text-[#4B2032] hover:text-[#CB4178] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CB4178] hover:after:w-full after:transition-all after:duration-300">Nuestro estilo</a>
          <a href="#como-trabajamos" className="text-sm font-medium text-[#4B2032] hover:text-[#CB4178] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CB4178] hover:after:w-full after:transition-all after:duration-300">Cómo trabajamos</a>
          <a href="#contacto" className="text-sm font-medium text-[#4B2032] hover:text-[#CB4178] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CB4178] hover:after:w-full after:transition-all after:duration-300">Contacto</a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className={`px-3 py-2 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              isAdminLoggedIn
                ? 'bg-[#CB4178] text-white hover:bg-[#4B2032]'
                : 'bg-[#4B2032]/10 text-[#4B2032] hover:bg-[#4B2032]/20'
            }`}
            title="Panel de Administrador"
          >
            <User className="w-3.5 h-3.5" />
            <span>{isAdminLoggedIn ? adminUser?.name : 'Admin'}</span>
          </button>

          <a
            href="#contacto"
            className="px-5 py-2.5 bg-[#4B2032] hover:bg-[#CB4178] text-[#FFFDF8] rounded-full text-xs font-semibold tracking-wider font-mono uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#CB4178]/50"
          >
            Presupuesto →
          </a>
        </div>

        {/* Mobile Hamburguer Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú de navegación"
          className="flex md:hidden w-11 h-11 rounded-full border border-[#4B2032]/10 items-center justify-center text-[#4B2032] hover:bg-[#4B2032]/5 transition-colors focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
export default Header;
