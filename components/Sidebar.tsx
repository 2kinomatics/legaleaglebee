
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { AppView } from '../types';
import { ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentItem = NAV_ITEMS.find(item => item.id === currentView);
  const currentLabel = currentItem?.label || 'EduGap';

  // Breadcrumb simulation
  const path = ['EduGap', currentLabel];

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 h-screen bg-white border-r border-[#e2e8e2] flex flex-col items-center z-50 transition-all duration-500 ease-in-out shadow-lg overflow-hidden ${
        isHovered ? 'w-64' : 'w-12 md:w-16'
      }`}
    >
      <div className="h-full w-full flex flex-col relative">
        {/* Vertical State */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="rotate-[-90deg] whitespace-nowrap">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#7c9473]">
              {currentLabel}
            </span>
          </div>
        </div>

        {/* Expanded State */}
        <div className={`flex flex-col p-8 transition-opacity duration-500 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-12">
            <span className="text-2xl font-black text-[#7c9473] tracking-tighter">EB</span>
          </div>
          
          <div className="space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Current Location</div>
            <nav className="flex items-center flex-wrap gap-2 text-sm">
              {path.map((segment, idx) => (
                <React.Fragment key={idx}>
                  <span className={`font-medium ${idx === path.length - 1 ? 'text-[#4a5d4b]' : 'text-slate-400'}`}>
                    {segment}
                  </span>
                  {idx < path.length - 1 && <ChevronRight size={14} className="text-slate-300" />}
                </React.Fragment>
              ))}
            </nav>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-[#4a5d4b] leading-tight">
                {currentLabel}
              </h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Navigating through your personalized learning journey.
              </p>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-8 left-0 w-full flex justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}>
          <div className="text-[#c1ccc1] font-black text-xs tracking-widest">
            EST. 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
