import { Word } from "../utilityTypes";
import { Step } from "react-joyride";
export interface WordCardProps {
  word: Word;
  userId: string;
  index: number;
  tutorialSteps: Step[];
}
