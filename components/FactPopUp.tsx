
import React, { useState, useEffect } from 'react';
import { getWordOfTheDay } from '../services/geminiService';

interface WordData {
  word: string;
  translation: string;
  language: string;
  pronunciation: string;
  sentence: string;
}

const WordOfTheDay: React.FC = () => {
  const [data, setData] = useState<WordData | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchWord = async () => {
    setLoading(true);
    const result = await getWordOfTheDay();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchWord();
  }, []);

  if (!isVisible) return (
    <button 
      onClick={() => setIsVisible(true)}
      className="fixed bottom-10 right-10 px-6 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest border border-slate-900 hover:bg-white hover:text-slate-900 transition-all z-50 shadow-2xl"
    >
      Request Lexical Injection
    </button>
  );

  return (
    <div className="fixed bottom-10 right-10 w-80 bg-white border border-slate-200 shadow-none z-50 animate-in slide-in-from-bottom-2 duration-300">
      <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Lexical Protocol</span>
        <button onClick={() => setIsVisible(false)} className="text-[10px] font-black uppercase opacity-60 hover:opacity-100 transition-opacity">
          Close Log
        </button>
      </div>
      <div className="p-8 space-y-6 text-left">
        <div className={`transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
          <div className="mb-4">
            <span className="text-[9px] font-black text-[#7c9473] uppercase tracking-[0.2em]">{data?.language || 'Initializing...'}</span>
            <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{data?.word || '...'}</h4>
            <p className="text-[10px] font-bold text-slate-400 italic">/ {data?.pronunciation} /</p>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-tight">
              Definition: {data?.translation}
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic border-l-2 border-slate-100 pl-3">
              "{data?.sentence}"
            </p>
          </div>
        </div>
        <button 
          onClick={fetchWord}
          disabled={loading}
          className="text-[10px] font-black uppercase text-[#7c9473] hover:underline underline-offset-8 decoration-2 tracking-[0.2em] block pt-4"
        >
          {loading ? 'Processing...' : 'Pull New Entry'}
        </button>
      </div>
    </div>
  );
};

export default WordOfTheDay;
