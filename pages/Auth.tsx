
import React, { useState } from 'react';

interface AuthProps {
  onLogin: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: 'u1',
      name: 'Primary User',
      phoneNumber: '555-0100',
      language: 'en',
      isTutor: false,
      gradeLevel: 'Grade 10'
    });
  };

  return (
    <div className="w-full text-left py-12">
      <div className="w-full space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-slate-100 pb-6">
          <div className="font-black text-2xl text-[#7c9473] mb-4 tracking-tighter uppercase">
            EB PROTOCOL
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
            {isSignUp ? 'New Account Registration' : 'System Authentication'}
          </h2>
          <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
            {isSignUp ? 'Join EduGap Bridge to start learning' : 'Sign in to access your progress'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6 max-w-xl" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Identify yourself"
                  className="w-full px-4 py-3 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800"
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="XXX-XXX-XXXX"
                className="w-full px-4 py-3 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Access Key</label>
              <input
                type="password"
                required
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 text-xs font-black uppercase tracking-widest text-white bg-[#7c9473] hover:bg-[#6b8262] transition-all"
            >
              {isSignUp ? 'Register User' : 'Initialize Session'}
            </button>
          </div>
        </form>

        <div className="mt-4">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-black uppercase tracking-widest text-[#7c9473] hover:underline transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Request access"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
