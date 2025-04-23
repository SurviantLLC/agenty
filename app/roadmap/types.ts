export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'not-started';
  type: string;
  deadline: string;
  progress: number;
  category: 'education' | 'skills' | 'applications' | 'networking';
  timeEstimate: string;
}

export interface RoadmapData {
  education: Milestone[];
  skills: Milestone[];
  applications: Milestone[];
  networking: Milestone[];
}
