import React from 'react';
import { SectionTitle } from './SectionTitle';
import { RevealAnimation } from './RevealAnimation';
import { useAdminContext } from '../context/AdminContext';

export const InspirationGallery: React.FC = () => {
  const { siteContent } = useAdminContext();
  const galleryData = siteContent.gallery;

  return (
    <section id="nuestro-estilo" className="px-6 md:px-12 py-20 bg-[#F8F2E8] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionTitle
          label="UN POQUITO DE HULE"
          title={
            <>
              Color, textura<br />
              y <span className="text-[#CB4178] italic">alegría</span>.
            </>
          }
          subtitle="Nos inspiramos en tu historia, en una canción, en ese mantel que te encanta. Las mejores ideas suelen empezar en una charla."
        />

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-8 items-start">
          {galleryData.map((card, index) => (
            <RevealAnimation
              key={card.id || index}
              variant="fade-up"
              delay={0.1 + (index % 3) * 0.15}
              className={`w-full ${card.offsetClass || ''}`}
            >
              <div
                className={`${card.bgColor} rounded-[2.5rem] p-8 ${card.heightClass || 'h-[450px] lg:h-[500px]'} flex flex-col justify-between overflow-hidden shadow-[0_15px_30px_rgba(75,32,50,0.03)] border border-[#4B2032]/5 relative group hover:-translate-y-1 ${card.hoverClass || ''} transition-transform duration-500`}
              >
                {/* Image background with subtle gradient overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                  <img 
                    src={card.imgSrc} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2032]/80 via-[#4B2032]/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>

                {/* Text Layer */}
                <div className="relative z-10 text-left mt-auto">
                  <span className={`font-mono text-[9px] font-bold tracking-[0.25em] ${card.tagColor} uppercase block mb-2 drop-shadow-sm`}>
                    {card.num}
                  </span>
                  <h4 className="font-serif text-2xl lg:text-3xl text-white font-semibold leading-tight max-w-[260px] drop-shadow-md">
                    {card.title}
                  </h4>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;
