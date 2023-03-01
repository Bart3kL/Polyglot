import { VocabluaryWord } from "../utilityTypes";
import { Step } from "react-joyride";
export interface VocabluaryContentProps {
  vocabluary: VocabluaryWord[];
  nextStep: string;
  toNextWordLabel: string;
  toStudyLabel: string;
}
