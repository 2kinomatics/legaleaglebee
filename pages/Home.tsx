
import React, { useEffect, useState } from 'react';
import ProgressCalendar from '../components/ProgressCalendar';
import { MOCK_RESOURCES } from '../constants';
import { User, UserProgress, Resource } from '../types';
import { Play, CheckCircle, ArrowRight, Sparkles, BookOpen, Heart, Shield, Users } from 'lucide-react';
import { getStudyAdvice } from '../services/geminiService';

interface HomeProps {
  user: User;
  progress: UserProgress;
}

const Home: React.FC<HomeProps> = ({ user, progress }) => {
  const [advice, setAdvice] = useState<string[]>([]);
  const lastActive = MOCK_RESOURCES.find(r => r.id === progress.lastResource) || MOCK_RESOURCES[0];

  useEffect(() => {
    const fetchAdvice = async () => {
      const res = await getStudyAdvice(lastActive.subject, user.gradeLevel);
      setAdvice(res);
    };
    fetchAdvice();
  }, [lastActive, user.gradeLevel]);

  const groupedResources = MOCK_RESOURCES.filter(r => r.progress > 0).reduce((acc, resource) => {
    if (!acc[resource.subject]) {
      acc[resource.subject] = [];
    }
    acc[resource.subject].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">
      <div className="flex-1 space-y-12">
        {/* Welcome Section */}
        <section className="bg-gradient-to-br from-[#8ba888] to-[#7c9473] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Hello, {user.name}! 🌟</h1>
            <p className="text-[#e8f0e8] opacity-90 mb-6">You're doing great! You've learned so many new things this month.</p>
            <button className="bg-white text-[#7c9473] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors">
              Continue: {lastActive.title} <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
        </section>

        {/* Vision & Impact Section */}
        <section className="bg-[#f0f4f0] rounded-3xl p-8 border border-[#e2e8e2]">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#4a5d4b] mb-4">Our Mission: Bridging the Early Gap</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              EduGap Bridge is dedicated to ensuring that every child aged 1 to 12 has access to high-quality foundation learning. 
              We aim to eliminate socioeconomic learning gaps by connecting young curious minds with open-source educational resources 
              and a global community of vetted volunteer mentors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[#7c9473] mb-1">12,400+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Students Helped</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[#7c9473] mb-1">85%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gap Reduction</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[#7c9473] mb-1">45,000</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="bg-white border border-[#f0f3f0] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-[#b5c99a]" size={20} />
            <h2 className="text-lg font-bold text-slate-800">Tips for Today's Learning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advice.map((tip, i) => (
              <div key={i} className="p-4 bg-[#f8faf8] rounded-xl text-sm text-slate-600 border border-[#edf1ed]">
                {tip}
              </div>
            ))}
          </div>
        </section>

        {/* Grouped Progress */}
        <section className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Your Learning Journey</h2>
          </div>
          
          {Object.entries(groupedResources).length > 0 ? Object.entries(groupedResources).map(([subject, resources]) => (
            <div key={subject} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 bg-[#8ba888] rounded-full"></div>
                <h3 className="text-lg font-bold text-slate-700">{subject}</h3>
              </div>
              
              <div className="grid gap-4">
                {resources.map(resource => (
                  <div key={resource.id} className="bg-white p-5 rounded-2xl border border-[#f0f3f0] shadow-sm flex items-center gap-5 hover:border-[#b5c99a] transition-all group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${resource.progress === 100 ? 'bg-[#f0f7f0] text-[#7c9473]' : 'bg-[#f5f8f5] text-[#8ba888]'}`}>
                      {resource.progress === 100 ? <CheckCircle size={24} /> : <BookOpen size={24} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{resource.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span>{resource.type}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span>{resource.duration}</span>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-medium text-slate-700">{resource.progress}%</div>
                      <div className="w-32 h-1.5 bg-[#f0f3f0] rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full bg-[#8ba888] transition-all duration-1000" 
                          style={{ width: `${resource.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )) : (
            <div className="p-12 text-center bg-white border border-dashed border-slate-200 rounded-3xl">
              <p className="text-slate-400">Pick a lesson from the library to get started!</p>
            </div>
          )}
        </section>
      </div>

      {/* Right Side Calendar */}
      <aside className="w-full lg:w-80 shrink-0">
        <ProgressCalendar completedDates={progress.completedDates} />
        
        <div className="mt-8 bg-[#f5f8f5] rounded-2xl p-6 border border-[#e8f0e8]">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-red-400" size={18} />
            <h3 className="font-bold text-[#4a5d4b]">Stay Safe!</h3>
          </div>
          <p className="text-sm text-[#5c725d] mb-4 leading-relaxed">
            All our mentors are verified by a committee. We never share your personal details with anyone.
          </p>
          <button className="w-full py-3 bg-[#7c9473] text-white rounded-xl font-semibold text-sm hover:bg-[#6b8262] transition-colors shadow-md shadow-[#d8e2d8]">
            Talk to a Mentor
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Home;
