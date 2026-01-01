
import React, { useEffect, useState } from 'react';
import ProgressCalendar from '../components/ProgressCalendar';
import { MOCK_RESOURCES } from '../constants';
import { User, UserProgress } from '../types';
import { Play, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
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

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">
      <div className="flex-1 space-y-8">
        {/* Welcome Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-blue-100 opacity-90 mb-6">You've completed 12 lessons this month. Keep it up!</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Continue: {lastActive.title} <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
        </section>

        {/* AI Recommendations */}
        <section className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-500" size={20} />
            <h2 className="text-lg font-bold text-slate-800">Personalized Study Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advice.map((tip, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600 border border-slate-100">
                {tip}
              </div>
            ))}
          </div>
        </section>

        {/* Current Courses */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">Your Progress</h2>
            <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid gap-4">
            {MOCK_RESOURCES.filter(r => r.progress > 0).map(resource => (
              <div key={resource.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:border-blue-200 transition-colors group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${resource.progress === 100 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                  {resource.progress === 100 ? <CheckCircle size={24} /> : <Play size={24} />}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{resource.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>{resource.subject}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span>{resource.type}</span>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-slate-700">{resource.progress}%</div>
                  <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${resource.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Side Calendar */}
      <aside className="w-full lg:w-80 shrink-0">
        <ProgressCalendar completedDates={progress.completedDates} />
        
        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-700 mb-4 leading-relaxed">Schedule a session with a volunteer tutor to bridge your learning gaps.</p>
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
            Find a Tutor
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Home;
