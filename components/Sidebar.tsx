
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView }) => {
  const currentLabel = NAV_ITEMS.find(item => item.id === currentView)?.label || 'EduGap';

  return (
    <div className="fixed left-0 top-0 h-screen w-12 md:w-16 bg-white border-r border-slate-200 flex flex-col items-center justify-center z-50 overflow-hidden">
      <div className="rotate-[-90deg] whitespace-nowrap">
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 opacity-80">
          {currentLabel}
        </span>
      </div>
      <div className="absolute bottom-8 text-slate-300 font-black text-xs">
        EB
      </div>
    </div>
  );
};

export default Sidebar;
