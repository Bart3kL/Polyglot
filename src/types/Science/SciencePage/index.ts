import { userProgress, Lesson, ScienceHeader } from "../utilityTypes";

export interface SciencePageProps {
  userProgress: userProgress;
  lessons: Lesson[];
  page: ScienceHeader;
}
