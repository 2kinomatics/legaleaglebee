
export type AppView = 'home' | 'resources' | 'tutor-match' | 'tutor-apply' | 'settings' | 'auth';

export enum GradeLevel {
  PRIMARY = 'Primary (K-5)',
  MIDDLE = 'Middle School (6-8)',
  HIGH = 'High School (9-12)',
  COLLEGE = 'College/University'
}

export interface Resource {
  id: string;
  title: string;
  subject: string;
  level: GradeLevel;
  type: 'Video' | 'Article' | 'Exercise';
  duration: string;
  progress: number;
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
