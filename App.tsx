
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

  const handleLogin = (u: any) => {
    setUser(u);
    setView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setView('auth');
  };

  const navigateToResource = (subject: SubjectCategory | 'All') => {
    setResourceFilter(subject);
    setView('resources');
  };

  useEffect(() => {
    if (!user && currentView !== 'auth') {
      setView('auth');
    }
  }, [user, currentView]);

  const renderContent = () => {
    if (!user || currentView === 'auth') return <Auth onLogin={handleLogin} />;

    switch (currentView) {
      case 'home': return <Home user={user} progress={progress} onNavigateToSubject={navigateToResource} />;
      case 'tutor-apply': return <TutorApplication />;
      case 'tutor-match': return <TutorMatch />;
      case 'resources': return <Resources initialCategory={resourceFilter} />;
      case 'profile': return <Profile user={user} progress={progress} />;
      case 'news': return <News />;
      case 'about': return <About />;
      case 'settings': return (
        <div className="w-full space-y-12 text-left animate-in fade-in duration-500">
          <h1 className="text-4xl font-black uppercase tracking-tight border-b border-slate-100 pb-10">System Preferences</h1>
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
          </div>
        </div>
      );
      default: return <Home user={user} progress={progress} onNavigateToSubject={navigateToResource} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 w-full selection:bg-slate-900 selection:text-white">
      <div className="flex flex-1">
        {user && <Sidebar currentView={currentView} setView={setView} />}
        
        <main className={`flex-1 transition-all duration-300 w-full flex flex-col ${user ? 'pl-12 md:pl-16' : ''}`}>
          {user && (
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
                    </button>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-10">
                <div className="hidden sm:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                  <button className="hover:text-[#7c9473]">Alerts</button>
                  <button onClick={handleLogout} className="text-slate-300 hover:text-red-500">Terminate</button>
                </div>
                <div 
                  className="flex items-center gap-4 pl-10 border-l border-slate-100 cursor-pointer group"
                  onClick={() => setView('profile')}
                >
                  <div className="text-right hidden xl:block">
                    <div className="text-sm font-black tracking-tight uppercase group-hover:text-[#7c9473] transition-colors">{user.name}</div>
                    <div className="text-[9px] text-slate-300 font-black uppercase tracking-widest">Scholar Profile</div>
                  </div>
                </div>
              </div>
            </header>
          )}

          <div className="flex-1 w-full px-10 md:px-16 py-12 md:py-20">
            <div className="w-full">
              {renderContent()}
            </div>
          </div>
          
          {user && <Footer />}
          {user && <WordOfTheDay />}
        </main>
      </div>
    </div>
  );
};

export default App;
