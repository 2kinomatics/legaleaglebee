
import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, startOfWeek, endOfWeek } from 'date-fns';

interface ProgressCalendarProps {
  completedDates: string[];
}

const ProgressCalendar: React.FC<ProgressCalendarProps> = ({ completedDates }) => {
  const today = new Date();
  const start = startOfWeek(startOfMonth(today));
  const end = endOfWeek(endOfMonth(today));
  const days = eachDayOfInterval({ start, end });

  const isCompleted = (date: Date) => 
    completedDates.some(d => isSameDay(new Date(d), date));

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-slate-800">{format(today, 'MMMM yyyy')}</h3>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Your Streak</span>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-[10px] text-center font-bold text-slate-300">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => {
          const completed = isCompleted(day);
          const current = isSameDay(day, today);
          return (
            <div
              key={idx}
              className={`h-8 flex items-center justify-center text-xs rounded-lg transition-all duration-200 ${
                completed 
                  ? 'bg-green-100 text-green-700 font-bold ring-1 ring-green-200' 
                  : current 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-50">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="w-3 h-3 bg-green-100 rounded-full"></div>
          <span>Active Learning Days</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCalendar;
