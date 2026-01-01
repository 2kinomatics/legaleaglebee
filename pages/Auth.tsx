
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: 'u1',
      name: 'John Doe',
      email: 'john@example.com',
      language: 'en',
      isTutor: false,
      gradeLevel: 'High School (9-12)'
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-[#f0f3f0] animate-in zoom-in duration-300">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-[#7c9473] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">
            EB
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            {isSignUp ? 'Create account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {isSignUp ? 'Join EduGap Bridge to start learning' : 'Sign in to access your progress'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 bg-[#f8faf8] border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8ba888] transition-all"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-[#f8faf8] border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8ba888] transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-[#f8faf8] border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8ba888] transition-all"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#7c9473] hover:bg-[#6b8262] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ba888] transition-all shadow-lg shadow-[#cbd9cb]"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm font-semibold text-[#7c9473] hover:text-[#6b8262] transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
