
import { GradeLevel, Resource, SubjectCategory, JournalEntry } from './types';

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Quadratic Equations Basics', subject: 'Mathematics', level: GradeLevel.GRADE_9, type: 'Text', duration: '20m', progress: 100 },
  { id: '2', title: 'Cell Biology Fun Quiz', subject: 'Science', level: GradeLevel.GRADE_8, type: 'Quiz', duration: '15m', progress: 80 },
  { id: '3', title: 'The Cold War: Picture Story', subject: 'Social Studies', level: GradeLevel.GRADE_11, type: 'Image', duration: '10m', progress: 100 },
  { id: '4', title: 'Reading Shakespeare Together', subject: 'Literacy', level: GradeLevel.GRADE_10, type: 'Text', duration: '25m', progress: 10 },
  { id: '5', title: 'Chemistry: Molecules & Mixes', subject: 'Science', level: GradeLevel.GRADE_12, type: 'Quiz', duration: '30m', progress: 0 },
];

export const MOCK_JOURNALS: JournalEntry[] = [
  { 
    id: 'j1', 
    title: 'How AI helps us learn better', 
    author: 'Elena R. (Grade 11)', 
    category: 'Community', 
    date: 'May 15, 2024', 
    readTime: '6 min',
    likes: 42,
    content: 'When we use technology in our classrooms, it opens up so many new ways to understand the world. I love how we can explore complex ideas together...',
    comments: [
      { id: 'c1', author: 'Marcus T.', text: 'I love this perspective!', timestamp: '2h ago' }
    ]
  },
  { 
    id: 'j2', 
    title: 'My Journey through Calculus', 
    author: 'Julian M. (Grade 12)', 
    category: 'Math Tips', 
    date: 'May 10, 2024', 
    readTime: '4 min',
    likes: 28,
    content: 'Math used to be scary, but once I started looking at it like a puzzle, everything changed. Here are the tricks that helped me...',
    comments: []
  },
];

export const SUBJECT_METADATA: Record<SubjectCategory, { color: string; secondary: string }> = {
  'Literacy': { color: 'bg-orange-100 text-orange-700', secondary: 'border-orange-200' },
  'Mathematics': { color: 'bg-blue-100 text-blue-700', secondary: 'border-blue-200' },
  'Science': { color: 'bg-green-100 text-green-700', secondary: 'border-green-200' },
  'Social Studies': { color: 'bg-purple-100 text-purple-700', secondary: 'border-purple-200' },
  'Arts & Creativity': { color: 'bg-pink-100 text-pink-700', secondary: 'border-pink-200' },
};

export const NAV_ITEMS = [
  { id: 'home', label: 'ᠨᠢᠭᠤᠷ' },
  { id: 'resources', label: 'ᠨᠣᠮ ᠤ᠋ᠨ ᠰᠠᠩ' },
  { id: 'news', label: 'Stories' },
  { id: 'tutor-match', label: 'Find a Tutor' },
  { id: 'tutor-apply', label: 'Volunteer' },
  { id: 'about', label: 'Our Story' },
  { id: 'profile', label: 'ᠮᠢᠨᠤ ᠬᠠᠭᠤᠳᠠᠰᠤ' },
  { id: 'settings', label: 'Settings' },
];

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'mgl', label: 'Mongolian' },

];
