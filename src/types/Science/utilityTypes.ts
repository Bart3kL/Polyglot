import { Step } from "react-joyride";

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
  achievementsText: string;
  achievementsCongratsText: string;
  tutorialSteps: Step[];
};
export type userProgress = {
  id: string;
  lesson: string;
  lessonStep: string;
  userId: string;
  achievements: string;
  allLessonslessonAchievement?: string;
  flashcardslessonAchievement?: string;
  lessonAchievement?: string;
  listeninglessonAchievement?: string;
  noteslessonAchievement?: string;
  repeatsAchievement?: string;
};

export type Achievement = {
  id: string;
  description: string;
  imgAchieved: string;
  imgDefault: string;
  name: string;
};
