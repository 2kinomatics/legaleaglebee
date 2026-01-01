
import React, { useState } from 'react';
import { MOCK_RESOURCES, SUBJECT_METADATA } from '../constants';
import { SubjectCategory, GradeLevel } from '../types';
import { Search, Filter, Play, BookOpen, ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = MOCK_RESOURCES.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.subject === selectedCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: (SubjectCategory | 'All')[] = ['All', 'Literacy', 'Mathematics', 'Science', 'Social Studies', 'Arts & Creativity'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Resource Library</h1>
          <p className="text-slate-500 mt-1">Fun foundational learning for all ages.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8ba888] transition-all shadow-sm"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-[#7c9473] transition-colors shadow-sm">
            <Filter size={20} />
          </button>
        </div>
      </header>

      {/* Large Visual Category Buttons for Younger Kids */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all group ${
              selectedCategory === cat 
                ? 'bg-[#7c9473] text-white border-[#7c9473] shadow-lg scale-[1.02]' 
                : 'bg-white text-slate-600 border-slate-100 hover:border-[#8ba888] hover:shadow-md'
            }`}
          >
            <span className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
              {cat === 'All' ? '✨' : SUBJECT_METADATA[cat as SubjectCategory].icon}
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider ${selectedCategory === cat ? 'text-white' : 'text-slate-500'}`}>
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Resource Cards - Simplified without thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div key={resource.id} className={`bg-white rounded-[2.5rem] border-2 overflow-hidden hover:shadow-xl transition-all group flex flex-col ${SUBJECT_METADATA[resource.subject].secondary}`}>
            <div className="p-8 flex flex-col h-full space-y-6">
              <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl text-2xl ${SUBJECT_METADATA[resource.subject].color}`}>
                  {SUBJECT_METADATA[resource.subject].icon}
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block">Unit {resource.id.padStart(2, '0')}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${SUBJECT_METADATA[resource.subject].color}`}>
                    {resource.subject}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-[#7c9473] transition-colors">
                  {resource.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-3 font-medium">
                  <span className="bg-[#f5f8f5] text-[#7c9473] px-2 py-0.5 rounded">{resource.level}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span>{resource.duration}</span>
                </div>
              </div>
              
              <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-400">
                  {resource.type === 'Video' ? <Play size={16} /> : <BookOpen size={16} />}
                  <span className="text-xs font-bold uppercase tracking-tighter">{resource.type}</span>
                </div>
                <button className="p-3 bg-[#f8faf8] text-[#7c9473] rounded-2xl hover:bg-[#7c9473] hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredResources.length === 0 && (
        <div className="py-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200">
          <p className="text-3xl mb-4">🔍</p>
          <p className="text-slate-400 font-medium">We couldn't find that lesson. Try another search!</p>
        </div>
      )}
    </div>
  );
};

export default Resources;
