import React from 'react';
import { Sparkles, Heart, Gift, Palette, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { RevealAnimation } from './RevealAnimation';

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  hasDarkBg?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    num: '01 / HULE',
    title: 'Cumples que hacen ¡wow!',
    desc: 'Arcos, guirnaldas y rincones para soplar las velitas con estilo.',
    icon: Sparkles,
    bgColor: 'bg-[#DA90AE]', // Soft pink
    textColor: 'text-[#4B2032]',
  },
  {
    num: '02 / HULE',
    title: 'Baby showers',
    desc: 'Bienvenida suave, dulce y muy especial.',
    icon: Heart,
    bgColor: 'bg-[#F5F0B8]', // Yellow pastel
    textColor: 'text-[#4B2032]',
  },
  {
    num: '03 / HULE',
    title: 'Momentos para brindar',
    desc: 'Aniversarios, recibidas y todo lo que merece un brindis.',
    icon: Sparkles,
    bgColor: 'bg-[#E8A27F]', // Peach
    textColor: 'text-[#4B2032]',
  },
  {
    num: '04 / HULE',
    title: 'Kits de cumpleaños',
    desc: 'Kits listos con todo lo necesario para celebrar y decorar vos en casa.',
    icon: Gift,
    bgColor: 'bg-[#945B72]', // Plum
    textColor: 'text-[#FFFDF8]',
    hasDarkBg: true,
  },
  {
    num: '05 / HULE',
    title: 'Candy bar',
    desc: 'La mesa más fotografiada de la fiesta: rica, ordenada y llena de color.',
    icon: Palette,
    bgColor: 'bg-[#FFFDF8]', // Warm white
    textColor: 'text-[#4B2032]',
    borderColor: 'border-[#4B2032]/10',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="px-6 md:px-12 py-20 bg-[#F8F2E8] relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle
          label="LO QUE HACEMOS"
          title={
            <>
              Una fiesta con<br />
              <span className="text-[#CB4178] italic">personalidad</span><br />
              propia.
            </>
          }
          subtitle="Armamos una propuesta visual completa para que vos solo te ocupes de disfrutar y recibir a tu gente."
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            
            // Asymmetrical grid column shifts on desktop
            let offsetClass = '';
            if (index === 1) offsetClass = 'lg:translate-y-8';
            if (index === 2) offsetClass = 'lg:translate-y-16';
            if (index === 3) offsetClass = 'lg:translate-y-8';
            if (index === 4) offsetClass = 'lg:translate-y-16';

            return (
              <RevealAnimation
                key={index}
                variant="fade-up"
                delay={index * 0.1}
                className={`${offsetClass}`}
              >
                <div
                  className={`relative overflow-hidden h-[360px] md:h-[400px] flex flex-col justify-between p-8 rounded-[2rem] shadow-[0_15px_30px_rgba(75,32,50,0.03)] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(75,32,50,0.07)] group ${
                    service.bgColor
                  } ${service.textColor} ${service.borderColor || 'border-transparent'}`}
                >
                  {/* Top Row: Service Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] opacity-75">
                      {service.num}
                    </span>
                    {/* Tiny visual link badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 opacity-75" />
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div className="pr-4 z-10">
                    <h3 className="font-serif text-3xl leading-[1.1] mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed opacity-85">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Orbital SVGs and Button */}
                  <div className="absolute bottom-[-20px] right-[-20px] w-[140px] h-[140px] pointer-events-none transition-transform duration-700 group-hover:rotate-12">
                    {/* Ring Line 1 */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke={service.hasDarkBg ? '#FFFDF8' : '#4B2032'}
                        strokeWidth="0.75"
                        strokeDasharray="4,3"
                        fill="none"
                        className="opacity-20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={service.hasDarkBg ? '#FFFDF8' : '#4B2032'}
                        strokeWidth="0.5"
                        fill="none"
                        className="opacity-15"
                      />
                    </svg>

                    {/* Circular Floating Action Button inside orbital center */}
                    <div className="absolute top-[40px] left-[40px] w-12 h-12 pointer-events-auto rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm bg-white hover:scale-105 active:scale-95 group-hover:shadow-md cursor-pointer border-[#4B2032]/10 text-[#4B2032]">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
      
      {/* Spacer to align height nicely with the offset transforms in desktop */}
      <div className="hidden lg:block h-20"></div>
    </section>
  );
};
export default Services;
