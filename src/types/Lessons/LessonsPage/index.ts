import { Header } from "../../Dictionary/utilityTypes";
import { userProgress } from "../../Science/utilityTypes";
import { Lesson } from "../utilityTypes";

export interface LessonsPageProps {
  page: Header;
  lessons: Lesson[];
  userProgress: userProgress;
}
