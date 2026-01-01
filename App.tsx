
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TutorApplication from './pages/TutorApplication';
import TutorMatch from './pages/TutorMatch';
import Auth from './pages/Auth';
import { AppView, User, UserProgress, GradeLevel } from './types';
import { Globe, Bell, LogOut } from 'lucide-react';
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
    subjectStats: { Math: 80, Science: 60 }
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
      case 'resources': return (
        <div className="py-20 text-center animate-in fade-in duration-500">
          <h1 className="text-3xl font-bold text-slate-800">Resource Library</h1>
          <p className="text-slate-500 mt-2">Curated open resources for all subject levels.</p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl mt-10 shadow-sm border border-slate-100">
            Coming soon! We are indexing thousands of Open Educational Resources (OER).
          </div>
        </div>
      );
      case 'settings': return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in slide-in-from-right-4 duration-500">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-50">
              <span className="text-slate-600">Language preference</span>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-slate-50 p-2 rounded-lg text-sm border-none outline-none focus:ring-1 focus:ring-blue-500"
              >
                {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
              </select>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600">Current Level</span>
              <span className="text-sm font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{user.gradeLevel}</span>
            </div>
          </div>
        </div>
      );
      default: return <Home user={user} progress={progress} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {user && <Sidebar currentView={currentView} />}
      
      <main className={`flex-1 transition-all duration-300 ${user ? 'pl-12 md:pl-16' : ''}`}>
        {/* Top Navbar */}
        {user && (
          <header className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-slate-200/50">
            <div className="flex items-center gap-6">
              <div className="text-xl font-black text-blue-600 mr-4">EB</div>
              <nav className="flex items-center gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id as AppView)}
                    className={`p-2.5 rounded-xl transition-all duration-200 group relative ${
                      currentView === item.id 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-blue-600 hover:bg-white'
                    }`}
                  >
                    {item.icon}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-slate-500">
                <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Globe size={18} />
                  <span className="text-xs font-bold uppercase">{language}</span>
                </button>
                <button className="relative hover:text-blue-600 transition-colors">
                  <Bell size={18} />
                </button>
                <button onClick={handleLogout} className="hover:text-red-500 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="w-9 h-9 bg-blue-100 rounded-lg overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/${user.id}/200`} alt="Avatar" />
                </div>
              </div>
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
