
import React from 'react';
import { Users, Layout, ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const TutorApplication: React.FC = () => {
  const servicePaths = [
    {
      id: 'mentor',
      title: 'Instructional Asset (Mentor)',
      icon: <Users size={32} />,
      description: 'Provide direct academic guidance to scholars. Requires domain expertise in Grades 7-12 curriculum.',
      requirements: [
        'Subject mastery verification',
        '2-hour weekly sync commitment',
        'Pedagogical integrity training'
      ],
      link: 'https://forms.google.com/your-mentor-form-link'
    },
    {
      id: 'operations',
      title: 'Platform Operative',
      icon: <Layout size={32} />,
      description: 'Support the EB Protocol infrastructure. Roles include Web Development, Resource Synthesis, and Management.',
      requirements: [
        'Technical proficiency (React/OER)',
        'Asynchronous contribution model',
        'Infrastructure security awareness'
      ],
      link: 'https://forms.google.com/your-ops-form-link'
    }
  ];

  const handleExternalRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full space-y-20 animate-in fade-in duration-500 text-left">
      <header className="space-y-4 border-b border-slate-100 pb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Service Protocol Registry</h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Select your operational contribution track below.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-7xl">
        {servicePaths.map((path) => (
          <div key={path.id} className="group bg-white border border-slate-100 p-12 space-y-10 flex flex-col justify-between hover:border-[#7c9473] transition-all">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-[#7c9473] group-hover:text-white transition-all">
                {path.icon}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">{path.title}</h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-tight">
                  {path.description}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-50">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Registry Requirements</div>
                <ul className="space-y-3">
                  {path.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                      <ShieldCheck size={14} className="text-[#7c9473]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleExternalRedirect(path.link)}
              className="w-full py-6 mt-12 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#7c9473] transition-all group-hover:shadow-xl group-hover:shadow-[#7c9473]/10"
            >
              Open Registry Form <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>

      <section className="bg-slate-50 p-12 border border-slate-100 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="p-4 bg-white border border-slate-200">
            <Zap size={24} className="text-[#7c9473]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Validation Latency</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
              Upon form submission, our administrative operatives will perform a manual review of your registry data. 
              Expected synchronization time is 48-72 technical hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorApplication;
