
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 relative overflow-hidden">
      {/* Terrain Visual (The Land) with Refined Geometric Elements */}
      <div className="w-full h-32 relative -mb-1">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Enhanced Geometric Sun - Technical Style */}
          <g transform="translate(1300, 30)">
            <circle cx="0" cy="0" r="20" fill="#e2e8e2" opacity="0.15" />
            <circle cx="0" cy="0" r="12" fill="#e2e8e2" opacity="0.3" />
            <g stroke="#e2e8e2" strokeWidth="0.75" opacity="0.4">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line 
                  key={angle}
                  x1="0" y1="0" 
                  x2={35 * Math.cos((angle * Math.PI) / 180)} 
                  y2={35 * Math.sin((angle * Math.PI) / 180)} 
                />
              ))}
              {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
                <line 
                  key={angle}
                  x1="0" y1="0" 
                  x2={25 * Math.cos((angle * Math.PI) / 180)} 
                  y2={25 * Math.sin((angle * Math.PI) / 180)} 
                  opacity="0.5"
                />
              ))}
            </g>
          </g>

          {/* Geometric Low-Poly Horse - Positioned on a Ridge */}
          <g transform="translate(600, 35) scale(0.6)" opacity="0.8">
            <path 
              d="M10,60 L25,55 L40,55 L55,30 L65,25 L75,30 L70,50 L85,60 L80,90 L70,90 L75,65 L55,65 L50,90 L40,90 L45,60 L20,65 L15,90 L5,90 Z" 
              fill="#1e291e" 
            />
          </g>

          {/* The Terrain (Land) */}
          <path 
            d="M0,120 L1440,120 L1440,60 L1320,80 L1100,20 L900,100 L600,40 L300,90 L0,50 Z" 
            fill="#1e291e"
          ></path>
        </svg>
      </div>

      {/* Footer Content Area */}
      <div className="bg-[#1e291e] text-slate-300 py-16 px-10 md:px-16 w-full text-left">
        <div className="w-full space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            
            {/* About Us Section */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#7c9473] pl-4">
                About Us Protocol
              </h3>
              <p className="text-sm leading-relaxed font-medium mb-4">
                Standardized framework for Grades 7-12, synthesizing OER with verified human mentorship.
              </p>
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Architects:</div>
                <div className="text-xs font-bold uppercase tracking-tight text-[#7c9473]">A. Thorne / E. Vance / S. Jenkins / C. Oswald</div>
              </div>
            </div>

            {/* Objectives */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#7c9473] pl-4">
                System Objectives
              </h3>
              <ul className="text-sm space-y-3 font-medium">
                <li>• Mastery-based Delivery</li>
                <li>• Decoupled Learning</li>
                <li>• Volunteer Integration</li>
                <li>• Integrity Enforcement</li>
              </ul>
            </div>

            {/* Contact Protocol */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#7c9473] pl-4">
                Contact Interface
              </h3>
              <div className="text-sm space-y-2 font-medium">
                <div className="uppercase text-[10px] text-slate-500">Primary Node:</div>
                <div>+1 (555) 010-EDUGAP</div>
                <div className="pt-4 uppercase text-[10px] text-slate-500">Status:</div>
                <div className="text-[#7c9473]">Operational (24/7)</div>
              </div>
            </div>

            {/* Legal/Technical */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-[#7c9473] pl-4">
                Legal Repository
              </h3>
              <div className="text-xs space-y-3 font-bold uppercase tracking-widest text-slate-500">
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700">Registry Terms</div>
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700">Privacy Protocol</div>
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700">Audit Logs</div>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-[#7c9473] tracking-tighter">EB</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">EduGap Bridge Protocol © 2025</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
              Terminal Alpha v3.2.4
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
