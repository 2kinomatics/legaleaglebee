
import React from 'react';
import { MOCK_RESOURCES } from '../constants';
import { User, UserProgress } from '../types';
import { CheckCircle, Clock, Trophy, Book, Flame } from 'lucide-react';

interface ProfileProps {
  user: User;
  progress: UserProgress;
}

const Profile: React.FC<ProfileProps> = ({ user, progress }) => {
  const completedResources = MOCK_RESOURCES.filter(r => r.progress === 100);
  const inProgressResources = MOCK_RESOURCES.filter(r => r.progress > 0 && r.progress < 100);

  const stats = [
    { label: 'Modules Verified', value: completedResources.length, icon: <CheckCircle size={18} /> },
    { label: 'System Uptime', value: '5 Days', icon: <Flame size={18} /> },
    { label: 'Token Achievement', value: '1,250', icon: <Trophy size={18} /> },
    { label: 'Compute Time', value: '14.5h', icon: <Clock size={18} /> },
  ];

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left">
      {/* Header Profile Info - Technical Dashboard Style */}
      <header className="w-full flex flex-col xl:flex-row gap-12 items-start border-b border-slate-100 pb-12">
        <div className="w-40 h-40 border-4 border-slate-900 grayscale p-1">
          <img src={`https://picsum.photos/seed/${user.id}/400`} alt="ID_ASSET" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-6">
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">{user.name}</h1>
              <span className="text-[10px] font-black px-4 py-1 bg-[#7c9473] text-white uppercase tracking-widest">Scholar_Verified</span>
            </div>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.4em]">Node: {user.id} | Track: {user.gradeLevel} Curriculum</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <Book size={14} className="text-[#7c9473]" />
              5 Active Data Streams
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <Trophy size={14} className="text-[#7c9473]" />
              3 Achievement Manifests
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid - Minimalist technical boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-8 border border-slate-100 bg-white hover:border-slate-900 transition-all flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{stat.label}</span>
              <div className="text-slate-400">{stat.icon}</div>
            </div>
            <div className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 w-full">
        {/* Completed Modules */}
        <section className="xl:col-span-7 space-y-8">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] border-l-4 border-slate-200 pl-4">Verified Completion Logs</h2>
          <div className="space-y-4">
            {completedResources.map(resource => (
              <div key={resource.id} className="p-8 border border-slate-50 bg-[#fcfdfc] flex items-center justify-between hover:border-[#7c9473] transition-all">
                <div>
                  <h4 className="font-black text-slate-800 text-sm uppercase tracking-tight">{resource.title}</h4>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-2">{resource.subject} // ID-{resource.id}</p>
                </div>
                <div className="text-[10px] font-black text-[#7c9473] uppercase tracking-widest px-4 py-1 border border-[#7c9473]/20">COMPLETED</div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Pathways */}
        <section className="xl:col-span-5 space-y-8">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] border-l-4 border-slate-200 pl-4">Live Mastery Streams</h2>
          <div className="space-y-6">
            {inProgressResources.map(resource => (
              <div key={resource.id} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-black text-slate-800 text-[11px] uppercase tracking-tight">{resource.title}</h4>
                  <span className="text-[10px] font-black text-slate-900">{resource.progress}%</span>
                </div>
                <div className="w-full h-1 bg-slate-100">
                  <div className="h-full bg-[#7c9473]" style={{ width: `${resource.progress}%` }}></div>
                </div>
              </div>
            ))}
            {inProgressResources.length === 0 && (
              <div className="p-16 text-center border-2 border-dashed border-slate-100">
                <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest">No active mastery streams detected.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
