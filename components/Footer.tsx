
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 relative overflow-hidden">
      {/* Playful Hill Terrain */}
      <div className="w-full h-32 relative -mb-1">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Friendly Sun Rising/Setting */}
          <g transform="translate(1300, 40)">
            <circle cx="0" cy="0" r="25" fill="#fde047" opacity="0.6" />
          </g>

          {/* Simple Horse on a Hill */}
          <g transform="translate(600, 40) scale(0.6)" opacity="0.9">
            <path 
              d="M10,60 L25,55 L40,55 L55,30 L65,25 L75,30 L70,50 L85,60 L80,90 L70,90 L75,65 L55,65 L50,90 L40,90 L45,60 L20,65 L15,90 L5,90 Z" 
              fill="#2d3a2d" 
            />
          </g>

          {/* Rolling Green Hills */}
          <path 
            d="M0,120 L1440,120 L1440,60 C1200,80 1100,20 900,100 C700,40 500,90 300,60 L0,80 Z" 
            fill="#2d3a2d"
          ></path>
        </svg>
      </div>

      {/* Footer Content Area */}
      <div className="bg-[#2d3a2d] text-slate-300 py-16 px-10 md:px-16 w-full text-left">
        <div className="w-full space-y-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            
            {/* About Us Section */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-widest border-l-2 border-[#7c9473] pl-4">
                About EduGap
              </h3>
              <p className="text-sm leading-relaxed font-medium mb-4">
                We're a team of teachers and students working together to make learning easier for everyone.
              </p>
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Built with love by:</div>
                <div className="text-xs font-bold uppercase tracking-tight text-[#7c9473]">The EduGap Community</div>
              </div>
            </div>

            {/* Goals */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-widest border-l-2 border-[#7c9473] pl-4">
                Our Goals
              </h3>
              <ul className="text-sm space-y-3 font-medium">
                <li>• Learning for Everyone</li>
                <li>• Making Friends</li>
                <li>• Helping Each Other</li>
                <li>• Fun Quizzes</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-widest border-l-2 border-[#7c9473] pl-4">
                Say Hello
              </h3>
              <div className="text-sm space-y-2 font-medium">
                <div className="uppercase text-[10px] text-slate-500">Call Us:</div>
                <div>+1 (555) EDU-HELP</div>
                <div className="pt-4 uppercase text-[10px] text-slate-500">Status:</div>
                <div className="text-[#7c9473]">Always here to help!</div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-white text-[10px] font-black uppercase tracking-widest border-l-2 border-[#7c9473] pl-4">
                Legal Bits
              </h3>
              <div className="text-xs space-y-3 font-bold uppercase tracking-widest text-slate-500">
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700">Privacy Policy</div>
                <div className="hover:text-white cursor-pointer transition-colors underline decoration-slate-700">Safety Rules</div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-[#7c9473] tracking-tighter">EduGap</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">© 2025 EduGap Bridge Community</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Made with Sparkles ✨
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
