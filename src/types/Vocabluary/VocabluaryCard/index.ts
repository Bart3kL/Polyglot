import { VocabluaryWord } from "../utilityTypes";
import { Step } from "react-joyride";
export interface VocabluaryCardProps {
  vocabluary: VocabluaryWord[];
  wordIndex: number;
  handleToStudy: () => void;
  handleToNextWord: () => void;
  handleSound: () => void;
  toNextWordLabel: string;
  toStudyLabel: string;
}
