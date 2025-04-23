export interface Resource {
  id: string;
  title: string;
  provider: string;
  type: 'course' | 'project' | 'certification' | 'book' | 'other';
  duration: string;
  difficulty: string;
  rating: number;
  cost: string;
  url: string;
  description: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalHours: number;
  remainingHours: number;
  skills: string[];
  courses: number;
  projects: number;
  certifications: number;
  lastUpdated: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  currentLevel: string;
  targetLevel: string;
  estimatedHours: number;
  difficulty: string;
  prerequisites: string[];
  resources: Resource[];
}
