import React from 'react';
import { RevealAnimation } from './RevealAnimation';

export const BalloonArtwork: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center p-4">
      {/* Decorative Rotating/Orbiting Elements in Background */}
      <div className="absolute inset-0 border-[1.5px] border-dashed border-[#CB4178]/30 rounded-full animate-spin-slow pointer-events-none"></div>
      
      {/* Main SVG Composition */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(75,32,50,0.08)] relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background blobs/circles */}
        <circle cx="250" cy="250" r="170" fill="#DA90AE" opacity="0.85" />
        <path 
          d="M 120,250 C 120,150 180,100 280,120 C 380,140 400,220 380,310 C 360,400 280,410 200,380 C 120,350 120,300 120,250 Z" 
          fill="#FFFDF8" 
          opacity="0.9"
        />
        <circle cx="210" cy="180" r="110" fill="#F5F0B8" opacity="0.5" />
        <circle cx="310" cy="300" r="120" fill="#E8A27F" opacity="0.4" />

        {/* --- BALLOONS STRINGS (Drawn from common cluster point near bottom) --- */}
        <g stroke="#4B2032" strokeWidth="1.2" fill="none" opacity="0.45">
          {/* Thread for Balloon 1 */}
          <path d="M 190, 180 Q 210, 290 250, 390" />
          {/* Thread for Balloon 2 */}
          <path d="M 245, 140 Q 235, 270 250, 390" />
          {/* Thread for Balloon 3 */}
          <path d="M 315, 190 Q 285, 290 250, 390" />
          {/* Thread for Balloon 4 */}
          <path d="M 165, 270 Q 200, 330 250, 390" />
          {/* Thread for Balloon 5 */}
          <path d="M 330, 270 Q 290, 330 250, 390" />
          {/* Thread for Balloon 6 */}
          <path d="M 255, 240 Q 250, 310 250, 390" />
        </g>

        {/* --- FLOATING BALLOONS GROUPS --- */}

        {/* Balloon 1: Cream (Top Left) */}
        <g className="animate-float-balloon-1">
          <g transform="translate(190, 180)">
            <path
              d="M 0 0 C -25 -35, -35 -70, 0 -90 C 35 -70, 25 -35, 0 0 Z"
              fill="#FFFDF8"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            {/* Knot */}
            <path d="M -3 0 L 3 0 L 0 5 Z" fill="#FFFDF8" stroke="#4B2032" strokeWidth="1" />
            {/* Soft highlight */}
            <path d="M -15 -70 A 18 18 0 0 1 -5 -82" stroke="#4B2032" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15" />
          </g>
        </g>

        {/* Balloon 2: Yellow Pastel (Top Center) */}
        <g className="animate-float-balloon-2">
          <g transform="translate(245, 140)">
            <path
              d="M 0 0 C -28 -38, -38 -75, 0 -98 C 28 -75, 28 -38, 0 0 Z"
              fill="#F5F0B8"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            <path d="M -3 0 L 3 0 L 0 5 Z" fill="#F5F0B8" stroke="#4B2032" strokeWidth="1" />
            <path d="M -16 -75 A 20 20 0 0 1 -5 -88" stroke="#FFFDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>
        </g>

        {/* Balloon 3: Pink Soft (Top Right) */}
        <g className="animate-float-balloon-3">
          <g transform="translate(315, 190)">
            <path
              d="M 0 0 C -24 -32, -32 -65, 0 -85 C 32 -65, 24 -32, 0 0 Z"
              fill="#DA90AE"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            <path d="M -3 0 L 3 0 L 0 5 Z" fill="#DA90AE" stroke="#4B2032" strokeWidth="1" />
            <path d="M -12 -65 A 16 16 0 0 1 -4 -76" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          </g>
        </g>

        {/* Balloon 4: Peach (Middle Left) */}
        <g className="animate-float-balloon-4">
          <g transform="translate(165, 270)">
            <path
              d="M 0 0 C -26 -35, -36 -70, 0 -92 C 36 -70, 26 -35, 0 0 Z"
              fill="#E8A27F"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            <path d="M -3 0 L 3 0 L 0 5 Z" fill="#E8A27F" stroke="#4B2032" strokeWidth="1" />
            <path d="M -14 -70 A 18 18 0 0 1 -5 -82" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>
        </g>

        {/* Balloon 5: Dark Bordeaux (Middle Right) */}
        <g className="animate-float-balloon-5">
          <g transform="translate(330, 270)">
            <path
              d="M 0 0 C -26 -35, -36 -70, 0 -92 C 36 -70, 26 -35, 0 0 Z"
              fill="#4B2032"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            <path d="M -3 0 L 3 0 L 0 5 Z" fill="#4B2032" stroke="#4B2032" strokeWidth="1" />
            <path d="M -14 -70 A 18 18 0 0 1 -5 -82" stroke="#FFFDF8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
          </g>
        </g>

        {/* Balloon 6: Hot Pink (Center Focus) */}
        <g className="animate-float-balloon-6">
          <g transform="translate(255, 240)">
            <path
              d="M 0 0 C -32 -42, -42 -85, 0 -110 C 42 -85, 32 -42, 0 0 Z"
              fill="#CB4178"
              stroke="#4B2032"
              strokeWidth="1.5"
            />
            <path d="M -3.5 0 L 3.5 0 L 0 6 Z" fill="#CB4178" stroke="#4B2032" strokeWidth="1" />
            <path d="M -18 -85 A 22 22 0 0 1 -6 -100" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>
        </g>
      </svg>

      {/* --- OVERLAID TILTED CARD --- */}
      <RevealAnimation
        variant="scale-up"
        delay={0.5}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[220px] bg-[#FFFDF8] border border-[#4B2032]/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(75,32,50,0.12)] rotate-[-4deg] z-20 hover:rotate-0 transition-transform duration-500"
      >
        <div className="flex flex-col text-left">
          {/* Handwritten/Serif text style */}
          <span className="font-serif text-[#4B2032] text-xl font-normal leading-[1.1] mb-4 block">
            Hecho<br />
            para<br />
            celebrar
          </span>
          
          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#CB4178] mb-3"></div>
          
          {/* Monospace tag */}
          <span className="font-mono text-[9px] font-bold text-[#945B72] tracking-[0.2em] uppercase leading-none">
            Campana · Bs.As.
          </span>
        </div>
      </RevealAnimation>
    </div>
  );
};
export default BalloonArtwork;
