
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
  onGuestContinue: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, onGuestContinue }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');

  // CONFIGURATION: Set your required prefix here (e.g., '+27' for South Africa)
  const REQUIRED_PREFIX = '+27'; 
  const PHONE_REGEX = /^\+27\d{9}$/; // +27 followed by exactly 9 digits

  const validatePhone = (phone: string) => {
    return PHONE_REGEX.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      if (!validatePhone(formData.phone)) {
        setError(`REGIONAL LOCK: Only authorized South African numbers (${REQUIRED_PREFIX}) are permitted for registry.`);
        return;
      }

      const newUser = {
        id: `SCH-${Math.floor(Math.random() * 10000)}`,
        name: formData.name,
        phoneNumber: formData.phone,
        language: 'en',
        isTutor: false,
        gradeLevel: 'Grade 10'
      };
      
      // Simulation of a local database
      const existing = JSON.parse(localStorage.getItem('eb_users') || '[]');
      localStorage.setItem('eb_users', JSON.stringify([...existing, newUser]));
      
      onLogin(newUser);
    } else {
      // Simple login simulation
      const users = JSON.parse(localStorage.getItem('eb_users') || '[]');
      const found = users.find((u: any) => u.phoneNumber === formData.phone);
      
      if (found) {
        onLogin(found);
      } else {
        setError("AUTHENTICATION FAILED: Mobile Protocol not found in registry.");
      }
    }
  };

  return (
    <div className="w-full text-left py-12 max-w-4xl">
      <div className="w-full space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-slate-100 pb-10">
          <div className="font-black text-2xl text-[#7c9473] mb-4 tracking-tighter uppercase">
            EB PROTOCOL
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
            {isSignUp ? 'New Account Registration' : 'System Authentication'}
          </h2>
          <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
            {isSignUp 
              ? 'Institutional registration requires a verified regional mobile number.' 
              : 'Synchronize your learning manifest by authenticating your session.'}
          </p>
        </div>
        
        <form className="mt-8 space-y-8 max-w-xl" onSubmit={handleSubmit}>
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-4 animate-in slide-in-from-left-2">
              <AlertCircle className="text-red-500 shrink-0" size={20} />
              <p className="text-[10px] font-black uppercase text-red-700 tracking-widest leading-tight">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="LEGAL IDENTITY"
                  className="w-full px-4 py-4 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800 uppercase text-xs"
                />
              </div>
            )}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Mobile Protocol</label>
                <span className="text-[9px] font-black text-[#7c9473] uppercase tracking-widest">REQUIRED: {REQUIRED_PREFIX}</span>
              </div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+27XXXXXXXXX"
                className="w-full px-4 py-4 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-mono text-xs font-bold text-slate-800"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Access Key</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="ENTER SECURE KEY"
                className="w-full px-4 py-4 bg-[#f8faf8] border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white bg-slate-900 hover:bg-[#7c9473] transition-all"
            >
              {isSignUp ? 'Execute Registration' : 'Initialize Session'}
            </button>
            <button
              type="button"
              onClick={onGuestContinue}
              className="w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border border-slate-100 hover:bg-slate-50 transition-all"
            >
              Access as Guest Operative
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-50">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7c9473] hover:underline transition-colors"
          >
            {isSignUp ? 'Already Registered? Return to Login' : "Request New Registry ID"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
