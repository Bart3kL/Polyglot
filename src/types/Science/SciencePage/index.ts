import {
  Achievement,
  ScienceHeader,
  Lesson,
  userProgress,
} from "../utilityTypes";

export interface SciencePageProps {
  lessons: Lesson[];
  achievements: Achievement[];
  page: ScienceHeader;
  userProgress: userProgress;
}
