
import React, { useState } from 'react';
import { Send, Clock, Info, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GradeLevel } from '../types';

const TutorMatch: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h1>
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-center gap-2 text-blue-700 font-semibold mb-2">
            <Clock size={20} />
            <span>Estimated Wait Time: 4-6 Hours</span>
          </div>
          <p className="text-blue-600 text-sm">
            To ensure privacy and quality, we manually match you with a vetted tutor. 
            Once a tutor accepts your request, you'll receive a notification and an email to start your session.
          </p>
        </div>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Request a Tutor</h1>
        <p className="text-slate-500">Tell us what you're struggling with, and we'll find the right expert for you.</p>
      </header>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Tutor Privacy Guaranteed</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We do not share your full details or the tutor's details until a match is confirmed and a secure session is initiated by our committee.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
              <select required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                <option value="">Select a subject</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Biology</option>
                <option>Chemistry</option>
                <option>Computer Science</option>
                <option>Literature</option>
                <option>Languages</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Grade Level</label>
              <select required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                {Object.values(GradeLevel).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">What are you struggling with?</label>
            <textarea 
              required
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] transition-all"
              placeholder="Be as specific as possible. e.g. 'I'm having trouble understanding how to apply the chain rule in complex calculus problems...'"
            ></textarea>
          </div>

          <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-700 rounded-2xl border border-amber-100">
            <Info size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong>Wait Time Alert:</strong> Due to high demand for quality volunteer tutors, it may take between <strong>4 to 12 hours</strong> to match you with the perfect mentor. We appreciate your patience as we bridge the gap.
            </p>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
              loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 hover:scale-[1.01]'
            }`}
          >
            {loading ? 'Submitting Request...' : (
              <>
                Submit Request <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorMatch;
