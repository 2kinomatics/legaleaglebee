
import { GradeLevel, Resource, SubjectCategory, JournalEntry } from './types';

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Quadratic Equations Foundations', subject: 'Mathematics', level: GradeLevel.GRADE_9, type: 'Text', duration: '20m', progress: 100 },
  { id: '2', title: 'Cell Biology Quiz: Organelles', subject: 'Science', level: GradeLevel.GRADE_8, type: 'Quiz', duration: '15m', progress: 80 },
  { id: '3', title: 'The Cold War: Visual Timeline', subject: 'Social Studies', level: GradeLevel.GRADE_11, type: 'Image', duration: '10m', progress: 100 },
  { id: '4', title: 'Shakespearean Sonnets Analysis', subject: 'Literacy', level: GradeLevel.GRADE_10, type: 'Text', duration: '25m', progress: 10 },
  { id: '5', title: 'Organic Chemistry: Functional Groups Quiz', subject: 'Science', level: GradeLevel.GRADE_12, type: 'Quiz', duration: '30m', progress: 0 },
];

export const MOCK_JOURNALS: JournalEntry[] = [
  { 
    id: 'j1', 
    title: 'The Ethics of AI in Secondary Education', 
    author: 'Elena R. (Grade 11)', 
    category: 'Analysis', 
    date: '2024-05-15', 
    readTime: '6 min',
    likes: 42,
    content: 'As we integrate larger models into our learning frameworks, we must verify the provenance of data and the preservation of critical thinking...',
    comments: [
      { id: 'c1', author: 'Marcus T.', text: 'Interesting point on data provenance.', timestamp: '2h ago' }
    ]
  },
  { 
    id: 'j2', 
    title: 'Bridging the Calculus Gap: A Personal Protocol', 
    author: 'Julian M. (Grade 12)', 
    category: 'Mathematics', 
    date: '2024-05-10', 
    readTime: '4 min',
    likes: 28,
    content: 'Transitioning from algebra to calculus requires a fundamental shift in how we perceive infinitesimal change. Here is my strategy...',
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
  { id: 'home', label: 'Terminal' },
  { id: 'resources', label: 'Repository' },
  { id: 'news', label: 'Journal' },
  { id: 'tutor-match', label: 'Mentors' },
  { id: 'tutor-apply', label: 'Service' },
  { id: 'about', label: 'About' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
];

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];
