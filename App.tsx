
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TutorApplication from './pages/TutorApplication';
import TutorMatch from './pages/TutorMatch';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import News from './pages/News';
import Auth from './pages/Auth';
import { AppView, User, UserProgress, GradeLevel } from './types';
import { Globe, Bell, LogOut, User as UserIcon } from 'lucide-react';
import { LANGUAGES, NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState('en');
  const [progress, setProgress] = useState<UserProgress>({
    lastResource: '1',
    completedDates: [
      new Date().toISOString(),
      new Date(Date.now() - 86400000).toISOString(),
      new Date(Date.now() - 86400000 * 3).toISOString(),
    ],
    subjectStats: { Literacy: 80, Mathematics: 40 }
  });

  const handleLogin = (u: User) => {
    setUser(u);
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setView('auth');
  };

  useEffect(() => {
    if (!user && currentView !== 'auth') {
      setView('auth');
    }
  }, [user, currentView]);

  const renderContent = () => {
    if (!user || currentView === 'auth') return <Auth onLogin={handleLogin} />;

    switch (currentView) {
      case 'home': return <Home user={user} progress={progress} />;
      case 'tutor-apply': return <TutorApplication />;
      case 'tutor-match': return <TutorMatch />;
      case 'resources': return <Resources />;
      case 'profile': return <Profile user={user} progress={progress} />;
      case 'news': return <News />;
      case 'settings': return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in slide-in-from-right-4 duration-500">
          <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>
          <div className="bg-white p-6 rounded-[2.5rem] border border-[#f0f3f0] shadow-sm space-y-4">
            <div className="flex justify-between items-center py-5 border-b border-slate-50 px-8">
              <span className="text-slate-600 font-medium">Language preference</span>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#f8faf8] p-3 rounded-2xl text-sm border-none outline-none focus:ring-2 focus:ring-[#8ba888]"
              >
                {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
              </select>
            </div>
            <div className="flex justify-between items-center py-5 px-8">
              <span className="text-slate-600 font-medium">Child's Learning Level</span>
              <span className="text-sm font-bold px-4 py-2 bg-[#f0f7f0] text-[#7c9473] rounded-2xl uppercase tracking-tighter shadow-sm border border-[#e2e8e2]">{user.gradeLevel}</span>
            </div>
          </div>
        </div>
      );
      default: return <Home user={user} progress={progress} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fcfdfc]">
      {user && <Sidebar currentView={currentView} />}
      
      <main className={`flex-1 transition-all duration-300 ${user ? 'pl-12 md:pl-16' : ''}`}>
        {/* Top Navbar */}
        {user && (
          <header className="sticky top-0 z-40 bg-[#fcfdfc]/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-[#e2e8e2]/50">
            <div className="flex items-center gap-6">
              <div className="text-2xl font-black text-[#7c9473] mr-4 tracking-tighter">EB</div>
              <nav className="flex items-center gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id as AppView)}
                    className={`p-2.5 rounded-2xl transition-all duration-300 group relative ${
                      currentView === item.id 
                        ? 'bg-[#7c9473] text-white shadow-lg shadow-[#cbd9cb]' 
                        : 'text-slate-400 hover:text-[#7c9473] hover:bg-white'
                    }`}
                  >
                    {item.icon}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-all shadow-xl">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-5 text-slate-500">
                <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="flex items-center gap-2 hover:text-[#7c9473] transition-colors font-bold text-xs uppercase tracking-widest">
                  <Globe size={18} />
                  <span>{language}</span>
                </button>
                <button className="relative hover:text-[#7c9473] transition-colors">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#fcfdfc]"></span>
                </button>
                <button onClick={handleLogout} className="hover:text-red-500 transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
              <button 
                onClick={() => setView('profile')}
                className="flex items-center gap-3 pl-5 border-l border-slate-200 group"
              >
                <div className="text-right hidden md:block">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#7c9473] transition-colors">{user.name}</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Explorer</div>
                </div>
                <div className="w-10 h-10 bg-[#f0f7f0] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                  <img src={`https://picsum.photos/seed/${user.id}/200`} alt="Avatar" />
                </div>
              </button>
            </div>
          </header>
        )}

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
