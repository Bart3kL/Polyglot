export type Lesson = {
  id: string;
  image: string;
  level: string;
  title: string;
};
export type ScienceHeader = {
  nextLessons: string;
  welcomeMessage: string;
  yourProgress: string;
};
export type userProgress = {
  id: string;
  lesson: string;
  lessonStep: string;
  userId: string;
};
