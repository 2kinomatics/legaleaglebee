
export type AppView = 'home' | 'resources' | 'tutor-match' | 'tutor-apply' | 'settings' | 'auth' | 'profile' | 'news';

export enum GradeLevel {
  EARLY = 'Early Learning (1-4)',
  PRIMARY = 'Primary (5-8)',
  ELEMENTARY = 'Elementary (9-10)',
  MIDDLE = 'Pre-Teen (11-12)'
}

export type SubjectCategory = 'Literacy' | 'Mathematics' | 'Science' | 'Social Studies' | 'Arts & Creativity';

export interface Resource {
  id: string;
  title: string;
  subject: SubjectCategory;
  level: GradeLevel;
  type: 'Video' | 'Story' | 'Activity' | 'Exercise';
  duration: string;
  progress: number;
  thumbnail?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Competition' | 'Update' | 'Event';
  date: string;
  content: string;
  tag: string;
}

export interface UserProgress {
  lastResource: string;
  completedDates: string[]; // ISO Strings
  subjectStats: Record<string, number>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  language: 'en' | 'es' | 'fr';
  isTutor: boolean;
  gradeLevel: GradeLevel;
}
