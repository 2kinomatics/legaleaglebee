
import React, { useState, useEffect } from 'react';
import { MOCK_RESOURCES, SUBJECT_METADATA } from '../constants';
import { SubjectCategory, GradeLevel } from '../types';
import { Search, Filter, ArrowRight, HelpCircle, FileText, ImageIcon, BookOpen } from 'lucide-react';

interface ResourcesProps {
  initialCategory?: SubjectCategory | 'All';
}

const Resources: React.FC<ResourcesProps> = ({ initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<GradeLevel | 'All Grades'>('All Grades');
  const [searchQuery, setSearchQuery] = useState('');

  // Update category when prop changes (from external navigation)
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredResources = MOCK_RESOURCES.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.subject === selectedCategory;
    const matchesLevel = selectedLevel === 'All Grades' || r.level === selectedLevel;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const categories: (SubjectCategory | 'All')[] = ['All', 'Literacy', 'Mathematics', 'Science', 'Social Studies', 'Arts & Creativity'];
  const levels: (GradeLevel | 'All Grades')[] = [
    'All Grades', 
    GradeLevel.GRADE_7, 
    GradeLevel.GRADE_8, 
    GradeLevel.GRADE_9, 
    GradeLevel.GRADE_10, 
    GradeLevel.GRADE_11, 
    GradeLevel.GRADE_12
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Quiz': return <HelpCircle size={18} className="text-[#7c9473]" />;
      case 'Text': return <FileText size={18} className="text-[#7c9473]" />;
      case 'Image': return <ImageIcon size={18} className="text-[#7c9473]" />;
      default: return <BookOpen size={18} className="text-[#7c9473]" />;
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 w-full text-left">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
        <div className="w-full xl:w-1/2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Academic Repository</h1>
          <p className="text-slate-500 font-medium text-lg mt-2 uppercase tracking-tight">Validated curriculum modules for Grades 7-12. Focused mastery blocks.</p>
        </div>
        
        <div className="flex w-full xl:w-auto gap-4">
          <div className="relative flex-1 xl:w-[400px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Query curriculum modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 outline-none focus:border-[#7c9473] transition-all font-bold text-slate-800 uppercase text-xs"
            />
          </div>
          <button className="p-5 bg-white border border-slate-200 text-slate-400 hover:text-[#7c9473] transition-all">
            <Filter size={24} />
          </button>
        </div>
      </header>

      {/* Advanced Filters */}
      <div className="bg-white p-10 border border-slate-100 space-y-10 w-full">
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Filter by Discipline</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-400 border-slate-100 hover:border-[#7c9473] hover:text-[#7c9473]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 px-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Grade Level</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-tight transition-all border ${
                  selectedLevel === level 
                    ? 'bg-[#7c9473] text-white border-[#7c9473]' 
                    : 'bg-white text-slate-300 border-slate-100 hover:border-slate-400 hover:text-slate-600'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white border border-slate-100 overflow-hidden hover:border-[#7c9473] transition-all group flex flex-col">
            <div className="p-10 flex flex-col h-full space-y-8">
              <div className="flex justify-between items-start">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(resource.subject);
                  }}
                  className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest border transition-all hover:bg-slate-900 hover:text-white ${SUBJECT_METADATA[resource.subject].color} ${SUBJECT_METADATA[resource.subject].secondary}`}
                >
                  {resource.subject}
                </button>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  ID-{resource.id.padStart(3, '0')}
                </span>
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tighter group-hover:text-[#7c9473] transition-colors">
                  {resource.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] border-l-2 border-slate-100 pl-3">
                    {resource.level}
                  </span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] border-l-2 border-slate-100 pl-3">
                    {resource.duration}
                  </span>
                </div>
              </div>
              
              <div className="pt-8 flex items-center justify-between border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 flex items-center justify-center group-hover:bg-[#f0f7f0] transition-colors">
                    {getIconForType(resource.type)}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{resource.type} Module</span>
                </div>
                <button className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white hover:bg-[#7c9473] transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredResources.length === 0 && (
        <div className="py-32 text-center bg-white border-2 border-dashed border-slate-100 w-full">
          <p className="text-slate-300 font-black uppercase tracking-[0.4em] text-lg">No curriculum match found.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSelectedLevel('All Grades'); setSearchQuery(''); }}
            className="mt-6 text-[#7c9473] text-[10px] font-black uppercase tracking-widest hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Resources;
