
import React, { useState } from 'react';
import { Send, Clock, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { GradeLevel } from '../types';

const TutorMatch: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="w-full py-24 text-left animate-in fade-in duration-500">
        <div className="max-w-3xl space-y-8 border-l-8 border-[#7c9473] pl-12">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Request Initialized</h1>
          <div className="bg-slate-900 p-10 text-white space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#7c9473]">Queue Status: Active</div>
            <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
              Manual matching protocol in progress. Estimated latency: 04:00 - 06:00 Hours. 
              Notification will trigger upon successful synchronization with a verified mentor.
            </p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="border-b-4 border-slate-900 text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] hover:text-[#7c9473] hover:border-[#7c9473] transition-all"
          >
            Return to Terminal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left">
      <header className="space-y-4 border-b border-slate-100 pb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Mentor Synchronization</h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Request a verified pedagogical asset.</p>
      </header>

      <div className="max-w-5xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fcfdfc] border border-slate-100 p-10 flex gap-8 items-start">
            <div className="p-4 bg-slate-900 text-white shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Privacy Protocol 3.0</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                Identification data remains encrypted until bi-lateral verification is achieved.
              </p>
            </div>
          </div>
          
          <div className="bg-[#fcfdfc] border border-slate-100 p-10 flex gap-8 items-start">
            <div className="p-4 bg-[#7c9473] text-white shrink-0">
              <Award size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Assessed Mentors Only</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                All tutors have completed a 4-stage assessment: Domain Exam, Pedagogy Interview, Security Clearance, and Trial Sessions.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Discipline</label>
              <select required className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-black uppercase appearance-none">
                <option value="">Select Domain</option>
                <option>Mathematics / Calculus</option>
                <option>Science / Physics</option>
                <option>Science / Biology</option>
                <option>Literacy / Analysis</option>
                <option>Computer Architecture</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Curriculum Level</label>
              <select required className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-black uppercase appearance-none">
                {Object.values(GradeLevel).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Conceptual Roadblock Description</label>
            <textarea 
              required
              className="w-full p-6 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-bold min-h-[180px]"
              placeholder="Detail specific conceptual gaps for precision matching..."
            ></textarea>
          </div>

          <div className="p-8 border-l-4 border-[#7c9473] bg-[#f0f7f0]/30">
            <p className="text-xs font-black text-slate-600 uppercase tracking-widest leading-loose">
              System Alert: High demand in STEM sectors. Latency may increase up to 12 hours.
            </p>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`px-10 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-white transition-all w-full md:w-auto ${
              loading ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-900 hover:bg-[#7c9473]'
            }`}
          >
            {loading ? 'Processing Query...' : 'Execute Match Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorMatch;
