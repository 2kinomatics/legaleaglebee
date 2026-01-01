
import React from 'react';
import { Home, BookOpen, UserPlus, Users, Settings, LogIn } from 'lucide-react';
import { GradeLevel, Resource } from './types';

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Calculus: Fundamental Theorem', subject: 'Math', level: GradeLevel.HIGH, type: 'Video', duration: '15m', progress: 75 },
  { id: '2', title: 'Photosynthesis Deep Dive', subject: 'Biology', level: GradeLevel.MIDDLE, type: 'Article', duration: '10m', progress: 100 },
  { id: '3', title: 'Macroeconomics 101', subject: 'Economics', level: GradeLevel.COLLEGE, type: 'Exercise', duration: '45m', progress: 20 },
  { id: '4', title: 'English Grammar Masterclass', subject: 'Languages', level: GradeLevel.PRIMARY, type: 'Video', duration: '20m', progress: 0 },
  { id: '5', title: 'Organic Chemistry Basics', subject: 'Chemistry', level: GradeLevel.HIGH, type: 'Article', duration: '30m', progress: 45 },
];

export const NAV_ITEMS = [
  { id: 'home', icon: <Home size={20} />, label: 'Dashboard' },
  { id: 'resources', icon: <BookOpen size={20} />, label: 'Resources' },
  { id: 'tutor-match', icon: <Users size={20} />, label: 'Find Tutor' },
  { id: 'tutor-apply', icon: <UserPlus size={20} />, label: 'Be a Tutor' },
  { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
];

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];
