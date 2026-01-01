
import React from 'react';
import { Home, BookOpen, UserPlus, Users, Settings, User, Megaphone } from 'lucide-react';
import { GradeLevel, Resource, SubjectCategory, NewsItem } from './types';

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Fun with Phonics: The Letter A', subject: 'Literacy', level: GradeLevel.EARLY, type: 'Video', duration: '5m', progress: 100 },
  { id: '2', title: 'Counting with Colorful Shapes', subject: 'Mathematics', level: GradeLevel.EARLY, type: 'Activity', duration: '10m', progress: 80 },
  { id: '3', title: 'The Water Cycle Adventure', subject: 'Science', level: GradeLevel.PRIMARY, type: 'Story', duration: '12m', progress: 100 },
  { id: '4', title: 'Multiplication Mastery: Level 1', subject: 'Mathematics', level: GradeLevel.ELEMENTARY, type: 'Exercise', duration: '20m', progress: 10 },
  { id: '5', title: 'Ancient Egypt: Pharaos & Pyramids', subject: 'Social Studies', level: GradeLevel.MIDDLE, type: 'Video', duration: '15m', progress: 0 },
  { id: '6', title: 'Introduction to Finger Painting', subject: 'Arts & Creativity', level: GradeLevel.PRIMARY, type: 'Activity', duration: '30m', progress: 100 },
  { id: '7', title: 'Reading Comprehension: The Brave Cat', subject: 'Literacy', level: GradeLevel.ELEMENTARY, type: 'Story', duration: '15m', progress: 60 },
];

export const MOCK_NEWS: NewsItem[] = [
  { id: 'n1', title: 'National Math Olympiad 2024', category: 'Competition', date: '2024-06-15', content: 'Register now for the biggest math competition for primary students!', tag: 'Prize: $500' },
  { id: 'n2', title: 'New Science Lab Released', category: 'Update', date: '2024-05-20', content: 'Explore virtual science experiments with our new 3D lab module.', tag: 'Interactive' },
  { id: 'n3', title: 'Weekend Reading Club', category: 'Event', date: '2024-05-25', content: 'Join your friends for a storytelling session this Saturday at 10 AM.', tag: 'Community' },
];

export const SUBJECT_METADATA: Record<SubjectCategory, { color: string; icon: string; secondary: string }> = {
  'Literacy': { color: 'bg-orange-100 text-orange-600', icon: '📚', secondary: 'border-orange-200' },
  'Mathematics': { color: 'bg-blue-100 text-blue-600', icon: '🔢', secondary: 'border-blue-200' },
  'Science': { color: 'bg-green-100 text-green-600', icon: '🔬', secondary: 'border-green-200' },
  'Social Studies': { color: 'bg-purple-100 text-purple-600', icon: '🌍', secondary: 'border-purple-200' },
  'Arts & Creativity': { color: 'bg-pink-100 text-pink-600', icon: '🎨', secondary: 'border-pink-200' },
};

export const NAV_ITEMS = [
  { id: 'home', icon: <Home size={20} />, label: 'Dashboard' },
  { id: 'resources', icon: <BookOpen size={20} />, label: 'Library' },
  { id: 'news', icon: <Megaphone size={20} />, label: 'What\'s New' },
  { id: 'tutor-match', icon: <Users size={20} />, label: 'Mentors' },
  { id: 'profile', icon: <User size={20} />, label: 'My Progress' },
  { id: 'tutor-apply', icon: <UserPlus size={20} />, label: 'Volunteer' },
  { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
];

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];
