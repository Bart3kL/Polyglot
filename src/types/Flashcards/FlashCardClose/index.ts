import { Flashcard, FlashcardsContentful } from "../utilityTypes";

export interface FlashCardCloseProps {
  data: Flashcard[];
  clickLabel?: string;
  word?: string;
  nextWord: number;
  handleSound: () => void;
}
