import { Word } from "../../Words/utilityTypes";
export interface HangmanDetailsProps {
  amountBadAnswers: string;
  youLostLabel: string;
  game: {
    addedLetters: string[];
    word: Word;
    wrong: number;
  };
}
