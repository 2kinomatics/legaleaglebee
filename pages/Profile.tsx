
import React from 'react';
import { MOCK_RESOURCES } from '../constants';
import { User, UserProgress } from '../types';
import { CheckCircle, Clock, Trophy, Star, Book, Flame } from 'lucide-react';

interface ProfileProps {
  user: User;
  progress: UserProgress;
}

const Profile: React.FC<ProfileProps> = ({ user, progress }) => {
  const completedResources = MOCK_RESOURCES.filter(r => r.progress === 100);
  const inProgressResources = MOCK_RESOURCES.filter(r => r.progress > 0 && r.progress < 100);

  const stats = [
    { label: 'Classes Completed', value: completedResources.length, icon: <CheckCircle className="text-green-500" />, color: 'bg-green-50' },
    { label: 'Learning Streak', value: '5 Days', icon: <Flame className="text-orange-500" />, color: 'bg-orange-50' },
    { label: 'Points Earned', value: '1,250', icon: <Star className="text-yellow-500" />, color: 'bg-yellow-50' },
    { label: 'Total Hours', value: '14.5h', icon: <Clock className="text-blue-500" />, color: 'bg-blue-50' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
      {/* Header Profile Info */}
      <header className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[2.5rem] border border-[#f0f3f0] shadow-sm">
        <div className="w-32 h-32 bg-[#f0f7f0] rounded-[2rem] overflow-hidden ring-4 ring-[#fcfdfc] shadow-lg">
          <img src={`https://picsum.photos/seed/${user.id}/400`} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left space-y-2">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <h1 className="text-3xl font-black text-slate-900">{user.name}</h1>
            <span className="px-4 py-1 bg-[#7c9473] text-white text-xs font-bold rounded-full uppercase tracking-widest">Level 12 Explorer</span>
          </div>
          <p className="text-slate-500 font-medium">{user.gradeLevel} Student</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Trophy size={16} className="text-[#8ba888]" />
              <span>3 Badges Unlocked</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Book size={16} className="text-[#8ba888]" />
              <span>Enrolled in 5 Paths</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} p-6 rounded-3xl border border-white/50 shadow-sm flex flex-col items-center text-center space-y-2`}>
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-1">{stat.icon}</div>
            <div className="text-2xl font-black text-slate-800">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Completed Classes */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-slate-800">Completed Classes</h2>
            <span className="text-xs font-bold text-[#7c9473] uppercase tracking-widest">{completedResources.length} total</span>
          </div>
          <div className="space-y-4">
            {completedResources.map(resource => (
              <div key={resource.id} className="bg-white p-5 rounded-3xl border border-[#f0f3f0] flex items-center gap-5 shadow-sm hover:border-[#b5c99a] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm">{resource.title}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{resource.subject} • Completed</p>
                </div>
                <div className="text-[10px] font-black text-slate-300 uppercase">+50 XP</div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Learning */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-slate-800">Currently Learning</h2>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{inProgressResources.length} active</span>
          </div>
          <div className="space-y-4">
            {inProgressResources.map(resource => (
              <div key={resource.id} className="bg-white p-5 rounded-3xl border border-[#f0f3f0] flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Flame size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm">{resource.title}</h4>
                  <div className="mt-2 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7c9473]" style={{ width: `${resource.progress}%` }}></div>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-600">{resource.progress}%</div>
              </div>
            ))}
            {inProgressResources.length === 0 && (
              <div className="p-12 text-center bg-slate-50 border-2 border-dashed border-slate-100 rounded-[2.5rem]">
                <p className="text-slate-400 text-sm font-medium">No active classes. Time to start something new!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
