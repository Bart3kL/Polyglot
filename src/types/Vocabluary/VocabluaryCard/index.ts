import { VocabluaryWord } from "../utilityTypes";

export interface VocabluaryCardProps {
  vocabluary: VocabluaryWord[];
  wordIndex: number;
  handleToStudy: () => void;
  handleToNextWord: () => void;
  handleSound: () => void;
}
