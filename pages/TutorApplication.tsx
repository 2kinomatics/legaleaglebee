
import React, { useState } from 'react';
import { Book, Calendar, ClipboardCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

const TutorApplication: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { id: 1, title: 'Eligibility', icon: <ClipboardCheck size={20} /> },
    { id: 2, title: 'Exam', icon: <Book size={20} /> },
    { id: 3, title: 'Interview', icon: <Calendar size={20} /> },
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-[#f0f7f0] text-[#7c9473] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted!</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Great work! You've successfully completed the volunteer tutor application. 
          Our committee will review your exam results and schedule your interview within 48 hours.
        </p>
        <button className="bg-[#7c9473] text-white px-8 py-3 rounded-xl font-semibold">
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Become a Volunteer Tutor</h1>
        <p className="text-slate-500 mt-2">Join our mission to bridge learning gaps worldwide.</p>
      </header>

      {/* Progress Tracker */}
      <div className="flex justify-between items-center relative px-4 max-w-lg mx-auto">
        <div className="absolute h-0.5 bg-[#e2e8e2] top-1/2 left-0 right-0 -z-10 translate-y-[-50%]"></div>
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              step >= s.id ? 'bg-[#7c9473] text-white ring-4 ring-[#f0f7f0]' : 'bg-white border border-slate-200 text-slate-400'
            }`}>
              {s.icon}
            </div>
            <span className={`text-xs font-bold ${step >= s.id ? 'text-[#7c9473]' : 'text-slate-400'}`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <main className="bg-white rounded-3xl p-8 border border-[#f0f3f0] shadow-sm min-h-[400px]">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Pre-qualification Survey</h2>
            <div className="space-y-4">
              <label className="block p-4 bg-[#f8faf8] rounded-2xl border border-slate-200 cursor-pointer hover:border-[#8ba888] transition-colors">
                <input type="checkbox" className="mr-3 rounded text-[#7c9473] focus:ring-[#7c9473]" />
                <span className="text-sm font-medium text-slate-700">I have achieved excellence in the subjects I wish to tutor.</span>
              </label>
              <label className="block p-4 bg-[#f8faf8] rounded-2xl border border-slate-200 cursor-pointer hover:border-[#8ba888] transition-colors">
                <input type="checkbox" className="mr-3 rounded text-[#7c9473] focus:ring-[#7c9473]" />
                <span className="text-sm font-medium text-slate-700">I am available for at least 2 hours of tutoring per week.</span>
              </label>
              <label className="block p-4 bg-[#f8faf8] rounded-2xl border border-slate-200 cursor-pointer hover:border-[#8ba888] transition-colors">
                <input type="checkbox" className="mr-3 rounded text-[#7c9473] focus:ring-[#7c9473]" />
                <span className="text-sm font-medium text-slate-700">I am passionate about helping students overcome learning obstacles.</span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Subject Excellence Exam</h2>
            <div className="bg-[#f0f7f0] p-4 rounded-xl text-sm text-[#4a5d4b] flex gap-3">
              <ClipboardCheck className="shrink-0" />
              <p>This exam consists of 20 advanced questions in your chosen specialization to verify your knowledge depth.</p>
            </div>
            <div className="space-y-4">
              <p className="font-medium text-slate-700">Question 1: Explain the concept of recursion in the context of efficiency.</p>
              <textarea 
                className="w-full p-4 rounded-xl border border-slate-200 h-32 focus:ring-2 focus:ring-[#7c9473] focus:border-transparent outline-none"
                placeholder="Type your explanation here..."
              ></textarea>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Schedule Interview</h2>
            <p className="text-slate-500">Pick a time slot for your committee interview.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Mon 10:00 AM', 'Mon 02:00 PM', 'Tue 09:00 AM', 'Wed 04:00 PM', 'Fri 11:30 AM'].map(time => (
                <button key={time} className="p-3 border border-slate-200 rounded-xl hover:bg-[#f0f7f0] hover:border-[#8ba888] transition-all text-sm font-medium text-slate-600">
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-between">
          <button 
            disabled={step === 1}
            onClick={() => setStep(prev => prev - 1)}
            className="px-6 py-3 text-slate-500 font-semibold disabled:opacity-30"
          >
            Previous
          </button>
          <button 
            onClick={() => step === 3 ? setSubmitted(true) : setStep(prev => prev + 1)}
            className="px-8 py-3 bg-[#7c9473] text-white rounded-xl font-semibold hover:bg-[#6b8262] shadow-md shadow-[#cbd9cb]"
          >
            {step === 3 ? 'Complete Application' : 'Next Step'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default TutorApplication;
