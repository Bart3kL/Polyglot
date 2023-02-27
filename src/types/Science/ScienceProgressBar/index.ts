import { Lesson, userProgress } from "../utilityTypes";

export interface ScienceProgressBarProps {
  yourProgress: string;
  userProgress: userProgress;
  lessons: Lesson[];
}
