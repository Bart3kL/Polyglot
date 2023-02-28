import { Lesson, userProgress } from "../../Science/utilityTypes";

export interface LessonSinglePageProps {
  lesson: Lesson;
  userProgress: userProgress;
  id: string;
}
