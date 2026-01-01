
import React, { useState } from 'react';
import { MOCK_JOURNALS } from '../constants';
import { JournalEntry } from '../types';
import { MessageSquare, Heart, Send, BookOpen } from 'lucide-react';

const News: React.FC = () => {
  const [journals, setJournals] = useState<JournalEntry[]>(MOCK_JOURNALS);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success'>('idle');
  const [activeCommentId, setActiveCommentId] = useState<string | null>(null);

  const handleLike = (id: string) => {
    setJournals(prev => prev.map(j => 
      j.id === id ? { ...j, likes: j.likes + 1 } : j
    ));
  };

  return (
    <div className="w-full space-y-16 animate-in fade-in duration-500 text-left">
      <header className="space-y-4 border-b border-slate-100 pb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
          Scholar Journal Manifest
        </h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
          Student manuscripts, research logs, and creative analyses.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
        {/* Journal Feed */}
        <div className="xl:col-span-7 space-y-12">
          <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 border-l-4 border-slate-200 pl-4">Verified Manuscripts</div>
          
          <div className="grid grid-cols-1 gap-12">
            {journals.map((item) => (
              <article key={item.id} className="bg-white p-10 border border-slate-100 group transition-all">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.readTime} Read
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase mb-2 group-hover:text-[#7c9473] cursor-pointer">
                  {item.title}
                </h3>
                <div className="text-xs font-black text-[#8ba888] uppercase tracking-widest mb-6">
                  Authored by: {item.author}
                </div>
                
                <p className="text-slate-600 font-medium leading-relaxed text-sm mb-8">
                  {item.content}
                </p>

                <div className="flex items-center gap-8 pt-6 border-t border-slate-50">
                  <button 
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Heart size={16} className={item.likes > 40 ? 'fill-red-500 text-red-500' : ''} />
                    <span>{item.likes} Verifications</span>
                  </button>
                  <button 
                    onClick={() => setActiveCommentId(activeCommentId === item.id ? null : item.id)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#7c9473] transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>{item.comments.length} Comments</span>
                  </button>
                </div>

                {activeCommentId === item.id && (
                  <div className="mt-8 space-y-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="text-[10px] font-black uppercase text-slate-300 tracking-widest border-b border-slate-50 pb-2">Commentary Log</div>
                    {item.comments.map(c => (
                      <div key={c.id} className="text-sm bg-slate-50 p-4 border-l-2 border-slate-200">
                        <div className="font-black uppercase text-[10px] text-[#7c9473] mb-1">{c.author} <span className="text-slate-300 ml-2">{c.timestamp}</span></div>
                        <p className="text-slate-600">{c.text}</p>
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <input type="text" placeholder="Add to log..." className="flex-1 text-xs p-3 border border-slate-200 outline-none focus:border-[#7c9473]" />
                      <button className="p-3 bg-slate-900 text-white"><Send size={14} /></button>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Journal Submission Sidebar */}
        <aside className="xl:col-span-5 space-y-10 bg-[#fcfdfc] border border-slate-100 p-10 sticky top-32">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
              <BookOpen size={24} className="text-[#7c9473]" />
              Manuscript Submission
            </h2>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              Submit your journals or research findings for platform-wide verification and publishing.
            </p>
          </div>

          {submissionStatus === 'success' ? (
            <div className="p-8 bg-[#f0f7f0] border border-[#7c9473]/20 text-[#4a5d4b] text-sm font-bold uppercase tracking-widest">
              Manuscript Received. Awaiting Peer Review.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmissionStatus('success'); }}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Manuscript Title</label>
                <input type="text" required placeholder="Thesis or Journal Subject" className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-bold" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Discipline</label>
                <select required className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-bold appearance-none">
                  <option value="ANALYSIS">Academic Analysis</option>
                  <option value="EXPERIENCE">Learning Experience</option>
                  <option value="RESEARCH">Research Abstract</option>
                  <option value="CREATIVE">Creative Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Manuscript Content</label>
                <textarea required placeholder="Begin your entry here..." className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-[#7c9473] text-sm font-bold min-h-[250px]"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#7c9473] transition-all">
                Submit for Validation
              </button>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
};

export default News;
