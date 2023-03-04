import {
  Achievement,
  ScienceHeader,
  Lesson,
  userProgress,
} from "../utilityTypes";
import { Repetition } from "../../Repetitions/utilityTypes";
export interface SciencePageProps {
  lessons: Lesson[];
  achievements: Achievement[];
  page: ScienceHeader;
  userProgress: userProgress;
  repetitions: Repetition[];
  userid: string;
}
