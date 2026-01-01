
import React, { useState } from 'react';
import ProgressCalendar from '../components/ProgressCalendar';
import { MOCK_RESOURCES } from '../constants';
import { User, UserProgress, Resource, SubjectCategory } from '../types';
import { ArrowRight, Search, Activity, Cpu, AlertCircle } from 'lucide-react';
import { analyzeLearningGap } from '../services/geminiService';

interface HomeProps {
  user: User;
  progress: UserProgress;
  onNavigateToSubject: (subject: SubjectCategory) => void;
}

const Home: React.FC<HomeProps> = ({ user, progress, onNavigateToSubject }) => {
  const [diagnosticQuery, setDiagnosticQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<any>(null);

  const lastActive = MOCK_RESOURCES.find(r => r.id === progress.lastResource) || MOCK_RESOURCES[0];

  const handleDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagnosticQuery.trim()) return;
    setIsAnalyzing(true);
    const result = await analyzeLearningGap(diagnosticQuery, user.gradeLevel);
    setDiagnosticResult(result);
    setIsAnalyzing(false);
  };

  const groupedResources = MOCK_RESOURCES.filter(r => r.progress > 0).reduce((acc, resource) => {
    if (!acc[resource.subject]) {
      acc[resource.subject] = [];
    }
    acc[resource.subject].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="flex flex-col xl:flex-row gap-16 animate-in fade-in duration-500 w-full items-start text-left">
      {/* Main Column */}
      <div className="flex-1 space-y-16 w-full">
        {/* Welcome Section */}
        <section className="bg-slate-900 p-12 text-white shadow-xl relative overflow-hidden">
          <div className="scanline"></div>
          <div className="relative z-10 w-full">
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Academic Standing: {user.name}</h1>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-10 max-w-3xl leading-relaxed">
              Path: {user.gradeLevel} Curriculum | Tracks: {Object.keys(groupedResources).length} Active | Achievement: Verified
            </p>
            <button 
              onClick={() => onNavigateToSubject(lastActive.subject)}
              className="bg-[#7c9473] text-white px-10 py-5 rounded-none font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#6b8262] transition-all"
            >
              Resume Module: {lastActive.title}
            </button>
          </div>
        </section>

        {/* Diagnostic Tool - Learning Gap Analysis */}
        <section className="bg-white border-2 border-slate-900 p-10 space-y-10 relative overflow-hidden">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <Cpu className="text-[#7c9473]" size={32} />
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Diagnostic Terminal</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Identifying core conceptual deficits</p>
            </div>
          </div>

          {!diagnosticResult ? (
            <form onSubmit={handleDiagnostic} className="space-y-6">
              <p className="text-sm font-medium text-slate-600 uppercase tracking-tight leading-relaxed max-w-2xl">
                Enter a concept or topic that is currently causing a block. The system will scan for prerequisite gaps in your knowledge base.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  value={diagnosticQuery}
                  onChange={(e) => setDiagnosticQuery(e.target.value)}
                  placeholder="E.g., Integration by parts, Photosynthesis, Quadratic Formula..."
                  className="flex-1 p-5 border border-slate-200 font-mono text-sm uppercase outline-none focus:border-slate-900"
                />
                <button 
                  disabled={isAnalyzing}
                  className="bg-slate-900 text-white px-12 py-5 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#7c9473] transition-all disabled:bg-slate-200"
                >
                  {isAnalyzing ? 'Scanning Gaps...' : 'Initialize Analysis'}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8 animate-in slide-in-from-top-4 duration-500">
              <div className="bg-slate-50 p-6 border-l-4 border-slate-900">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Root Cause Determination</div>
                <p className="text-lg font-bold text-slate-900 uppercase tracking-tight">{diagnosticResult.rootCause}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {diagnosticResult.gaps.map((gap: any, i: number) => (
                  <div key={i} className="p-6 border border-slate-100 bg-white space-y-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={14} className="text-[#7c9473]" />
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Deficit {i+1}</span>
                    </div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-tight">{gap.concept}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">{gap.why}</p>
                    <div className="pt-4 border-t border-slate-50">
                      <div className="text-[9px] font-black text-[#7c9473] uppercase mb-1">Recovery Protocol:</div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{gap.protocol}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setDiagnosticResult(null)}
                className="text-[10px] font-black text-slate-300 uppercase hover:text-slate-900 transition-colors tracking-widest"
              >
                Reset Diagnostic Terminal
              </button>
            </div>
          )}
        </section>

        {/* Vision & Objectives */}
        <section className="w-full space-y-8">
          <div className="space-y-4 border-l-8 border-slate-100 pl-8">
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Platform Protocol</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium max-w-5xl">
              EduGap Bridge operates as a standardized protocol for Grades 7-12 education delivery. We leverage decentralized 
              Open Educational Resources to eliminate learning gaps across diverse demographic populations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-10 bg-white border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Registered Scholars</div>
              <div className="text-4xl font-black text-slate-900 tracking-tighter">12,400</div>
            </div>
            <div className="p-10 bg-white border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mastery Index</div>
              <div className="text-4xl font-black text-slate-900 tracking-tighter">94%</div>
            </div>
            <div className="p-10 bg-white border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Verified Mentors</div>
              <div className="text-4xl font-black text-slate-900 tracking-tighter">480+</div>
            </div>
            <div className="p-10 bg-white border border-slate-100">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Access Type</div>
              <div className="text-4xl font-black text-slate-900 tracking-tighter">Open</div>
            </div>
          </div>
        </section>

        {/* Course Progression */}
        <section className="space-y-12 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Course Progression Data</h2>
            <button 
              onClick={() => onNavigateToSubject('All' as any)}
              className="text-[#7c9473] text-[10px] font-black uppercase tracking-widest hover:underline"
            >
              Full Roadmap Manifest
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            {Object.entries(groupedResources).map(([subject, resources]) => (
              <div key={subject} className="space-y-6">
                <button 
                  onClick={() => onNavigateToSubject(subject as SubjectCategory)}
                  className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-[0.4em] hover:text-[#7c9473] transition-colors group"
                >
                  {subject} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="space-y-4">
                  {resources.map(resource => (
                    <div 
                      key={resource.id} 
                      onClick={() => onNavigateToSubject(resource.subject)}
                      className="bg-white p-6 border border-slate-100 flex items-center justify-between hover:border-[#7c9473] transition-all cursor-pointer group/item"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight mb-2 group-hover/item:text-[#7c9473]">{resource.title}</h4>
                        <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          <span>{resource.type}</span>
                          <span className="w-1 h-1 bg-slate-200"></span>
                          <span>{resource.duration}</span>
                        </div>
                      </div>
                      <div className="text-right pl-6 border-l border-slate-50">
                        <div className="text-[10px] font-black text-slate-900 uppercase mb-2">{resource.progress}% Mastery</div>
                        <div className="w-24 h-1 bg-slate-100 overflow-hidden">
                          <div className="h-full bg-[#7c9473]" style={{ width: `${resource.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Persistent Sidebar Column */}
      <aside className="w-full xl:w-[400px] shrink-0 space-y-12 xl:sticky xl:top-[120px]">
        <ProgressCalendar completedDates={progress.completedDates} />
        
        <div className="bg-white border border-slate-200 p-10 space-y-6">
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Support Hub</div>
          <h3 className="font-black tracking-tight text-2xl uppercase">Institutional Mentorship</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Personalized academic guidance is available through our verified volunteer network. 
            All sessions are monitored for educational integrity and system safety.
          </p>
          <button className="w-full py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#7c9473] transition-all">
            Request Active Match
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Home;
