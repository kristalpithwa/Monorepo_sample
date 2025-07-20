export interface User {
  id: string;
  name: string;
  email: string;
  type: "blog" | "job-portal" | "learning";
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary?: string;
  postedAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  duration: string;
}
