
import React from 'react';
import { ShieldCheck, Calendar, Globe, Target, Activity } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    { year: "2023 Q3", milestone: "Protocol Initialization", detail: "Conceptual framework established for decentralized OER delivery." },
    { year: "2024 Q1", milestone: "Alpha Registry Launch", detail: "First 2,000 scholars integrated across 5 core subject tracks." },
    { year: "2024 Q4", milestone: "Mentor Network expansion", detail: "Reached 10,000 active scholars with verified instructional support." },
    { year: "2025 Q1", milestone: "Protocol v3.2 (Current)", detail: "Full system parity. 12,400+ scholars. High-latency gap elimination active." },
  ];

  const team = [
    { name: "Dr. Aris Thorne", role: "Founder & Lead Developer", focus: "Fullstack Architecture & Protocol Design" },
    { name: "Elias Vance", role: "Lead Resource Synthesizer", focus: "Curriculum Alignment & OER Verification" },
    { name: "Sarah Jenkins", role: "Resource Preparation Lead", focus: "Mathematics & Science Module Calibration" },
    { name: "Marcus Thorne", role: "Resource Preparation Lead", focus: "Literacy & Social Analysis Content" },
  ];

  return (
    <div className="w-full space-y-24 animate-in fade-in duration-500 text-left">
      <header className="space-y-4 border-b border-slate-100 pb-10">
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase">Protocol Origin</h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.5em]">The Architects of EduGap Bridge</p>
      </header>

      {/* System Growth Timeline */}
      <section className="space-y-12">
        <div className="space-y-4 border-l-4 border-slate-900 pl-8">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">System Impact Timeline</h2>
          <p className="text-xl font-medium text-slate-800 uppercase tracking-tight max-w-3xl">
            Monitoring the expansion of the EB Protocol from initialization to planetary-scale education delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative p-10 bg-white border border-slate-100 hover:border-slate-900 transition-all space-y-6 group">
              <div className="text-[10px] font-black text-[#7c9473] uppercase tracking-[0.3em]">{item.year}</div>
              <div className="space-y-3">
                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">{item.milestone}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">{item.detail}</p>
              </div>
              {i < timeline.length - 1 && (
                <div className="hidden xl:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <Activity size={16} className="text-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-20">
        <div className="xl:col-span-7 space-y-12">
          <section className="space-y-8">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] border-l-4 border-slate-200 pl-4">Our Mission</h2>
            <div className="p-12 bg-slate-900 text-white relative overflow-hidden">
              <p className="text-2xl font-medium leading-relaxed uppercase tracking-tight relative z-10">
                To neutralize academic disparity by providing high-fidelity, standardized curriculum tracks 
                integrated with a verified global mentor network.
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={120} />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Target size={24} className="text-[#7c9473]" />
              <h4 className="font-black uppercase tracking-widest text-slate-900">Institutional Accuracy</h4>
              <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed">
                Resources are calibrated against international secondary standards to ensure mastery beyond localized tests.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheck size={24} className="text-[#7c9473]" />
              <h4 className="font-black uppercase tracking-widest text-slate-900">Integrity Framework</h4>
              <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed">
                The protocol utilizes rigorous verification loops for both mentor conduct and resource data provenance.
              </p>
            </div>
          </section>
        </div>

        {/* Updated Architects Section */}
        <aside className="xl:col-span-5 space-y-12">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] border-l-4 border-slate-200 pl-4">Protocol Architects</h2>
          <div className="space-y-4">
            {team.map((person, i) => (
              <div key={i} className="group p-10 bg-white border border-slate-100 hover:border-slate-900 flex flex-col gap-3 transition-all">
                <div className="text-[9px] font-black text-[#7c9473] uppercase tracking-[0.3em]">{person.role}</div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">{person.name}</h3>
                <div className="pt-6 border-t border-slate-50 mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">{person.focus}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-10 border border-slate-900/10 bg-slate-50 flex items-center gap-6">
            <Calendar size={20} className="text-slate-400" />
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              Last Administrative Audit: 2025.02.15
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
