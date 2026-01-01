
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { AppView } from '../types';
import { Lock } from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  isGuest?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isGuest = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentItem = NAV_ITEMS.find(item => item.id === currentView);
  const currentLabel = currentItem?.label || 'CORE';

  const isPublicView = (viewId: string) => {
    return ['home', 'resources', 'news', 'about', 'auth'].includes(viewId);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-100 flex flex-col items-start z-50 transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64 shadow-2xl' : 'w-12 md:w-16'
      }`}
    >
      <div className="h-full w-full flex flex-col p-4 relative">
        {!isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-24">
            <div className="font-black text-xl text-[#7c9473] uppercase tracking-tighter cursor-pointer" onClick={() => setView('home')}>EB</div>
            <div className="rotate-[-90deg] whitespace-nowrap">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-300">
                {currentLabel}
              </span>
            </div>
          </div>
        )}

        {isHovered && (
          <div className="flex flex-col space-y-12 animate-in fade-in duration-300 w-full px-4">
            <div className="pb-6 border-b border-slate-50">
              <span className="text-2xl font-black text-[#7c9473] tracking-tighter uppercase cursor-pointer" onClick={() => setView('home')}>EDUGAP_BRIDGE</span>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Protocol Navigation</div>
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setView(item.id as AppView)}
                  className={`text-[10px] font-black uppercase tracking-widest py-3 transition-colors cursor-pointer border-l-4 pl-3 text-left group flex items-center justify-between ${
                    currentView === item.id ? 'border-[#7c9473] text-slate-900 bg-slate-50' : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {isGuest && !isPublicView(item.id) && (
                    <Lock size={10} className="text-slate-300 group-hover:text-slate-400" />
                  )}
                </button>
              ))}
            </nav>

            <div className="pt-12 border-t border-slate-50">
              <div className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">System Version 3.2.4</div>
              <p className="text-[10px] text-slate-400 mt-2 uppercase">{isGuest ? 'Guest Access Mode' : 'Scholar Verified Mode'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
