
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { AppView } from '../types';
import { Lock, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  isGuest?: boolean;
  currentPageTitle?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isGuest = false, currentPageTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use current item label as default, or use a provided sub-title like "Algebra / Unit 1"
  const currentItem = NAV_ITEMS.find(item => item.id === currentView);
  const displayTitle = currentPageTitle || currentItem?.label || 'Home';

  const isPublicView = (viewId: string) => {
    return ['home', 'resources', 'news', 'about', 'auth'].includes(viewId);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-100 flex flex-col items-start z-50 transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64 shadow-2xl' : 'w-14 md:w-16'
      }`}
    >
      <div className="h-full w-full flex flex-col p-4 relative">
        {/* Collapsed State Title */}
        {!isHovered && (
          <div className="absolute inset-0 flex flex-col items-center py-10 justify-between">
            <div className="font-black text-xl text-[#7c9473] tracking-tighter cursor-pointer" onClick={() => setView('home')}>EB</div>
            <div className="rotate-[-90deg] whitespace-nowrap mb-24">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
                {displayTitle}
              </span>
            </div>
            <ChevronRight size={14} className="text-slate-200" />
          </div>
        )}

        {/* Expanded State Content */}
        {isHovered && (
          <div className="flex flex-col space-y-12 animate-in fade-in duration-300 w-full px-4 pt-4">
            <div className="pb-6 border-b border-slate-50">
              <span className="text-xl font-black text-[#7c9473] tracking-tighter uppercase cursor-pointer" onClick={() => setView('home')}>EduGap Bridge</span>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Where to go?</div>
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setView(item.id as AppView)}
                  className={`text-[11px] font-black uppercase tracking-widest py-3 transition-all cursor-pointer border-l-4 pl-3 text-left group flex items-center justify-between ${
                    currentView === item.id 
                      ? 'border-[#7c9473] text-slate-900 bg-slate-50' 
                      : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'
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
              <p className="text-[10px] text-slate-300 uppercase font-bold tracking-widest">
                {isGuest ? '👋 Hello, Visitor!' : '✨ Welcome back!'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
