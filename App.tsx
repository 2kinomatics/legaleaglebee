
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TutorApplication from './pages/TutorApplication';
import TutorMatch from './pages/TutorMatch';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import News from './pages/News';
import About from './pages/About';
import Auth from './pages/Auth';
import WordOfTheDay from './components/FactPopUp';
import Footer from './components/Footer';
import { AppView, User, UserProgress, SubjectCategory } from './types';
import { NAV_ITEMS } from './constants';
import { Lock } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [resourceFilter, setResourceFilter] = useState<SubjectCategory | 'All'>('All');
  
  const [progress] = useState<UserProgress>({
    lastResource: '1',
    completedDates: [
      new Date().toISOString(),
      new Date(Date.now() - 86400000).toISOString(),
    ],
    subjectStats: { Literacy: 80, Mathematics: 40 }
  });

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('eb_scholar_session');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('eb_scholar_session', JSON.stringify(u));
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('eb_scholar_session');
    setView('home');
  };

  const navigateToResource = (subject: SubjectCategory | 'All') => {
    setResourceFilter(subject);
    setView('resources');
  };

  // Helper to check if a view is public
  const isPublicView = (view: AppView) => {
    return ['home', 'resources', 'news', 'about', 'auth'].includes(view);
  };

  const renderContent = () => {
    // Auth Gate for non-public views
    if (!user && !isPublicView(currentView)) {
      return (
        <div className="flex flex-col items-center justify-center py-32 text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-slate-50 flex items-center justify-center rounded-full border border-slate-100">
            <Lock className="text-slate-300" size={32} />
          </div>
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Authentication Required</h2>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              Verified access is required to synchronize with mentors or view scholar analytics.
            </p>
          </div>
          <button 
            onClick={() => setView('auth')}
            className="px-10 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#7c9473] transition-all"
          >
            Initialize Auth Protocol
          </button>
        </div>
      );
    }

    switch (currentView) {
      case 'home': return <Home user={user || { name: 'Guest Scholar', id: 'GUEST', gradeLevel: 'Grade 10' } as any} progress={progress} onNavigateToSubject={navigateToResource} />;
      case 'tutor-apply': return <TutorApplication />;
      case 'tutor-match': return <TutorMatch />;
      case 'resources': return <Resources initialCategory={resourceFilter} />;
      case 'profile': return user ? <Profile user={user} progress={progress} /> : null;
      case 'news': return <News />;
      case 'about': return <About />;
      case 'auth': return <Auth onLogin={handleLogin} onGuestContinue={() => setView('home')} />;
      case 'settings': return (
        <div className="w-full space-y-12 text-left animate-in fade-in duration-500">
          <h1 className="text-4xl font-black uppercase tracking-tight border-b border-slate-100 pb-10">System Preferences</h1>
          {user ? (
            <div className="bg-white p-12 border border-slate-100 max-w-2xl space-y-10">
              <div className="flex justify-between items-center py-6 border-b border-slate-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Registry ID</span>
                <span className="text-xs font-black uppercase text-slate-900">{user.id}</span>
              </div>
              <div className="flex justify-between items-center py-6 border-b border-slate-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Protocol</span>
                <span className="text-xs font-black uppercase text-slate-900">{user.phoneNumber}</span>
              </div>
              <div className="flex justify-between items-center py-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Academic Status</span>
                <span className="text-[10px] font-black px-6 py-2 bg-slate-900 text-white uppercase tracking-widest">{user.gradeLevel}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-red-500 border border-red-100 hover:bg-red-50 transition-colors mt-8"
              >
                Terminate Session
              </button>
            </div>
          ) : null}
        </div>
      );
      default: return <Home user={user || { name: 'Guest', id: 'GUEST', gradeLevel: 'Grade 10' } as any} progress={progress} onNavigateToSubject={navigateToResource} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 w-full selection:bg-slate-900 selection:text-white">
      <div className="flex flex-1">
        <Sidebar currentView={currentView} setView={setView} isGuest={!user} />
        
        <main className={`flex-1 transition-all duration-300 w-full flex flex-col pl-12 md:pl-16`}>
          <header className="sticky top-0 z-40 bg-white border-b border-slate-100 px-10 py-8 flex justify-between items-center">
            <div className="flex items-center gap-12">
              <div className="text-2xl font-black text-[#7c9473] tracking-tighter cursor-pointer" onClick={() => setView('home')}>EB</div>
              <nav className="hidden lg:flex items-center gap-10">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'resources') setResourceFilter('All');
                      setView(item.id as AppView);
                    }}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      currentView === item.id 
                        ? 'text-slate-900 after:content-[""] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-1 after:bg-[#7c9473]' 
                        : 'text-slate-300 hover:text-slate-600'
                    }`}
                  >
                    {item.label}
                    {!user && !isPublicView(item.id as AppView) && <Lock size={8} className="inline ml-2 opacity-50" />}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-10">
              {user ? (
                <div 
                  className="flex items-center gap-4 cursor-pointer group"
                  onClick={() => setView('profile')}
                >
                  <div className="text-right hidden xl:block">
                    <div className="text-sm font-black tracking-tight uppercase group-hover:text-[#7c9473] transition-colors">{user.name}</div>
                    <div className="text-[9px] text-slate-300 font-black uppercase tracking-widest">Scholar Profile</div>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setView('auth')}
                  className="text-[10px] font-black uppercase tracking-widest px-6 py-2 bg-slate-900 text-white hover:bg-[#7c9473] transition-all"
                >
                  Scholar Sign In
                </button>
              )}
            </div>
          </header>

          <div className="flex-1 w-full px-10 md:px-16 py-12 md:py-20">
            <div className="w-full">
              {renderContent()}
            </div>
          </div>
          
          <Footer />
          <WordOfTheDay />
        </main>
      </div>
    </div>
  );
};

export default App;
