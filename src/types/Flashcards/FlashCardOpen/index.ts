import { Flashcard } from "../utilityTypes";

export interface FlashCardOpenProps {
  data: Flashcard[];
  nextWord: number;
  setNextWord: (v: number) => void;
}
