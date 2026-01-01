
import React from 'react';

const FloatingGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40">
      {/* Sun */}
      <div className="absolute top-[10%] right-[15%] animate-bounce duration-[6000ms]">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="25" fill="#FDE047" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <line 
              key={angle}
              x1="50" y1="50" 
              x2={50 + 40 * Math.cos(angle * Math.PI / 180)} 
              y2={50 + 40 * Math.sin(angle * Math.PI / 180)} 
              stroke="#FDE047" strokeWidth="4" strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      {/* Cloud 1 */}
      <div className="absolute top-[20%] left-[10%] animate-pulse duration-[8000ms]">
        <svg width="120" height="80" viewBox="0 0 100 60" fill="#E2E8F0">
          <circle cx="30" cy="35" r="20" />
          <circle cx="50" cy="25" r="22" />
          <circle cx="75" cy="35" r="18" />
        </svg>
      </div>

      {/* Horse Icon (Floating) */}
      <div className="absolute bottom-[25%] right-[5%] animate-bounce duration-[10000ms]">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="#7C9473">
          <path d="M10,60 L25,55 L40,55 L55,30 L65,25 L75,30 L70,50 L85,60 L80,90 L70,90 L75,65 L55,65 L50,90 L40,90 L45,60 L20,65 L15,90 L5,90 Z" />
        </svg>
      </div>

      {/* Flower 1 */}
      <div className="absolute bottom-[15%] left-[15%] animate-spin duration-[15000ms]">
        <svg width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="15" fill="#F472B6" />
          {[0, 72, 144, 216, 288].map(angle => (
            <circle 
              key={angle}
              cx={50 + 25 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 25 * Math.sin(angle * Math.PI / 180)} 
              r="20" fill="#FBCFE8"
            />
          ))}
        </svg>
      </div>

       {/* Flower 2 */}
       <div className="absolute top-[50%] right-[10%] animate-spin duration-[20000ms]">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="15" fill="#FB923C" />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <circle 
              key={angle}
              cx={50 + 25 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 25 * Math.sin(angle * Math.PI / 180)} 
              r="15" fill="#FFEDD5"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default FloatingGraphics;
