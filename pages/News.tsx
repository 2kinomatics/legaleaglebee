
import React from 'react';
import { MOCK_NEWS } from '../constants';
import { Megaphone, Calendar, Trophy, Zap, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const News: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Megaphone className="text-[#7c9473]" size={32} />
          What's Happening?
        </h1>
        <p className="text-slate-500">Latest announcements, competitions, and community events.</p>
      </header>

      {/* Featured News */}
      <div className="bg-gradient-to-br from-[#7c9473] to-[#4a5d4b] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-xl shadow-[#e2e8e2]">
        <div className="relative z-10 max-w-xl">
          <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">Global Event</span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Summer STEM Expo 2024</h2>
          <p className="mt-4 text-[#e8f0e8] text-lg font-medium opacity-90 leading-relaxed">
            Showcase your science projects and win a chance to meet real astronauts from NASA!
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-[#4a5d4b] px-8 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              Sign Up Now
            </button>
            <button className="bg-white/10 text-white px-8 py-3 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <Zap size={300} strokeWidth={1} />
        </div>
      </div>

      {/* News Feed */}
      <div className="grid gap-6">
        {MOCK_NEWS.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-[2.5rem] border border-[#f0f3f0] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8">
            <div className={`w-16 h-16 rounded-3xl shrink-0 flex items-center justify-center text-2xl ${
              item.category === 'Competition' ? 'bg-orange-50 text-orange-600' :
              item.category === 'Update' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
            }`}>
              {item.category === 'Competition' ? <Trophy /> : item.category === 'Update' ? <Zap /> : <Calendar />}
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex justify-between items-center">
                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${
                  item.category === 'Competition' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                  item.category === 'Update' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'
                }`}>
                  {item.category}
                </span>
                <span className="text-xs text-slate-300 font-bold">{format(new Date(item.date), 'MMM d, yyyy')}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.content}</p>
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#8ba888] bg-[#f5f8f5] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <button className="text-[#7c9473] font-bold text-sm flex items-center gap-1 hover:underline">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
